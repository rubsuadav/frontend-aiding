import axios from "axios";
import { backendUrl } from "../../../config";

const partners = axios.create({
    baseURL: String(backendUrl + "information/"),
    timeout: 1000
  });

export default partners