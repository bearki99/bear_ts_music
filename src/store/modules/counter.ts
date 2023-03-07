import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface IState {
  count: number;
  activeUser: any[];
  subIndex: number;
  firstIndex: number;
}
const initialState: IState = {
  count: 99,
  activeUser: [],
  firstIndex: 0,
  subIndex: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeCounterAction(state, { payload }: PayloadAction<number>) {
      state.count = payload;
    },
    changeActiveUsers(state, { payload }) {
      state.activeUser = payload;
    },
    changeSubIndex(state, { payload }) {
      state.subIndex = payload;
    },
    changeFirstIndex(state, { payload }) {
      state.firstIndex = payload;
    },
  },
});
export const {
  changeCounterAction,
  changeActiveUsers,
  changeSubIndex,
  changeFirstIndex,
} = counterSlice.actions;
export default counterSlice.reducer;
