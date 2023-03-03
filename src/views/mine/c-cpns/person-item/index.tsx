import React, { ReactNode } from "react";
import { memo } from "react";
import { PersonItemWrapper } from "./style";
interface IProps {
  children?: ReactNode;
}

const PersonItem: React.FC<IProps> = () => {
  return <PersonItemWrapper>
    
  </PersonItemWrapper>;
};
export default memo(PersonItem);
PersonItem.displayName = "PersonItem";
