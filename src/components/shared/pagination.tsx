"use client";
import { Meta } from "@/types/meta.types";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

type Props = {
  meta: Meta;
  onPageChange: (page: number) => void;
};

const getPages = (current: number, total: number) => {
  const pages: (number | string)[] = [];

  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  pages.push(1);

  if (current > 3) pages.push("...");

  for (let i = current - 1; i <= current + 1; i++) {
    if (i > 1 && i < total) pages.push(i);
  }

  if (current < total - 2) pages.push("...");

  pages.push(total);

  return pages;
};

const Pagination = ({ meta, onPageChange }: Props) => {
  const { page, totalPages, limit, total } = meta;

  const pages = getPages(page, totalPages);

  return (
    <div className="flex justify-center items-center flex-col space-y-5">
      <div className="mt-16 flex justify-center items-center gap-2">
        {/* Prev */}
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className="flex items-center justify-center w-10 h-10 rounded border border-[#c8b273]/30 text-[#c8b273] hover:bg-[#c8b273] hover:text-[#1f1b15] transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
        >
          <IconChevronLeft />
        </button>

        {/* Pages */}
        <div className="flex gap-2">
          {pages.map((p, idx) =>
            p === "..." ? (
              <span
                key={idx}
                className="w-10 h-10 flex items-center justify-center text-[#c8b273] cursor-pointer"
              >
                ...
              </span>
            ) : (
              <button
                key={idx}
                onClick={() => onPageChange(p as number)}
                className={`w-10 h-10 rounded font-label font-bold text-xs flex items-center justify-center transition-all cursor-pointer ${
                  page === p
                    ? "bg-[#c8b273] text-[#1f1b15]"
                    : "border border-[#c8b273]/30 text-[#c8b273] hover:bg-[#c8b273]/10"
                }`}
              >
                {p}
              </button>
            ),
          )}
        </div>

        {/* Next */}
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          className="flex items-center justify-center w-10 h-10 rounded border border-[#c8b273]/30 text-[#c8b273] hover:bg-[#c8b273] hover:text-[#1f1b15] transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
        >
          <IconChevronRight />
        </button>
      </div>

      <p className="text-sm text-[#C8B273]/40">
        Showing {(page - 1) * limit + 1} - {Math.min(page * limit, total)} of{" "}
        {total} items
      </p>
    </div>
  );
};

export default Pagination;
