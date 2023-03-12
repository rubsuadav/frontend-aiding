import axios from "axios";
import { backendUrl } from "../../../config";

const partners = axios.create({
  baseURL: String(backendUrl + "partners/"),
  timeout: 1000,
});

export default partners;
