import { useBearDispatch } from "@/store";
import classNames from "classnames";
import React, { ReactNode } from "react";
import { memo } from "react";
import { RankingItemWrapper } from "./style";
import { fetchPlayerDataAction } from "@/views/player/store";
interface IProps {
  children?: ReactNode;
  infoData?: any;
}

const RankingItem: React.FC<IProps> = (props) => {
  const { infoData } = props;
  const playlistName = infoData && infoData.name;
  const playlistImg = infoData && infoData.coverImgUrl;
  const playlistDetail =
    infoData && infoData.tracks && infoData.tracks.slice(0, 10);
  const id = infoData && infoData.id;
  const url = "/#/discover/playlist?id=" + id;
  const dispatch = useBearDispatch();
  function handleAddMusic(id:number){
    dispatch(fetchPlayerDataAction(id));
  }
  return (
    <RankingItemWrapper>
      <div className="top">
        <div className="left">
          <img src={playlistImg} alt={playlistName} />
          <a href={url} className="sprite-cover"></a>
        </div>
        <div className="right">
          <a className="list-name" href={url}>
            {playlistName}
          </a>
          <div className="btn-arr">
            <a href="#!" className="sprite-btn play-btn" title="播放"></a>
            <a href="#!" className="sprite-btn collect-btn" title="收藏"></a>
          </div>
        </div>
      </div>
      <div className="content">
        {playlistDetail &&
          playlistDetail.map((element: any, index: number) => {
            return (
              <div className="item" key={index}>
                <div
                  className={classNames({
                    ranking: true,
                    active: index <= 2,
                  })}
                >
                  {index + 1}
                </div>
                <div className="info">
                  <a className="name overflow-one" href="#">
                    {element && element.name}
                  </a>
                  <div className="operate">
                    <button className="sprite-btn play-btn" onClick={()=>handleAddMusic(element.id)}></button>
                    <a href="#" className="sprite-btn2 add-btn"></a>
                    <a href="#" className="sprite-btn collect-btn"></a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </RankingItemWrapper>
  );
};
export default memo(RankingItem);
