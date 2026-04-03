/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { getMyReviews } from "@/services/reviews/reviews.service";
import { ReviewResponse } from "@/types/reviews/reviews.types";
import { useEffect, useState } from "react";
import MyReviews from "../myReviews";

const MyReviewsClient = () => {
  const [myAllReviews, setMyAllReviews] = useState<ReviewResponse | null>(null);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchMyReviews = async () => {
      try {
        setLoading(true);
        const response = await getMyReviews({
          page,
          limit: 6,
        });
        setMyAllReviews(response ?? null);
      } catch (err: any) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMyReviews();
  }, [setMyAllReviews, page]);
  return (
    <MyReviews
      myAllReviews={myAllReviews?.data ?? []}
      meta={myAllReviews?.meta ?? null}
      setPage={setPage}
      loading={loading}
    />
  );
};

export default MyReviewsClient;
