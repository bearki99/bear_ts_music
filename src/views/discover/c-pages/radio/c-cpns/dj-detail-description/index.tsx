import { useBearDispatch } from "@/store";
import React, { ReactNode, useEffect } from "react";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { getDetailDJData } from "../../service";
import { getListRadioData } from "../../store";
import DjContentHeader from "../dj-content-header";
import DjItemV3 from "../dj-item-v3";
import { DJDetailDesWrapper } from "./style";
interface IProps {
  children?: ReactNode;
  infoData?: any;
}

const DJDetailDes: React.FC<IProps> = (props) => {
  const { infoData } = props;
  const id = infoData && infoData[0].categoryId;
  const name = infoData && infoData[0].category;
  return (
    <DJDetailDesWrapper>
      <DjContentHeader
        width={980}
        title={name}
        subtitle="·电台"
        url={"/#/discover/djradio/category?id=" + id}
      />
      <div className="content">
        {infoData &&
          infoData.map((item: any) => {
            return <DjItemV3 infoData={item} key={item.id} />;
          })}
      </div>
    </DJDetailDesWrapper>
  );
};
export default memo(DJDetailDes);
DJDetailDes.displayName = "DJDetailDes";
