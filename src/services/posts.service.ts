import { axiosInstance } from "@/api/axiosInstance";

const prefix = "/posts";
export const getPostsByUserId = async (id: string | number) => {
  const res = await axiosInstance.get(`${prefix}?userId=${id}`);
  return res.data;
};
