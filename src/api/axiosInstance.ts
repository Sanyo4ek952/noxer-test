import axios from "axios";

export const api = axios.create({
  baseURL: "https://noxer-test.ru/webapp/api",
  headers: { "Content-Type": "application/json" },
});
