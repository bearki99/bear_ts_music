import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMainSinger } from "../service";

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

const singerSlice = createSlice({
  name: "singer",
  initialState: {
    mainSinger: [],
    currentPage: 1,
  },
  reducers: {
    changeMainSingerAction(state, { payload }) {
      state.mainSinger = payload;
    },
    changeSingerCurrentPageAction(state, { payload }) {
      state.currentPage += payload;
    },
  },
});
export const { changeMainSingerAction, changeSingerCurrentPageAction } =
  singerSlice.actions;
export default singerSlice.reducer;
