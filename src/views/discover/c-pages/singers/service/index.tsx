import mybearRequest from "@/service";

export const getMainSinger = (page: number, limit = 20) => {
  const offset = (page - 1) * limit;
  return mybearRequest.get({
    url: "/top/artists",
    params: {
      offset,
      limit,
    },
  });
};

export const getMyCurrentSinger = (
  page: number,
  type: number,
  area: number,
  initial: number,
  limit = 40
) => {
  const offset = (page - 1) * limit;
  return mybearRequest.get({
    url: "/artist/list",
    params: {
      offset,
      type,
      area,
      initial,
      limit,
    },
  });
};
