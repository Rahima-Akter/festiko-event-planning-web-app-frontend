"use client";
import ReviewFormModal from "@/components/modules/events/ReviewFormModal ";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { useState } from "react";
import UpdateReviewModal from "../../forms/updateReviewModal";

interface ActionButtonsClientProps {
  reviewId: string;
  defaultRating: number;
  defaultComment: string;
}

const ActionButtonsClient = ({
  reviewId,
  defaultRating,
  defaultComment,
}: ActionButtonsClientProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div className="flex gap-4 items-center justify-between mt-auto pt-4 border-t border-[#fcf2e8]/5">
      <button
        onClick={toggleModal}
        className="flex items-center gap-2 text-[#c8b273] hover:text-[#ffffff] transition-colors font-label uppercase text-[10px] tracking-widest font-bold cursor-pointer"
      >
        <IconEdit className="text-xs" /> Edit
      </button>
      <button className="flex items-center gap-2 text-[#ba1a1a]/80 hover:text-[#ba1a1a] transition-colors font-label uppercase text-[10px] tracking-widest font-bold cursor-pointer">
        <IconTrash className="text-xs" /> Delete
      </button>
      {isOpen && (
        <UpdateReviewModal
          reviewId={reviewId}
          defaultRating={defaultRating}
          defaultComment={defaultComment}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default ActionButtonsClient;
