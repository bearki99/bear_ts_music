import styled from "styled-components";

export const DJItemV1Wrapper = styled.div`
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  padding: 10px 0;
  display: flex;
  align-items: center;
  >.item {
    padding: 2px 5px;
    border: 1px solid #999;
    color: #999;
  }
  >.item:hover {
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
  >.left {
    position: relative;
    width: 40px;
    height: 40px;
    margin-left: 10px;
    cursor: pointer;
    >.cover {
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
  >.right {
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
  >.last-right {
    margin-left: 15px;
  }
  &:hover {
    .cover {
      visibility: visible;
    }
  }
`;
