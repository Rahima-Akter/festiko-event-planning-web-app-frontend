/* eslint-disable @typescript-eslint/no-explicit-any */
import { deleteEvent } from "@/services/event/event.service";
import { IconAlertTriangle, IconTrash, IconX } from "@tabler/icons-react";
import { toast } from "sonner";

const DeleteConfirmationModal = ({
  onClose,
  id,
}: {
  onClose: () => void;
  id: string;
}) => {
  const handleDelete = async () => {
    try {
      const res = await deleteEvent(id);
      if (res?.success) {
        toast.success("Event deleted successfully");
        window.location.reload();
      } else {
        toast.error("Error deleting event");
        onClose();
      }
    } catch (err: any) {
      if (err.response?.data?.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Event deletion failed");
      }
      console.error("Error deleting event:", err);
    }
  };

  return (
    <>
      {/* Delete Confirmation Modal */}
      <div
        className="fixed inset-0 z-100 flex items-center justify-center p-4"
        id="delete-modal"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#2f2a24]/80 backdrop-blur-sm shadow-2xl transition-opacity"></div>

        {/* Modal Content */}
        <div className="relative bg-[#4b463a] w-full max-w-md rounded-xl shadow-2xl border border-[#4b463a]/20 overflow-hidden transform transition-all">
          <div className="p-8 flex flex-col items-center text-center">
            {/* Warning Icon */}
            <div className="w-16 h-16 bg-[#ffb4ab]/10 rounded-full flex items-center justify-center mb-6">
              <IconAlertTriangle className="text-[#ffb4ab] text-4xl" />
            </div>

            <h2 className="text-2xl font-bold text-[#ebe1d7] mb-3 tracking-tight font-headline">
              Delete Event
            </h2>

            <p className="text-[#d2ccc0] font-light italic leading-relaxed mb-8">
              Are you sure you want to delete this event? This action cannot be
              undone.
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
                className="flex-1 px-6 py-3 rounded-lg bg-[#ffb4ab] text-[#ffffff] font-bold hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-[#ffb4ab]/20 uppercase tracking-wider text-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <IconTrash className="text-sm" />
                Delete Event
              </button>
            </div>
          </div>

          {/* Close Button (Top Right) */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#d2ccc0] hover:text-[#ebe1d7] transition-colors cursor-pointer"
          >
            <IconX />
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteConfirmationModal;
