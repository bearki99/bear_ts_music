import styled from 'styled-components';

export const AppPlayerListWrapper = styled.div`
  width: 986px;
  height: 260px;
  border-radius: 10px;
  position: absolute;
  overflow: hidden;
  left: 50%;
  transform: translateX(-50%);
  bottom: 46px;
  background-color: black;
  color: #e2e2e2;
  > .top {
    display: flex;
    height: 39px;
    font-size: 14px;
    line-height: 39px;
    .count {
      position: relative;
      left: 25px;
      width: 553px;
      font-weight: 700;
      font-size: 14px;
    }
    .name {
      flex: 1;
      width: 346px;
      height: 39px;
      color: #fff;
      font-size: 14px;
      line-height: 39px;
      text-align: center;
    }
  }
  > .bottom {
    position: relative;
    height: 260px;
    overflow: hidden;
    img {
      width: 980px;
      height: auto;
      opacity: 0.2;
    }
    .mask {
      position: absolute;
      top: 0;
      left: 2px;
      z-index: 2;
      width: 558px;
      height: 260px;
      background: #121212;
      opacity: 0.5;
    }
    .left {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
      box-sizing: border-box;
      width: 553px;
      height: 260px;
      padding: 0 10px;
      .col1 {
        .playicn {
          width: 10px;
          height: 13px;
          margin-top: 8px;
          background-position: -182px 0;
        }
      }
      .col-name {
        
      }
    }
  }
`;
