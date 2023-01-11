import { useBearDispatch, useBearSelector } from "@/store";
import { getPlayUrl } from "@/utils/getplayUrl";
import { transformTime } from "@/utils/transformTime";
import { transformUrl } from "@/utils/transformUrl";
import { current } from "@reduxjs/toolkit";
import { Slider } from "antd";
import classNames from "classnames";
import React, {
  ReactNode,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import {
  changeCurrentSongIndexAction,
  changeCurrentSongAction,
  changeMusicAction,
} from "../store";
import { memo } from "react";
import { shallowEqual } from "react-redux";
import {
  ContentBarWrapper,
  ControlBarWrapper,
  ExtraWrapper,
  PlayerBarWrapper,
} from "./style";
interface IProps {
  children?: ReactNode;
}

const AppPlayerBar: React.FC<IProps> = () => {
  //获取Redux数据
  //currentSong-当前正在播放的歌曲，currentSongLyric-正在播放的歌曲的歌词
  const {
    currentSong,
    currentSongLyric,
    playMode,
    songList,
    currentSongIndex,
  } = useBearSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      currentSongLyric: state.player.currentSongLyric,
      playMode: state.player.playMode,
      songList: state.player.songList,
      currentSongIndex: state.player.currentSongIndex,
    }),
    shallowEqual
  );
  const dispatch = useBearDispatch();
  //获取展示数据
  const name = currentSong && currentSong?.name;
  const imgUrl = currentSong && currentSong.al && currentSong.al.picUrl;
  let singer =
    currentSong &&
    currentSong.ar &&
    currentSong.ar.map((item: any) => (item = item.name));
  singer = singer && singer.join(" ");
  const myID: number = currentSong && currentSong.id;
  const allTime = currentSong && currentSong.dt; //这里获取的时间是毫秒

  //ref 绑定播放audio
  const audioRef = useRef<HTMLAudioElement>(null);

  //状态管理
  const [isplaying, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setcurrentTime] = useState(0);
  const [drag, setDrag] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  //useEffect
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = getPlayUrl(myID);
      audioRef.current
        .play()
        .then(() => {
          setPlaying(true);
          console.log("播放成功");
        })
        .catch((err) => {
          setPlaying(false);
          console.log("播放失败");
        });
    }
  }, [currentSong]);

  const play = useCallback(() => {
    setPlaying(!isplaying);
    if (audioRef.current) {
      isplaying
        ? audioRef.current.pause()
        : audioRef.current.play().catch((err: any) => {
            setPlaying(false);
          });
    }
  }, [isplaying]);

  const handleTimeupdate = () => {
    let nowTime;
    if (!drag) {
      if (audioRef.current) {
        nowTime = audioRef.current.currentTime * 1000;
        setcurrentTime(audioRef.current.currentTime * 1000);
        setProgress(((audioRef.current.currentTime * 1000) / allTime) * 100);
        let l = 0,
          r = currentSongLyric && currentSongLyric.length;
        const x = nowTime;
        while (l < r) {
          const mid = (l + r) >> 1;
          if (currentSongLyric[mid].time >= x) r = mid;
          else l = mid + 1;
        }
        // console.log(l);
        if (l - 1 === currentIndex) return;
        if (l - 1 !== 0) {
          setCurrentIndex(l - 1);
        }
      }
    }
  };

  const handleAfterChange = (value: number) => {
    const newTime = (value / 100) * allTime;
    setProgress(value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime / 1000;
    }
    setcurrentTime(newTime);
    setDrag(false);
  };

  const handleSliderChanging = (value: number) => {
    const nowTime = (value / 100) * allTime;
    setcurrentTime(nowTime);
    setProgress(value);
    setDrag(true);
  };

  const handleTimeEnded = () => {
    console.log('end');
    switch (playMode) {
      case 2:
        if(audioRef.current){
          audioRef.current.currentTime = 0;
        }
        
        break;
      default:
        dispatch(changeMusicAction(true));
    }
  };
  return (
    <PlayerBarWrapper className="sprite-player">
      <div className="content wrap-v2">
        <ControlBarWrapper isplaying={isplaying}>
          <button
            className="sprite-btn3 prev"
            onClick={() => {
              dispatch(changeMusicAction(false));
            }}
          ></button>
          <button className="sprite-btn3 play" onClick={play}></button>
          <button
            className="sprite-btn3 next"
            onClick={() => {
              dispatch(changeMusicAction(true));
            }}
          ></button>
        </ControlBarWrapper>
        <ContentBarWrapper>
          <div className="left">
            <img src={transformUrl(imgUrl, 35)} alt="" />
            <a href="#" className="mask sprite-btn3"></a>
          </div>
          <div className="right">
            <div className="top">
              <a href="#" className="name">
                {name}
              </a>
              <a href="#" className="album-name">
                {singer}
              </a>
            </div>
            <div className="bottom">
              <Slider
                className="slider"
                value={progress}
                step={0.5}
                onAfterChange={handleAfterChange}
                onChange={handleSliderChanging}
              />
              <span className="starttime">{transformTime(currentTime)} </span>
              <span className="endtime">/ {transformTime(allTime)}</span>
            </div>
          </div>
        </ContentBarWrapper>
        <ExtraWrapper>
          <div className="btn-arr1">
            <button
              className="sprite-paintbtn paintbtn"
              title="画中画歌词"
            ></button>
            <button className="sprite-btn3 goodbtn" title="赞"></button>
            <button className="sprite-btn3 sharebtn" title="分享"></button>
          </div>
          <div className="btn-arr2">
            <button className="sprite-btn3 sound"></button>
            <button
              className={classNames({
                "sprite-btn3": true,
                "list-mode": playMode === 0,
                "random-mode": playMode === 1,
                "single-mode": playMode === 2,
              })}
            ></button>
          </div>
        </ExtraWrapper>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeupdate}
        onEnded={handleTimeEnded}
      />
      <div className="lyric-bar">
        {currentSongLyric && currentSongLyric[currentIndex]?.text}
      </div>
    </PlayerBarWrapper>
  );
};
export default memo(AppPlayerBar);
