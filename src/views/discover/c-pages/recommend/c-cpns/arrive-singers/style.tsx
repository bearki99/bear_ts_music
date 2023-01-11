import styled from "styled-components";

export const ArriveSingersWrapper = styled.div`
  > .singer-item {
    a {
      display: flex;
    }
    &:hover {
      background-color: #f4f4f4;
    }
    width: 210px;
    height: 62px;
    margin: 20px 0;
    background-color: #fafafa;
    border: 1px solid #dddddd;
    .discribe {
      margin-left: 20px;
      h4 {
        position: relative;
        top: -8px;
      }
    }
  }
  > .btn {
    box-sizing: border-box;
    display: block;
    width: 210px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    background-position: right -182px;
    position: relative;
    i {
        position: absolute;
        box-sizing: border-box;
        left: 0;
        width: 209px;
        height: 31px;
        border-radius: 4px;
        display: inline-block;
        padding: 0 15px 0 20px;
        background-position: 0 -59px;
        font-weight: 700;
        font-size: 12px;
    }
  }
`;
