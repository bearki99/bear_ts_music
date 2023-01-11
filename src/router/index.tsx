import React, { lazy } from "react";
import { RouteObject, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Discover = lazy(() => import("@/views/discover"));
const Download = lazy(() => import("@/views/download"));
const Focus = lazy(() => import("@/views/focus"));
const Mine = lazy(() => import("@/views/mine"));
const Recommend = lazy(() => import("@/views/discover/c-pages/recommend"));
const Album = lazy(() => import("@/views/discover/c-pages/album"));
const DJRadio = lazy(() => import("@/views/discover/c-pages/radio"));
const Songs = lazy(() => import("@/views/discover/c-pages/songs"));
const Singers = lazy(() => import("@/views/discover/c-pages/singers"));
const Ranking = lazy(() => import("@/views/discover/c-pages/ranking"));
const routes: RouteObject[] = [
  { path: "/", element: <Navigate to="/discover" /> },
  {
    path: "/discover",
    element: <Discover />,
    children: [
      { path: "/discover", element: <Navigate to="/discover/recommend" /> },
      { path: "/discover/recommend", element: <Recommend /> },
      { path: "/discover/ranking", element: <Ranking /> },
      { path: "/discover/singers", element: <Singers /> },
      { path: "/discover/songs", element: <Songs /> },
      { path: "/discover/album", element: <Album /> },
      { path: "/discover/djradio", element: <DJRadio /> },
    ],
  },
  { path: "/mine", element: <Mine /> },
  { path: "/focus", element: <Focus /> },
  { path: "/download", element: <Download /> },
];
export default routes;
