import React, { ReactNode } from "react";
import { memo } from "react";
interface IProps {
  children?: ReactNode;
}

const Singers: React.FC<IProps> = () => {
  return <div>Singers</div>;
};
export default memo(Singers);
