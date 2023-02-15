import axios from "axios";

export const API_URL = `http://194.67.121.107:3000`;

export const $api = axios.create({
  //   withCredentials: true,
  baseURL: API_URL,
});
