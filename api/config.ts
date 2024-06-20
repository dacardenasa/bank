import axios from "axios";

export const BankAPI = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BASE_URL_BANK,
  timeout: 1000,
  headers: { authorId: process.env.EXPO_PUBLIC_AUTHOR_ID }
});
