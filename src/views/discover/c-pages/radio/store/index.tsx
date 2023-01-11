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
};
const radioSlice = createSlice({
  name: "radio",
  initialState,
  reducers: {
    changecatelistAction(state, { payload }) {
      state.catelist = payload;
    },
  },
});
export const { changecatelistAction } = radioSlice.actions;
export default radioSlice.reducer;
