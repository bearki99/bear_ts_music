import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface IState  {
  count: number
}
const initialState: IState = {
  count: 100
}
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeCounterAction(state, {payload}:PayloadAction<number>){
        state.count = payload;
    }
  },
});
export const {changeCounterAction} = counterSlice.actions;
export default counterSlice.reducer;