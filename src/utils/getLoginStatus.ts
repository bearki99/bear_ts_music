import { newbearRequest } from "@/service"
export async function getloginStatus() {
  if (localStorage.getItem('ACCESS-TOKEN') || localStorage.getItem('REFRESH-TOKEN')) {
    newbearRequest
      .get({
        url: '/protected',
      })
  }
}
