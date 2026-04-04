"use client";
import { useState } from "react";
import ReviewFormModal from "../ReviewFormModal ";

const AddReviewButtonClient = ({ eventId }: { eventId: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="bg-[#6e5d27] text-[#ffffff] px-8 py-3 rounded-lg font-label text-xs uppercase tracking-widest hover:opacity-90 cursor-pointer"
      >
        Add Review
      </button>
      {open && eventId && <ReviewFormModal eventId={eventId} />}
    </>
  );
};

export default AddReviewButtonClient;
