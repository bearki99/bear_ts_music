import { useBearDispatch, useBearSelector } from "@/store";
import React, { ReactNode, useRef } from "react";
import { memo } from "react";
import { Pagination } from "antd";
import { DJRankWrapper } from "./style";
import { changecurrentPage } from "../../../../store";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@/utils/useQuery";
import DjContentItem from "../dj-content-item";
interface IProps {
  children?: ReactNode;
}

const DJRank: React.FC<IProps> = () => {
  const dispatch = useBearDispatch();
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const { id, offset = 0 } = useQuery();
  const { currentPage, totalPage, currentRadioData } = useBearSelector(
    (state) => ({
      currentPage: state.radio.currentPage,
      totalPage: state.radio.totalPage,
      currentRadioData: state.radio.currentRadioData,
    })
  );
  function handleChange(page: number) {
    dispatch(changecurrentPage(page));
    const target = "/discover/djradio/category?id=3&offset=" + (page - 1) * 30;
    navigate(target);
    if (ref.current) {
      window.scrollTo(0, ref.current.offsetTop || 0);
    }
  }
  return (
    <DJRankWrapper>
      <div className="header" ref={ref}>
        <h3>电台排行榜</h3>
      </div>
      <div className="content">
        {currentRadioData &&
          currentRadioData.map((item: any) => {
            return <DjContentItem key={item.id} infoData={item} />;
          })}
      </div>

      <Pagination
        defaultCurrent={currentPage}
        total={totalPage}
        pageSize={30}
        onChange={handleChange}
        className="panigate"
      />
    </DJRankWrapper>
  );
};
export default memo(DJRank);
DJRank.displayName = "DJRank";
