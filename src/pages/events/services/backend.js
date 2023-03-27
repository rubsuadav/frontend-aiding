import axios from "axios";
import { backendUrl } from "../../../config";

export const events = axios.create({
  baseURL: String(backendUrl + "events/"),
  timeout: 1000,
});

export const programed = axios.create({
  baseURL: String(backendUrl + "events/programed/"),
  timeout: 1000,
});

export const started = axios.create({
  baseURL: String(backendUrl + "events/started/"),
  timeout: 1000,
});
