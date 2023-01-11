import styled from "styled-components";

export const SongWrapper = styled.div`
  > .content {
    position: relative;
    /* min-height: 700px; */
    box-sizing: border-box;
    background-color: white;
    border: 1px solid #d3d3d3;
    padding: 40px;
    padding-bottom: 100px;
  }
  .ant-select {
    display: none !important;
  }
  .ant-pagination {
    /* padding-top: 50px; */
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    margin: 0 auto !important;
    margin-top: 50px !important;
  }
  .song-now-content {
    display: flex;
    flex-wrap: wrap;
  }
  .panigate {
    margin-bottom: 40px;
  }
  >.select-btns {
    top: 250px;
    left: -150px;
    position: relative;
    z-index: 99;
    width: 720px;
    height: 437px;
  }
  
`;
