import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";

const FilterButtonClient = ({
  setPage,
  setRoleFilter,
}: {
  setPage: (page: number) => void;
  setRoleFilter: (value: string) => void;
}) => {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="glass-card p-1.5 rounded flex flex-col lg:flex-row gap-2 shadow-2xl overflow-visible">
      {/* dropdowns */}
      <div className="flex flex-wrap md:flex-nowrap gap-2 justify-center">
        {/* FILTER */}
        <div className="relative z-100">
          <button
            onClick={() => {
              setFilterOpen(!filterOpen);
            }}
            className="flex items-center justify-between gap-2 bg-[#25211B] border border-[#C8B273]/20 rounded-sm px-6 py-1 min-w-35 hover:border-[#C8B273]/40 text-white"
          >
            <span>Filter</span>
            <IconChevronDown size={18} className="text-[#C8B273] mt-1" />
          </button>

          {filterOpen && (
            <div className="absolute top-full -right-2 mt-4 w-48 bg-[#3D372F] border border-[#C8B273]/20 rounded-lg shadow-2xl z-100">
              {[
                { label: "All", value: "" },
                { label: "Admin", value: "ADMIN" },
                { label: "User", value: "USER" },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setPage(1);
                    setRoleFilter(item.value);
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

export default FilterButtonClient;
