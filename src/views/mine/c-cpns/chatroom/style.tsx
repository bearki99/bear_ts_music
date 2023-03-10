import styled from "styled-components";

export const ChatRoomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 73vh;
  box-sizing: border-box;
  margin-left: 20px;
  .header {
    height: 80px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    .left {
      display: flex;
      align-items: center;
      height: 100%;
      margin-left: 10px;
    }
    img {
      width: 50px;
      height: 50px;
      padding: 3px;
      border-radius: 25px;
      border: 2px solid rgb(255, 255, 255);
      border-radius: 50%;
    }
    span {
      font-size: 20px;
      margin-left: 10px;
      color: white;
      line-height: 50px;
    }
  }
  .main-content {
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    margin-bottom: 10px;
    background-color: #2c2d5843;
    border: 1px solid #c5c5c51c;
    border-radius: 20px;
    flex: 1;
    overflow-y: auto;
    // 滚动条
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    // 滚动条头
    ::-webkit-scrollbar-thumb {
      border-radius: 1em;
      background-color: rgba(0, 21, 41, 0.3);
    }

    // 滚动条轨道
    ::-webkit-scrollbar-track {
      border-radius: 1em;
      background-color: rgba(255, 236, 236, 0.6);
    }
  }
  .footer {
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    .input-group {
      margin-left: 20px;
    }
    .my-input {
      margin-left: 10px;
      border-radius: 5px !important;
    }
    .mybtn {
      margin-left: 10px;
    }
  }
  .input-group {
    display: flex;
    align-items: center;
  }
  .my-btn1 {
    margin-right: 10px;
    width: 50px;
    height: 50px;
    background-color: rgb(66, 70, 86);
    border-radius: 15px;
    border: 1px solid rgb(80, 85, 103);
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      text-align: center;
      width: 30px;
      height: 30px;
    }
  }
`;
