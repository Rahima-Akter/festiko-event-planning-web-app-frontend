"use client";
import { useState } from "react";
import EventCreationForm from "../../forms/createEventForm";
import { IconCaretDownFilled, IconFilter, IconPlus } from "@tabler/icons-react";

const CreateEventButtonClient = ({
  setPage,
  setCategory,
}: {
  setPage: (page: number) => void;
  setCategory: (category: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={toggleModal}
        style={{
          background: "linear-gradient(135deg, #eec96d 0%, #ffdf96 100%)",
        }}
        className="py-2 px-4 text-[#231b00] font-bold rounded-lg flex items-center justify-center gap-1 hover:brightness-110 transition-all active:scale-95 duration-200 shadow-lg cursor-pointer text-sm"
      >
        <IconPlus size={18} />
        <span>Create Event</span>
      </button>

      <div className="bg-[#3a342d] px-4 py-2 rounded-lg flex items-center gap-2 border border-[#4b463a]/10 text-sm w-fit">
        <IconFilter size={18} className="text-[#eec96d]" />

        <div className="relative">
          <select
            onChange={(e) => {
              setPage(1); // ✅ reset page
              setCategory(e.target.value);
            }}
            className="bg-[#1f1b15] border border-[#4b463a]/10 text-sm appearance-none focus:ring-1 focus:ring-[#eec96d] transition-all text-[#ebe1d7] px-3 py- pr-8 rounded-md"
          >
            <option value="">Filter</option>
            <option value="PUBLIC">PUBLIC</option>
            <option value="PRIVATE">PRIVATE</option>
            <option value="PAID">PAID</option>
            <option value="FREE">FREE</option>
          </select>

          <IconCaretDownFilled className="text-white absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>
      {isOpen && <EventCreationForm onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default CreateEventButtonClient;
