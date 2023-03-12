import axios from "axios";
import { backendUrl } from "../../../config";

export const partners = axios.create({
  baseURL: String(backendUrl + "partners/"),
  timeout: 1000,
});

export const donations = axios.create({
  baseURL: String(backendUrl + "partners/donation/"),
  timeout: 1000,
});
