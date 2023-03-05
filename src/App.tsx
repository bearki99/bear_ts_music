import React, { Suspense, useEffect, createContext, useState } from "react";
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

import socketIO from "socket.io-client";

export const SocketContext = createContext(null);
function App() {
  const dispatch = useBearDispatch();
  const [socket, setSocket] = useState(null);

   useEffect(() => {
    const socket = (socketIO as any).connect("http://localhost:4000");
    setSocket(socket);
    // 在组件卸载时关闭 socket 连接
    return () => {
      socket.close();
    };
  }, []);
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
      <SocketContext.Provider value={socket}>
        <Suspense>{useRoutes(routes)}</Suspense>
      </SocketContext.Provider>
      <AppPlayerBar />
      <TopItem />
    </div>
  );
}

export default App;
