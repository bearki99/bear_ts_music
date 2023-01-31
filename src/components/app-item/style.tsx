import styled, { StyledInterface } from "styled-components";
interface ItemProps extends StyledInterface {
  picUrl?: string;
}
export const AppItemWrapper = styled.div`
  width: 140px;
  padding-bottom: 20px;
  .top {
    width: 140px;
    height: 140px;
    position: relative;
  }
  img {
    display: block;
    width: 140px;
    height: 140px;
  }
  .cover {
    background-position: 0 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .data-info {
    position: absolute;
    box-sizing: border-box;
    bottom: 0;
    left: 0;
    color: #ccc;
    background-position: 0 -537px;
    width: 140px;
    height: 27px;
    display: flex;
    align-items: center;
    padding: 0 5px 0 10px;
  }
  .listen {
    width: 14px;
    height: 11px;
    background-position: 0 -24px;
    padding-right: 5px;
  }
  span {
    font-size: 12px;
  }
  .play-btn {
    position: absolute;
    right: 10px;
    width: 16px;
    height: 17px;
    background-position: 0 0;
    cursor: pointer;
  }
  .bottom{
    overflow: hidden;
    display: block;
    height: 44px;
    box-sizing: border-box;
    padding: 5px 0;
    font-size: 13px;
    line-height: 1.4;
  }
`;
