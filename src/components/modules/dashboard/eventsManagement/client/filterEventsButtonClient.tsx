import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";

const FilterEventsButtonClient = ({
  setPage,
  setCategory,
}: {
  setPage: (page: number) => void;
  setCategory: (category: string) => void;
}) => {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="glass-card p-2 rounded-xl flex flex-col lg:flex-row gap-2 shadow-2xl overflow-visible">
      {/* dropdowns */}
      <div className="flex flex-wrap md:flex-nowrap gap-2 justify-center">
        {/* FILTER */}
        <div className="relative z-100">
          <button
            onClick={() => {
              setFilterOpen(!filterOpen);
            }}
            className="flex items-center justify-between gap-2 bg-[#25211B] border border-[#C8B273]/20 rounded-lg px-6 py-2 min-w-35 hover:border-[#C8B273]/40 text-white"
          >
            <span>Filter</span>
            <IconChevronDown size={18} className="text-[#C8B273] mt-1" />
          </button>

          {filterOpen && (
            <div className="absolute top-full -right-2 mt-4 w-48 bg-[#3D372F] border border-[#C8B273]/20 rounded-lg shadow-2xl z-100">
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
                  className="block w-full px-6 py-3 text-left text-white text-sm hover:bg-[#C8B273] hover:text-black"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterEventsButtonClient;
