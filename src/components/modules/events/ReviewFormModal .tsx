"use client";

import { useState } from "react";
import { IconX } from "@tabler/icons-react";

const ReviewFormModal = () => {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f1b15]/60">
      <div className="bg-[#fcf2e8] p-10 rounded-2xl w-full max-w-xl relative">
        
        {/* Close Icon */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-[#1f1b15]"
        >
          <IconX />
        </button>

        <p className="font-headline text-xl font-bold mb-6 text-[#1f1b15]">
          Share your thoughts
        </p>

        <div className="flex flex-col gap-2 mb-6">
          <label
            className="text-xs font-label uppercase tracking-widest text-[#7d7668]"
            htmlFor="rating-select"
          >
            Rating (1-5)
          </label>
          <select
            id="rating-select"
            className="w-32 bg-[#ffffff] border-none rounded-lg p-2 focus:ring-1 focus:ring-[#6e5d27]/30 text-[#1f1b15] font-label"
          >
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Very Good</option>
            <option value="3">3 - Average</option>
            <option value="2">2 - Poor</option>
            <option value="1">1 - Terrible</option>
          </select>
        </div>

        <textarea
          rows={4}
          placeholder="How was your experience?"
          className="w-full bg-[#ffffff] border-none rounded-xl p-4 mb-6 focus:ring-1 focus:ring-[#6e5d27]/30 placeholder:text-[#7d7668]/50"
        ></textarea>

        <div className="flex gap-4">
          <button className="bg-[#6e5d27] text-[#ffffff] px-8 py-3 rounded-lg font-label text-xs uppercase tracking-widest hover:opacity-90">
            Post Review
          </button>

          {/* Cancel Button */}
          <button
            onClick={() => setOpen(false)}
            className="px-8 py-3 rounded-lg font-label text-xs uppercase tracking-widest bg-[#ffffff] text-[#6e5d27]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewFormModal;