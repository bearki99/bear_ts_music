import styled from "styled-components";

export const SongHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-bottom: 5px;
  h1 {
    font-weight: 500;
  }
  height: 40px;
  border-bottom: 2px solid #c20c0c;
  .select {
    display: flex;
    align-items: center;
    height: 31px;
    font-size: 12px;
    margin: 2px 0 0 10px;
    background-position: right -100px;
    i {
      height: 31px;
      line-height: 31px;
      display: inline-block;
      color: #0c73c2 !important;
      padding: 0 10px 0 15px;
      background-position: 0 -59px;
      vertical-align: top;
      margin-right: -1px;
    }
  }
  .select:hover {
    background-position: right -182px;
    i {
      background-position: 0 -141px;
    }

  }
  .hot {
    position: absolute;
    right: 0;
    font-size: 12px;
    color: white;
    width: 46px;
    height: 29px;
    line-height: 29px;
    background-position: 0 0;
    border-radius: 3px;
    i:hover {
      text-decoration: underline;
    }
  }
`;
