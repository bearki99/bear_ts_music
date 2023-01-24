import { transformUrl } from "@/utils/transformUrl";
import React, { ReactNode } from "react";
import { memo } from "react";
import { DJItemV3Wrapper } from "./style";
interface IProps {
  children?: ReactNode;
  infoData?: any;
}

const DJItemV3: React.FC<IProps> = (props) => {
  const { infoData } = props;
  const id = infoData && infoData.id;
  const imgUrl = infoData && infoData.picUrl;
  const nowUrl = transformUrl(imgUrl, 120);
  const name = infoData && infoData.name;
  const desc = infoData && infoData.desc;
  return (
    <DJItemV3Wrapper>
      <div className="left">
        <a href={"/#/djradio?id=" + id}>
          <img src={nowUrl} alt={name} />
        </a>
      </div>
      <div className="right">
        <h3 className="name">
          <a href={"/#/djradio?id=" + id}>
            {name}
          </a>
        </h3>

        <div className="desc overflow-one">{desc}</div>
      </div>
    </DJItemV3Wrapper>
  );
};
export default memo(DJItemV3);
DJItemV3.displayName = "DJItemV3";
