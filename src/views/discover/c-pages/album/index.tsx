import React, { ReactNode } from "react";
import { memo } from "react";
interface IProps {
  children?: ReactNode;
}

const Album: React.FC<IProps> = () => {
  return <div>Album</div>;
};
export default memo(Album);
