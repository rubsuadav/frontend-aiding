import axios from "axios";
import { backendUrl } from "../../../config";

export const turns = axios.create({
  baseURL: String(backendUrl + "volunteers/"),
  timeout: 1000,
});

export const fileUrl = backendUrl;
