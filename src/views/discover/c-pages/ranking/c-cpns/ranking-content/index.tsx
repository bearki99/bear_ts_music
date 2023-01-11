import React, { ReactNode, useEffect } from "react";
import { memo } from "react";
import RankingHeader from "../ranking-header";
import RankingList from "../ranking-list";
import { RankingContentWrapper } from "./style";
interface IProps {
  children?: ReactNode;
  currentList: any;
}

const RankingContent: React.FC<IProps> = (props) => {
  const {currentList} = props;
  return (
    <RankingContentWrapper>
      <RankingHeader currentList={currentList}/>
      <RankingList infoData={currentList}/>
    </RankingContentWrapper>
  );
};
export default memo(RankingContent);
