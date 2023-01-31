import React, { ReactNode } from "react";
import { memo } from "react";

import MyHotAlbum from "./c-cpns/hot-new";

import { MyAlbumWrapper } from "./style";
interface IProps {
  children?: ReactNode;
}

const Album: React.FC<IProps> = () => {
  return (
    <MyAlbumWrapper className="bg-color">
      <div className="content wrap-v2 wrap-bg">
        <MyHotAlbum />
      </div>
    </MyAlbumWrapper>
  );
};
export default memo(Album);
