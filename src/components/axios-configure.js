import axios from "axios";

const app = axios.create({
  baseURL: `http://localhost:8080/api/long2short`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Content-Type": "text/html; charset=UTF-8",
  },
  withCredentials: false,
});

export default app;
