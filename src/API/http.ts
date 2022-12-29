import axios from "axios";

export const API_URL = `https://myati.onrender.com`;

export const $api = axios.create({
  //   withCredentials: true,
  baseURL: API_URL,
});
