import mybearRequest from "@/service"

export const getCateList = () => {
    return mybearRequest.get({
        url: '/dj/catelist'
    })
}
export const getHotRadioData = (cateId:number, offset=0, limit=10) => {
    return mybearRequest.get({
        url:'/dj/radio/hot',
        params: {
            cateId,
            offset,
            limit
        }
    })
}
export const getRecommendDJ = () => {
    return mybearRequest.get({
        url: '/program/recommend'
    })
}