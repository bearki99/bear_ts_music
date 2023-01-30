import React, { ReactNode } from "react";
import { memo } from "react";

import { CatHeaderWrapper } from "./style";
import originData from "@/assets/data/singer-data.json"
import classNames from "classnames";

import { useQuery } from "@/utils/useQuery";


import SingerHeader from "../../../singer-header";


interface IProps {
  children?: ReactNode;
}
interface IMap {
  name: string;
  index: string;
}
const CatHeader: React.FC<IProps> = () => {
  const mapData = [
    { name: "热门", index: "-1" },
    { name: "A", index: "a" },
    { name: "B", index: "b" },
    { name: "C", index: "c" },
    { name: "D", index: "d" },
    { name: "E", index: "e" },
    { name: "F", index: "f" },
    { name: "G", index: "g" },
    { name: "H", index: "h" },
    { name: "I", index: "i" },
    { name: "J", index: "j" },
    { name: "K", index: "k" },
    { name: "L", index: "l" },
    { name: "M", index: "m" },
    { name: "N", index: "n" },
    { name: "O", index: "o" },
    { name: "P", index: "p" },
    { name: "Q", index: "q" },
    { name: "R", index: "r" },
    { name: "S", index: "s" },
    { name: "T", index: "t" },
    { name: "U", index: "u" },
    { name: "V", index: "v" },
    { name: "W", index: "w" },
    { name: "X", index: "x" },
    { name: "Y", index: "y" },
    { name: "Z", index: "z" },
    { name: "其他", index: "0" },
  ];
  const { id, initial = "-1" } = useQuery();
  let name = "";
  const myData = originData && originData.map((item: any)=>item.label);
  for(let i = 0; i < myData.length; i++){
    for(let j = 0; j < myData[i].length; j++){
        if(id === myData[i][j].id){
            name = myData[i][j].name;
            break;
        }
    }
  }
  const originUrl = "/#/discover/singers/cat?id=" + id;
  return (
    <CatHeaderWrapper>
      <div className="header">
        <SingerHeader title={name} more={false}/>
      </div>
      <div className="content">
        {mapData &&
          mapData.map((item: IMap) => {
            return (
              <div
                key={item.name}
                className={classNames("item", {
                  active: initial === item.index,
                })}
              >
                <a
                  href={originUrl + "&initial=" + item.index}
                  className={classNames("btn")}
                >
                  {item.name}
                </a>
              </div>
            );
          })}
      </div>
    </CatHeaderWrapper>
  );
};
export default memo(CatHeader);
CatHeader.displayName = "CatHeader";
