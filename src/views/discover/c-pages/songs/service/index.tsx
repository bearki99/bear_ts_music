import mybearRequest from "@/service";

export const getSongListAction = (
  offset = 0,
  limit = 35,
  cat = "全部",
  order = "hot"
) => {
  return mybearRequest.get({
    url: "/top/playlist",
    params: {
      limit,
      offset,
      cat,
      order,
    },
  });
};
export const getStyleAction = () => {
  return mybearRequest.get({
    url: "/playlist/catlist",
  });
};
