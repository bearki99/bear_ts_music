import styled from "styled-components";

export const DJContentItemWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 435px;
  height: 120px;
  padding: 20px 0;
  border-bottom: 1px solid #e7e7e7;
  > .right {
    margin-left: 20px;
    h3 {
      height: 64px;
      margin: 0;
      line-height: 64px;
      font-weight: 700;
      font-size: 18px;
    }
    h3:hover {
        text-decoration: underline;
    }
    .author {
      display: flex;
    }
    .authorName {
        margin-left: 4px;
        font-size: 12px;
    }
    .authorName:hover {
        text-decoration: underline;
    }
    .author-icon {
      width: 14px;
      height: 15px;
      background-position: -50px -300px;
    }
    .desc {
        span {
            display: inline-block;
            margin-top: 5px;
            font-size: 12px;
            color: #999;
        }
    }
  }
`;
