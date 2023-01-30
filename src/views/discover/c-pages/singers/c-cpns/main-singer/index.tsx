import { useBearDispatch, useBearSelector } from "@/store";
import React, { ReactNode, useEffect } from "react";
import { memo } from "react";
import { IItem } from "../../interface";
import { getHotSingerDataAction } from "../../store";

import SingerHeader from "../singer-header";
import SingerItem from "../singer-item";

import { MainSingerWrapper } from "./style";
interface IProps {
  children?: ReactNode;
}
const MainSinger: React.FC<IProps> = () => {
  const { hotSinger } = useBearSelector((state) => ({
    hotSinger: state.singer.hotSinger,
  }));
  const dispatch = useBearDispatch();
  const mainData = hotSinger && hotSinger.slice(0, 10);
  const otherData = hotSinger && hotSinger.slice(10);
  useEffect(()=>{
    dispatch(getHotSingerDataAction());
  }, []);
  return (
    <MainSingerWrapper>
      <div className="in-singer">
        <SingerHeader
          title={"入驻歌手"}
          more={true}
          url={"/#/discover/singers/signed"}
        />
        <div className="in-singer-content">
          {mainData &&
            mainData.map((item: IItem, index: number) => {
              return <SingerItem key={index} infoData={item} />;
            })}
        </div>
      </div>
      <div className="hot-singer">
        <SingerHeader
          title={"热门歌手"}
          more={false}
          url={""}
        />
        <div className="hot-content">
          <div className="top">
          {mainData &&
            mainData.map((item: IItem) => {
              return <SingerItem key={item.id} infoData={item} />;
            })}
          </div>
          <div className="bottom">
          {otherData &&
            otherData.map((item: IItem) => {
              return <SingerItem key={item.id} infoData={item} showImg={false}/>;
            })}
          </div>
        </div>
      </div>
    </MainSingerWrapper>
  );
};
export default memo(MainSinger);
MainSinger.displayName = "MainSinger";
