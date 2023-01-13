import styled from "styled-components";
interface ICHWrapper {
    width: number;
}
export const DJContentHeaderWrapper = styled.div<ICHWrapper>`
  display: flex;
  position: relative;
  width: ${props=>props.width}px;
  height: 40px;
  border-bottom: 2px solid #c20c0c;

  .title {
    font-size: 24px;
  }
  .more {
    right: 0;
    color: #666;
    font-size: 12px;
  }
  > a {
    position: absolute;
    bottom: 5px;
    &:hover {
        text-decoration: underline;
    }
  }
`;
