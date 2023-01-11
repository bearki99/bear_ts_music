import styled from "styled-components";
interface IControlBar {
  isplaying: boolean;
}
export const PlayerBarWrapper = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat;
  > .content {
    margin-top: 7px;
    display: flex;
    align-items: center;
  }
  > .lyric-bar {
    position: fixed;
    text-align: center;
    line-height: 40px;
    left: 50%;
    transform: translateX(-50%);
    bottom: 47px;
    width: 300px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    border-radius: 10px;
  }
`;

export const ControlBarWrapper = styled.div<IControlBar>`
  display: flex;
  align-items: center;
  height: 47px;
  margin-right: 20px;
  > a {
    display: block;
  }
  > .prev {
    width: 28px;
    height: 28px;
    background-position: 0 -130px;
  }
  > .play {
    margin: 0 5px;
    width: 36px;
    height: 36px;
    background-position: 0 ${(props) => (props.isplaying ? `-165px` : `-204px`)};
  }
  > .next {
    width: 28px;
    height: 28px;
    background-position: -80px -130px;
  }
`;

export const ContentBarWrapper = styled.div`
  display: flex;
  align-items: center;
  > .left {
    overflow: hidden;
    width: 34px;
    height: 35px;
    position: relative;
    .mask {
      position: absolute;
      left: 0;
      top: 0;
      width: 34px;
      height: 35px;
      background-position: 0 -80px;
    }
  }
  > .right {
    margin-left: 10px;
    width: 581px;
    height: 37px;
    a {
      color: #e8e8e8;
      font-size: 12px;
    }
    .album-name {
      margin-left: 10px;
      color: #9b9b9b;
    }
    a:hover {
      text-decoration: underline;
    }

    > .top {
      position: relative;
      top: 2px;
      display: flex;
    }
    > .bottom {
      position: relative;
      bottom: 4px;
      display: flex;
      align-items: center;
      .slider {
        width: 466px;
        height: 9px;
      }
      .starttime {
        padding-left: 10px;
      }
      .starttime,
      .endtime {
        font-size: 12px;
        color: white;
      }
    }
  }
  .ant-slider {
    transition: all 0.1s ease;
  }
  .ant-slider-handle {
    width: 22px !important;
    height: 24px !important;
    position: relative;
    top: -7.5px;
    background: url("https://s2.music.126.net/style/web2/img/iconall.png?7b3e8126837d1fd7c3872971a69fb087")
      no-repeat !important;
    background-position: 0 -250px !important;
  }
  .ant-slider-handle::before,
  .ant-slider-handle::after {
    display: none !important;
  }
  .ant-slider-rail,
  .ant-slider-track {
    height: 8px;
    background: url("https://s2.music.126.net/style/web2/img/frame/statbar.png?6b72ab06d566f3b7a525d652c1b9a349");
    background-position: right -30px;
  }
  .ant-slider-track {
    background-position: left -66px;
  }
`;

export const ExtraWrapper = styled.div`
  display: flex;
  > .btn-arr1 {
    margin: 0 5px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    .paintbtn {
      width: 25px;
      height: 25px;
      background-position: 0 0;
    }
    .goodbtn,
    .sharebtn {
      width: 26px;
      height: 26px;
      background-position: -60px -502px;
    }
    .sharebtn {
      background-position: -114px -163px;
    }
    .sharebtn-active {
      background-position: -114px -189px;
    }
    .goodbtn-active {
      background-position: -90px -502px;
    }
    .paintbtn-active {
      background-position-y: -25px;
    }
    .goodbtn:hover {
      background-position: -90px -502px;
    }
    .paintbtn:hover {
      background-position-y: -25px;
    }
    .sharebtn:hover {
      background-position: -114px -189px;
    }
  }
  > .btn-arr2 {
    display: flex;
    .sound {
      background-position: -2px -248px;
    }
    .sound:hover {
      background-position: -31px -248px;
    }
    .sound-active {
      background-position: -31px -248px;
    }
    .random-mode {
      background-position: -66px -248px;
    }
    .single-mode {
      background-position: -66px -344px;
    }
    .list-mode {
      background-position: -3px -344px;
    }
    .random-mode:hover {
      background-position: -93px -248px;
    }
    .list-mode:hover {
      background-position: -33px -344px;
    }
    .single-mode:hover {
      background-position: -93px -344px;
    }
    .sound,
    .random-mode,
    .list-mode,
    .single-mode {
      width: 25px;
      height: 25px;
    }
  }
`;
