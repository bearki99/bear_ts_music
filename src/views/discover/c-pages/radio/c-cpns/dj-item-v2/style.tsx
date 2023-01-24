import styled from "styled-components";

export const DJItemV2Wrapper = styled.div`
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  padding: 10px 0;
  display: flex;
  align-items: center;
  > .rank {
    text-align: center;
    margin-left: 10px;
    .rank-detail {
      font-size: 14px;
      color: #999;
    }
    .rank-active {
      color: #da4545;
    }
    .rank-flag {
      display: flex;
      align-items: center;
    }
    .rankitem {
      margin-top: 4px;
      display: flex;
      align-items: center;
    }
    .normal {
      color: #999;
      font-size: 12px;
    }
    .increase {
      color: #ba2226;
      font-size: 12px;
    }
    .drop {
      color: #4abbeb;
      font-size: 12px;
    }
    .rankbtn {
      width: 16px;
      height: 17px;
      background-position: -67px -283px;
    }
    .rankbtn-v {
      width: 6px;
      height: 6px;
      margin-right: 2px;
    }
    .rankbtn-v1 {
      background-position: -74px -274px;
    }
    .rankbtn-v2 {
      background-position: -74px -304px;
    }
    .rankbtn-v3 {
      background-position: -74px -324px;
    }
  }
  > .item {
    padding: 2px 5px;
    border: 1px solid #999;
    color: #999;
  }
  > .item:hover {
    border-color: #666;
    color: #666;
  }
  &.white {
    background-color: #fff;
  }
  &.black {
    background-color: #f7f7f7;
  }
  &:hover {
    background-color: #eee;
  }
  > .left {
    position: relative;
    width: 40px;
    height: 40px;
    margin-left: 10px;
    cursor: pointer;
    > .cover {
      visibility: hidden;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 22px;
      height: 22px;
      background-position: 0 -85px;
    }
  }
  > .right {
    margin-left: 10px;
    width: 254px;
    a {
      display: block;
      width: fit-content;
      max-width: 254px;
    }
    a:hover {
      text-decoration: underline;
    }
    .header {
      font-size: 13px;
    }
    .name {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }
  &:hover {
    .cover {
      visibility: visible;
    }
  }
`;
