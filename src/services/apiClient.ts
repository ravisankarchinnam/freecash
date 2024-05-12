import axios from "axios";

export const apiUrl = process.env.NEXT_PUBLIC_APP_API_URL as string;
export const token = "jwt";

const apiClient = axios.create({
  baseURL: apiUrl,
});

export default apiClient;
