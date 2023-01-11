import { useBearDispatch, useBearSelector } from "@/store";
import { useQuery } from "@/utils/useQuery";
import React, { ReactNode, useEffect} from "react";
import { memo } from "react";
import { shallowEqual } from "react-redux";
import RankingContent from "./c-cpns/ranking-content";
import RankingItem from "./c-cpns/ranking-item";
import {
  getCurrentRankingData,
  getrankingListData,
} from "./store";
import { BearRankingWrapper } from "./style";
interface IProps {
  children?: ReactNode;
}

const Ranking: React.FC<IProps> = () => {
  const dispatch = useBearDispatch();
  const { id = 19723756 } = useQuery();
  const { allLists, currentList, isLoading } = useBearSelector(
    (state) => ({
      allLists: state.ranking.allLists,
      currentList: state.ranking.currentList,
      isLoading: state.ranking.isLoading,
    }),
    shallowEqual
  );
  useEffect(()=>{
    dispatch(getrankingListData());
  }, []);
  useEffect(() => {
    dispatch(getCurrentRankingData(id));
  }, [id]);
  return (
    <BearRankingWrapper className="all-bg">
        <div className="content wrap-v2">
          <div className="left">
            <RankingItem infoData={allLists}/>
          </div>
          <div className="right">
            {!isLoading && currentList && <RankingContent currentList={currentList} />}
          </div>
        </div>
    </BearRankingWrapper>
  );
};
export default memo(Ranking);
