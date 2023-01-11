import styled from "styled-components";

export const RankingHeaderWrapper = styled.div`
  display: flex;
  /* height: 158px; */
  > .left {
    padding: 5px;
    border: 1px solid #ccc;
    position: relative;
    .mask {
      width: 150px;
      height: 150px;
      left: 0;
      top: 0;
      position: absolute;
      background-position: -230px -380px;
    }
  }
  > .right {
    margin-top: 20px;
    margin-left: 50px;
    h2 {
      font-weight: 500;
    }
    .fre {
      margin-top: 20px;
      display: flex;
      .icon {
        width: 13px;
        height: 13px;
        background-position: -18px -682px;
      }
      span {
        padding: 0 5px;
        font-size: 12px;
      }
    }
    .btn {
      display: flex;
      align-items: center;
      margin-top: 30px;
      button {
        margin-left: 5px;
        display: inline-block;
        height: 31px;
        line-height: 31px;
      }
      button:first-child {
        margin: 0;
      }
      .play-btn {
        width: 66px;
        background-position: right -428px;
        padding: 0 5px 0 0;
        .bg1 {
          display: flex;
          align-items: center;
          padding: 0 7px 0 8px;
          width: 61px;
          height: 31px;
          background-position: 0 -387px;
          .icon2 {
            width: 20px;
            height: 18px;
            background-position: 0 -1622px;
          }
          span {
            color: white;
            margin-left: 5px;
            font-size: 12px;
          }
        }
      }
      .add-btn {
        width: 31px;
        background-position: 0 -1588px;
        margin-left: -5px;
      }
      .add-btn:hover {
        background-position: -40px -1588px;
      }
      .play-btn:hover {
        background-position: right -510px;
      }
      .my-btn {
        padding: 0 5px 0 0;
        background-position: right -1020px;
        i {
          vertical-align: top;
          font-size: 12px;
          display: inline-block;
          height: 31px;
          line-height: 31px;
          padding-right: 2px;
          padding-left: 28px;
          background-position: 0 -977px;
        }
      }
      .collect-btn {
        i {
          background-position: 0 -977px;
        }
      }
      .zf-btn {
        i {
          background-position: 0 -1225px;
        }
      }
      .download-btn {
        i {
          background-position: 0 -2761px;
        }
      }
    }
  }
`;
