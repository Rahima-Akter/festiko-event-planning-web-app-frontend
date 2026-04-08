"use client";
import { useEffect, useState } from "react";
import { UserStats } from "@/services/stats/stats.service";
import { IUserStats } from "@/types/stats/stats.types";
import UsersOverview from "../usersOverview";

const UsersOverviewClient = () => {
  const [userStats, setUserStats] = useState<IUserStats | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const response = await UserStats();
        setUserStats(response.data ?? null);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [setUserStats]);
  return <UsersOverview userStats={userStats} loading={loading} />;
};

export default UsersOverviewClient;
