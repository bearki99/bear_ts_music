import React, { ReactNode } from "react";
import { memo } from "react";
import { AlbumItemWrapper } from "./style";
interface IProps {
  children?: ReactNode;
  infoData?: any;
}
const AlbumItem: React.FC<IProps> = (props) => {
  const { infoData } = props;
  const name = infoData && infoData.name;
  const id = infoData && infoData.id;
  const picUrl = infoData && infoData.picUrl;
  const singerName = infoData && infoData.artist && infoData.artist.name;
  
  return <AlbumItemWrapper>
    <div className="top">
      <img src={picUrl} alt="" />
      <div className="cover sprite-cover"></div>
    </div>
    <div className="bottom">
      <a className="song-name overflow-one">
        {name}
      </a>
      <a className="singer-name">
        {singerName}
      </a>
    </div>
  </AlbumItemWrapper>;
};
export default memo(AlbumItem);
