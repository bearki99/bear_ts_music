import styled from "styled-components";

export const SongHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-bottom: 5px;
  h1 {
    font-weight: 500;
  }
  height: 40px;
  border-bottom: 2px solid #c20c0c;
  .select {
    display: flex;
    align-items: center;
    height: 31px;
    font-size: 12px;
    margin: 2px 0 0 10px;
    background-position: right -100px;
    i {
      height: 31px;
      line-height: 31px;
      display: inline-block;
      color: #0c73c2 !important;
      padding: 0 10px 0 15px;
      background-position: 0 -59px;
      vertical-align: top;
      margin-right: -1px;
    }
  }
  .select:hover {
    background-position: right -182px;
    i {
      background-position: 0 -141px;
    }
  }
  .hot {
    position: absolute;
    right: 0;
    font-size: 12px;
    color: white;
    width: 46px;
    height: 29px;
    line-height: 29px;
    background-position: 0 0;
    border-radius: 3px;
    i:hover {
      text-decoration: underline;
    }
  }
  > .select-btns {
    position: relative;
    top: 250px;
    left: -180px;
    z-index: 9;
    width: 720px;
    height: 437px;
    .triangle {
      position: absolute;
      z-index: 99;
      width: 24px;
      height: 11px;
      top: 3px;
      left: 132px;
      background-position: -48px 0;
    }
    .top {
      width: 100%;
      height: 32px;
    }
    .mid {
      width: 700px;
      height: 385px;
      padding: 0 10px;
      background-position: -720px 0;
      background-repeat: repeat-y;
    }
    .footer {
      height: 20px;
      background-position: -1440px -12px;
    }
  }
`;
export const MidWrapper = styled.div`
  > .mid-top {
    padding-left: 26px;
    height: 37px;
    border-bottom: 1px solid #e6e6e6;
    .all-btn {
      width: 75px;
      height: 26px;
      background-position: 0 -64px;
      line-height: 26px;
      text-align: center;
      font-size: 12px;
      a:hover {
        text-decoration: underline;
      }
    }
  }
  > .mid-bottom{
    font-size: 12px;
    padding: 0 20px;
    .item {
      display: flex;
    }
    .item-left {
      display: flex;
      width: 71px;
      height: 41px;
      padding-top: 15px;
      border-right: 1px solid #e6e6e6;
      .icon {
        width: 24px;
        height: 23px;
        position: relative;
        top: -3px;
        margin-right: 8px;
      }
      .name {
        font-weight: 800;
      }
      .icon-0 {
        background-position: -20px -735px;
      }
      .icon-1 {
        background-position: 0 -60px;
      }
      .icon-2 {
        background-position: 0 -88px;
      }
      .icon-3 {
        background-position: 0 -117px;
      }
      .icon-4 {
        background-position: 0 -141px;
      }
    }
    .item-left .name {
    }
    .item-right {
      padding-left: 10px;
      width: 604px;
      padding-top: 15px;
      display: flex;
      flex-wrap: wrap;
      .right-data {
        padding: 0 7px;
        height: 13px;
        border-right: 1px solid #d8d8d8;
        div:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
  }
`;
