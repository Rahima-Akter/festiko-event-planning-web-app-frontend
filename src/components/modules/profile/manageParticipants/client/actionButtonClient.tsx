/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { approveRejectParticipation } from "@/services/participation/participation.service";
import { IconDotsVertical } from "@tabler/icons-react";
import { useState } from "react";
import { toast } from "sonner";

const ActionButtonClient = ({ id, status }: { id: string; status: string }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);

  const baseBtn =
    "px-4 py-1.5 rounded-lg font-label text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95 disabled:opacity-50 cursor-pointer";

  const approveBtn = "bg-green-600 text-white hover:bg-green-500 cursor-pointer";
  const rejectBtn = "border border-red-400/40 text-red-300 hover:bg-red-900/20 cursor-pointer";
  const banBtn = "bg-yellow-500 text-black hover:brightness-110 cursor-pointer";

  const handleAction = async (newStatus: string) => {
    try {
      setLoading(true);
      const response = await approveRejectParticipation(id, newStatus);
      if (response) {
        window.location.reload();
        toast.success(`Status updated to ${newStatus}`);
        setShowDropdown(false);
      } else {
        toast.error("Failed to update status");
      }
    } catch (err: any) {
      console.error("Failed to update status", err);
      toast.error(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="text-[#fcf2e8]/50 hover:text-[#C8B273] transition-colors relative z-10 cursor-pointer"
      >
        <IconDotsVertical />
      </button>

      {showDropdown && (
        <div className="absolute right-6 -mt-14 w-48 bg-[#1f1b15] shadow-2xl rounded-lg z-20 border border-[#C8B273]/20">
          <div className="flex flex-col space-y-2 px-5 py-3">
            {/* APPROVED */}
            {status === "APPROVED" && (
              <>
                <button
                  disabled={loading}
                  onClick={() => handleAction("REJECTED")}
                  className={`${baseBtn} ${rejectBtn}`}
                >
                  Reject
                </button>
                <button
                  disabled={loading}
                  onClick={() => handleAction("BANNED")}
                  className={`${baseBtn} ${banBtn}`}
                >
                  Ban
                </button>
              </>
            )}

            {/* PENDING */}
            {status === "PENDING" && (
              <>
                <button
                  disabled={loading}
                  onClick={() => handleAction("APPROVED")}
                  className={`${baseBtn} ${approveBtn}`}
                >
                  Approve
                </button>
                <button
                  disabled={loading}
                  onClick={() => handleAction("REJECTED")}
                  className={`${baseBtn} ${rejectBtn}`}
                >
                  Reject
                </button>
                <button
                  disabled={loading}
                  onClick={() => handleAction("BANNED")}
                  className={`${baseBtn} ${banBtn}`}
                >
                  Ban
                </button>
              </>
            )}

            {/* REJECTED or BANNED */}
            {(status === "REJECTED" || status === "BANNED") && (
              <button
                disabled={loading}
                onClick={() => handleAction("APPROVED")}
                className={`${baseBtn} ${approveBtn}`}
              >
                Approve
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ActionButtonClient;
