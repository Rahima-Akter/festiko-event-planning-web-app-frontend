import DeleteConfirmationModal from "@/components/shared/deleteConfirmationModal";
import {
  permanentlyDeleteUser,
  softDeleteUser,
} from "@/services/auth/auth.service";
import {
  IconDotsVertical,
  IconTrash,
  IconTrashFilled,
  IconUser,
} from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

const ActionButtonsClient = ({ id }: { id: string }) => {
  const [open, setOpen] = useState(false);
  const [softDeleteOpen, setSoftDeleteOpen] = useState(false);
  const [permanentDeleteOpen, setPermanentDeleteOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="text-[#fcf2e8]/50 hover:text-[#C8B273] transition-colors relative z-10"
      >
        <IconDotsVertical />
      </button>

      {/* DROPDOWN */}
      <div
        className={`absolute right-5 -top-2 w-52 bg-[#1f1b15] shadow-2xl rounded-lg py-2 z-20 border border-[#C8B273]/20 transition-all duration-200 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <Link
          href={`/user-info/${id}`}
          className="w-full text-left px-4 py-2 text-xs font-medium hover:bg-[#353029] flex items-center gap-2 text-[#fcf2e8]"
        >
          <IconUser className="text-sm" />
          View Profile
        </Link>

        {/* Soft Delete */}
        <button
          onClick={() => {
            setSoftDeleteOpen(true);
            setOpen(false);
          }}
          className="w-full text-left px-4 py-2 text-xs font-medium flex items-center gap-2 text-yellow-400 hover:bg-yellow-400/5"
        >
          <IconTrashFilled className="text-sm" />
          Soft Delete Account
        </button>

        <div className="border-t border-[#C8B273]/10 my-1"></div>

        {/* Permanent Delete */}
        <button
          onClick={() => {
            setPermanentDeleteOpen(true);
            setOpen(false);
          }}
          className="w-full text-left px-4 py-2 text-xs font-bold text-red-400 hover:bg-red-400/5 flex items-center gap-2"
        >
          <IconTrash className="text-sm" />
          Permanently Delete Account
        </button>
      </div>

      {/* MODALS */}
      {softDeleteOpen && (
        <DeleteConfirmationModal
          onClose={() => setSoftDeleteOpen(false)}
          id={id}
          title="Delete User"
          deleteFunction={softDeleteUser}
        />
      )}

      {permanentDeleteOpen && (
        <DeleteConfirmationModal
          onClose={() => setPermanentDeleteOpen(false)}
          id={id}
          title="Permanently Delete User"
          deleteFunction={permanentlyDeleteUser}
        />
      )}
    </div>
  );
};

export default ActionButtonsClient;
