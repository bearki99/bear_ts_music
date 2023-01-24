import styled from "styled-components";
interface ICHWrapper {
  width: number;
}
export const DJContentHeaderWrapper = styled.div<ICHWrapper>`
  display: flex;
  position: relative;
  width: ${(props) => props.width}px;
  height: 40px;
  border-bottom: 2px solid #c20c0c;
  .title {
    font-size: 24px;
  }
  .sub-title {
    font-size: 24px;
  }
  .sub-title:hover {
    text-decoration: none;
  }
  .more {
    position: absolute;
    right: 0;
    bottom: 5px;
    color: #666;
    font-size: 12px;
  }
  > a {
    padding-bottom: 5px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
