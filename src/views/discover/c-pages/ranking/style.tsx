import styled from "styled-components";

export const BearRankingWrapper = styled.div`
  > .content {
    display: flex;
    box-sizing: border-box;
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
    > .left {
      padding: 40px 0;
      box-sizing: border-box;
      width: 240px;
      border-right: 1px solid #d3d3d3;
      h2 {
        font-size: 14px;
        font-weight: 700;
        font-family: simsun;
      }
    }
    > .right {
      box-sizing: border-box;
      width: 740px;
      background-color: white;
      padding: 40px;
    }
  }
`;
