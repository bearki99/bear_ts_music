import mybearRequest from "@/service";

export function getCurrentSong(ids:number){
    return mybearRequest.get({
        url: '/song/detail',
        params: {
            ids
        }
    })
}
export function getSongLyric(id:number){
    return mybearRequest.get({
        url: '/lyric',
        params: {
            id
        }
    })
}