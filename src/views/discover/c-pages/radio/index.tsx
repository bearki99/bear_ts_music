import React, { ReactNode } from "react";
import { memo } from "react";
interface IProps {
  children?: ReactNode;
}

const DJRadio: React.FC<IProps> = () => {
  return <div>Radio</div>;
};
export default memo(DJRadio);
