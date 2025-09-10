import { api } from "./axiosInstance.ts";

export const getProducts = async (params?: {
  on_main?: boolean;
  page?: number;
  per_page?: number;
}) => {
  const { data } = await api.get("products", { params });
  return data;
};
