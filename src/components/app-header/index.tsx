import React, { ReactNode, useContext, useState, useEffect } from "react";
import { memo } from "react";
import { HeaderLeft, HeaderRight, HeaderWrapper } from "./style";

import headerTitles from "@/assets/data/header-titles.json";
import subnavTitles from "@/assets/data/subnav-title.json";

import classNames from "classnames";
import { Input } from "antd";
import { useBearDispatch, useBearSelector } from "@/store";

import { exitLogin } from "../login/store";
import { SocketContext } from "@/App";
import {
  changeActiveUsers,
  changeFirstIndex,
  changeSubIndex,
} from "@/store/modules/counter";
interface IProps {
  children?: ReactNode;
}

const AppHeader: React.FC<IProps> = () => {
  const { subIndex, firstIndex } = useBearSelector((state) => ({
    subIndex: state.counter.subIndex,
    firstIndex: state.counter.firstIndex,
  }));
  const dispatch = useBearDispatch();
  const socket = useContext(SocketContext);

  function showItem(item: any, index: number) {
    return (
      <a
        className={classNames({
          item: true,
          active: index === firstIndex,
        })}
        key={item.title}
        href={item.path || item.link}
        onClick={() => {
          dispatch(changeFirstIndex(index));
          dispatch(changeSubIndex(0));
        }}
      >
        {item.title}
      </a>
    );
  }
  function handleExit() {
    dispatch(exitLogin());
  }
  useEffect(() => {
    if (socket) {
      (socket as any).on("newUserResponse", (data: any) => {
        dispatch(changeActiveUsers(data));
      });
    }
  }, [socket]);
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite-web-logo" href="/#"></a>
          <div className="title-list">
            {headerTitles.map((item, index) => {
              return showItem(item, index);
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            placeholder="音乐/视频/电台/用户"
            className="input sprite-web-logo"
          />
          <div className="sprite-web-logo input-logo"></div>
          <div className="creator">
            <span>创作者中心</span>
          </div>
          {localStorage.getItem("ACCESS-TOKEN") ||
          localStorage.getItem("cookie") ? (
            <button className="exit-btn" onClick={handleExit}>
              退出
            </button>
          ) : (
            <div className="login">登录</div>
          )}
        </HeaderRight>
      </div>
      {firstIndex === 0 && (
        <div className="first-nav">
          {subnavTitles.map((element, index) => {
            const url = window.location.href.split("/").slice(3);
            const currentUrl = "/" + url.join("/");
            return (
              <a
                key={index}
                className={classNames({
                  "nav-item": true,
                })}
                href={element.path}
                onClick={() => dispatch(changeSubIndex(index))}
              >
                <div
                  className={classNames({
                    "nav-active": index === subIndex,
                  })}
                >
                  {element.title}
                </div>
              </a>
            );
          })}
        </div>
      )}
      {firstIndex !== 0 && <div className="nav"></div>}
    </HeaderWrapper>
  );
};
export default memo(AppHeader);
