import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getQRCodeKey, getQRImg } from "../service/index";

export const getQRData = createAsyncThunk(
  "qr",
  async (_, { dispatch, getState }) => {
    const res = await getQRCodeKey();
    const img = await getQRImg(res.data.unikey);
    dispatch(changemyImg(img.data.qrimg));
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    key: 0,
    imgUrl: "",
    isLogin: false,
    currentID: 0,
    infoData: [],
  },
  reducers: {
    changemyKeyAction(state, { payload }) {
      state.key = payload;
    },
    changemyImg(state, { payload }) {
      state.imgUrl = payload;
    },
    changeisLogin(state, { payload }) {
      state.isLogin = payload;
    },
    changemyID(state, { payload }) {
      state.currentID = payload;
    },
    changeinfoDataAction(state, { payload }) {
      state.infoData = payload;
    },
  },
});
export const {
  changemyKeyAction,
  changemyImg,
  changeisLogin,
  changemyID,
  changeinfoDataAction,
} = loginSlice.actions;
export default loginSlice.reducer;
