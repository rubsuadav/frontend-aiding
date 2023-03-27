import axios from "axios";
import { backendUrl } from "../../../config";
import { configureAxios } from "../../../components/routes/axiosConfig";

export const partners = axios.create({
  baseURL: String(backendUrl + "partners/"),
});

export const donations = axios.create({
  baseURL: String(backendUrl + "partners/donation/"),
});

configureAxios(partners);
configureAxios(donations);

export const fileUrl = backendUrl;
