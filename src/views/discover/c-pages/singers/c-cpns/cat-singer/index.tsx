import { useQuery } from "@/utils/useQuery";
import React, { ReactNode } from "react";
import { memo } from "react";
interface IProps {
  children?: ReactNode;
}

const CatSinger: React.FC<IProps> = () => {
  const { id } = useQuery();
  console.log(id);
  return <div>CatSinger</div>;
};
export default memo(CatSinger);
CatSinger.displayName = "CatSinger";
