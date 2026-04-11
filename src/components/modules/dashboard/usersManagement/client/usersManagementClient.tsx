/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { getAllUsers } from "@/services/auth/auth.service";
import { AllUsersResponse } from "@/types/auth/allUsers.types";
import { useEffect, useState } from "react";
import UsersManagement from "../usersManagement";

const UsersManagementClient = () => {
  const [allUsers, setAllUsers] = useState<AllUsersResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const [roleFilter, setRoleFilter] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const delay = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(delay);
  }, [search]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await getAllUsers({
          page,
          limit: 6,
          search: debouncedSearch,
          searchFields: ["name", "email"],
          enumFields: ["role"],
          role: roleFilter || undefined,
        });
        setAllUsers(response ?? null);
      } catch (err: any) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [page, debouncedSearch, roleFilter]);

  return (
    <UsersManagement
      allUsers={allUsers?.data ?? null}
      meta={allUsers?.meta ?? null}
      setPage={setPage}
      setSearch={setSearch}
      loading={loading}
      setRoleFilter={setRoleFilter}
    />
  );
};

export default UsersManagementClient;
