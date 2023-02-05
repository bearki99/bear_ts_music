import styled from "styled-components";

export const MineWrapper = styled.div`
  background-color: #f5f5f5;
  >.content {
    display: flex;
    background-color: white;
    min-height: 800px;
    .left {
      width: 200px;
      border-right: 1px solid #c5c5c5;
      background-color: #ececec;
    }
    .right {
      flex: 1;
    }
    .left, .right {
      box-sizing: border-box;
      padding: 20px 10px;
    }
  }
`
