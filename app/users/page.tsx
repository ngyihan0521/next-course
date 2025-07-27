import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}

const page = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <Link href={"/users/new"} className="btn">
        New Users
      </Link>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default page;
