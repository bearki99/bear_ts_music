import { transformUrl } from "@/utils/transformUrl";
import React, { ReactNode } from "react";
import { memo } from "react";
import { SingerItemWrapper } from "./style";
interface IProps {
  children?: ReactNode;
  infoData?: any;
}

const SingerItem: React.FC<IProps> = (props) => {
  const { infoData } = props;
  const imgUrl = infoData && infoData.img1v1Url;
  const wantUrl = transformUrl(imgUrl, 130, 130);
  const id = infoData && infoData.id;
  const name = infoData && infoData.name;
  return (
    <SingerItemWrapper>
      <div className="top">
        <img src={wantUrl} alt="" />
        <a className="cover sprite-cover" href={"/#/artist?id=" + id}></a>
      </div>
      <div className="bottom">
        <a className="name" href={"/#/artist?id=" + id}>{name}</a>
        <a href={"/#/user/home?id="+id} className="sprite-btn2 home"></a>
      </div>
    </SingerItemWrapper>
  );
};
export default memo(SingerItem);
SingerItem.displayName = "SingerItem";
