/* eslint-disable @typescript-eslint/no-explicit-any */
import { acceptRejectInvite } from "@/services/participation/participation.service";
import { useState } from "react";
import { toast } from "sonner";

const DeclineButtonClient = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(false);
  const handleAction = async (newStatus: string) => {
    try {
      setLoading(true);
      const response = await acceptRejectInvite(id, newStatus);
      if (response) {
        window.location.reload();
        toast.success("Invitation Declined");
      } else {
        toast.error("Failed to Decline Invitation");
      }
    } catch (err: any) {
      console.error("Failed to Decline Invitation", err);
      toast.error(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <button
      onClick={() => handleAction("DECLINED")}
      className="bg-[#453F36] text-[#F7F1E3] px-8 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-[#453F36] transition-all cursor-pointer"
    >
      {loading ? "Declining..." : "Decline"}
    </button>
  );
};

export default DeclineButtonClient;
