/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconX, IconStar } from "@tabler/icons-react";
import { toast } from "sonner";
import { updateReview } from "@/services/reviews/reviews.service";
import {
  ReviewUpdateFormValues,
  reviewUpdateSchema,
} from "@/zod/review.schema";

interface UpdateReviewModalProps {
  reviewId: string;
  defaultRating: number;
  defaultComment: string;
  onClose: () => void;
}

const UpdateReviewModal = ({
  reviewId,
  defaultRating,
  defaultComment,
  onClose,
}: UpdateReviewModalProps) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ReviewUpdateFormValues>({
    resolver: zodResolver(reviewUpdateSchema),
    defaultValues: {
      rating: defaultRating,
      comment: defaultComment,
    },
  });

  const onSubmit = async (data: ReviewUpdateFormValues) => {
    try {
      const response = await updateReview(reviewId, data);
      if (response.success) {
        window.location.reload();
        toast.success("Review updated successfully!");
      } else {
        toast.error("Failed to update review");
        onClose();
      }
      onClose();
    } catch (err: any) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to update review");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-[#1f1b15]/60">
      <div className="bg-[#fcf2e8] p-10 rounded-2xl w-full max-w-xl relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#1f1b15] cursor-pointer"
        >
          <IconX />
        </button>

        <p className="font-headline text-xl font-bold mb-6 text-[#1f1b15]">
          Update your thoughts
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* ⭐ Rating */}
          <div className="flex flex-col gap-2 mb-2">
            <label className="text-xs font-label uppercase tracking-widest text-[#7d7668]">
              Rating
            </label>
            <Controller
              name="rating"
              control={control}
              render={({ field }) => {
                // Use the current value OR 0 only for display, not to overwrite field.value
                const currentValueForDisplay = field.value ?? defaultRating;

                return (
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => {
                      const starValue = i + 1;
                      return (
                        <IconStar
                          key={i}
                          className={`cursor-pointer transition-all ${
                            starValue <= currentValueForDisplay
                              ? "fill-[#c8b273] text-[#c8b273]"
                              : "text-gray-400 fill-none"
                          }`}
                          onClick={() => field.onChange(starValue)}
                        />
                      );
                    })}
                  </div>
                );
              }}
            />
            {errors.rating && (
              <p className="text-red-500 text-xs mt-1">
                {errors.rating.message}
              </p>
            )}
          </div>

          {/* Comment */}
          <div className="flex flex-col gap-2 mb-4">
            <textarea
              {...register("comment")}
              rows={4}
              placeholder="How was your experience?"
              className="w-full bg-[#ffffff] border-none rounded-xl p-4 focus:ring-1 focus:ring-[#6e5d27]/30 placeholder:text-[#7d7668]/50"
            />
            {errors.comment && (
              <p className="text-red-500 text-xs mt-1">
                {errors.comment.message}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#6e5d27] text-[#ffffff] px-8 py-3 rounded-lg font-label text-xs uppercase tracking-widest hover:opacity-90 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Updating..." : "Update Review"}
            </button>

            <button
              type="button"
              onClick={onClose}
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

export default UpdateReviewModal;
