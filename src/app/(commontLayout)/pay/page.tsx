"use client";

import { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { toast } from "sonner";
import { env } from "@/env";

// Stripe init
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const StripePaymentForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const clientSecret = searchParams.get("client_secret");
  const eventId = searchParams.get("eventId");

  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${env.NEXT_PUBLIC_FRONTEND_URL}/payment-success`,
      },
      redirect: "if_required",
    });

    if (error) {
      toast.error(error.message);
      setLoading(false);
      router.push(`/payment-failed?eventId=${eventId}`);
      return;
    }

    if (paymentIntent?.status === "succeeded") {
      router.push(
        `/payment-success?client_secret=${encodeURIComponent(
          clientSecret!
        )}&eventId=${eventId}`
      );
      return;
    }

    toast.error("Payment not completed.");
    setLoading(false);
  };

  if (!clientSecret) {
    return (
      <div className="text-center mt-10 text-red-600">
        Invalid payment link.
      </div>
    );
  }

  return (
    <form
      onSubmit={handlePayment}
      className="max-w-md md:mx-auto mx-10 my-24 pt-10"
    >
      <PaymentElement />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#C8B273] text-white py-4 rounded-lg mt-4"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

function PaymentApp() {
  const searchParams = useSearchParams();
  const clientSecret = searchParams.get("client_secret");

  if (!clientSecret) {
    return (
      <div className="text-center mt-10 text-red-600">
        No payment secret provided.
      </div>
    );
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <StripePaymentForm />
    </Elements>
  );
}

export default function PaymentPageWrapper() {
  return (
    <Suspense
      fallback={
        <div className="text-center mt-10">Loading payment...</div>
      }
    >
      <PaymentApp />
    </Suspense>
  );
}