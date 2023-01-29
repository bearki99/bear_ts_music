import React, { ReactNode } from "react";
import { memo } from "react";
import { SingerWrapper } from "./style";
import SingerData from "@/assets/data/singer-data.json";
import headData from "@/assets/data/main-data.json";
import { Outlet } from "react-router-dom";
interface IProps {
  children?: ReactNode;
}
export interface Root2 {
  name: string;
  label: Label[];
}

export interface Label {
  name: string;
  id: string;
  url: string;
}

export type Root = Root3[]

export interface Root3 {
  name: string
  label: Label2[]
}

export interface Label2 {
  name: string
  id: string
}
const Singers: React.FC<IProps> = () => {
  return (
    <SingerWrapper className="bg-color">
      <div className="content wrap-v2 wrap-bg">
        <div className="left">
          {headData &&
            headData.map((item: Root2) => {
              return (
                <div key={item.name} className="item-main">
                  <h2 className="item-title">{item.name}</h2>
                  <ul>
                    {item.label &&
                      item.label.map((element: Label) => {
                        return (
                          <li
                            key={element.id}
                            className="item-list sprite-singer-bg"
                          >
                            <a href={"/#/discover/singers/" + element.url}>
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
                            className="item-list sprite-singer-bg"
                          >
                            <a
                              href={"/#/discover/singers/cat?id=" + element.id}
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
