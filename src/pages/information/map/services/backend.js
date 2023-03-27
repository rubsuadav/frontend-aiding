import axios from "axios";
import { backendUrl } from "../../../../config";
import { configureAxios } from "../../../../components/routes/axiosConfig";

const resources = axios.create({
  baseURL: String(backendUrl + "information/resources/"),
});

configureAxios(resources);

export default resources;
