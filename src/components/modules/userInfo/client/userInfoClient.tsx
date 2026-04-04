"use client";

import { getUserById } from "@/services/auth/auth.service";
import { useEffect, useState } from "react";
import UserInfo from "../userInfo";
import { PublicProfile } from "@/types/auth/publicProfile.types";

const UserInfoClient = ({ params }: { params: { id: string } }) => {
  const [profile, setProfile] = useState<PublicProfile | null>(null);
// console.log(params)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUserById(params.id);
        setProfile(response.data ?? null);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, [params.id, setProfile]);

  return <UserInfo profile={profile ?? null} />;
};

export default UserInfoClient;
