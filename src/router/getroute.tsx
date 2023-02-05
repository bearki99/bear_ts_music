import { useLocation, Navigate } from "react-router-dom";
import React from "react";

function AuthRouter(props: { children: JSX.Element }) {
  const { pathname } = useLocation();
  if (pathname === "/mylogin") return props.children;
  if (!localStorage.getItem("ACCESS-TOKEN") && !localStorage.getItem("cookie")) {
    return <Navigate to="/mylogin" />;
  } else {
    return props.children;
  }
}
export default AuthRouter;
