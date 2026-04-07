import DeleteConfirmationModal from "@/components/shared/deleteConfirmationModal";
import { deleteEvent } from "@/services/event/event.service";
import { IconTrash } from "@tabler/icons-react";
import { useState } from "react";

const DeleteEventButtonClient = ({ id }: { id: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        onClick={toggleModal}
        className="py-2 text-[#ffb4ab] font-medium text-[11px] hover:bg-[#ffb4ab]/10 transition-colors flex items-center justify-center gap-2 border border-[#ffb4ab]/20 rounded-lg cursor-pointer"
      >
        <IconTrash size={16} />
        Delete
      </button>
      {isOpen && (
        <DeleteConfirmationModal
          onClose={() => setIsOpen(false)}
          id={id}
          deleteFunction={deleteEvent}
        />
      )}
    </>
  );
};

export default DeleteEventButtonClient;
