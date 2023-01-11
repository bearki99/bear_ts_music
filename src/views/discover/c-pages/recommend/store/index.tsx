import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getArriveSingersData,
  getBanners,
  getHotDJData,
  getHotRecommendData,
  getNewAlbumData,
  getPlaylistData,
} from "../service";
const rankingIds = [19723756, 3779629, 2884035];
export const fetchRecommendsAction = createAsyncThunk(
  "recommend-data",
  async (_, { dispatch }) => {
    getBanners().then((res) => {
      dispatch(changeBannersAction(res.banners));
    });
    getHotRecommendData(8).then((res) => {
      dispatch(changeRecommendAction(res.result));
    });
    getNewAlbumData().then((res) => {
      dispatch(changeNewAlbumAction(res.albums));
    });
    getArriveSingersData(5).then(res => {
      dispatch(changeArriveSingersAction(res.artists));
    });
    getHotDJData(5).then(res => {
      dispatch(changeHotDJAction(res.data.list));
    })
  }
);
export const fetchRankingDataAction = createAsyncThunk(
  "rankingData",
  (_, { dispatch }) => {
    const promises: Promise<any>[] = [];
    for (const id of rankingIds) {
      promises.push(getPlaylistData(id));
    }
    Promise.all(promises).then((res) => {
      const playlists = res.map((item) => item.playlist);
      dispatch(changeToplistAction(playlists));
    });
  }
);
const initialState: any = {
  banners: [],
  recommend: [],
  newalbum: [],
  toplistDatas: [],
  arriveSingers: [],
  hotdjData: [],
};
const recommendSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload;
    },
    changeRecommendAction(state, { payload }) {
      state.recommend = payload;
    },
    changeNewAlbumAction(state, { payload }) {
      state.newalbum = payload;
    },
    changeToplistAction(state, { payload }) {
      state.toplistDatas = payload;
    },
    changeArriveSingersAction(state, {payload}) {
      state.arriveSingers = payload;
    },
    changeHotDJAction(state, {payload}){
      state.hotdjData = payload;
    }
  },
});
export const {
  changeBannersAction,
  changeRecommendAction,
  changeNewAlbumAction,
  changeToplistAction,
  changeArriveSingersAction,
  changeHotDJAction
} = recommendSlice.actions;
export default recommendSlice.reducer;
