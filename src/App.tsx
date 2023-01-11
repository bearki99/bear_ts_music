import React, { Suspense, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import "normalize.css";
import routes from "./router/index";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useBearDispatch, useBearSelector } from "./store";
import AppHeader from "./components/app-header";
import AppPlayerBar from "./views/player/app-player-bar";
import TopItem from "./components/top-item";
import { fetchPlayerDataAction } from "./views/player/store";
function App() {
  const dispatch = useBearDispatch();
  useEffect(() => {
    dispatch(fetchPlayerDataAction(1975753397));
  }, []);
  return (
    <div className="App">
      <AppHeader />
      <Suspense>{useRoutes(routes)}</Suspense>
      <AppPlayerBar />
      <TopItem />
    </div>
  );
}

export default App;
