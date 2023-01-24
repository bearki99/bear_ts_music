import React, { ReactNode, useEffect } from "react";
import { memo } from "react";
import { MainDJWrapper } from "./style";
import DJCHeader from "../dj-content-header";
import DjContent from "../dj-content";
import { useBearDispatch, useBearSelector } from "@/store";
import DjDetailDescription from "../dj-detail-description";
import { useDispatch } from "react-redux";
import { getListRadioData } from "../../store";
interface IProps {
  children?: ReactNode;
}

const MainDJ: React.FC<IProps> = () => {
  const { recommendData, rankingRadioData, rankingListDatas } = useBearSelector(
    (state) => ({
      catelist: state.radio.catelist,
      recommendData: state.radio.recommendData,
      rankingRadioData: state.radio.rankingRadioData,
      rankingListDatas: state.radio.rankingListDatas,
    })
  );
  const dispatch = useBearDispatch();
  useEffect(() => {
    dispatch(getListRadioData());
  }, []);
  return (
    <MainDJWrapper>
      {/* 第一行 */}
      <div className="first">
        <div className="left">
          {/* 推荐节目 */}
          <DJCHeader
            title="推荐节目"
            url="/#/discover/djradio/recommend"
            width={426}
          />
          <DjContent
            width={426}
            height={600}
            infoData={recommendData}
            type={0}
          />
        </div>
        <div className="right">
          <DJCHeader
            title="节目排行榜"
            url="/#/discover/djradio/rank"
            width={426}
          />
          <DjContent
            width={426}
            height={600}
            infoData={rankingRadioData}
            type={1}
          />
        </div>
      </div>
      {rankingListDatas && rankingListDatas.map((item: any, index: number)=>{
        return <DjDetailDescription key={index} infoData={item}/>
      })}
    </MainDJWrapper>
  );
};
export default memo(MainDJ);
MainDJ.displayName = "MainDJ";
