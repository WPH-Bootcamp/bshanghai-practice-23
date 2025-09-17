/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/validation/auth.validation";
import { loginUser } from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";

const LoginUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: (data: any) => loginUser(data.email, data.password),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error: any) => {
      console.error(error);
    },
  });

  const onSubmit = async (data: any) => {
    mutate(data);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)} className="">
        <div>
          <label htmlFor="username">username</label>
          <input {...register("email")} type="email" />
          {errors.email && <p className="text-red">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input {...register("password")} type="password" />
          {errors.password && (
            <p className="text-red">{errors.password.message}</p>
          )}
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default LoginUser;
