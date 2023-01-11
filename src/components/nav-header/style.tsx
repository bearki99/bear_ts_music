import styled from "styled-components";
// interface IHeader {

// }
export const NavHeaderWrapper = styled.div`
  height: 35px;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  align-items: center;
  background-position: -225px -156px;
  padding: 0 10px 5px 35px;
  border-bottom: 2px solid #c10d0c;
  > .left {
    display: flex;
    height: 100%;
    align-items: center;
    h3 {
      position: relative;
      margin-right: 10px;
      cursor: pointer;
    }
    a {
      color: #666;
      font-size: 12px;
      padding: 0 12px;
      border-right: 1px solid #ccc;
    }
    a:last-child {
      border-right: none;
    }
  }
  > .right {
    position: absolute;
    right: 10px;
    font-size: 12px;
    color: #666;
    .icon {
      position: relative;
      margin-left: 7px;
      top: 1px;
      display: inline-block;
      width: 12px;
      height: 12px;
      background-position: 0 -240px;
    }
  }
`;
