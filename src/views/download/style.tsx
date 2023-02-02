import styled from "styled-components";

export const DownloadWrapper = styled.div`
  > .content {
    background: url("https://p1.music.126.net/LwY0PYMc2NVWwbIzvGFKcA==/109951164205104153.png");
    background-color: #222;
    background-size: cover;
    width: 100%;
    height: 100%;
    .main-content {
      width: 1100px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
    .left,
    .right {
      width: 556px;
      text-align: center;
    }
    .title {
      margin-top: 40px;
      margin-bottom: 20px;
      font-size: 22px;
      opacity: 0.8;
      color: #ffffff;
    }
    .left-img {
      width: 464px;
      height: 273px;
    }
    .right-img {
      width: 246px;
      height: 273px;
    }
    img {
        padding: 10px 0;
    }
  }
`;
