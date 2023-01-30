import styled from "styled-components";
interface IProps {
  showImg: boolean;
}
export const SingerItemWrapper = styled.div<IProps>`
  margin: ${props => props.showImg ? 15 : 10}px 0;
  > .top {
    width: 130px;
    height: 130px;
    position: relative;
    .cover {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-position: 0 -680px;
    }
  }
  > .bottom {
    width: 130px;
    margin-top: 7px;
    font-size: 12px;
    position: relative;
    .name {
      display: inline-block;
      line-height: 12px;
    }
    .name:hover {
      text-decoration: underline;
    }
    .home {
      width: 17px;
      height: 18px;
      background-position: 0 -740px;
      position: absolute;
      right: 0;
      top: -2px;
    }
  }
`;
