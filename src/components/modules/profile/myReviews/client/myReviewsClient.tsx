/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { getMyReviews } from "@/services/reviews/reviews.service";
import { ReviewResponse } from "@/types/reviews/reviews.types";
import { useEffect, useState } from "react";
import MyReviews from "../myReviews";

const MyReviewsClient = () => {
  const [myAllReviews, setMyAllReviews] = useState<ReviewResponse | null>(null);
  useEffect(() => {
    const fetchMyReviews = async () => {
      try {
        const response = await getMyReviews();
        setMyAllReviews(response ?? null);
      } catch (err: any) {
        console.log(err.message);
      }
    };
    fetchMyReviews();
  }, [setMyAllReviews]);
  return <MyReviews myAllReviews={myAllReviews?.data ?? []} />;
};

export default MyReviewsClient;
