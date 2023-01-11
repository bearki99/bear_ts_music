import mybearRequest from "@/service"

export const getAllTopLists = () => {
    return mybearRequest.get({
        url: '/toplist'
    })
}

export const getNowRanking = (id: number) => {
    return mybearRequest.get({
        url: '/playlist/detail',
        params: {
            id
        }
    })
}