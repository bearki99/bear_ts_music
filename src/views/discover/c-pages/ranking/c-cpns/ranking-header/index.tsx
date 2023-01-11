import { useBearSelector } from "@/store";
import { transformUrl } from "@/utils/transformUrl";
import React, { ReactNode } from "react";
import { memo } from "react";
import { shallowEqual } from "react-redux";
import { RankingHeaderWrapper } from "./style";
interface IProps {
  children?: ReactNode;
  currentList: any;
}

const RankingHeader: React.FC<IProps> = (props) => {
  const {currentList} = props;
  const imgUrl = currentList && currentList.coverImgUrl;
  const name = currentList && currentList.name;
  const subscribedCount = currentList && currentList.subscribedCount;
  const shareCount = currentList && currentList.shareCount;
  const commentCount = currentList && currentList.commentCount;
  return (
    <RankingHeaderWrapper>
      <div className="left">
        <img src={transformUrl(imgUrl, 150)} alt="" />
        <div className="mask sprite-cover"></div>
      </div>
      <div className="right">
        <h2>{name}</h2>
        <div className="fre">
          <div className="icon sprite-btn2"></div>
          <span>最近更新：</span>
        </div>
        <div className="btn">
          <button className="play-btn sprite-bg-v2">
            <i className="sprite-bg-v2 bg1">
              <div className="icon2 sprite-bg-v2"></div>
              <span>播放</span>
            </i>
          </button>
          <button className="add-btn sprite-bg-v2"></button>
          <button className="my-btn collect-btn sprite-bg-v2">
            <i className="bg-v3 sprite-bg-v2">{"(" + subscribedCount + ")"}</i>
          </button>
          <button className="zf-btn my-btn sprite-bg-v2">
            <i className="bg-v3 sprite-bg-v2">{"(" + shareCount + ")"}</i>
          </button>
          <button className="my-btn sprite-bg-v2 download-btn">
            <i className="bg-v3 sprite-bg-v2">下载</i>
          </button>
          <button className="my-btn sprite-bg-v2 comment-btn">
            <i className="bg-v3 sprite-bg-v2">{"(" + commentCount + ")"}</i>
          </button>
        </div>
      </div>
    </RankingHeaderWrapper>
  );
};
export default memo(RankingHeader);
