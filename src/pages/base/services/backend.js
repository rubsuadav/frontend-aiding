import axios from "axios";
import { backendUrl } from "../../../config";

export const contacts = axios.create({
  baseURL: String(backendUrl + "contact/"),
  timeout: 1000,
});

export const fileUrl = backendUrl;