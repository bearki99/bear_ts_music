import styled from "styled-components";

export const LoginInputWrapper = styled.div`
position: relative;

  .name {
    width: 200px;
    margin-bottom: 10px;
  }
  .password {
    width: 200px;
    margin-bottom: 10px;
  }
  .my-verify {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  .main-content {
    width: 250px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .ant-btn {
    /* width: 64px; */
    margin: 0 auto;
    display: block;
  }
`;
