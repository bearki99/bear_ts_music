import styled from "styled-components";

export const RankingListWrapper = styled.div`
  margin-top: 20px;
  > .header {
    display: flex;
    height: 35px;
    align-items: flex-end;
    position: relative;
    padding-bottom: 7px;
    border-bottom: 2px solid #c20c0c;
    div {
      color: #666;
      font-size: 12px;
    }
    h2 {
      font-weight: 500;
    }
    .number {
      margin-left: 20px;
    }

    .play-num {
      position: absolute;
      right: 0;
      em {
        font-style: normal;
        color: #c20c0c;
        font-weight: bold;
      }
    }
  }
  > .content {
    border: 1px solid #d9d9d9;
    .first {
      width: 77px;
    }
    .second {
      width: 326px;
    }
    .third {
      width: 91px;
    }
    .fourth {
      width: 173px;
    }
    .wp {
      font-size: 12px;
      color: #666;
      height: 18px;
      line-height: 18px;
      background-position: 0 -56px;
      padding: 8px 10px;
    }
    .content-item {
      height: 38px;
      background-position: 0 0;
      background-repeat: repeat-x;
    }
    .content-header {
      display: flex;
      align-items: center;
    }
    .main-content-item {
      display: flex;
      color: #999;

      font-size: 12px;
      > .first {
        span {
          width: 20px;
          display: inline-block;
          text-align: center;
        }
        margin-left: 10px;
      }
      > .second {
        display: flex;
        align-items: center;
        img {
          cursor: pointer;
          margin-right: 10px;
        }
        .icon {
          width: 17px;
          height: 17px;
          margin-right: 5px;
          background-position: 0 -103px;
        }
        .icon:hover {
          background-position: 0 -128px;
        }
        span {
          color: black;
          cursor: pointer;
          height: 18px;
          line-height: 18px;
        }
        span:hover {
          text-decoration: underline;
        }
      }
      > .third {
        .btns {
          
          display: flex;
          align-items: center;
          height: 100%;
          width: 100%;
          .icon1 {
            width: 13px;
            height: 13px;
          }
          visibility: hidden;
        }
      }
      > .third {
        .icon1 {
          background-position: 0 -700px;
          margin-right: 3px;
        }
        .icon1:hover {
          background-position: -22px -700px;
        }
        .icon2 {
          width: 18px;
          height: 16px;
          background-position: 0 -174px;
          margin-right: 3px;
        }
        .icon2:hover {
          background-position: -20px -174px;
        }
        .icon3 {
          width: 18px;
          height: 16px;
          background-position: 0 -195px;
          margin-right: 3px;
        }
        .icon3:hover {
          background-position: -20px -195px;
        }
        .icon4 {
          width: 18px;
          height: 16px;
          background-position: -81px -174px;
        }
        .icon4:hover {
          background-position: -81px -174px;
        }
      }
      > .fourth {
        a:hover {
          text-decoration: underline;
        }
      }
    }
    .main-content-item:hover {
      .time {
        display: none;
      }
      .btns {
        visibility: visible;
      }
    }
    .main {
      height: 70px;
      line-height: 70px;
    }
    .other {
      height: 30px;
      line-height: 30px;
    }
    .shadow {
      background-color: #f7f7f7;
    }
    .normal {
      background-color: white;
    }
  }
`;
