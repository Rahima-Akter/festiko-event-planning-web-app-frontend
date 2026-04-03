"use client";
import Link from "next/link";

const FilterButtonsClient = ({
  category,
  setCategory,
}: {
  category: string;
  setCategory: (category: string) => void;
}) => {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => setCategory("PUBLIC")}
        className={`px-6 py-2.5 rounded-full font-label text-xs tracking-wider cursor-pointer ${category === "PUBLIC" ? "bg-[#ecdec1] text-[#6c624a] font-extrabold" : "bg-[#f1e6dd] text-[#4b463a] font-semibold"} `}
      >
        Public
      </button>
      <button
        onClick={() => setCategory("PRIVATE")}
        className={`px-6 py-2.5 rounded-full  font-label text-xs tracking-wider cursor-pointer ${category === "PRIVATE" ? "bg-[#ecdec1] text-[#6c624a] font-extrabold" : "bg-[#f1e6dd] text-[#4b463a] font-semibold"} `}
      >
        Private
      </button>
      <button
        onClick={() => setCategory("FREE")}
        className={`px-6 py-2.5 rounded-full  font-label text-xs tracking-wider cursor-pointer ${category === "FREE" ? "bg-[#ecdec1] text-[#6c624a] font-extrabold" : "bg-[#f1e6dd] text-[#4b463a] font-semibold"} `}
      >
        Free
      </button>
      <button
        onClick={() => setCategory("PAID")}
        className={`px-6 py-2.5 rounded-full  font-label text-xs tracking-wider cursor-pointer ${category === "PAID" ? "bg-[#ecdec1] text-[#6c624a] font-extrabold" : "bg-[#f1e6dd] text-[#4b463a] font-semibold"} `}
      >
        Paid
      </button>
      <button
        onClick={() => setCategory("")}
        className="px-6 py-2.5 rounded-full bg-[#f1e6dd] text-[#4b463a] font-label text-xs font-semibold tracking-wider hover:bg-[#ecdec1] transition-colors cursor-pointer"
      >
        Reset
      </button>
      <Link
        href="/events"
        className="px-6 py-2.5 rounded-full bg-[#f1e6dd] text-[#4b463a] font-label text-xs font-semibold tracking-wider hover:bg-[#ecdec1] transition-colors cursor-pointer"
      >
        All
      </Link>
    </div>
  );
};

export default FilterButtonsClient;
