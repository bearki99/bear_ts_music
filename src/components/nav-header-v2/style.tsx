import styled from "styled-components";

export const NavHeaderV2Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  font-size: 12px;
  width: 210px;
  padding: 5px 0;
  height: 24px;
  line-height: 24px;
  position: relative;
  .title {
    font-weight: 700;
  }
  border-bottom: 1px solid #ccc;
  .all:hover {
    text-decoration: underline;
  }
  .all {
    position: absolute;
    right: 0;
  }
`;
