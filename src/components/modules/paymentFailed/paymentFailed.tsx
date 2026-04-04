// PaymentFailed Component
import Link from "next/link";
import { IconAlertCircle, IconArrowLeft } from "@tabler/icons-react";

const PaymentFailed = () => {
  return (
    <div className="bg-[#2F2A24] text-[#F7F1E3] lg:pt-36 md:pb-20 md:pt-32 pt-20 flex justify-center items-center">
      <main className="w-full max-w-2xl bg-[#3D372F]/30 border border-[#c8b273]/10 p-8 md:p-16 rounded-lg backdrop-blur-sm shadow-2xl flex flex-col items-center text-[#F7F1E3]">
        {/* Status Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-md border border-[#ff5449]/60 bg-[#ff5449]/5">
            <IconAlertCircle className="text-[#f04a3e]" size={40} />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-[#c8b273] mb-4 tracking-tight">
            Payment Unsuccessful
          </h2>
          <p className="text-[#F7F1E3]/60 max-w-sm mx-auto text-base">
            Your transaction could not be processed at this time.
          </p>
        </div>

        {/* Details Box */}
        <div className="w-full space-y-8 mb-12 border-y border-[#c8b273]/10 py-10">
          {/* Reason */}
          <div className="flex flex-col items-center text-center">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#c8b273]/60 font-bold mb-2">
              Failure Reason
            </span>
            <p className="text-xl font-semibold text-[#F7F1E3]">
              Insufficient Funds
            </p>
          </div>

          {/* Transaction Data Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="text-center md:text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#c8b273]/40 font-bold block mb-1">
                Event
              </span>
              <p className="text-sm font-headline text-[#F7F1E3] font-bold">
                The Grand Masquerade 2024
              </p>
            </div>

            <div className="text-center">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#c8b273]/40 font-bold block mb-1">
                Transaction ID
              </span>
              <p className="text-sm font-mono text-[#F7F1E3]/80">
                #TXN-88429112
              </p>
            </div>

            <div className="text-center md:text-right">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#c8b273]/40 font-bold block mb-1">
                Timestamp
              </span>
              <p className="text-sm text-[#F7F1E3]/80">
                Oct 12, 2023 • 14:22
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="w-full max-w-xs space-y-6">
          <button className="w-full py-5 bg-[linear-gradient(135deg,#c8b273_0%,#a68d4f_100%)] text-[#2F2A24] font-label text-xs font-bold uppercase tracking-[0.25em] rounded-sm hover:brightness-110 transition-all shadow-xl active:scale-[0.98]">
            Try Again
          </button>

          <div className="flex justify-center">
            <Link
              href="/"
              className="text-[#c8b273] font-label text-[10px] uppercase tracking-widest font-bold hover:text-[#F7F1E3] transition-colors flex items-center gap-2 group"
            >
              <IconArrowLeft className="text-sm transition-transform group-hover:-translate-x-1" />
              Go Back Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PaymentFailed;