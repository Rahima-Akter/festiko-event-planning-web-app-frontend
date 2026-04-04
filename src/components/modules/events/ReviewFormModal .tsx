/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { IconX } from "@tabler/icons-react";
import { CreateReviewInput, createReviewSchema } from "@/zod/review.schema";
import { createReview } from "@/services/reviews/reviews.service";

const ReviewFormModal = ({ eventId }: { eventId: string }) => {
  const [open, setOpen] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateReviewInput>({
    resolver: zodResolver(createReviewSchema),
    defaultValues: { eventId, rating: 5, comment: "" },
  });

  const onSubmit = async (data: CreateReviewInput) => {
   console.log("onSubmit fired", data);
    try {
      const response = await createReview(
        data.rating,
        data.comment,
        data.eventId,
      );
      if (response?.success) {
        toast.success("Review posted successfully!");
        setOpen(false);
        window.location.reload();
      } else {
        toast.error("Failed to post review.");
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err);
      toast.error(err?.response?.data?.message || "Failed to post review.");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f1b15]/60">
      <div className="bg-[#fcf2e8] p-10 rounded-2xl w-full max-w-xl relative">
        {/* Close Icon */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-[#1f1b15] cursor-pointer"
        >
          <IconX />
        </button>

        <p className="font-headline text-xl font-bold mb-6 text-[#1f1b15]">
          Share your thoughts
        </p>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Rating */}
          <div className="flex flex-col gap-2">
            <label
              className="text-xs font-label uppercase tracking-widest text-[#7d7668]"
              htmlFor="rating-select"
            >
              Rating (1-5)
            </label>
            <select
              id="rating-select"
              {...register("rating", { valueAsNumber: true })}
              className="w-32 bg-[#ffffff] border-none rounded-lg p-2 focus:ring-1 focus:ring-[#6e5d27]/30 text-[#1f1b15] font-label"
            >
              <option value={5}>5 - Excellent</option>
              <option value={4}>4 - Very Good</option>
              <option value={3}>3 - Average</option>
              <option value={2}>2 - Poor</option>
              <option value={1}>1 - Terrible</option>
            </select>
            {errors.rating && (
              <span className="text-red-500 text-xs">
                {errors.rating.message}
              </span>
            )}
          </div>

          {/* Comment */}
          <div className="flex flex-col gap-2">
            <textarea
              rows={4}
              placeholder="How was your experience?"
              {...register("comment")}
              className="w-full bg-[#ffffff] border-none rounded-xl p-4 focus:ring-1 focus:ring-[#6e5d27]/30 placeholder:text-[#7d7668]/50"
            ></textarea>
            {errors.comment && (
              <span className="text-red-500 text-xs">
                {errors.comment.message}
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#6e5d27] text-[#ffffff] px-8 py-3 rounded-lg font-label text-xs uppercase tracking-widest hover:opacity-90 disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? "Posting..." : "Post Review"}
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-8 py-3 rounded-lg font-label text-xs uppercase tracking-widest bg-[#ffffff] text-[#6e5d27] cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewFormModal;
