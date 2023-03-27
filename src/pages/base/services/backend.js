import axios from "axios";
import { backendUrl } from "../../../config";
import { configureAxios } from "../../../components/routes/axiosConfig";

export const base = axios.create({
  baseURL: String(backendUrl + "base/"),
});

export const contacts = axios.create({
  baseURL: String(backendUrl + "base/contacts/"),
});

configureAxios(base);
configureAxios(contacts);

export const fileUrl = backendUrl;
