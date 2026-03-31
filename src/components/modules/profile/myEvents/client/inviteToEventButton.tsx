/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { IconSend } from "@tabler/icons-react";
import { useState } from "react";
import InviteFormModal from "../inviteFormModal";
import { inviteUser } from "@/services/participation/participation.service";
import { toast } from "sonner";

const InviteToEventButtonClient = ({ eventId }: { eventId: string }) => {
  const [inputUserId, setInputUserId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleInvite = async () => {
    try {
      if (!inputUserId.trim()) {
        toast.error("User ID is required");
        return;
      }
      const response = await inviteUser(eventId, inputUserId);
      if (response?.success) {
        toast.success("Invitation sent successfully");
        setInputUserId("");
        setIsOpen(false);
      } else {
        toast.error("Invitation failed");
        setIsOpen(false);
      }
    } catch (err: any) {
      console.log(err);
      if (err.response?.data?.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Event creation failed");
      }
    }
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="py-2 bg-[#4b463a] text-[#ebe1d7] font-semibold rounded-lg text-[11px] hover:bg-[#4b463a]/30 transition-colors flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
      >
        <IconSend size={16} />
        Invite
      </button>

      {isOpen && (
        <InviteFormModal
          onClose={() => setIsOpen(false)}
          handleInvite={handleInvite}
          inputUserId={inputUserId}
          setInputUserId={setInputUserId}
        />
      )}
    </>
  );
};

export default InviteToEventButtonClient;
