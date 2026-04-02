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
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    const fetchInvitations = async () => {
      try {
        const response = await getMyInvitations({
          page,
          limit: 3,
        });
        setInvitations(response ?? null);
      } catch (err: any) {
        console.log(err.message);
      }
    };
    fetchInvitations();
  }, [setInvitations, page]);

  return (
    <Invitations
      invitations={invitations?.data ?? null}
      meta={invitations?.meta ?? null}
      setPage={setPage}
    />
  );
};

export default InvitationsClient;
