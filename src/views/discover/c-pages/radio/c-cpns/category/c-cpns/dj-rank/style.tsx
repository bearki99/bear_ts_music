import styled from "styled-components";

export const DJRankWrapper = styled.div`
  > .header {
    height: 40px;
    border-bottom: 2px solid #c20c0c;
    h3 {
      font-size: 24px;
    }
  }
  > .content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .ant-pagination {
    width: 450px;
    margin: 0 auto !important;
  }
  .ant-select-selector {
    display: none !important;
  }
  > .panigate {
    padding-top: 20px;
  }
`;
