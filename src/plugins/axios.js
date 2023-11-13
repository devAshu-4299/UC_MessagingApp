/*eslint-disable*/

import axios from "axios";
import { getMockError, isMockError, getMockResponse } from "../mock";

const errorResponseHandler = (error) => {
  // Check if the request came from a mocked API
  if (isMockError(error)) {
    return getMockResponse(error);
  }
  // check for errorHandle config
  if (
    error.config.hasOwnProperty("errorHandle") &&
    error.config.errorHandle === false
  ) {
    return Promise.reject(error);
  }
  return error.response;
};

let axiosWebApi = axios.create({
  baseURL: "",
  headers: {
  },
  timeout: 30000,
});

// apply interceptor on request
axiosWebApi.interceptors.request.use((request) => {
  if (request.isMock) {
    return getMockError(request);
  }
  return request

});
// apply interceptor on response
axiosWebApi.interceptors.response.use(
  (response) => response,
  errorResponseHandler
);
export default axiosWebApi;
