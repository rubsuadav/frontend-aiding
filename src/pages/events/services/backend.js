import axios from "axios";
import { configureAxios } from "../../../components/routes/axiosConfig";
import { backendUrl } from "../../../config";

export const events = axios.create({
  baseURL: String(backendUrl + "events/"),
});

export const programed = axios.create({
  baseURL: String(backendUrl + "events/programed/"),
});

export const started = axios.create({
  baseURL: String(backendUrl + "events/started/"),
});

configureAxios(events);
configureAxios(programed);
configureAxios(started);
