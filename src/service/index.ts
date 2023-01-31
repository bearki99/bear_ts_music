import BearRequest from "./request";
import { BASE_URL, TIME_OUT } from "./config";
const mybearRequest = new BearRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  withCredentials: true
});

export default mybearRequest;
