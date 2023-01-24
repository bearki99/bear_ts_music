import styled from "styled-components";
interface IRadioItem {
  imgUrl: string;
}
export const RadioWrapper = styled.div`
  > .content {
    background-color: white;
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
    padding: 30px 50px;
    > .content-top {
      margin-top: 20px;
      position: relative;
      display: flex;
      height: 194px;
      align-items: center;
      .my-left {
        transform: translate(-50%);
        left: -10px;
        background-position: 0 -30px;
      }
      .my-right {
        top: 50%;
        transform: translate(-50%);

        right: -40px;
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
  cursor: pointer;
  position: relative;
  margin: 0 0 25px 33px;
  text-align: center;
  &:nth-child(9n + 1) {
    margin-left: 0;
  }
  &:hover {
    background-color: #f2f2f2;
    border-radius: 5px;
  }
  .item-img {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    width: 48px;
    height: 48px;
    background-image: url(${(props) => props.imgUrl});
    background-position: 0 0;
  }
  .img-content {
    width: 48px;
    height: 48px;
    overflow: hidden;
  }
  .item-name {
    position: relative;
    top: -3px;
    font-size: 12px;
  }
  &.active {
    &:hover {
        background-color: white;
    }
    color: #d35757;
    background-image: url(https://s2.music.126.net/style/web2/img/index_radio/radio_bg.png?d1684ae560d1a237aa8b0b669e30a283);
    background-position: -70px 0 !important;
    .item-img {
        background-position: -48px 0;
    }
  }
`;