import React, { ReactNode, useState } from "react";
import { memo } from "react";
import { Link } from "react-router-dom";
import { HeaderLeft, HeaderRight, HeaderWrapper } from "./style";
import headerTitles from "@/assets/data/header-titles.json";
import subnavTitles from "@/assets/data/subnav-title.json";
import classNames from "classnames";
import { Input } from "antd";
interface IProps {
  children?: ReactNode;
}

const AppHeader: React.FC<IProps> = () => {
  const [titleindex, setIndex] = useState(0);
  const [subnavIndex, setnavIndex] = useState(0);
  function showItem(item: any, index: number) {
    return (
      <a
        className={classNames({
          item: true,
          active: index === titleindex,
        })}
        key={item.title}
        href={item.path || item.link}
        onClick={() => changeIndex(index)}
      >
        {item.title}
      </a>
    );
  }
  function changeIndex(index: number) {
    setIndex(index);
  }
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
          <Input placeholder="音乐/视频/电台/用户"
          className="input sprite-web-logo" />
          <div className="sprite-web-logo input-logo"></div>
          <div className="creator">
            <span>创作者中心</span>
          </div>
          <div className="login">
            登录
          </div>
        </HeaderRight>
      </div>
      {titleindex === 0 && (
        <div className="first-nav">
          {subnavTitles.map((element, index) => {
            return (
              <a
                key={index}
                className={classNames({
                  "nav-item": true,
                })}
                href={element.path}
                onClick={() => setnavIndex(index)}
              >
                <div
                  className={classNames({
                    "nav-active": index === subnavIndex,
                  })}
                >
                  {element.title}
                </div>
              </a>
            );
          })}
        </div>
      )}
      {titleindex !== 0 && <div className="nav"></div>}
    </HeaderWrapper>
  );
};
export default memo(AppHeader);
