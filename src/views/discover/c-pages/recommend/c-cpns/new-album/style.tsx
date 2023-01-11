import styled from "styled-components";

export const AlbumWrapper = styled.div`
  > .content {
    box-sizing: border-box;
    padding-left: 2px;
    padding-right: 2px;
    width: 100%;
    height: 180px;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    border: 1px solid #d3d3d3;
    .img-arr {
        width: 645px;
        height: 180px;
        overflow: hidden;
    }
    .left {
      background-position: -260px -75px;
    }
    .right {
      background-position: -300px -75px;
    }
    .left,
    .right {
      width: 17px;
      height: 17px;
      cursor: pointer;
    }
  }
  .carousel-content {
    margin-top: 7px;
    display: flex !important;
    height: 180px;
    align-items: center;
    justify-content: space-between;
  }
`;
