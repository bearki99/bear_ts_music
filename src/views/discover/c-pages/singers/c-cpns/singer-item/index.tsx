import { transformUrl } from "@/utils/transformUrl";
import React, { ReactNode } from "react";
import { memo } from "react";
import { IItem } from "../../interface";
import { SingerItemWrapper } from "./style";
interface IProps {
  children?: ReactNode;
  infoData?: IItem;
  showImg?: boolean;
}

const SingerItem: React.FC<IProps> = (props) => {
  const { infoData, showImg = true } = props;
  const imgUrl = infoData && infoData.img1v1Url;
  const wantUrl = transformUrl(imgUrl as string, 130, 130);
  const id = infoData && infoData.id;
  const name = infoData && infoData.name;
  const accountID = infoData && infoData.accountId;
  return (
    <SingerItemWrapper showImg={showImg}>
      {showImg && <div className="top">
        <img src={wantUrl} alt="" />
        <a className="cover sprite-cover" href={"/#/artist?id=" + id}></a>
      </div>}
      <div className="bottom">
        <a className="name" href={"/#/artist?id=" + id}>
          {name}
        </a>
        {accountID && <a href={"/#/user/home?id=" + accountID} className="sprite-btn2 home"></a>}
      </div>
    </SingerItemWrapper>
  );
};
export default memo(SingerItem);
SingerItem.displayName = "SingerItem";
