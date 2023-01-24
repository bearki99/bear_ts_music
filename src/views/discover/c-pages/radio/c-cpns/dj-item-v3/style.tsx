import styled from "styled-components";

export const DJItemV3Wrapper = styled.div`
  display: flex;
  /* align-items: center; */
  width: 435px;
  height: 120px;
  padding: 20px 0;
  border-bottom: 1px solid #e7e7e7;
  &:nth-last-child(-n+2){
    border-bottom: none !important;
  }
  .desc {
    font-size: 12px;
    color: #999;
    margin-bottom: 6px;
    line-height: 20px;
  }
  .right {
    overflow: hidden;
    margin-left: 10px;
  }
  .name {
    margin-top: 10px;
    font-weight: 800;
  }
  .name:hover {
    text-decoration: underline;
  }
`;
