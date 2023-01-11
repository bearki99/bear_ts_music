import mybearRequest from "@/service";
export function getBanners() {
  return mybearRequest.get({
    url: "/banner",
  });
}
export function getHotRecommendData(limit: number) {
  return mybearRequest.get({
    url: "/personalized",
    params: {
      limit,
    },
  });
}

export function getNewAlbumData() {
  return mybearRequest.get({
    url: "/album/newest",
  });
}

export function getPlaylistData(id: number) {
  return mybearRequest.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

export function getArriveSingersData(limit:number){
  return mybearRequest.get({
    url: '/top/artists',
    params:{
      limit
    }
  })
}

export function getHotDJData(limit: number){
  return mybearRequest.get({
    url: '/dj/toplist/popular',
    params:{
      limit
    }
  })
}