import { useBearDispatch } from "@/store";
import { useQuery } from "@/utils/useQuery";
import React, { ReactNode, useEffect } from "react";
import { memo } from "react";
import { getCurrentRadioData, getRecommendRadioData } from "../../store";
import DjRank from "./c-cpns/dj-rank";
import NewDJ from "./c-cpns/newDJ";
import { CategoryWrapper } from "./style";
interface IProps {
  children?: ReactNode;
}

const Category: React.FC<IProps> = () => {
  const { id, offset, order } = useQuery();
  const dispatch = useBearDispatch();
  useEffect(() => {
    dispatch(getRecommendRadioData(id));
  }, [id]);
  useEffect(() => {
    dispatch(getCurrentRadioData([id, offset]));
  }, [id, offset]);
  return (
    <CategoryWrapper>
      <NewDJ />
      <DjRank />
    </CategoryWrapper>
  );
};
export default memo(Category);
