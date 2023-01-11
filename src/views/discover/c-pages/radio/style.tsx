import styled from "styled-components";
interface IRadioItem {
  imgUrl: string;
}
export const RadioWrapper = styled.div`
  > .content {
    background-color: white;
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
    padding: 30px;
    > .content-top {
      position: relative;
      display: flex;
      height: 194px;
      align-items: center;
      .my-left {
        left: -20px;
        background-position: 0 -30px;
      }
      .my-right {
        right: -20px;
        background-position: -30px -30px;
      }
      .carousel {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 900px !important;
        height: 194px !important;
      }
      .my-left,
      .my-right {
        position: absolute;
        opacity: 0.1;
        cursor: pointer;
        width: 20px;
        height: 30px;
      }
    }
    .dj-content {
      display: flex !important;
      flex-wrap: wrap;
      .active {
        color: #d35757;
        background-position: -48px 0;
      }
    }
  }
`;
export const RadioItemWrapper = styled.div<IRadioItem>`
  width: 70px;
  height: 70px;
  margin: 0 0 25px 33px;
  &:nth-child(9n+1){
    margin-left: 0;
  }
  .item-img {
    width: 48px;
    height: 48px;
    background-image: url(${props=>props.imgUrl});
    background-position: 0 0;
  }
  .active {
    color: #d35757;
    background-position: -48px 0;
  }
`;
