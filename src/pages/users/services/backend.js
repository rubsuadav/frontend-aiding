import axios from "axios";
import { backendUrl } from "../../../config";

const usersApi = axios.create({
  baseURL: String(backendUrl + "base/users/"),
  timeout: 1000,
});

export default usersApi;
