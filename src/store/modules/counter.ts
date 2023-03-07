import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface IState {
  count: number;
  activeUser: any[];
}
const initialState: IState = {
  count: 100,
  activeUser: [],
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeCounterAction(state, { payload }: PayloadAction<number>) {
      state.count = payload;
    },
    changeActiveUsers(state, {payload}){
      state.activeUser = payload;
    }
  },
});
export const { changeCounterAction, changeActiveUsers } = counterSlice.actions;
export default counterSlice.reducer;
