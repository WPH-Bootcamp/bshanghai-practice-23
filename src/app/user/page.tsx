"use client";
import { getAllUsers } from "@/services/users.service";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function Users() {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => getAllUsers(),
  });

  if (isLoading) return <>loading...</>;

  return (
    <>
      <h1>list user</h1>
      <ul>
        {data.map(
          (item: { name: string; id: string | number }, index: number) => (
            <li key={index}>
              <Link href={`/user/${item.id}`}>{item.name}</Link>
            </li>
          )
        )}
      </ul>
    </>
  );
}
