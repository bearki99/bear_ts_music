import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/counter";
import recommendReducer from "@/views/discover/c-pages/recommend/store/index";
import playerReducer from '@/views/player/store/index'
import rankingReducer from '@/views/discover/c-pages/ranking/store/index'
import songReducer from '@/views/discover/c-pages/songs/store/index'
const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer,
    player: playerReducer,
    ranking: rankingReducer,
    song: songReducer
  },
});
type stateType = typeof store.getState;
type dispatchType = typeof store.dispatch;
type FnReturnType = ReturnType<stateType>;

export const useBearSelector: TypedUseSelectorHook<FnReturnType> = useSelector;
export const useBearDispatch: () => dispatchType = useDispatch;
export default store;
