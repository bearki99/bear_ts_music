import { useBearDispatch, useBearSelector } from "@/store";
import { Pagination } from "antd";
import React, { ReactNode, useEffect } from "react";
import { memo } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import SongHeader from "./song-header";
import { getSongListData, getStyleData } from "./store";
import { SongWrapper } from "./style";
import { changeCurrentPageAction } from "./store";
import { useQuery } from "@/utils/useQuery";
import SongItem from "./song-item";

interface IProps {
  children?: ReactNode;
}
/* 歌单组件 */

const Songs: React.FC<IProps> = () => {
  const query = useQuery();
  const { cat='全部', limit=35, offset=0, order='hot' } = query;
  const dispatch = useBearDispatch();
  const navigate = useNavigate();
  const offSetPerPage = 35;
  const { allNum, currentSongList, currentPage, isShow, nowCat } = useBearSelector(
    (state) => ({
      allNum: state.song.allNum,
      currentSongList: state.song.currentSongList,
      currentPage: state.song.currentPage,
      isShow: state.song.isShow,
      nowCat: state.song.nowCat
    })
  );
  useEffect(() => {
    dispatch(getStyleData())
  }, []);
  useEffect(() => {
    dispatch(getSongListData({ offset, limit, cat, order }));
  }, [cat, limit, offset, order]);
  function handleClick(page: number) {
    dispatch(changeCurrentPageAction(page));
    navigate(
      `/discover/songs?order=hot&cat=${nowCat}&limit=35&offset=${
        (page - 1) * offSetPerPage
      }`
    );
  }
  return (
    <SongWrapper className="all-bg">
      {isShow && (
        <div className="content wrap-v2">
          <SongHeader />
          <div className="song-now-content">
            {currentSongList &&
              currentSongList.map((item: any) => {
                return <SongItem key={item.id} infoData={item} />;
              })}
          </div>
          <div className="panigate">
            <Pagination
              defaultCurrent={currentPage}
              total={allNum}
              pageSize={offSetPerPage}
              onChange={handleClick}
            />
          </div>
        </div>
      )}
    </SongWrapper>
  );
};
export default memo(Songs);
