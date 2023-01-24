import { transformUrl } from "@/utils/transformUrl";
import React, { ReactNode } from "react";
import { memo } from "react";
import { DJContentItemWrapper } from "./style";
interface IProps {
  children?: ReactNode;
  infoData?: any;
}

const DJContentItem: React.FC<IProps> = (props) => {
  const { infoData } = props;
  const id = infoData && infoData.id;
  const imgUrl = infoData && infoData.picUrl;
  const wantUrl = transformUrl(imgUrl, 120);
  const name = infoData && infoData.name;
  const authorName = infoData && infoData.dj && infoData.dj.nickname;
  const authorID = infoData && infoData.dj && infoData.dj.userId;
  const programCount = infoData && infoData.programCount;
  const subCount = infoData && infoData.subCount;
  return (
    <DJContentItemWrapper>
      <div className="left">
        <a href={"/#/djradio?id=" + id}>
          <img src={wantUrl} alt="" />
        </a>
      </div>
      <div className="right">
        <h3>
          <a href={"/#/djradio?id=" + id} className="overflow-one">{name}</a>
        </h3>
        <div className="author">
          <div className="sprite-btn2 author-icon"></div>
          <a href={"/#/user/home?id=" + authorID} className="authorName">
            {authorName}
          </a>
        </div>
        <div className="desc">
          <span>
            共{programCount}期 订阅{subCount}次
          </span>
        </div>
      </div>
    </DJContentItemWrapper>
  );
};
export default memo(DJContentItem);
DJContentItem.displayName = "DJContentItem";
