import axios from "axios";
import { backendUrl } from "../../../config";

export const contacts = axios.create({
  baseURL: String(backendUrl + "base/contacts/"),
  timeout: 1000,
});

export const fileUrl = backendUrl;
