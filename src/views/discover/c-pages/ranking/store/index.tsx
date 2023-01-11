import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllTopLists, getNowRanking } from "../service";
export const getrankingListData = createAsyncThunk(
  "rankinglist",
  async (_, { dispatch, getState }) => {
    getAllTopLists().then((res) => {
      dispatch(changeallListsAction(res.list));
    });
  }
);
export const getCurrentRankingData = createAsyncThunk(
  "nowRanking",
  async (id: number, { dispatch, getState }) => {
    dispatch(changeLoadingAction(true));
    const res = await getNowRanking(id);
    await dispatch(changeCurrentListAction(res.playlist));
    dispatch(changeLoadingAction(false));
  }
);
const initialState: any = {
  allLists: [],
  currentIndex: 0,
  currentList: {},
  isLoading: false
};
const rankingSlice = createSlice({
  name: "ranking",
  initialState,
  reducers: {
    changeallListsAction(state, { payload }) {
      state.allLists = payload;
    },
    changeCurrentIndexAction(state, { payload }) {
      state.currentIndex = payload;
    },
    changeCurrentListAction(state, { payload }) {
      state.currentList = payload;
    },
    changeLoadingAction(state, {payload}){
      state.isLoading = payload;
    }
  },
});
export const {
  changeallListsAction,
  changeCurrentIndexAction,
  changeCurrentListAction,
  changeLoadingAction
} = rankingSlice.actions;
export default rankingSlice.reducer;
