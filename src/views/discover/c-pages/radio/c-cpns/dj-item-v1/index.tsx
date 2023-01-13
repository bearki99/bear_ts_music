import { transformUrl } from "@/utils/transformUrl";
import classNames from "classnames";
import React, { ReactNode } from "react";
import { memo } from "react";
import { DJItemV1Wrapper } from "./style";
interface IProps {
  children?: ReactNode;
  index: number;
  infoData: any;
}

const DJItemV1: React.FC<IProps> = (props) => {
  const { index, infoData } = props;
  const imgUrl = infoData && infoData.coverUrl;
  const wantUrl = transformUrl(imgUrl, 40);
  const header = infoData && infoData.name;
  const id = infoData && infoData.id;
  const type = infoData && infoData.radio?.category;
  const name = infoData && infoData.radio?.name;
  const radioID = infoData && infoData.radio?.id;
  const typeID = infoData && infoData.radio?.categoryId;
  return (
    <DJItemV1Wrapper
      className={classNames({
        white: index % 2 === 0,
        black: index % 2 !== 0,
      })}
    >
      <div className="left">
        <img src={wantUrl} alt="" />
        <div className="cover sprite-icon"></div>
      </div>
      <div className="right">
        <div className="header">
          <a href={"/program?id=" + id} className="overflow-one">
            {header}
          </a>
        </div>

        <a href={"/djradio?id=" + radioID} className="name">
          {name}
        </a>
      </div>
      <a
        className="last-right item"
        href={"/discover/djradio/category?id=" + typeID}
      >
        {type}
      </a>
    </DJItemV1Wrapper>
  );
};
export default memo(DJItemV1);
