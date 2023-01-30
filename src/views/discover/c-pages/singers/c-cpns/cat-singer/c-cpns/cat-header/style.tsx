import styled from "styled-components";

export const CatHeaderWrapper = styled.div`
  > .content {
    display: flex;
    align-items: center;
    margin: 10px 0;
    > .item {
    margin-right: 2px;
    text-align: center;
    width: 21px;
    height: 24px;
    line-height: 24px;
    font-size: 12px;
  }
  }

  
  .item:first-child {
    width: 45px;
  }
  .item:last-child {
    width: 45px;
  }
  .btn {
    color: inherit;
  }
  .active {
    background: #c20c0c;
    border-radius: 2px;
    color: #fff;
  }
`;
