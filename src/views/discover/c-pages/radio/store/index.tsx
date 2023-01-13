import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCateList, getHotRadioData, getRecommendDJ } from "../service";
export const getRadioDataAction = createAsyncThunk(
  "radio",
  async (_, { dispatch }) => {
    getCateList().then((res) => {
      dispatch(changecatelistAction(res.categories));
    });
    getRecommendDJ().then((res) => {
      dispatch(changerecommendDataAction(res.programs));
    });
  }
);
export const getNowRadioDataAction = createAsyncThunk(
  "nowRadio",
  async (param: any, { dispatch }) => {
    const { id, offset } = param;
    getHotRadioData(id, offset).then((res) => {
      dispatch(changecurrentRadioData(res));
    });
  }
);
const initialState: any = {
  catelist: [],
  currentListID: 0,
  currentRadioData: [],
  recommendData: [],
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
  },
});
export const {
  changecatelistAction,
  changecurrentListID,
  changecurrentRadioData,
  changerecommendDataAction,
  changeMaptypeAction,
} = radioSlice.actions;
export default radioSlice.reducer;
