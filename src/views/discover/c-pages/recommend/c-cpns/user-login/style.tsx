import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 248px;
  height: 126px;
  position: relative;
  .discribe {
    color: #666;
    width: 205px;
    height: 76px;
    font-size: 12px;
    line-height: 2;
    padding-top: 25px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .btn {
    width: 100px;
    height: 31px;
    background-position: 0 -195px;
    margin: 0 auto;
    position: absolute;
    bottom: 12px;
    left: 50%;
    text-align: center;
    line-height: 31px;
    transform: translate(-50%);
    color: #fff;
    font-size: 12px;
    cursor: pointer;
    text-shadow: 0 1px 0 #8a060b;
  }

  .btn:hover {
    background-position: -110px -195px;
  }
`;
