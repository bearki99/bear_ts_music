import mybearRequest from "@/service";

export const getCateList = () => {
  return mybearRequest.get({
    url: "/dj/catelist",
  });
};
export const getHotRadioData = (cateId: number, offset = 0, limit = 10) => {
  return mybearRequest.get({
    url: "/dj/radio/hot",
    params: {
      cateId,
      offset,
      limit,
    },
  });
};
export const getRecommendDJ = () => {
  return mybearRequest.get({
    url: "/program/recommend",
  });
};
export const getRankingDJ = (limit = 10, offset = 0) => {
  return mybearRequest.get({
    url: "/dj/program/toplist",
    params: {
      limit,
      offset,
    },
  });
};

export const getDetailDJData = (cateId: number, limit = 4, offset = 0) => {
  return mybearRequest.get({
    url: "/dj/radio/hot",
    params: {
      cateId,
      limit,
      offset,
    },
  });
};

export const getRecommendDJData = (type: number) => {
  return mybearRequest.get({
    url: "/dj/recommend/type",
    params: {
      type,
    },
  });
};

export const getCurrentData = (cateId: number, offset = 0, limit = 30) => {
  return mybearRequest.get({
    url: "/dj/radio/hot",
    params: {
      cateId,
      offset,
      limit,
    },
  });
};
