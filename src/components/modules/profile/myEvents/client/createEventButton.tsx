"use client";
import { useState } from "react";
import EventCreationForm from "../../forms/createEventForm";
import { IconFilter, IconPlus } from "@tabler/icons-react";

const CreateEventButtonClient = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
    console.log("clicked")
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={toggleModal}
        style={{
          background: "linear-gradient(135deg, #eec96d 0%, #ffdf96 100%)",
        }}
        className="py-2 px-6 text-[#231b00] font-bold rounded-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all active:scale-95 duration-200 shadow-lg cursor-pointer"
      >
        <IconPlus size={20} />
        <span>Create Event</span>
      </button>
      <div className="bg-[#3a342d] px-6 py-3 rounded-lg flex items-center gap-2 border border-[#4b463a]/10">
        <IconFilter size={20} className="text-[#eec96d]" />
        <span className="text-label-md font-medium text-[#ebe1d7]">Filter</span>
      </div>
      {isOpen && <EventCreationForm onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default CreateEventButtonClient;
