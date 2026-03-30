"use client";
import { IconEdit } from "@tabler/icons-react";
import { useState } from "react";
import UpdateEventForm from "../../forms/updateEventForm";
import { Event } from "@/types/event/event.types";

const EditEventButtonClient = ({ event }: { event: Event }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
    console.log("clicked");
  };
  return (
    <>
      <button
        onClick={toggleModal}
        className="py-2 text-[#eec96d] font-medium text-[11px] hover:bg-[#eec96d]/10 transition-colors flex items-center justify-center gap-2 border border-[#eec96d]/20 rounded-lg"
      >
        <IconEdit size={16} />
        Edit
      </button>
      {isOpen && (
        <UpdateEventForm event={event} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default EditEventButtonClient;
