import React, { ReactNode } from "react";
import { memo } from "react";
interface IProps {
  children?: ReactNode;
}

const Category: React.FC<IProps> = () => {
  return <div>Category</div>;
};
export default memo(Category);
