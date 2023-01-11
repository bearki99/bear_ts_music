import AppHeader from "@/components/app-header";
import React from "react";
import { memo, useRef, ElementRef, ReactNode } from "react";
import { AlbumWrapper } from "./style";
import NavHeader from "@/components/nav-header/index";
import { Carousel } from "antd";
import { useBearSelector } from "@/store";
import { shallowEqual } from "react-redux";
import AlbumItem from "@/components/album-item";
interface IProps {
  children?: ReactNode;
}
export interface IAlbum {
  name: string;
  id: number;
  type: string;
  size: number;
  picId: number;
  blurPicUrl: string;
  companyId: number;
  pic: number;
  picUrl: string;
  publishTime: number;
  description: string;
  tags: string;
  company: string;
  briefDesc: string;
  artist: Artist;
  songs: any;
  alias: any[];
  status: number;
  copyrightId: number;
  commentThreadId: string;
  artists: Artist2[];
  paid: boolean;
  onSale: boolean;
  picId_str: string;
}

export interface Artist {
  name: string;
  id: number;
  picId: number;
  img1v1Id: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  alias: any[];
  trans: string;
  musicSize: number;
  topicPerson: number;
  picId_str: string;
  img1v1Id_str: string;
}

export interface Artist2 {
  name: string;
  id: number;
  picId: number;
  img1v1Id: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  alias: any[];
  trans: string;
  musicSize: number;
  topicPerson: number;
  img1v1Id_str: string;
}

const NewAlbum: React.FC<IProps> = () => {
  const myRef = useRef<ElementRef<typeof Carousel>>(null);
  const { newalbum } = useBearSelector(
    (state) => ({
      newalbum: state.recommend.newalbum,
    }),
    shallowEqual
  );
  return (
    <AlbumWrapper>
      <NavHeader title="新碟上架" more="/discover/album" />
      <div className="content">
        <div
          className="left sprite-nav"
          onClick={() => myRef.current?.prev()}
        ></div>
        <div className="img-arr">
          <Carousel ref={myRef} dots={false}>
            {[0, 1].map((element, index) => {
              return (
                <div key={index} className="carousel-content">
                  {newalbum &&
                    newalbum
                      .slice(element * 5, (element + 1) * 5)
                      .map((element: IAlbum) => {
                        return <AlbumItem key={element.id} infoData={element}/>;
                      })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <div
          className="right sprite-nav"
          onClick={() => myRef.current?.next()}
        ></div>
      </div>
    </AlbumWrapper>
  );
};
export default memo(NewAlbum);
