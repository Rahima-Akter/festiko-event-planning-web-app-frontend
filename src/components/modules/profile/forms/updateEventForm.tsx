/* eslint-disable @typescript-eslint/no-explicit-any */
import { updateEvent } from "@/services/event/event.service";
import { Event, UpdateEventInput } from "@/types/event/event.types";
import {
  IconCalendar,
  IconCaretDownFilled,
  IconClock,
  IconPhoto,
  IconX,
} from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const UpdateEventForm = ({
  onClose,
  event,
}: {
  onClose: () => void;
  event: Event;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdateEventInput>({
    defaultValues: {
      title: event.title,
      description: event.description,
      image: event.image,
      capacity: event.capacity,
      date: new Date(event.date),
      time: event.time,
      venue: event.venue,
      isPublic: event.isPublic,
      fee: event.fee,
      category: event.category,
    },
  });

  const onSubmit = async (data: UpdateEventInput) => {
    try {
      const res = await updateEvent(event.id, data);

      if (res?.success) {
          toast.success("Event updated successfully 🎉");
          window.location.reload();
        onClose();
      } else {
        toast.error(res?.message || "Failed to update event");
      }
    } catch (err: any) {
      if (err.response?.data?.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Event update failed");
      }
      console.log(err);
    }
  };

  return (
    <>
      {/* Modal Overlay */}
      <div className="absolute inset-0 z-100 flex items-start justify-center overflow-y-auto bg-[#000000]/60 backdrop-blur-sm p-6">
        {/* Modal Container */}
        <div className="w-full max-w-6xl relative">
          <IconX
            className="absolute text-white top-2 right-2 cursor-pointer"
            onClick={onClose}
          />
          {/* Modal Content */}
          <div className="bg-[#2f2a24] rounded-md">
            <main className="lg:ml-0 pt-16 pb-20 md:px-12 px-8 min-h-screen">
              <div className="max-w-5xl mx-auto">
                {/* Header Section */}
                <div className="mb-12">
                  <h2 className="font-headline text-5xl text-[#ebe1d7] font-bold tracking-tight mb-4">
                    Create New Event
                  </h2>
                  <p className="text-[#d2ccc0] font-body text-lg max-w-2xl italic font-light">
                    Fill in the details to curate your next exclusive
                    experience.
                  </p>
                </div>

                {/* Bento-Style Form Container */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  {/* Section 1 */}
                  <div className="bg-[#3a342d] p-8 rounded-xl border border-[#4b463a]/10 shadow-lg">
                    <div className="grid grid-cols-1 gap-6">
                      <div className="space-y-2">
                        <label className="text-[11px] font-medium all-caps tracking-[0.05em] uppercase text-[#eec96d]">
                          Event Title
                        </label>
                        <input
                          {...register("title")}
                          className="w-full bg-[#1f1b15] border border-[#4b463a]/10 rounded-lg p-4 text-sm focus:ring-1 focus:ring-[#eec96d] transition-all text-[#ebe1d7] placeholder:text-[#d2ccc0]/30"
                          placeholder="e.g. Midnight Soirée at The Louvre"
                          type="text"
                        />
                        {errors.title && (
                          <p className="text-red-400 text-xs">
                            {errors.title.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="text-[11px] font-medium all-caps tracking-[0.05em] uppercase text-[#eec96d]">
                          Event Description
                        </label>
                        <textarea
                          {...register("description")}
                          className="w-full bg-[#1f1b15] border border-[#4b463a]/10 rounded-lg p-4 text-sm focus:ring-1 focus:ring-[#eec96d] transition-all text-[#ebe1d7] placeholder:text-[#d2ccc0]/30"
                          placeholder="Describe the atmosphere, dress code, and flow of your curated event..."
                          rows={4}
                        ></textarea>
                        {errors.description && (
                          <p className="text-red-400 text-xs">
                            {errors.description.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div className="bg-[#3a342d] p-8 rounded-xl border border-[#4b463a]/10 shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[11px] font-medium all-caps tracking-[0.05em] uppercase text-[#eec96d]">
                          Category
                        </label>
                        <div className="relative">
                          <select
                            {...register("category")}
                            className="w-full bg-[#1f1b15] border border-[#4b463a]/10 rounded-lg p-4 text-sm appearance-none focus:ring-1 focus:ring-[#eec96d] transition-all text-[#ebe1d7]"
                          >
                            <option value="PUBLIC">PUBLIC</option>
                            <option value="PRIVATE">PRIVATE</option>
                            <option value="PAID">PAID</option>
                            <option value="FREE">FREE</option>
                          </select>
                          <IconCaretDownFilled className="text-white right-3 top-4 cursor-pointer absolute" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[11px] font-medium all-caps tracking-[0.05em] uppercase text-[#eec96d]">
                          Venue Name
                        </label>
                        <input
                          {...register("venue")}
                          className="w-full bg-[#1f1b15] border border-[#4b463a]/10 rounded-lg p-4 text-sm focus:ring-1 focus:ring-[#eec96d] transition-all text-[#ebe1d7] placeholder:text-[#d2ccc0]/30"
                          placeholder="e.g. The Grand Ballroom"
                          type="text"
                        />
                        {errors.venue && (
                          <p className="text-red-400 text-xs">
                            {errors.venue.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Section 3 */}
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1 bg-[#3a342d] p-6 rounded-xl border border-[#4b463a]/10 shadow-lg relative overflow-hidden group">
                      <div className="absolute inset-0 bg-[#eec96d]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                      <label className="text-[11px] font-medium all-caps tracking-[0.05em] uppercase text-[#eec96d] block mb-4">
                        Event Cover
                      </label>
                      <div className="border-2 border-dashed border-[#4b463a]/30 rounded-lg h-48 flex flex-col items-center justify-center space-y-2 hover:border-[#eec96d]/50 transition-colors">
                        <IconPhoto className="text-3xl text-[#eec96d]/40" />
                        <span className="text-[10px] font-label all-caps tracking-widest text-[#d2ccc0] uppercase">
                          Upload High-Res Visual
                        </span>
                      </div>
                      <input
                        {...register("image")}
                        className="mt-4 w-full bg-[#1f1b15] border border-[#4b463a]/10 rounded-lg p-3 text-xs focus:ring-1 focus:ring-[#eec96d] transition-all text-[#ebe1d7]"
                        placeholder="paste image URL here"
                        type="text"
                      />
                      {errors.image && (
                        <p className="text-red-400 text-xs">
                          {errors.image.message}
                        </p>
                      )}
                    </div>

                    <div className="flex-1 bg-[#3a342d] p-8 rounded-xl border border-[#4b463a]/10 shadow-xl">
                      <h4 className="text-[11px] font-bold all-caps tracking-widest uppercase text-[#eec96d] mb-6">
                        Logistics &amp; Privacy
                      </h4>

                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-[11px] font-medium all-caps tracking-[0.05em] uppercase text-[#eec96d]">
                            Privacy Level
                          </label>
                          <div className="relative">
                            <select
                              {...register("isPublic", {
                                setValueAs: (v) => v === "true",
                              })}
                              className="w-full bg-[#1f1b15] border border-[#4b463a]/10 rounded-lg p-3 text-sm appearance-none focus:ring-1 focus:ring-[#eec96d] text-[#ebe1d7]"
                            >
                              <option value="true">Public</option>
                              <option value="false">Private</option>
                            </select>
                            <IconCaretDownFilled className="text-white right-3 top-2 cursor-pointer absolute" />
                          </div>
                          {errors.isPublic && (
                            <p className="text-red-400 text-xs">
                              {errors.isPublic.message}
                            </p>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-[10px] font-label all-caps tracking-widest text-[#ebe1d7]/60 uppercase">
                              Capacity
                            </label>
                            <input
                              {...register("capacity", { valueAsNumber: true })}
                              className="w-full bg-[#1f1b15] border border-[#4b463a]/10 rounded-lg p-3 text-sm focus:ring-1 focus:ring-[#eec96d] text-[#ebe1d7]"
                              type="number"
                              defaultValue={10}
                            />
                            {errors.capacity && (
                              <p className="text-red-400 text-xs">
                                {errors.capacity.message}
                              </p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <label className="text-[10px] font-label all-caps tracking-widest text-[#ebe1d7]/60 uppercase">
                              Registration Fee ($)
                            </label>
                            <input
                              {...register("fee", { valueAsNumber: true })}
                              className="w-full bg-[#1f1b15] border border-[#4b463a]/10 rounded-lg p-3 text-sm focus:ring-1 focus:ring-[#eec96d] text-[#ebe1d7]"
                              type="number"
                              defaultValue={0}
                            />
                            {errors.fee && (
                              <p className="text-red-400 text-xs">
                                {errors.fee.message}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 4 */}
                  <div className="bg-[#3a342d] p-10 rounded-xl border border-[#4b463a]/10 shadow-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
                    <div className="space-y-2">
                      <label className="text-[11px] font-medium all-caps tracking-[0.05em] uppercase text-[#eec96d]">
                        Event Date
                      </label>
                      <div className="relative">
                        <IconCalendar className="absolute right-3 top-3 text-[#eec96d] text-sm z-0 pointer-events-none" />
                        <input
                          {...register("date")}
                          className="w-full bg-[#1f1b15] border border-[#4b463a]/10 rounded-lg p-3 text-sm focus:ring-1 focus:ring-[#eec96d] text-[#ebe1d7]"
                          type="date"
                        />
                      </div>
                      {errors.date && (
                        <p className="text-red-400 text-xs">
                          {errors.date.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-medium all-caps tracking-[0.05em] uppercase text-[#eec96d]">
                        Starting Time
                      </label>
                      <div className="relative">
                        <IconClock className="absolute right-3 top-3 text-[#eec96d] text-sm z-0 pointer-events-none" />
                        <input
                          {...register("time")}
                          className="w-full bg-[#1f1b15] border border-[#4b463a]/10 rounded-lg p-3 text-sm focus:ring-1 focus:ring-[#eec96d] text-[#ebe1d7]"
                          type="time"
                        />
                      </div>
                      {errors.time && (
                        <p className="text-red-400 text-xs">
                          {errors.time.message}
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-2 flex justify-end items-center space-x-6 pt-4">
                      <button
                        onClick={onClose}
                        className="text-[11px] font-bold all-caps tracking-widest uppercase text-[#ebe1d7]/60 hover:text-[#ebe1d7] transition-colors px-6 py-3 cursor-pointer"
                        type="button"
                      >
                        Cancel
                      </button>
                      <button
                        className="premium-gradient text-[#231b00] text-[11px] font-bold all-caps tracking-widest uppercase px-12 py-4 rounded-lg shadow-xl shadow-[#eec96d]/10 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                        style={{
                          background:
                            "linear-gradient(135deg, #eec96d 0%, #ffdf96 100%)",
                        }}
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Updating..." : "Update Event"}
                      </button>
                    </div>
                  </div>
                </form>

                {/* Decorative Visual (Asymmetric Rule) */}
                <div className="mt-20 grid grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-5 col-span-12 relative">
                    <div className="aspect-square rounded-lg overflow-hidden grayscale contrast-125 opacity-30">
                      <img
                        className="object-cover w-full h-full"
                        data-alt="Blurred background of a luxurious ballroom event with crystal chandeliers and golden candle lighting"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4b7vb3jw_KLrmi-xR--Th5RsVbNBxznGJAVg0gzhw6FFnkF0itbNj4kUaK_ibWcV3KsdX0xjrSBQElPOBpymzQD09F8vvlDC8KY53FtAzvy5rVd2CoeMJjkkyLpMmQ1IcnO1b3sXEFb_DsuK37mVemNJNTj1MQvzBF6jwFzVNhHDiPxSI-BeHmFuO6yLI9xQ8bjqY8hznSpwAE-odReChNDoM7AfxqB91AygTXWLW7PbjAm-_Hs395CwmsDIvzNoF_t9u39Sh0Oah"
                      />
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-[#3a342d] p-8 shadow-2xl border border-[#4b463a]/10">
                      <p className="font-serif italic text-2xl text-[#eec96d] leading-tight">
                        &apos;Exclusivity is the <br /> art of curation.&apos;
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-7 col-span-12 md:pl-12">
                    <h3 className="font-headline text-3xl font-bold mb-4 text-[#ebe1d7]">
                      Finalizing Your Masterpiece
                    </h3>
                    <p className="text-[#d2ccc0] leading-relaxed text-lg font-light">
                      By creating this event, you are inviting your guests into
                      a carefully tailored world. Ensure all logistical details
                      are accurate to maintain the seamless experience
                      synonymous with Festiko.
                    </p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateEventForm;
