import mybearRequest from "@/service"

export const getCateList = () => {
    return mybearRequest.get({
        url: '/dj/catelist'
    })
}