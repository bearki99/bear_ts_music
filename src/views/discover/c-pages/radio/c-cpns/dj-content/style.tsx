import styled from "styled-components";
interface IDJContent {
  width: number;
  height: number;
}
export const DJContentWrapper = styled.div<IDJContent>`
  box-sizing: border-box;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border: 1px solid #e2e2e2;
`;
