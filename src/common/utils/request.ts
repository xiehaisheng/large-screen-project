import axios from "axios";

axios.interceptors.request.use((config) => {
  config.headers = config.headers || {};

  return config;
});

axios.interceptors.response.use((response) => {
  if (response.data && response.data.success === false) {
    return Promise.reject(response.data.err.msg);
  }

  return response.data;
});

export const request = axios;
