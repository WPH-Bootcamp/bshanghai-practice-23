import { axiosInstance } from "@/api/axiosInstance";

const prefix = "/users";
export const getAllUsers = async () => {
  const res = await axiosInstance.get(`${prefix}`);
  return res.data;
};

export const getUserById = async (id: string) => {
  const res = await axiosInstance.get(`${prefix}/${id}`);
  return res.data;
};
