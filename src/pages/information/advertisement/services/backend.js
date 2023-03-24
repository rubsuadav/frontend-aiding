import axios from "axios";
import { backendUrl } from "../../../../config";
import { configureAxios } from "../../../../components/routes/axiosConfig";


export const advertisementBE = axios.create({
  baseURL: String(backendUrl + "information/advertisements/"),
});

export const sectionBE = axios.create({
  baseURL: String(backendUrl + "information/sections/"),
});

configureAxios(advertisementBE);
configureAxios(sectionBE);

export const mediaUrl = String(backendUrl + "media/");
