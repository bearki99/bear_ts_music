import styled from "styled-components";
interface IProps {
  show?: boolean;
}
export const MyLoginWrapper = styled.div<IProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: ${(props) => (props.show ? 50 : -1)};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  > .content {
    position: absolute;
    margin-top: 150px;
    left: 50%;
    transform: translate(-50%);
    width: 400px;
    height: 400px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    .delete {
      position: absolute;
      top: 5px;
      right: 7px;
    }
    .my-show {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 400px;
      height: 400px;
      img {
        width: 125px;
        height: 220px;
      }
    }
    .right {
      margin-left: 20px;
      text-align: center;
      .name {
        font-size: 18px;
        font-weight: 500;
      }
      .imgs {
        position: relative;
        width: 146px;
        height: 146px;
      }
      img {
        width: 146px;
        height: 146px;
      }
      .notValid {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
        width: 146px;
        height: 146px;
        background-color: rgba(255, 255, 255, .5);
        button {
          background-color: greenyellow;
        }
      }
    }
  }
`;
