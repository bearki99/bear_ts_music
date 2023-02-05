import React, { Fragment, ReactNode } from 'react';
import { memo } from 'react';
import { AppPlayerListWrapper } from './style';
interface IProps {
  children?: ReactNode;
  currentSong?: any;
  songList?: any;
}

const AppPlayerList: React.FC<IProps> = (props) => {
  const { currentSong, songList } = props;
  const len = songList && songList.length;
  const name = currentSong && currentSong.name;
  return (
    <AppPlayerListWrapper>
      <div className="top">
        <div className="count">播放列表({len})</div>
        <div className="name">{name}</div>
      </div>
      <div className="bottom">
        <img src="http://music.163.com/api/dj/img/blur/109951168233803026" alt="" />
        <div className="mask"></div>
        <div className="left">
          {songList &&
            songList.map((item: any) => {
              return (
                <Fragment key={item.id}>
                  <div className="col1">
                    <div className="playicn sprite-btn-playlist"></div>
                  </div>
                  <div className="col-name">{item.name}</div>
                  <div className="singer-name"></div>
                  <div className="song-time"></div>
                </Fragment>
              );
            })}
        </div>
        <div className="right"></div>
      </div>
    </AppPlayerListWrapper>
  );
};
export default memo(AppPlayerList);
AppPlayerList.displayName = 'AppPlayerList';
