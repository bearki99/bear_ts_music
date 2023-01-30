import styled from "styled-components";

export const SingerWrapper = styled.div`
  > .content {
    display: flex;
    /* padding-bottom: 30px; */
    .left {
      box-sizing: border-box;
      padding: 0 10px;
      width: 180px;
      border-right: 1px solid #d3d3d3;
      overflow: hidden;
      ul {
        margin: 0;
        margin-top: 5px;
        padding: 0;
      }
      .item-main {
        padding: 20px 0;
        border-bottom: 1px solid #d3d3d3;
      }
      .item-main:last-child {
        border-bottom: none;
      }
      .item-title {
        margin-left: 10px;
        font-size: 16px;
      }
      .item-list {
        width: 160px;
        height: 29px;
        line-height: 29px;
        font-size: 12px;
        background-position: 0 -30px;
        padding-left: 27px;
        box-sizing: border-box;
      }
      .item-list-a{
        color: inherit;
      }
      .item-list-a:hover {
        text-decoration: underline;
      }
    }
    .right {
      padding: 10px 20px;
      padding-bottom: 40px;
      flex: 1;
      background-color: white;
    }
  }
  .my-active {
    background-position: 0 0 !important;
    text-decoration: none !important;
    color: #c20c0c !important;
  }
`;
