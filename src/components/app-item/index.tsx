import { transformCount } from "@/utils/transformCount";
import { transformUrl } from "@/utils/transformUrl";
import React, { ReactNode } from "react";
import { memo } from "react";
import { AppItemWrapper } from "./style";
interface IProps {
  children?: ReactNode;
  id?: number;
  playCount: number;
  picUrl: string;
  name: string;
  trackNumberUpdateTime?: number;
}

const AppItem: React.FC<IProps> = (props) => {
  const { playCount, picUrl, name } = props;
  const newCount = transformCount(playCount);
  return (
    <AppItemWrapper>
      <div className="top">
        <img src={transformUrl(picUrl, 140)} alt="" />
        <div className="cover sprite-cover"></div>
        <div className="data-info sprite-cover">
          <div className="listen sprite-icon"></div>
          <span>{newCount}</span>
          <div className="play-btn sprite-icon"></div>
        </div>
      </div>
      <a className="bottom overflow" href=":;">
        {name}
      </a>
    </AppItemWrapper>
  );
};
export default memo(AppItem);
