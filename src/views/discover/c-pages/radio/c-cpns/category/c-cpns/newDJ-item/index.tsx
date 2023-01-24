import { transformUrl } from "@/utils/transformUrl";
import React, { ReactNode } from "react";
import { memo } from "react";
import { NewDJItemWrapper } from "./style";
interface IProps {
  children?: ReactNode;
  infoData?: any;
}

const NewDJItem: React.FC<IProps> = (props) => {
  const { infoData } = props;
  const id = infoData && infoData.id;
  const imgUrl = infoData && infoData.picUrl;
  const targetUrl = transformUrl(imgUrl, 150);
  const name = infoData && infoData.name;
  const desc = infoData && infoData.rcmdtext;
  return (
    <NewDJItemWrapper>
      <div className="top">
        <a href={"/#/djradio?id=" + id}>
          <img src={targetUrl} alt="" />
        </a>
      </div>
      <div className="bottom">
        <a href={"/#/djradio?id=" + id} className="name">{name}</a>
        <div className="desc">{desc}</div>
      </div>
    </NewDJItemWrapper>
  );
};
export default memo(NewDJItem);
NewDJItem.displayName = "NewDJItemWrapper";
