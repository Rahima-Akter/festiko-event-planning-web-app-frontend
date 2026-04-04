"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { toast } from "sonner";
import { env } from "@/env";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const StripePaymentForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const clientSecret = searchParams.get("client_secret");
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
        // We won’t use Stripe return_url, handle manually
        return_url: `${env.NEXT_PUBLIC_FRONTEND_URL}/payment-success`,
      },
      redirect: "if_required", // Important! don’t redirect automatically
    });

    if (error) {
      toast.error(error.message);
      setLoading(false);
      router.push("/payment-failed"); // Redirect to your fail page
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      router.push("/payment-success"); // Redirect to your success page
    } else {
      toast.error("Payment not completed.");
      setLoading(false);
    }
  };

  if (!clientSecret) {
    return <div className="text-center mt-10 text-red-600">Invalid payment link.</div>;
  }

  return (
    <form onSubmit={handlePayment} className="max-w-md mx-auto my-24">
      <PaymentElement />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#C8B273] text-white py-4 rounded-lg mt-4 cursor-pointer"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

export default function PaymentPageWrapper() {
  const searchParams = useSearchParams();
  const clientSecret = searchParams.get("client_secret");

  if (!clientSecret) {
    return <div className="text-center mt-10 text-red-600">No payment secret provided.</div>;
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <StripePaymentForm />
    </Elements>
  );
}