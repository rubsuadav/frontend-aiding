import axios from "axios";
import { backendUrl } from "../../../config";
import { configureAxios } from "../../../components/routes/axiosConfig";

export const base = axios.create({
  baseURL: String(backendUrl + "base/"),
});

export const contacts = axios.create({
  baseURL: String(backendUrl + "base/contacts/"),
});

export const rolesBE = axios.create({
  baseURL: String(backendUrl + "base/user/roles/"),
});

configureAxios(base);
configureAxios(contacts);
configureAxios(rolesBE);

export const fileUrl = backendUrl;
