import axios from "axios";
import { backendUrl } from "../../../../config";

const advertisement = axios.create({
    baseURL: String(backendUrl + "information/advertisements/"),
    timeout: 1000
  });

export default advertisement