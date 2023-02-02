import React, { ReactNode } from "react";
import { memo } from "react";

import { SingerWrapper } from "./style";

import SingerData from "@/assets/data/singer-data.json";
import headData from "@/assets/data/main-data.json";

import { Outlet } from "react-router-dom";
import classNames from "classnames";
import { useQuery } from "@/utils/useQuery";
interface IProps {
  children?: ReactNode;
}
export interface Root2 {
  name: string;
  label: Label[];
}

export interface Label {
  name: string;
  id: number;
  url: string;
}

export type Root = Root3[];

export interface Root3 {
  name: string;
  label: Label2[];
}

export interface Label2 {
  name: string;
  id: string;
}
const Singers: React.FC<IProps> = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  const { id } = useQuery();
  const ans = window.location.href.split('/').slice(5);
  return (
    <SingerWrapper className="bg-color">
      <div className="content wrap-v2 wrap-bg">
        <div className="left" onClick={handleClick}>
          {headData &&
            headData.map((item: Root2) => {
              return (
                <div key={item.name} className="item-main">
                  <h2 className="item-title">{item.name}</h2>
                  <ul>
                    {item.label &&
                      item.label.map((element: Label, index: number) => {
                        return (
                          <li
                            key={element.id}
                            className={classNames(
                              "item-list",
                              "sprite-singer-bg",
                              {
                                "my-active":
                                (ans.length == 1 && index == 0 || (ans.length == 2 && ans[1] == "") && index == 0 )|| (ans.length == 2 && index == 1 && ans[1] == "signed"),
                              }
                            )}
                          >
                            <a
                              href={"/#/discover/singers/" + element.url}
                              onClick={handleClick}
                              className="item-list-a"
                            >
                              {element.name}
                            </a>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              );
            })}
          {SingerData &&
            SingerData.map((item: Root3) => {
              return (
                <div key={item.name} className="item-main">
                  <h2 className="item-title">{item.name}</h2>
                  <ul>
                    {item.label &&
                      item.label.map((element: Label2) => {
                        return (
                          <li
                            key={element.id}
                            className={classNames(
                              "item-list",
                              "sprite-singer-bg",
                              {
                                "my-active": element.id == id,
                              }
                            )}
                          >
                            <a
                              href={"/#/discover/singers/cat?id=" + element.id}
                              className="item-list-a"
                            >
                              {element.name}
                            </a>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              );
            })}
        </div>
        <div className="right">
          <Outlet />
        </div>
      </div>
    </SingerWrapper>
  );
};
export default memo(Singers);
