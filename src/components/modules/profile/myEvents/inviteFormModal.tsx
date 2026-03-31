import { IconX, IconFingerprint, IconSend } from "@tabler/icons-react";

const InviteFormModal = ({
  onClose,
  handleInvite,
  inputUserId,
  setInputUserId,
}: {
  onClose: () => void;
  handleInvite: () => void;
  inputUserId: string;
  setInputUserId: (val: string) => void;
}) => {
  return (
    <>
      {/* Invite Modal Overlay */}
      <div
        className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-[#000000]/60 backdrop-blur-sm transition-opacity duration-300"
        id="invite-modal"
      >
        {/* Modal Content */}
        <div className="bg-[#3a342d] w-full max-w-md rounded-2xl shadow-2xl border border-[#4b463a]/20 overflow-hidden transform transition-all duration-300 scale-100">
          <div className="p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#ebe1d7] tracking-tight font-headline">
                Invite to Your Event
              </h2>
              <button
                onClick={onClose}
                className="text-[#d2ccc0] hover:text-[#eec96d] transition-colors cursor-pointer"
              >
                <IconX />
              </button>
            </div>

            {/* Form Body */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium text-[#ebe1d7]/70 ml-1 self-star"
                  htmlFor="user-id-input"
                >
                  Enter the User ID
                </label>
                <div className="relative">
                  <IconFingerprint className="absolute left-4 top-1/2 -translate-y-1/2 text-[#d2ccc0]/70" />
                  <input
                    value={inputUserId}
                    onChange={(e) => setInputUserId(e.target.value)}
                    className="w-full bg-[#453f36] border border-[#4b463a]/30 rounded-xl py-3.5 pl-12 pr-4 text-[#ebe1d7] placeholder:text-[#d2ccc0]/40 focus:ring-2 focus:ring-[#eec96d] focus:border-transparent transition-all"
                    id="user-id-input"
                    placeholder="e.g. ID12345"
                    type="text"
                  />
                </div>
                <p className="text-[10px] text-[#d2ccc0]/60 italic ml-1 mt-1">
                  Invitations will be sent immediately to the user&apos;s
                  dashboard.
                </p>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-end gap-3 mt-6">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-lg text-sm font-semibold text-[#d2ccc0] hover:text-[#ebe1d7] hover:bg-[#4b463a]/30 transition-all cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleInvite}
                className="px-6 py-2.5 premium-gradient text-[#231b00] font-bold rounded-lg text-sm shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                style={{
                  background:
                    "linear-gradient(135deg, #eec96d 0%, #ffdf96 100%)",
                }}
              >
                <IconSend className="text-sm" />
                Send Invitation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InviteFormModal;
