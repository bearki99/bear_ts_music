import React, { ReactNode } from "react";
import { memo } from "react";
import { DownloadWrapper } from "./style";
interface IProps {
  children?: ReactNode;
}

const Download: React.FC<IProps> = () => {
  return (
    <DownloadWrapper>
      <div className="content">
        <div className="main-content">
          <div className="left">
            <div className="title">在电脑上听</div>
            <img className="left-img"
              src="http://p1.music.126.net/PGNd0EAtUgA7iRCWXPnUuA==/109951164207162781.png?param=800x0"
              alt=""
            />
            <div className="des">
              <div className="des-left"></div>
              <div className="des-right"></div>
            </div>
          </div>
          <div className="right">
            <div className="title">在手机上听</div>
            <img className="right-img"
              src="	https://p1.music.126.net/sLtya87wVHWn-HWJ33oN4g==/109951164207180884.png?param=450x0"
              alt=""
            />
          </div>
        </div>
      </div>
    </DownloadWrapper>
  );
};
export default memo(Download);
