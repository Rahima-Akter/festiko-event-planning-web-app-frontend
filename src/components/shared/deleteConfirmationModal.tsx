/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconAlertTriangle, IconTrash, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { toast } from "sonner";

interface DeleteConfirmationModalProps {
  onClose: () => void;
  id: string;
  title?: string;
  message?: string;
  deleteFunction: (id: string) => Promise<any>;
}

const DeleteConfirmationModal = ({
  onClose,
  id,
  title = "Delete Item",
  message = "Are you sure? This action cannot be undone.",
  deleteFunction,
}: DeleteConfirmationModalProps) => {
  const [loading, setLoading] = useState(false);
  const handleDelete = async () => {
    try {
      setLoading(true);
      const res = await deleteFunction(id);
      if (res?.success) {
        window.location.reload();
        toast.success(`${title} deleted successfully`);
        onClose();
      } else {
        toast.error(res?.message || `Failed to delete ${title.toLowerCase()}`);
      }
    } catch (err: any) {
      toast.error(
        err?.response?.data?.message ||
          `Failed to delete ${title.toLowerCase()}`,
      );
      console.error(`Error deleting ${title.toLowerCase()}:`, err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2f2a24]/80 backdrop-blur-sm"></div>

      {/* Modal Content */}
      <div className="relative bg-[#4b463a] w-full max-w-md rounded-xl shadow-2xl border border-[#4b463a]/20 overflow-hidden transform transition-all">
        <div className="p-8 flex flex-col items-center text-center">
          {/* Warning Icon */}
          <div className="w-16 h-16 bg-[#ffb4ab]/10 rounded-full flex items-center justify-center mb-6">
            <IconAlertTriangle className="text-[#ffb4ab] text-4xl" />
          </div>

          <h2 className="text-2xl font-bold text-[#ebe1d7] mb-3 tracking-tight font-headline">
            {title}
          </h2>

          <p className="text-[#d2ccc0] font-light italic leading-relaxed mb-8">
            {message}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 rounded-lg border border-[#4b463a] text-[#ebe1d7] font-semibold hover:bg-[#4b463a] transition-colors uppercase tracking-wider text-xs cursor-pointer"
            >
              Cancel
            </button>

            <button
              onClick={handleDelete}
              disabled={loading}
              className="flex-1 px-6 py-3 rounded-lg bg-[#ffb4ab] text-[#ffffff] font-bold hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-[#ffb4ab]/20 uppercase tracking-wider text-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <IconTrash className="text-sm" />
              {loading ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#d2ccc0] hover:text-[#ebe1d7] transition-colors cursor-pointer"
        >
          <IconX />
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
