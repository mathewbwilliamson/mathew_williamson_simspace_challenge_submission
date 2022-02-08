import axios from "axios";
import { baseURL } from ".";

export const apiClient = axios.create({
  baseURL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});
