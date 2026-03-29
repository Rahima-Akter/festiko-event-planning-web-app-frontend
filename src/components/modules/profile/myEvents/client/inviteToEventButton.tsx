"use client";
import { IconFilter, IconPlus, IconSend } from "@tabler/icons-react";
import { useState } from "react";
import InviteFormModal from "../inviteFormModal";

const InviteToEventButtonClient = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      onClick={toggleModal}
      className="py-2 bg-[#4b463a] text-[#ebe1d7] font-semibold rounded-lg text-[11px] hover:bg-[#4b463a]/30 transition-colors flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
    >
      <IconSend size={16} />
      Invite
      {isOpen && <InviteFormModal onClose={() => setIsOpen(false)} />}
    </button>
  );
};

export default InviteToEventButtonClient;
