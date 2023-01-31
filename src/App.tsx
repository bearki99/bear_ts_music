import React, { Suspense, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import "normalize.css";

import routes from "./router/index";

import { useBearDispatch} from "./store";

import AppHeader from "./components/app-header";
import AppPlayerBar from "./views/player/app-player-bar";
import TopItem from "./components/top-item";

import { fetchPlayerDataAction } from "./views/player/store";
import { getMyLoginStatus } from "./components/login/service";
import { changeisLogin, changemyID } from "./components/login/store";

import { getMyLoginData } from "./components/login/store";
function App() {
  const dispatch = useBearDispatch();
  async function getStatus(cookie: string) {
    const res = await getMyLoginStatus(cookie);
    if (res.data.account.status == 0) return res.data.account.id;
    return 0;
  }
  useEffect(() => {
    const cookie = localStorage.getItem("cookie") || "";
    getStatus(cookie).then((res) => {
      res && dispatch(changeisLogin(true));
      res && dispatch(changemyID(res));
      const obj = {id: res, cookie};
      res && dispatch(getMyLoginData(obj));
      !res && dispatch(changeisLogin(false));
    });
    
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
