import styled from "styled-components";

export const RecommendWrapper = styled.div`
  .recommend-section {
    display: flex;
  }
  .recommend-section > .left {
    box-sizing: border-box;
    padding: 30px 20px;
    width: 730px;
    border-right: 1px solid #ccc;
  }
  .recommend-section > .right {
    box-sizing: border-box;
    .right-content {
      padding: 0 20px;
    }
  }

`;
