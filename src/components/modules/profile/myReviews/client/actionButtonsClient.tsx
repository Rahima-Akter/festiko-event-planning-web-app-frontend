import { IconEdit, IconTrash } from "@tabler/icons-react";
import React from "react";

const ActionButtonsClient = () => {
  return (
    <div className="flex gap-4 items-center justify-between mt-auto pt-4 border-t border-[#fcf2e8]/5">
      <button className="flex items-center gap-2 text-[#c8b273] hover:text-[#ffffff] transition-colors font-label uppercase text-[10px] tracking-widest font-bold">
        <IconEdit className="text-xs" /> Edit
      </button>
      <button className="flex items-center gap-2 text-[#ba1a1a]/80 hover:text-[#ba1a1a] transition-colors font-label uppercase text-[10px] tracking-widest font-bold">
        <IconTrash className="text-xs" /> Delete
      </button>
    </div>
  );
};

export default ActionButtonsClient;
