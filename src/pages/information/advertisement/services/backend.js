import axios from "axios";
import { backendUrl } from "../../../../config";
import Cookies from "universal-cookie";

const cookie = new Cookies();

export const advertisementBE = axios.create({
  baseURL: String(backendUrl + "information/advertisements/"),
  timeout: 1000,
  withCredentials: true,
  headers: {
    "X-Csrftoken": cookie.get('csrftoken'),
  },
});

export const sectionBE = axios.create({
  baseURL: String(backendUrl + "information/sections/"),
  timeout: 1000,
  withCredentials: true,
  headers: {
    "X-CSRFToken": cookie.get('csrftoken'),
  },
});

export const mediaUrl = String(backendUrl + "media/");
