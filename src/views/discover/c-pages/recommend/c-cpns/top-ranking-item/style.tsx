import styled from "styled-components";

export const RankingItemWrapper = styled.div`
  flex: 1;
  > .top {
    display: flex;
    width: 230px;
    height: 120px;
    padding: 20px 0 0 19px;
    box-sizing: border-box;
    .left {
      margin-right: 15px;
      position: relative;
      width: 80px;
      height: 80px;
      img {
        width: 80px;
        height: 80px;
      }
      a {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-position: -145px -57px;
      }
    }
    .right {
      a {
        display: block;
      }
      .list-name {
        margin-top: 15px;
        font-weight: 700;
      }
      .btn-arr {
        margin-top: 10px;
        display: flex;
      }
      .play-btn {
        margin-right: 8px;
        background-position: -267px -205px;
      }
      .collect-btn {
        background-position: -300px -205px;
      }
      .play-btn:hover {
        background-position: -267px -235px;
      }
      .collect-btn:hover {
        background-position: -300px -235px;
      }
      .play-btn,
      .collect-btn {
        width: 22px;
        height: 22px;
      }
    }
  }
  > .content {
    .item {
      display: flex;
      box-sizing: border-box;
      padding-left: 20px;
      width: 100%;
      height: 32px;
      line-height: 32px;
      .ranking {
        color: #666;
        font-size: 16px;
        display: inline-block;
        width: 35px;
        height: 32px;
        text-align: center;
      }
      .active {
        color: #c10d0c;
      }
      .info {
        position: relative;
        display: flex;
        width: 170px;
        height: 32px;
        line-height: 32px;
      }
      .info:hover {
        .name {
          width: 96px;
          text-decoration: underline;
        }
        .operate {
          visibility: visible;
        }
      }
      .name {
        font-size: 12px;
      }
      .operate {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 5px;
        display: flex;
        align-items: center;
        visibility: hidden;
      }
      .play-btn {
        background-position: -267px -268px;
      }
      .add-btn {
        position: relative;
        top: 2px;
        background-position: 0 -700px;
      }
      .collect-btn {
        background-position: -297px -268px;
        margin-right: 0 !important;
      }
      .play-btn:hover {
        background-position: -267px -288px;
      }
      .add-btn:hover {
        background-position: -22px -700px;
      }
      .collect-btn:hover {
        background-position: -297px -288px;
      }
      .play-btn,
      .add-btn,
      .collect-btn {
        display: block;
        width: 17px;
        height: 17px;
        margin-right: 4px;
        vertical-align: middle;
      }
    }
  }
`;
