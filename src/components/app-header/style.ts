import styled, { StyledComponent } from "styled-components";
// interface HeaderContent extends StyledComponent {
//   titleIndex: number;
// }
export const HeaderWrapper = styled.div`
  background-color: #242424;
  .content {
    display: flex;
    align-items: center;
    height: 70px;
    line-height: 100px;
  }
  .nav {
    display: block;
    height: 5px;
    width: 100%;
    background-color: #c20c0c;
  }
  .first-nav {
    height: 35px;
    line-height: 35px;
    background-color: #c20c0c;
  }
  .nav-item {
    padding: 0 15px;
    line-height: normal;
    > div {
      color: #ffffff;
      border-radius: 10px;
      display: inline-block;
      font-size: 12px;
      padding: 3px 10px;
    }
  }
  .nav-item:first-child {
    margin-left: 27.5%;
  }
  .nav-active {
    background-color: #9b0909;
  }
`;
export const HeaderLeft = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  a {
    color: #cccccc;
    margin: 0 5px;
  }
  .logo {
    display: inline-block;
    width: 177px;
    height: 70px;
    background-position: 0 0;
  }
  .title-list {
    color: #cccccc;
    display: flex;
    align-items: center;
    height: 100%;
    line-height: 70px;
    .item {
      margin: 0;
      height: 100%;
      padding: 0 12px;
      cursor: pointer;
    }
    .item:hover {
      background-color: black;
      color: white;
    }
    .active {
      position: relative;
      background-color: black;
      color: white;
    }
    .active::after {
      content: "";
      display: block;
      position: absolute;
      width: 0;
      height: 0;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
      border-bottom: 7px solid #c20c0c;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      background-color: black;
    }
  }
`;
export const HeaderRight = styled.div`
  /* margin-left: 50px; */
  display: flex;
  align-items: center;
  height: 70px;
  line-height: 70px;
  .input {
    margin-left: 70px;
    width: 157px;
    border-radius: 20px;
    text-indent: 1.5em;
    font-size: 12px;
    background-position: 0 -99px;
    background-color: white;
    outline: none;
  }
  .creator {
    color: #cccccc;
    font-size: 12px;
    margin-left: 15px;
    /* border: 1px solid gray; */
    > span {
      padding: 5px 10px;
      border-radius: 15px;
      border: 1px solid gray;
    }
  }
  .login {
    margin-left: 15px;
    color: #cccccc;
    font-size: 12px;
  }
  .exit-btn {
    margin-left: 15px;
    color: #cccccc;
    font-size: 12px;
    background-color: transparent;
  }
`;
