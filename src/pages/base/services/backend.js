import axios from "axios";
import { backendUrl } from "../../../config";

export const base  = axios.create({
  baseURL: String(backendUrl + "base/"),
  timeout: 1000,
});

export const fileUrl = backendUrl;
