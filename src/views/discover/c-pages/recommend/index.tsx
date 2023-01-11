import NavHeader from "@/components/nav-header";
import NavHeaderV2 from "@/components/nav-header-v2";
import mybearRequest from "@/service";
import { useBearDispatch } from "@/store";
import React, { ReactNode, useEffect } from "react";
import { memo } from "react";
import ArriveSingers from "./c-cpns/arrive-singers";
import HotDj from "./c-cpns/hot-dj";
import HotRecommend from "./c-cpns/hot-recommend";
import NewAlbum from "./c-cpns/new-album";
import TopRanking from "./c-cpns/top-ranking";
import Topbanner from "./c-cpns/topbanner";
import UserLogin from "./c-cpns/user-login";
import { fetchRankingDataAction, fetchRecommendsAction } from "./store";
import { RecommendWrapper } from "./style";
interface IProps {
  children?: ReactNode;
}

const Recommend: React.FC<IProps> = () => {
  const dispatch = useBearDispatch();
  useEffect(() => {
    dispatch(fetchRecommendsAction());
    dispatch(fetchRankingDataAction());
  }, []);

  return (
    <RecommendWrapper className="background-section">
      <Topbanner />
      <div className="recommend-section wrap-v2 main-section">
        <div className="left">
          <HotRecommend />
          <NewAlbum/>
          <TopRanking/>
        </div>
        <div className="right">
          <UserLogin/>
          <div className="right-content">
            <ArriveSingers/>
            <HotDj/>
          </div>
        </div>
      </div>
    </RecommendWrapper>
  );
};
export default memo(Recommend);
