import { axiosInstance } from "@/api/axiosInstance";

const prefix = "/auth";
export const loginUser = async (email: string, password: string) => {
  const res = await axiosInstance.post(`${prefix}/login`, { email, password });
  return res.data;
};
