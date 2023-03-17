import axios from "axios";
import { backendUrl } from "../../../../config";

export const advertisementBE = axios.create({
  baseURL: String(backendUrl + "information/advertisements/"),
  timeout: 1000,
});

export const sectionBE = axios.create({
  baseURL: String(backendUrl + "information/sections/"),
  timeout: 1000,
});

export const mediaUrl = String(backendUrl + "media/");
