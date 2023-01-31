import React, { ReactNode } from "react";
import { memo } from "react";
import { HotAlbumWrapper } from "./style";
interface IProps {
  children?: ReactNode;
}

const MyHotAlbum: React.FC<IProps> = () => {
  return (
    <HotAlbumWrapper>
      
    </HotAlbumWrapper>
  );
};
export default memo(MyHotAlbum);
MyHotAlbum.displayName = "HotAlbum";
