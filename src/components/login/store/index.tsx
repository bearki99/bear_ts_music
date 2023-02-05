import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  exitLoginAction,
  getLoginData,
  getLoginStatus,
  getQRCodeKey,
  getQRImg,
} from "../service/index";
import { removeAccessToken, removeRefreshToken } from "@/service/request/auth.service";

export const getQRData = createAsyncThunk(
  "qr",
  async (_, { dispatch, getState }) => {
    const res = await getQRCodeKey();
    const img = await getQRImg(res.data.unikey);
    dispatch(changemyImg(img.data.qrimg));
  }
);

export const getMyLoginData = createAsyncThunk(
  "loginD",
  async (arg: any, { dispatch }) => {
    const { id, cookie } = arg;
    const res = await getLoginData(id);
    const res2 = await getLoginStatus(cookie);
    dispatch(changeinfoDataAction(res));
    dispatch(changeloginDataAction(res2.profile));
  }
);

export const exitLogin = createAsyncThunk("exit", async(_, {dispatch})=>{
  const cookie = localStorage.getItem("cookie") as string;
  await exitLoginAction(cookie);
  removeAccessToken();
  removeRefreshToken();
  dispatch(changeisLogin(false));
  setTimeout(() => {
    window.location.href = "/#";
  }, 1000);
})

const loginSlice = createSlice({
  name: "login",
  initialState: {
    key: 0,
    imgUrl: "",
    isLogin: false,
    currentID: 0,
    infoData: [],
    loginData: [] as any,
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
    changeloginDataAction(state, { payload }) {
      state.loginData = payload;
    },
  },
});
export const {
  changemyKeyAction,
  changemyImg,
  changeisLogin,
  changemyID,
  changeinfoDataAction,
  changeloginDataAction,
} = loginSlice.actions;
export default loginSlice.reducer;
