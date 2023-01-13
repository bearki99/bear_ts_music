import { useBearSelector } from "@/store";
import React, { ReactNode } from "react";
import { memo } from "react";
import DjItemV1 from "../dj-item-v1";
import DjItemV2 from "../dj-item-v2";
import { DJContentWrapper } from "./style";
interface IProps {
  children?: ReactNode;
  width: number;
  type: number;
  height: number;
  infoData: any;
}

const DJContent: React.FC<IProps> = (props) => {
  const { width, type, height, infoData } = props;
  return (
    <DJContentWrapper width={width} height={height}>
      {infoData &&
        infoData.map((item: any, index: number) => {
          return type === 0 ? (
            <DjItemV1 key={item.id} index={index} infoData={item}/>
          ) : (
            <DjItemV2 key={item.id} index={index} infoData={item}/>
          );
        })}
    </DJContentWrapper>
  );
};
export default memo(DJContent);
