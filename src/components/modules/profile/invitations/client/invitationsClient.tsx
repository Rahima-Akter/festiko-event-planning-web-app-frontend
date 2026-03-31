/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { InvitationResponse } from "@/types/invitation/invitation.types";
import { useEffect, useState } from "react";
import Invitations from "../invitations";
import { getMyInvitations } from "@/services/participation/participation.service";

const InvitationsClient = () => {
  const [invitations, setInvitations] = useState<InvitationResponse | null>(
    null,
  );
  useEffect(() => {
    const fetchInvitations = async () => {
      try {
        const response = await getMyInvitations();
        setInvitations(response ?? null);
      } catch (err: any) {
        console.log(err.message);
      }
    };
    fetchInvitations();
  }, [setInvitations]);

  return <Invitations invitations={invitations?.data ?? null} />;
};

export default InvitationsClient;
