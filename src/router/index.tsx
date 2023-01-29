import React, { lazy } from "react";
import { RouteObject, Navigate } from "react-router-dom";
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
const Category = lazy(
  () => import("@/views/discover/c-pages/radio/c-cpns/category")
);
const MainDJ = lazy(
  () => import("@/views/discover/c-pages/radio/c-cpns/maindj")
);
const MainSinger = lazy(
  () => import("@/views/discover/c-pages/singers/c-cpns/main-singer")
);
const InSinger = lazy(
  () => import("@/views/discover/c-pages/singers/c-cpns/in-singer")
);
const CatSinger = lazy(
  () => import("@/views/discover/c-pages/singers/c-cpns/cat-singer")
);
const routes: RouteObject[] = [
  { path: "/", element: <Navigate to="/discover" /> },
  {
    path: "/discover",
    element: <Discover />,
    children: [
      { path: "/discover", element: <Navigate to="/discover/recommend" /> },
      { path: "/discover/recommend", element: <Recommend /> },
      { path: "/discover/ranking", element: <Ranking /> },
      {
        path: "/discover/singers",
        element: <Singers />,
        children: [
          { path: "/discover/singers", element: <MainSinger /> },
          { path: "/discover/singers/signed", element: <InSinger /> },
          { path: "/discover/singers/cat", element: <CatSinger /> },
        ],
      },
      { path: "/discover/songs", element: <Songs /> },
      { path: "/discover/album", element: <Album /> },
      {
        path: "/discover/djradio",
        element: <DJRadio />,
        children: [
          { path: "/discover/djradio", element: <MainDJ /> },
          { path: "/discover/djradio/category", element: <Category /> },
        ],
      },
    ],
  },
  { path: "/mine", element: <Mine /> },
  { path: "/focus", element: <Focus /> },
  { path: "/download", element: <Download /> },
];
export default routes;
