import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSongListAction, getStyleAction } from "../service";
export const getSongListData = createAsyncThunk(
  "songlist",
  async (arg: any, { dispatch }) => {
    const { offset, limit, cat, order } = arg;
    dispatch(changeisShowAction(false));
    getSongListAction(offset, limit, cat, order).then((res) => {
      dispatch(changeAllnumAction(res.total));
      dispatch(changeCurrentSongListAction(res.playlists));
      dispatch(changeisShowAction(true));
    });
  }
);
export const getStyleData = createAsyncThunk(
  "styleData",
  async (_, { dispatch }) => {
    getStyleAction().then((res) => {
      const category = res.categories;
      const datas = res.sub;
      const ans = [];
      for (const key in category) {
        const res = datas.filter((item: any) => item.category == key);
        ans.push(res);
      }
      const catFinal = Object.values(category);
      dispatch(changeAllStyleAction(catFinal));
      dispatch(changestyleDatas(ans));
    });
  }
);
const initialState: any = {
  currentPage: 1,
  currentSongList: [],
  allNum: 0,
  isShow: false,
  allStyle: [],
  styleDatas: [],
  nowCat: '全部'
};
const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    changeCurrentPageAction(state, { payload }) {
      state.currentPage = payload;
    },
    changeCurrentSongListAction(state, { payload }) {
      state.currentSongList = payload;
    },
    changeAllnumAction(state, { payload }) {
      state.allNum = payload;
    },
    changeisShowAction(state, { payload }) {
      state.isShow = payload;
    },
    changeAllStyleAction(state, { payload }) {
      state.allStyle = payload;
    },
    changestyleDatas(state, { payload }) {
      state.styleDatas = payload;
    },
    changenowCat(state, {payload}){
      state.nowCat = payload;
    }
  },
});
export const {
  changeCurrentPageAction,
  changeCurrentSongListAction,
  changeAllnumAction,
  changeisShowAction,
  changeAllStyleAction,
  changestyleDatas,
  changenowCat
} = songSlice.actions;
export default songSlice.reducer;
