import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCateList } from "../service";
export const getRadioDataAction = createAsyncThunk(
  "radio",
  async (_, { dispatch }) => {
    getCateList().then((res) => {
      dispatch(changecatelistAction(res.categories));
    });
  }
);
const initialState: any = {
  catelist: [],
  currentListID: 0
};
const radioSlice = createSlice({
  name: "radio",
  initialState,
  reducers: {
    changecatelistAction(state, { payload }) {
      state.catelist = payload;
    },
    changecurrentListID(state, {payload}){
      state.currentListID = payload;
    }
  },
});
export const { changecatelistAction,
  changecurrentListID } = radioSlice.actions;
export default radioSlice.reducer;
