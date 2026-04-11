"use client";

import { getUserById } from "@/services/auth/auth.service";
import { useEffect, useState } from "react";
import UserInfo from "../userInfo";
import { PublicProfile } from "@/types/auth/publicProfile.types";

const UserInfoClient = ({ params }: { params: { id: string } }) => {
  const [profile, setProfile] = useState<PublicProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  // console.log(params)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await getUserById(params.id);
        setProfile(response.data ?? null);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [params.id, setProfile]);

  return <UserInfo profile={profile ?? null} loading={loading} />;
};

export default UserInfoClient;
