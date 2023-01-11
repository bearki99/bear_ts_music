import { transformCount } from "@/utils/transformCount";
import { transformUrl } from "@/utils/transformUrl";
import React, { ReactNode } from "react";
import { memo } from "react";
import { SongItemWrapper } from "./style";
interface IProps {
  children?: ReactNode;
  infoData?: any;
}

const SongItem: React.FC<IProps> = (props) => {
  const { infoData } = props;
  const imgUrl = infoData && infoData.coverImgUrl;
  const name = infoData && infoData.name;
  const id = infoData && infoData.id;
  const playCount = infoData && transformCount(infoData.playCount);
  const creator = infoData && infoData.creator && infoData.creator.nickname;
  return (
    <SongItemWrapper>
      <div className="top">
        <img src={transformUrl(imgUrl, 140)} alt="" />
        <a href={"#/playlist?id=" + id} className="sprite-cover mask"></a>
        <div className="dis">
          <div className="icon sprite-icon clearfix"></div>
          <span className="count">{playCount}</span>
          <button className="play sprite-icon" title="播放"></button>
        </div>
      </div>
      <div className="bottom">
        <a className="name overflow-one" href={"/#/playlist?id=" + id}>
          {name}
        </a>
        <div className="second-line">
          <span>by </span>
          <a className="creator">{creator}</a>
        </div>
      </div>
    </SongItemWrapper>
  );
};
export default memo(SongItem);
