import mybearRequest from "@/service";

export const getMainSinger = (page: number, limit = 20) => {
    const offset = (page - 1) * limit
    return mybearRequest.get({
    url: "/top/artists",
    params: {
        offset,
        limit
    },
  });
};

