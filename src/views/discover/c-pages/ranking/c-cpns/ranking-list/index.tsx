import { useBearDispatch } from "@/store";
import { transformTime } from "@/utils/transformTime";
import { transformUrl } from "@/utils/transformUrl";
import classNames from "classnames";
import React, { ReactNode } from "react";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { RankingListWrapper } from "./style";
import { fetchPlayerDataAction, addMusicAction } from "@/views/player/store";
interface IProps {
  children?: ReactNode;
  infoData: any;
}

const RankingList: React.FC<IProps> = (props) => {
  const { infoData } = props;
  const dispatch = useBearDispatch();
  const listLen = infoData && infoData?.tracks?.length;
  const playCount = infoData && infoData.playCount;
  const playList = infoData && infoData.tracks;
  const navigate = useNavigate();
  function goTopage(id: number){
    navigate(`/song?id=${id}`);
  }
  function handleplayBtn(id: number){
    dispatch(fetchPlayerDataAction(id));
  }
  return (
    <RankingListWrapper>
      <div className="header">
        <h2>歌曲列表</h2>
        <div className="number">{listLen}首歌</div>
        <div className="play-num">
          播放：<em>{playCount}</em>次
        </div>
      </div>
      <div className="content">
        <div className="content-header">
          <div className="first content-item sprite-player-btn"></div>
          <div className="second content-item sprite-player-btn">
            <div className="wp sprite-player-btn">标题</div>
          </div>
          <div className="third content-item sprite-player-btn">
            <div className="wp sprite-player-btn">时长</div>
          </div>
          <div className="fourth content-item sprite-player-btn">
            <div className="wp sprite-player-btn">歌手</div>
          </div>
        </div>
        <div className="main-content">
          {playList &&
            playList.map((item: any, index: number) => {
              return (
                <div
                  className={classNames({
                    "main-content-item": true,
                    main: index <= 2,
                    other: index > 2,
                    shadow: index % 2 === 0,
                    normal: index % 2 === 1,
                  })}
                  key={item.id}
                >
                  <div className="first">
                    <span>{index + 1}</span>
                  </div>
                  <div className="second">
                    {index <= 2 && (
                      <img
                        src={transformUrl(item.al.picUrl, 50)}
                        alt=""
                        onClick={()=>goTopage(item.al.id)}
                      />
                    )}
                    <button className="icon sprite-player-btn" onClick={()=>handleplayBtn(item.id)}></button>
                    <span onClick={()=>goTopage(item.al.id)}>{item.al.name}</span>
                  </div>
                  <div className="third">
                    <div className="time">{transformTime(item.dt)}</div>
                    <div className="btns">
                        <button className="icon1 sprite-btn2" onClick={()=>{
                          dispatch(addMusicAction(item.id))
                        }}></button>
                        <button className="icon2 sprite-player-btn"></button>
                        <button className="icon3 sprite-player-btn"></button>
                        <button className="icon4 sprite-player-btn"></button>
                    </div>
                  </div>
                  <div className="fourth">
                    <a className="name" href={'/#/artist?id='+item.ar[0].id}>{item.ar && item.ar[0].name}</a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </RankingListWrapper>
  );
};
export default memo(RankingList);
