import { useBearDispatch, useBearSelector } from "@/store";
import { useQuery } from "@/utils/useQuery";
import React, { ReactNode, useEffect } from "react";
import { memo } from "react";

import CatContent from "./c-cpns/cat-content";
import CatHeader from "./c-cpns/cat-header";

import { CatSingerWrapper } from "./style";

import { getcurrentSingerDataAction } from "../../store";
import { changecurrentPageNumAction } from "../../store";
interface IProps {
  children?: ReactNode;
}

const CatSinger: React.FC<IProps> = () => {
  const { id, initial } = useQuery();
  const dispatch = useBearDispatch();
  const { currentPageNum } = useBearSelector((state) => ({
    currentPageNum: state.singer.currentPageNum,
  }));
  const areaMap = new Map([
    ["1", "7"],
    ["2", "96"],
    ["6", "8"],
    ["7", "16"],
    ["4", "0"],
  ]);
  const type = parseInt(id[id.length - 1] || -1);
  const area = parseInt(areaMap.get(id[0]) as string);
  useEffect(() => {
    dispatch(changecurrentPageNumAction(-1));
  }, [id, type, initial]);
  useEffect(() => {
    dispatch(getcurrentSingerDataAction([currentPageNum, type, area, initial]));
  }, [type, area, id, initial, currentPageNum]);
  return (
    <CatSingerWrapper>
      <CatHeader />
      <CatContent />
    </CatSingerWrapper>
  );
};
export default memo(CatSinger);
CatSinger.displayName = "CatSinger";
