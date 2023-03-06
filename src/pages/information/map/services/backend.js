import axios from "axios";
import { backendUrl } from "../../../config";

const resources = axios.create({
    baseURL: String(backendUrl + "resources/"),
    timeout: 1000
  });

export default resources