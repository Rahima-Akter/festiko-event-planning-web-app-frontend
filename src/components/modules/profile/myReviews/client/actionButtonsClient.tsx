/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import UpdateReviewModal from "../../forms/updateReviewModal";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { useState } from "react";
import { toast } from "sonner";
import { deleteReview } from "@/services/reviews/reviews.service";
import DeleteConfirmationModal from "@/components/shared/deleteConfirmationModal";

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
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const toggleUpdateModal = () => setIsOpen(!isOpen);
  const toggleDeleteModal = () => setIsDeleteModalOpen(!isDeleteModalOpen);

  return (
    <div className="flex gap-4 items-center justify-between mt-auto pt-4 border-t border-[#fcf2e8]/5">
      {/* Edit button */}
      <button
        onClick={toggleUpdateModal}
        className="flex items-center gap-2 text-[#c8b273] hover:text-[#ffffff] transition-colors font-label uppercase text-[10px] tracking-widest font-bold cursor-pointer"
      >
        <IconEdit className="text-xs" /> Edit
      </button>

      {/* Delete button */}
      <button
        onClick={toggleDeleteModal} // 🔹 open delete modal
        className="flex items-center gap-2 text-[#ba1a1a]/80 hover:text-[#ba1a1a] transition-colors font-label uppercase text-[10px] tracking-widest font-bold cursor-pointer"
      >
        <IconTrash className="text-xs" /> Delete
      </button>

      {/* Update Review Modal */}
      {isOpen && (
        <UpdateReviewModal
          reviewId={reviewId}
          defaultRating={defaultRating}
          defaultComment={defaultComment}
          onClose={() => setIsOpen(false)}
        />
      )}

      {/* 🔹 Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <DeleteConfirmationModal
          id={reviewId}
          title="Delete Review"
          message="Are you sure you want to delete this review? This action cannot be undone."
          deleteFunction={deleteReview}
          onClose={() => setIsDeleteModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ActionButtonsClient;
