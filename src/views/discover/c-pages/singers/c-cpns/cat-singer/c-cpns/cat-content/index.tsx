import React, { ReactNode, useEffect } from "react";
import { memo } from "react";

import { CatContentWrapper } from "./style";

import { useBearDispatch, useBearSelector } from "@/store";

import { throttle } from "lodash";

import { isTouchBottomV2 } from "@/utils/isTouchBottomV2";
import { changecurrentPageNumAction } from "../../../../store";

import SingerItem from "../../../singer-item";
import { IItem } from "../../../../interface";

interface IProps {
  children?: ReactNode;
}

const CatContent: React.FC<IProps> = () => {
  const dispatch = useBearDispatch();
  const { currentSinger, loading } = useBearSelector((state) => ({
    currentSinger: state.singer.currentSinger,
    loading: state.singer.loading,
  }));
  const topSingers = currentSinger && currentSinger.slice(0, 10);
  const bottomSingers = currentSinger && currentSinger.slice(10);
  const useFn = throttle(() => {
    if (isTouchBottomV2()) {
      dispatch(changecurrentPageNumAction(1));
    }
  }, 300);

  useEffect(() => {
    window.addEventListener("scroll", useFn);
    return () => {
      window.removeEventListener("scroll", () => useFn);
    };
  }, []);

  return (
    <CatContentWrapper>
      <div className="my-top">
        {topSingers &&
          topSingers.map((item: IItem) => {
            return <SingerItem key={item.id} infoData={item} />;
          })}
      </div>
      <div className="bottom">
        {bottomSingers &&
          bottomSingers.map((item: IItem) => {
            return (
              item && (
                <SingerItem key={item.id} infoData={item} showImg={false} />
              )
            );
          })}
      </div>
      {loading && <div className="loading">isloading...</div>}
    </CatContentWrapper>
  );
};
export default memo(CatContent);
CatContent.displayName = "CatContent";
