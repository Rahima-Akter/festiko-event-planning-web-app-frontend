/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  IconCalendar,
  IconMapPin,
  IconQrcode,
  IconArrowRight,
  IconDownload,
  IconReceipt,
  IconCircleCheckFilled,
} from "@tabler/icons-react";
import { loadStripe } from "@stripe/stripe-js";
import PaymentMethodDisplay from "./PaymentMethodDisplay";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

const PaymentSuccess = () => {
  const searchParams = useSearchParams();
  const clientSecret = searchParams.get("payment_intent_client_secret");

  const [paymentData, setPaymentData] = useState<{
    amount: number;
    currency: string;
    payment_method: string;
    cardBrand: string;
    last4: string;
  } | null>(null);

  useEffect(() => {
    const fetchPaymentDetails = async () => {
      if (!clientSecret) return;

      const stripe = await stripePromise;
      if (!stripe) return;

      const { paymentIntent } =
        await stripe.retrievePaymentIntent(clientSecret);

      if (paymentIntent) {
        // Stripe JS types are limited, so we use optional chaining safely
        const pm = (paymentIntent.payment_method as any) || {};
        const card = pm.card || {};

        setPaymentData({
          amount: (paymentIntent.amount || 0) / 100, // Stripe amount is in cents
          currency: (paymentIntent.currency || "BDT").toUpperCase(),
          payment_method: pm.type || "card",
          cardBrand: card.brand || "UNKNOWN",
          last4: card.last4 || "0000",
        });
      }
    };

    fetchPaymentDetails();
  }, [clientSecret]);

  return (
    <>
      <div className="bg-[#2F2A24] text-[#F7F1E3] lg:pt-20 pt-24">
        <main className="flex-1 flex flex-col items-center justify-center p-6 lg:p-12">
          {/* Focused Success Journey */}
          <div className="max-w-4xl w-full">
            {/* Success Indicator */}
            <div className="flex flex-col items-center mb-16">
              <div className="w-20 h-20 bg-[#C8B273]/10 rounded-lg flex items-center justify-center mb-8 relative">
                <div className="absolute inset-0 bg-[#C8B273]/5 rounded-full animate-ping opacity-30"></div>
                <IconCircleCheckFilled className="text-[#C8B273]" size={50} />
              </div>

              <div className="inline-block px-4 py-1 border border-[#C8B273]/30 rounded-full mb-6">
                <span className="font-label text-[10px] uppercase tracking-[0.25em] text-[#C8B273] font-bold">
                  Reservation Confirmed
                </span>
              </div>

              <h2 className="font-headline text-4xl md:text-6xl text-[#F7F1E3] text-center font-bold tracking-tight mb-4">
                Payment Successful
              </h2>

              <p className="font-body text-[#F7F1E3]/60 mt-2 text-center max-w-xl text-lg leading-relaxed">
                Your invitation to the most exclusive evening of the year is now
                secured. We look forward to welcoming you to the masterpiece
                experience.
              </p>
            </div>

            {/* Transaction Summary Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
              {/* Main Ticket Info */}
              <div className="lg:col-span-2 p-10 rounded-2xl bg-[rgba(58,53,46,0.6)] backdrop-blur-md border border-[rgba(200,178,115,0.1)]">
                <div>
                  <span className="font-label text-[10px] uppercase tracking-[0.2em] text-[#C8B273] mb-3 block">
                    Official Event Invitation
                  </span>

                  <h3 className="font-headline text-3xl text-[#F7F1E3] font-bold mb-8">
                    The Golden Gala 2024
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#ffffff]/5 flex items-center justify-center shrink-0">
                        <IconCalendar className="text-[#C8B273] text-xl" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#F7F1E3]">
                          Friday, December 12th
                        </p>
                        <p className="text-xs text-[#F7F1E3]/40 uppercase tracking-wider mt-1">
                          Doors 19:00 • Black Tie
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#ffffff]/5 flex items-center justify-center shrink-0">
                        <IconMapPin className="text-[#C8B273] text-xl" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#F7F1E3]">
                          The Grand Atrium
                        </p>
                        <p className="text-xs text-[#F7F1E3]/40 uppercase tracking-wider mt-1">
                          742 Park Ave, New York
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="mt-12 pt-8 border-t border-[#ffffff]/5 flex justify-between items-end">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#F7F1E3]/40 mb-2">
                      Total Amount Paid
                    </p>
                    <p className="text-4xl font-headline font-bold text-[#C8B273]">
                      {paymentData
                        ? `$${paymentData.amount.toFixed(2)} ${paymentData.currency}`
                        : "$---"}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#F7F1E3]/40 mb-2">
                      Payment Method
                    </p>
                    <p className="text-sm font-medium text-[#F7F1E3] flex items-center justify-end gap-2">
                      <IconCreditCard className="text-base text-[#C8B273]" />
                      {paymentData
                        ? `${paymentData.cardBrand.toUpperCase()} •••• ${paymentData.last4}`
                        : "---"}
                    </p>
                  </div>
                </div> */}
                <PaymentMethodDisplay />
              </div>

              {/* Side Details */}
              <div className="gap-6 flex lg:flex-col md:flex-row flex-col">
                <div className="flex-1 p-8 rounded-2xl border-l-4 border-l-[#C8B273] bg-[rgba(58,53,46,0.6)] backdrop-blur-md border border-[rgba(200,178,115,0.1)]">
                  <span className="font-label text-[10px] uppercase tracking-[0.2em] text-[#C8B273] block mb-4">
                    Your Access
                  </span>

                  <div className="flex items-center gap-4">
                    <IconQrcode className="text-[#F7F1E3]" size={48} />
                    <div>
                      <p className="text-lg font-bold text-[#F7F1E3]">
                        Premium Pass
                      </p>
                      <p className="text-[10px] text-[#F7F1E3]/40 uppercase tracking-widest">
                        Entry ID: FTK-9928-0012
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/"
                  className="bg-[#C8B273] p-8 rounded-2xl flex flex-col justify-between h-48 group cursor-pointer overflow-hidden relative flex-1"
                >
                  <div className="relative z-10">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#2F2A24] font-bold opacity-60">
                      Ready to Explore
                    </p>
                    <h4 className="text-xl font-bold text-[#2F2A24] mt-1">
                      Go Back Home
                    </h4>
                  </div>

                  <div className="relative z-10 flex justify-between items-center">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#2F2A24]">
                      Dashboard
                    </span>
                    <IconArrowRight className="text-[#2F2A24] group-hover:translate-x-1 transition-transform" />
                  </div>

                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#2F2A24]/10 rounded-full blur-2xl"></div>
                </Link>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-8 px-4 border-y border-[#ffffff]/15">
              <div className="flex items-center gap-10">
                <button className="flex items-center gap-3 text-[#C8B273] font-label text-[10px] font-bold uppercase tracking-[0.25em] hover:opacity-70 transition-opacity">
                  <IconDownload className="text-xl" />
                  Download Ticket
                </button>

                <button className="flex items-center gap-3 text-[#F7F1E3]/60 font-label text-[10px] font-bold uppercase tracking-[0.25em] hover:text-[#F7F1E3] transition-colors">
                  <IconReceipt className="text-xl" />
                  View Invoice
                </button>
              </div>

              <button className="w-full md:w-auto px-10 py-5 bg-[#ffffff]/5 border border-[#C8B273]/30 text-[#C8B273] font-bold text-[10px] uppercase tracking-[0.25em] rounded-lg hover:bg-[#C8B273]/10 transition-all duration-300">
                Go to My Events
              </button>
            </div>

            {/* Support Footer */}
            <div className="mt-16 text-center">
              <p className="text-[11px] text-[#F7F1E3]/40 uppercase tracking-widest">
                Need assistance with your reservation?
              </p>
              <Link
                href="#"
                className="text-[#C8B273] font-bold text-[11px] uppercase tracking-[0.2em] mt-2 inline-block border-b border-[#C8B273]/30 pb-1 hover:border-[#C8B273] transition-colors"
              >
                Contact Concierge Support
              </Link>
            </div>
          </div>
        </main>

        {/* Ambient Background Effects */}
        <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-20">
          <div className="absolute top-[-10%] right-[-5%] w-125 h-125 bg-[#C8B273]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-150 h-150 bg-[#C8B273]/5 rounded-full blur-[150px]"></div>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
