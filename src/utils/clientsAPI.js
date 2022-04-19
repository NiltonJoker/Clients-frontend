import axios from "axios";

export const clientsAPI = axios.create({
  baseURL: "http://localhost:3100",
});
