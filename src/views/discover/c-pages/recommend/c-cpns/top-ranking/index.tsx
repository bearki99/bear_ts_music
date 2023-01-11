import NavHeader from "@/components/nav-header";
import { useBearSelector } from "@/store";
import React, { ReactNode } from "react";
import { memo } from "react";
import TopRankingItem from "../top-ranking-item";
import { RankingWrapper } from "./style";
interface IProps {
  children?: ReactNode;
}
const TopRanking: React.FC<IProps> = () => {
  const {toplistDatas} = useBearSelector((state)=>({
    toplistDatas: state.recommend.toplistDatas
  }))
  return <RankingWrapper>
    <NavHeader title="榜单" more='/discover/songs'/>
    <div className="content">
        {toplistDatas && toplistDatas.map((item:any, index:number)=>{
          return <TopRankingItem infoData={item} key={item.id}/>
        })}
    </div>
  </RankingWrapper>;
};
export default memo(TopRanking);
