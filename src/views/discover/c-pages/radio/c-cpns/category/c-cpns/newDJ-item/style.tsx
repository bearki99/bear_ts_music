import styled from "styled-components";

export const NewDJItemWrapper = styled.div`
  width: 150px;
  > .top {
    margin: 20px 0 10px;
  }
  > .bottom {
    .name {
        line-height: 18px;
    }
    .name:hover {
        text-decoration: underline;
    }
    .desc {
      margin-top: 2px;
      font-size: 12px;
      color: #999;
      line-height: 18px;
    }
  }
`;
