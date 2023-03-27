import axios from "axios";
import { configureAxios } from "../../../components/routes/axiosConfig";
import { backendUrl } from "../../../config";

export const volunteers = axios.create({
  baseURL: String(backendUrl + "volunteers/"),
});

configureAxios(volunteers);