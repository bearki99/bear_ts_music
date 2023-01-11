import React, { ReactNode } from "react";
import { memo } from "react";
interface IProps {
  children?: ReactNode;
}

const Download: React.FC<IProps> = () => {
  return <div>Download</div>;
};
export default memo(Download);
