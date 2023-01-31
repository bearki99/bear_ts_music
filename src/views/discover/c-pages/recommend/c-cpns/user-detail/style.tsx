import styled from "styled-components";

export const UserDetailWrapper = styled.div`
  > .content {
    padding: 10px 20px;
    width: 248px;
    height: 185px;
    box-sizing: border-box;
    background-position: 0 -270px;
    .top {
        font-weight: 700;
        margin-bottom: 10px;
    }
    .main-content {
      display: flex;
      .left {
        padding: 2px;
        background: #fff;
        border: 1px solid #dadada;
      }
      .right {
        margin-left: 20px;
      }
    }
  }
`;
