/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { getPostsByUserId } from "@/services/posts.service";
import { getUserById } from "@/services/users.service";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const UserDetail = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id as string),
  });

  const { data: postData } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPostsByUserId(id as string),
  });

  return (
    <div>
      <Link href={"/user"}>back to user list</Link>
      <h1>{data?.name}</h1>
      <p>{data?.email}</p>
      <p>{data?.username}</p>

      <h1 className="text-2xl mt-4">list post</h1>
      <div>
        {postData?.map((item: any, index: number) => (
          <div key={index} className="mb-2">
            <h1 className="text-xl font-bold">{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetail;
