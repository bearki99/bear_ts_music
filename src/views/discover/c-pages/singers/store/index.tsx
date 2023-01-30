import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMainSinger } from "../service";
import { getMyCurrentSinger } from "../service";
interface IArg {
  page: number;
  type: number;
  area: number;
}
export const getSingerDataAction = createAsyncThunk(
  "singer",
  async (page: number, { dispatch, getState }) => {
    getMainSinger(page).then((res) => {
      const originData = (getState() as any).singer.mainSinger;
      const data = originData.concat(res.artists);
      if (page === 1) {
        dispatch(changeMainSingerAction(res.artists));
      } else {
        dispatch(changeMainSingerAction(data));
      }
    });
  }
);

export const getHotSingerDataAction = createAsyncThunk(
  "hot",
  async (_, { dispatch }) => {
    getMainSinger(1, 50).then((res) => {
      dispatch(changeHotSingerAction(res.artists));
    });
  }
);
export const getcurrentSingerDataAction = createAsyncThunk(
  "current",
  async (arg: any, { dispatch, getState }) => {
    const [page, type, area, initial] = arg;
    if (page >= 3) return;
    if (page !== 1) dispatch(changeLoadingAction(true));
    getMyCurrentSinger(page, type, area, initial).then((res) => {
      const data = res.artists;
      const originData = (getState() as any).singer.currentSinger;
      const wantData = originData && originData.concat(data);
      if (page === 1) {
        dispatch(changecurrentSingerAction(data));
      } else {
        dispatch(changecurrentSingerAction(wantData));
      }
      dispatch(changeLoadingAction(false));
    });
  }
);
const singerSlice = createSlice({
  name: "singer",
  initialState: {
    mainSinger: [],
    hotSinger: [],
    currentPage: 1,
    currentPageNum: 1,
    loading: false,
    currentSinger: [],
  },
  reducers: {
    changeMainSingerAction(state, { payload }) {
      state.mainSinger = payload;
    },
    changeSingerCurrentPageAction(state, { payload }) {
      state.currentPage += payload;
    },
    changeHotSingerAction(state, { payload }) {
      state.hotSinger = payload;
    },
    changeLoadingAction(state, { payload }) {
      state.loading = payload;
    },
    changecurrentSingerAction(state, { payload }) {
      state.currentSinger = payload;
    },
    changecurrentPageNumAction(state, { payload }) {
      if (payload == -1) {
        state.currentPageNum = 1;
        return;
      }
      if (state.currentPageNum >= 4) return;
      else state.currentPageNum += payload;
    },
  },
});
export const {
  changeMainSingerAction,
  changeSingerCurrentPageAction,
  changeHotSingerAction,
  changeLoadingAction,
  changecurrentSingerAction,
  changecurrentPageNumAction,
} = singerSlice.actions;
export default singerSlice.reducer;
