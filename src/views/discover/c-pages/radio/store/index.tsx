import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCateList,
  getCurrentData,
  getDetailDJData,
  getRankingDJ,
  getRecommendDJ,
  getRecommendDJData,
} from "../service";
export const getRadioDataAction = createAsyncThunk(
  "radio",
  async (_, { dispatch }) => {
    getCateList().then((res) => {
      dispatch(changecatelistAction(res.categories));
    });
    getRecommendDJ().then((res) => {
      dispatch(changerecommendDataAction(res.programs));
    });
    getRankingDJ().then((res) => {
      dispatch(changerankingRadioDataAction(res.toplist));
      dispatch(changerankingAllValueAction(res.toplist[0].score));
    });
  }
);
export const getListRadioData = createAsyncThunk(
  "list",
  async (_, { dispatch }) => {
    const ids = [2, 6, 3, 2001, 11];
    const ans: any[] = [];
    ids.forEach((id: number) => {
      getDetailDJData(id).then((res) => {
        ans.push(res.djRadios.slice(0, 4));
        if (ans.length === ids.length) {
          dispatch(changerankingListDatasAction(ans));
        }
      });
    });
  }
);
export const getRecommendRadioData = createAsyncThunk(
  "recommend",
  async (id: number, { dispatch }) => {
    getRecommendDJData(id).then((res) => {
      dispatch(changecurrentRecommendDataAction(res.djRadios.slice(0, 5)));
    });
  }
);
export const getCurrentRadioData = createAsyncThunk(
  "currentdj",
  async (arg: any[], { dispatch }) => {
    const id = arg[0],
      offset = arg[1];
    getCurrentData(id, offset).then((res) => {
      dispatch(changecurrentRadioData(res.djRadios));
      dispatch(changeTotalPageAction(res.count));
    });
  }
);
const initialState: any = {
  catelist: [],
  currentListID: 0,
  currentRadioData: [],
  recommendData: [],
  rankingRadioData: [],
  rankingAllVal: 0,
  rankingListDatas: [],
  currentRecommendData: [],
  currentPage: 1,
  totalPage: 0,
};
const radioSlice = createSlice({
  name: "radio",
  initialState,
  reducers: {
    changecatelistAction(state, { payload }) {
      state.catelist = payload;
    },
    changecurrentListID(state, { payload }) {
      state.currentListID = payload;
    },
    changecurrentRadioData(state, { payload }) {
      state.currentRadioData = payload;
    },
    changerecommendDataAction(state, { payload }) {
      state.recommendData = payload;
    },
    changeMaptypeAction(state, { payload }) {
      state.mapType = payload;
    },
    changerankingRadioDataAction(state, { payload }) {
      state.rankingRadioData = payload;
    },
    changerankingAllValueAction(state, { payload }) {
      state.rankingAllVal = payload;
    },
    changerankingListDatasAction(state, { payload }) {
      state.rankingListDatas = payload;
    },
    changecurrentRecommendDataAction(state, { payload }) {
      state.currentRecommendData = payload;
    },
    changecurrentPage(state, { payload }) {
      state.currentPage = payload;
    },
    changeTotalPageAction(state, { payload }) {
      state.totalPage = payload;
    },
  },
});
export const {
  changecatelistAction,
  changecurrentListID,
  changecurrentRadioData,
  changerecommendDataAction,
  changeMaptypeAction,
  changerankingRadioDataAction,
  changerankingAllValueAction,
  changerankingListDatasAction,
  changecurrentRecommendDataAction,
  changecurrentPage,
  changeTotalPageAction,
} = radioSlice.actions;
export default radioSlice.reducer;
