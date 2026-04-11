"use client";
import { AdminStats } from "@/services/stats/stats.service";
import { IAdminStats } from "@/types/stats/stats.types";
import { useEffect, useState } from "react";
import Overview from "../overview";

const OverviewClient = () => {
  const [adminStats, setAdminStats] = useState<IAdminStats | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const response = await AdminStats();
        setAdminStats(response.data ?? null);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [setAdminStats]);
  return <Overview adminStats={adminStats} loading={loading} />;
};

export default OverviewClient;
