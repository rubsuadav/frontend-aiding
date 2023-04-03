import axios from "axios";

import { backendUrl } from "../../config";

const requestService = axios.create({
  baseURL: String(backendUrl),
});


let refresh = false;

export function configureAxios(AxiosInstance) {
  AxiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access_token");
      if (token) {
        // eslint-disable-next-line no-param-reassign
        config.headers.Authorization = `Bearer ${token}`;
        config.withCredentials = true;
      }

      config.timeout = 10000;
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  AxiosInstance.interceptors.response.use(
    (resp) => resp,
    async (error) => {

      // If response is undefined throws error 500 server error
      if (error.response === undefined) {
        return Promise.reject(error);
      }

      const refresh_token = localStorage.getItem("refresh_token");
      if (error.response.status === 401 && !refresh && refresh_token) {
        refresh = true;
        console.log(localStorage.getItem("refresh_token"));
        const response = await requestService.post(
          "token/refresh/",
          {
            refresh: localStorage.getItem("refresh_token"),
          },
          { headers: { "Content-Type": "application/json" } }
        );
        if (response.status === 200) {
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${response.data.access}`;
          localStorage.setItem("access_token", response.data.access);
          localStorage.setItem("refresh_token", response.data.refresh);
          return requestService(error.config);
        }
      }
      refresh = false;
      return Promise.reject(error);
    }
  );
}
