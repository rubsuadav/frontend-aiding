import axios from "axios";
import { backendUrl } from "../../../config";
import { configureAxios } from "../../../components/routes/axiosConfig";

export const items = axios.create({
  baseURL: String(backendUrl + "stock/items/"),
});

export const tiposBE = axios.create({
  baseURL: String(backendUrl + "stock/types/"),
});

configureAxios(items);
configureAxios(tiposBE);