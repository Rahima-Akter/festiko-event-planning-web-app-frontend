import { Review } from "@/types/reviews/reviews.types";
import {
  IconStar,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import { format } from "date-fns";
import ActionButtonsClient from "./client/actionButtonsClient";
import Pagination from "@/components/shared/pagination";
import { Meta } from "@/types/meta.types";
import Loader from "@/components/shared/loader";
import EmptyState from "@/components/shared/emptyState";

const MyReviews = ({
  myAllReviews,
  meta,
  setPage,
  loading,
}: {
  myAllReviews: Review[];
  meta: Meta | null;
  setPage: (page: number) => void;
  loading: boolean;
}) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="flex-1 ml-0 lg:ml-72 p-8 md:p-10 bg-[#2F2A24] min-h-screen">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <header className="mb-6">
              <div className="max-w-2xl mb-6">
                <h2 className="text-lg font-bold uppercase tracking-[0.2em] text-[#C8B273]/60 ml-1 mb-2 block">
                  My <span className="text-[#C8B273]">Reviews</span>
                </h2>
              </div>
            </header>

            {myAllReviews && myAllReviews.length > 0 ? (
              <>
                {/* Reviews List Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Review Card 1 */}
                  {myAllReviews?.map((review) => (
                    <div
                      key={review.id}
                      className="bg-[#353029] p-6 rounded-xl shadow-2xl relative overflow-hidden flex flex-col min-h-90"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-[#c8b273]/10 to-transparent rounded-full -mr-12 -mt-12 blur-2xl"></div>

                      <div className="mb-2">
                        <h3 className="font-headline text-xl text-[#ffffff] font-semibold line-clamp-2 min-h-14 -mb-2">
                          {review.event.title}
                        </h3>
                        <p className="font-label text-[10px] uppercase tracking-widest text-[#c8b273]">
                          {format(new Date(review.createdAt), "MMM dd, yyyy")}
                        </p>
                      </div>

                      <div className="flex gap-1 text-[#c8b273] mb-4">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <IconStar
                            key={i}
                            className="text-sm fill-[#c8b273]"
                          />
                        ))}
                      </div>

                      <div className="relative z-10 grow mb-6">
                        <p className="text-[#fcf2e8]/80 leading-relaxed italic text-sm line-clamp-6">
                          &apos;{review.comment}&apos;
                        </p>
                      </div>

                      {/* buttons */}
                      <ActionButtonsClient
                        reviewId={review.id}
                        defaultRating={review.rating}
                        defaultComment={review.comment}
                      />
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {meta && <Pagination meta={meta} onPageChange={setPage} />}
              </>
            ) : (
              <div className="flex justify-center items-center">
                <EmptyState />
              </div>
            )}
          </div>
        </main>
      )}
    </>
  );
};

export default MyReviews;
