import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "email is not valid" }),
  password: z
    .string()
    .min(6, { message: "password must be at least 6 characters" }),
});
