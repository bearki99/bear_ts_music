import styled from "styled-components";

export const ChatRoomWrapper = styled.div`
  box-sizing: border-box;
  padding: 10px;
  padding-top: 20px;
  margin-left: 20px;
  .main-content {
    width: 100%;
    height: 65vh;
    overflow-y: auto;
    // 滚动条
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    // 滚动条头
    ::-webkit-scrollbar-thumb {
      border-radius: 1em;
      background-color: rgba(0, 21, 41, 0.2);
    }

    // 滚动条轨道
    ::-webkit-scrollbar-track {
      border-radius: 1em;
      background-color: rgba(250, 234, 234, 0.2);
    }
  }
`;
