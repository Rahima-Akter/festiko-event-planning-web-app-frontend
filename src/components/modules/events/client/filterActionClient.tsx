import { IconChevronDown, IconSearch } from "@tabler/icons-react";
import { useState } from "react";

const FilterActionClient = ({
  setSearch,
  setPage,
  setCategory,
  setPriceSort,
}: {
  setSearch: (search: string) => void;
  setPage: (page: number) => void;
  setCategory: (category: string) => void;
  setPriceSort: (value: string) => void;
}) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [feeOpen, setFeeOpen] = useState(false);

  return (
    <div className="glass-card p-2 rounded-xl flex flex-col lg:flex-row gap-2 shadow-2xl overflow-visible">
      {/* input */}
      <div className="grow flex items-center bg-[#2F2A24]/50 rounded-lg px-4 gap-3 border border-[#C8B273]/20 focus-within:border-[#C8B273]/40">
        <IconSearch className="text-[#C8B273]/60" size={20} />
        <input
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
          placeholder="Search by title, date, time, organizer..."
          className="w-full bg-transparent py-4 outline-none placeholder:text-[#F5F1E9]/30"
        />
      </div>

      {/* dropdowns */}
      <div className="flex flex-wrap md:flex-nowrap gap-2 justify-center">
        {/* FILTER */}
        <div className="relative z-100">
          <button
            onClick={() => {
              setFilterOpen(!filterOpen);
              setFeeOpen(false);
            }}
            className="flex items-center justify-between gap-2 bg-[#2F2A24]/50 border border-[#C8B273]/20 rounded-lg px-6 py-4 min-w-35 hover:border-[#C8B273]/40"
          >
            <span>Filter</span>
            <IconChevronDown size={16} className="text-[#C8B273]" />
          </button>

          {filterOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-[#3D372F] border border-[#C8B273]/20 rounded-lg shadow-2xl z-100">
              {[
                { label: "All", value: "" },
                { label: "Public", value: "PUBLIC" },
                { label: "Private", value: "PRIVATE" },
                { label: "Paid", value: "PAID" },
                { label: "Free", value: "FREE" },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setPage(1);
                    setCategory(item.value);
                  }}
                  className="block w-full px-6 py-3 text-left text-sm hover:bg-[#C8B273] hover:text-black"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* FEE */}
        <div className="relative">
          <button
            onClick={() => {
              setFeeOpen(!feeOpen);
              setFilterOpen(false);
            }}
            className="flex items-center justify-between gap-2 bg-[#2F2A24]/50 border border-[#C8B273]/20 rounded-lg px-6 py-4 min-w-35 hover:border-[#C8B273]/40"
          >
            <span>Fee</span>
            <IconChevronDown size={16} className="text-[#C8B273]" />
          </button>

          {feeOpen && (
            <div className="absolute top-full md:left-0 -left-7 mt-2 w-48 bg-[#3D372F] border border-[#C8B273]/20 rounded-lg shadow-2xl z-50 cursor-pointer">
              <button
                onClick={() => {
                  setPage(1);
                  setPriceSort("desc");
                  setFeeOpen(false);
                }}
                className="block w-full px-6 py-3 text-left text-sm hover:bg-[#C8B273] hover:text-black"
              >
                High to Low
              </button>
              <button
                onClick={() => {
                  setPage(1);
                  setPriceSort("asc");
                  setFeeOpen(false);
                }}
                className="block w-full px-6 py-3 text-left text-sm hover:bg-[#C8B273] hover:text-black"
              >
                Low to High
              </button>
            </div>
          )}
        </div>
      </div>

      {/* button */}
      {/* <button className="btn-gold px-10 py-4 rounded-lg font-bold hover:scale-[1.02] active:scale-95">
              Search
            </button> */}
    </div>
  );
};

export default FilterActionClient;
