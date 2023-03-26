import axios from "axios";
import { backendUrl } from "../../../config";

export const volunteers = axios.create({
  baseURL: String(backendUrl + "volunteers/"),
  timeout: 1000,
});
