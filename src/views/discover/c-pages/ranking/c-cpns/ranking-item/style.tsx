import styled from "styled-components";

export const NewRankingItemWrapper = styled.div`
>.origin-item {
    > h2 {
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  > .item {
    box-sizing: border-box;
    padding: 0 20px;
    display: flex;
    align-items: center;
    width: 240px;
    height: 62px;
    cursor: pointer;
    .left {
        display: flex;
        align-items: center;
      height: 100%;
    }
    .right {
        margin-left: 10px;
        .frequency {
            margin-top: 10px;
            color: #999;
        }
        .name, .frequency {
            font-size: 12px;
        }
    }
  }
  > .item:hover {
    background-color: #e6e6e6;
  }
  .active {
    background-color: #dadada;
  }
}

`;
