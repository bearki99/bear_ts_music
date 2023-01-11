import styled from "styled-components";

export const SongItemWrapper = styled.div`
  width: 140px;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-right: 49.5px;
  &:nth-child(5n){
    margin-right: 0;
  }
  > .top {
    position: relative;
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 140px;
      height: 140px;
      background-position: 0 0;
    }
    .dis {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.5);
      bottom: 0;
      width: 140px;
      height: 27px;
      line-height: 27px;
      display: flex;
      align-items: center;
    }
    .icon {
      margin-left: 12px;
      margin-right: 5px;
      width: 14px;
      height: 11px;
      background-position: 0 -24px;
    }
    .count {
      font-size: 12px;
      color: #ccc;
    }
    .play {
      position: absolute;
      right: 7px;
      width: 16px;
      height: 17px;
      background-position: 0 0;
    }
    .play:hover {
      background-position: 0 -60px;
    }
    margin-bottom: 10px;
  }
  > .bottom {
    width: 140px;
    a {
      cursor: pointer;
      display: block;
    }
    a:hover {
      text-decoration: underline;
    }
    .name {
      font-size: 14px;
      margin-bottom: 4px;
    }
    .second-line {
      display: flex;
      color: #666;
      span {
        margin-right: 2px;
      }
    }
  }
`;
