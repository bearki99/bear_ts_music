import styled from "styled-components";

export const SingerHeaderWrapper = styled.div`
  > .content {
    margin: 10px 0;
    padding: 2px 0;
    display: flex;
    align-items: center;
    height: 40px;
    border-bottom: 2px solid #c20c0c;
    position: relative;
    h3 {
      font-size: 24px;
      font-weight: normal;
    }
    .more {
      font-size: 12px;
      color: #666;
      position: absolute;
      right: 0;
      bottom: 10px;
    }
    .more:hover {
      text-decoration: underline;
    }
  }
`;
