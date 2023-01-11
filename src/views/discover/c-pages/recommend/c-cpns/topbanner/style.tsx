import styled from "styled-components";

export const BannerWrapper = styled.div`
  height: 285px;
  display: flex;
  align-items: center;
  position: relative;
  .l-arr,
  .r-arr {
    cursor: pointer;
    width: 37px;
    height: 63px;
  }
  .l-arr:hover, .r-arr:hover{
    background-color: rgba(0, 0,0,.3);
  }
  transition: all .2s ease;
`;
export const BannerLeft = styled.div`
  .l-arr {
    position: relative;
    left: 250px;
    background-position: 0 -360px;
  }
`;
export const BannerRight = styled.div`
  .r-arr {
    position: relative;
    right: 250px;
    background-position: 0 -508px;
  }
`;
export const BannerContent = styled.div`
  display: flex;
  align-items: center;
  .content-left {
    width: 730px;
    height: 100%;
    position: relative;
    img {
      height: 285px;
      cursor: pointer;
    }
  }
  .content-right {
    position: relative;
    width: 284px;
    height: 285px;
    background-position: 0 0;
    span {
      width: 254px;
      position: absolute;
      color: #8d8d8d;
      font-size: 12px;
      text-align: center;
      bottom: 20px;
      left: 50%;
      transform: translate(-50%);
    }
    .download-btn {
      display: inline-block;
      width: 215px;
      height: 56px;
      margin: 186px 0 0 19px;
      background-position: 0 9999px;
    }
    .download-btn:hover {
      background-position: 0 -290px;
    }
  }
  .symbol {
    display: flex;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%);
  }
  .symbol-item {
    margin: 0 10px;
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background-color: white;
    cursor: pointer;
  }
  .active {
    background-color: red;
  }
`;
