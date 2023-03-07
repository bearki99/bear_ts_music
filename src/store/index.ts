import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { combineReducers, configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterReducer from "./modules/counter";
import recommendReducer from "@/views/discover/c-pages/recommend/store/index";
import playerReducer from "@/views/player/store/index";
import rankingReducer from "@/views/discover/c-pages/ranking/store/index";
import songReducer from "@/views/discover/c-pages/songs/store/index";
import radioReducer from "@/views/discover/c-pages/radio/store/index";
import singerReducer from "@/views/discover/c-pages/singers/store/index";
import loginReducer from "@/components/login/store/index";

const reducer = combineReducers({
  counter: counterReducer,
  recommend: recommendReducer,
  player: playerReducer,
  ranking: rankingReducer,
  song: songReducer,
  radio: radioReducer,
  singer: singerReducer,
  login: loginReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store);
// const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     recommend: recommendReducer,
//     player: playerReducer,
//     ranking: rankingReducer,
//     song: songReducer,
//     radio: radioReducer,
//     singer: singerReducer,
//     login: loginReducer,
//   },
// });
// type stateType = typeof store.getState;
// type dispatchType = typeof store.dispatch;
// type FnReturnType = ReturnType<stateType>;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useBearSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useBearDispatch = () => useDispatch<any>();
export default store;
