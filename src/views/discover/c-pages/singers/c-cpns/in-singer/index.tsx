import React, { ReactNode } from "react";
import { memo, useEffect} from "react";

import { InSingerWrapper } from "./style";
import { throttle } from "lodash";

import { useBearDispatch, useBearSelector } from "@/store";

import SingerHeader from "../singer-header";
import { changeSingerCurrentPageAction, getSingerDataAction } from "../../store";
import SingerItem from "../singer-item";
import { isTouchBottom } from "@/utils/isTouchBottom";
import { IItem } from "../../interface";

interface IProps {
  children?: ReactNode;
}

const InSinger: React.FC<IProps> = () => {
  const dispatch = useBearDispatch();

  const { mainSinger, currentPage } = useBearSelector((state) => ({
    mainSinger: state.singer.mainSinger,
    currentPage: state.singer.currentPage
  }));

  const handleBack = () => {
    dispatch(changeSingerCurrentPageAction(1));
  };

  const useFn = throttle(() => {
    isTouchBottom(handleBack);
  }, 500);

  useEffect(() => {
    dispatch(getSingerDataAction(currentPage));
  }, [currentPage]);

  useEffect(() => {
    window.addEventListener("scroll", useFn);
    return () => {
      window.removeEventListener("scroll", useFn);
    };
  }, []);
  return (
    <InSingerWrapper>
      <SingerHeader title="入驻歌手" url="" more={false} />
      <div className="content">
        {mainSinger &&
          mainSinger.map((item: IItem) => {
            return <SingerItem infoData={item} key={item.id} />;
          })}
      </div>
    </InSingerWrapper>
  );
};
export default memo(InSinger);
InSinger.displayName = "InSinger";
