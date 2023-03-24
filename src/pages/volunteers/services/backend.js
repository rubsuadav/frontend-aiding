import axios from "axios";
import { backendUrl } from "../../../config";

export const turns = axios.create({
  baseURL: String(backendUrl + "turns/"),
  timeout: 1000,
});

export const fileUrl = backendUrl;
