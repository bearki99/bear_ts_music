import BearRequest from "./request";
import { BASE_URL, TIME_OUT } from "./config";
import NewBearRequest from "./request/index-v2";
const mybearRequest = new BearRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // withCredentials: true,
});
export const newbearRequest = new NewBearRequest({
  baseURL: "/api",
  timeout: TIME_OUT,
});
export default mybearRequest;
