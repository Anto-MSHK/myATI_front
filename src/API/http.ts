import axios from "axios";

export const API_URL = `https://back-my-ati.anto-mshk.ru`;

export const $api = axios.create({
  //   withCredentials: true,
  baseURL: API_URL,
});
