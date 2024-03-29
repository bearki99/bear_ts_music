import { useBearDispatch, useBearSelector } from '@/store';
import React, { ReactNode, useEffect, useState } from 'react';
import { memo } from 'react';
import ArriveSingers from './c-cpns/arrive-singers';
import HotDj from './c-cpns/hot-dj';
import HotRecommend from './c-cpns/hot-recommend';
import NewAlbum from './c-cpns/new-album';
import TopRanking from './c-cpns/top-ranking';
import Topbanner from './c-cpns/topbanner';
import UserDetail from './c-cpns/user-detail';
import UserLogin from './c-cpns/user-login';
import { fetchRankingDataAction, fetchRecommendsAction } from './store';
import { RecommendWrapper } from './style';

import { getMyLoginStatus } from '@/components/login/service';
import { getMyLoginData } from '@/components/login/store';
import { changemyID, changeisLogin } from '@/components/login/store';
import { newbearRequest } from '@/service';
interface IProps {
  children?: ReactNode;
}

const Recommend: React.FC<IProps> = () => {
  const dispatch = useBearDispatch();
  const { currentID } = useBearSelector((state) => ({
    currentID: state.login.currentID,
  }));
  const myLogin = localStorage.getItem('ACCESS-TOKEN') || localStorage.getItem('cookie');
  const [show, setShow] = useState(false);
  async function getStatus(cookie: string) {
    const res = await getMyLoginStatus(cookie);
    if (res.data.account.status == 0) return res.data.account.id;
    return 0;
  }
  async function getloginStatus() {
    if (localStorage.getItem('ACCESS-TOKEN') || localStorage.getItem('REFRESH-TOKEN')) {
      newbearRequest
        .get({
          url: '/afterlogin',
        })
    }
    setShow(true);
  }
  useEffect(() => {
    const cookie = localStorage.getItem('cookie') || '';
    getStatus(cookie).then((res) => {
      res && dispatch(changeisLogin(true));
      res && dispatch(changemyID(res));
      const obj = { id: res, cookie };
      res && dispatch(getMyLoginData(obj));
      !res && dispatch(changeisLogin(false));
      setShow(true);
    });
  }, []);

  useEffect(() => {
    dispatch(fetchRecommendsAction());
    dispatch(fetchRankingDataAction());
  }, []);

  useEffect(() => {
    getloginStatus();
    setShow(true);
  }, []);

  return (
    <RecommendWrapper className="background-section">
      <Topbanner />
      <div className="recommend-section wrap-v2 main-section">
        {show && (
          <>
            <div className="left">
              <HotRecommend />
              <NewAlbum />
              <TopRanking />
            </div>
            <div className="right">
              {myLogin ? <UserDetail id={currentID} /> : <UserLogin />}
              <div className="right-content">
                <ArriveSingers />
                <HotDj />
              </div>
            </div>
          </>
        )}
      </div>
    </RecommendWrapper>
  );
};
export default memo(Recommend);
