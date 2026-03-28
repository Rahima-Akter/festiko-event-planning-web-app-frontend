import {
  IconDotsVertical,
  IconEdit,
  IconTrash,
  IconChevronLeft,
  IconChevronRight,
  IconEye,
} from "@tabler/icons-react";

const events = [
  {
    id: "#EVN-4921",
    title: "Midsummer Night Gala",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCT0sDR6PFKKNtcFwHeKjeLF1znvtVeQe4RNGIchzNI0euXhL21qjVrxCYCo3Ew0hIVi6-i1yHHHneL-0jwxxWSmWWPzrbLG-JwGHoYWFFVA2vrtB5w76y1R4thMKP9nIUhjB8THj1jyvImWTwE67GUzPmin8_1SSLzBZi5Ywn1Hxb2sE3nPIzJlUt3x_iRiY8iJxEW6h3L1ZjiDssGWDZyU36ihumFPad17X-W_T-OQzxcS8zlIKNzn6n7ZIUHHInhrsbLfU5C56PZ",
    organizer: "Elena Rodriguez",
    date: "Aug 24, 2024",
    time: "08:00 PM EST",
    status: "Public",
    fee: "$450.00",
  },
  {
    id: "#EVN-8203",
    title: "Global Tech Summit",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4qfWVe0f6opxqOSQqYCylx5OkiEEtWRjEZyD8VPkvg7gTmTDIB96DEimUtonTCs5eGhn18IL1f_OdVmYq6MzMRMb9qBBC2jESLJSa2TcW1JXzH6YLaNazSsXtH_2emd9ckSweh7Y4eodIQhUxIMQfL3nHpRShk2YUuxQwJWHwCHcE41_qN2Cz9igjRwa2SfyUmuCJXxI3TfOCYec0KZoiYcwqERIAGv3cpZN1m-6GtsteiBtDZjqeQSy3mCH9CGxoEM00WNBNvnu2",
    organizer: "NexGen Corp",
    date: "Sept 12, 2024",
    time: "09:30 AM EST",
    status: "Private",
    fee: "$1,200.00",
  },
  {
    id: "#EVN-1156",
    title: "Midnight Jazz Session",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDi82OIs7yqyOrTmAFIkjHEUaoDZgLFOB-lO53XC1fxwDph3L7504-IAjWtah7rQVWVZQECwZSz81CUpayO8v9ig9RfFYdPg-LSjzqJcP-KiH1sxG8QdaZUpbG7NL_B0K95IWhkixcJyFUGE2PvnnyS-wKgPiDLmP4csgQiEd3zNlPYnNmPy5VGoWZm8ySXN8CM1hov_-RRdeSgph5Y2RjSMn5_O1_DFFp_VNij4yrPB0Quf9_CZFdD-l2il6S85JImL7sVnZc0B2d5",
    organizer: "Lounge Collective",
    date: "Oct 05, 2024",
    time: "11:00 PM EST",
    status: "Public",
    fee: "Free",
  },
  {
    id: "#EVN-2294",
    title: "Modernism Revisited",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5T4qjPoUxXHfMQ6ntED0j76t33Qgr_Hcq4WZpk6OdCQZtsppEntDWe4kGc47gBMUfIDCtEVuzbFh2yD6MHmFPGAvDIIxeGW4MImn9J8kOxiBamnBenJF_dQ9FFM7BnHUIrpl3komMU1hQ5iV6ZZel8ZI-vn2wb2AJsxGcJ9z9sZbCVtF3JXqlHwpOnzN3mmBR2N4EfYH8HKasUjjz4eElGn0IJRwpbBjTcTQNIRdcIc4FuutmQFPMQhEXCJwHloa2blSrRkvyblJo",
    organizer: "Art House Gallery",
    date: "Oct 18, 2024",
    time: "06:00 PM EST",
    status: "Public",
    fee: "$120.00",
  },
];

const EventsManagement = () => {
  return (
    <div className="lg:ml-64 min-h-screen bg-[#2F2A24] p-8 lg:p-10 lg:pl-16">
      {/* Header */}
      <span className="text-lg font-bold uppercase tracking-[0.2em] text-[#C8B273]/60 mb-4 block">
        All Events Management
      </span>

      {/* Search + Filters */}
      <section className="mb-5 flex justify-between items-center gap-4">
        <input
          className="w-full px-4 py-4 bg-[#25211B] rounded-xl text-[#F9EFE5]"
          placeholder="Search events by title, date, time, venue, organizer name..."
        />

        <select className="px-4 py-4 bg-[#25211B] rounded-xl text-[#F9EFE5] cursor-pointer">
          <option>All Statuses</option>
          <option>Public</option>
          <option>Public</option>
          <option>Paid</option>
          <option>Free</option>
        </select>
      </section>

      {/* Table */}
      <div className="bg-[#25211B] rounded-2xl border border-[#C8B273]/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#1F1B15] text-[#C8B273] text-xs uppercase">
              <tr>
                <th className="px-8 py-5">Event</th>
                <th className="px-6 py-5">Organizer</th>
                <th className="px-6 py-5">Date</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5">Fee</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/5">
              {events.map((event, i) => (
                <tr key={i} className="hover:bg-[#2F2A24] transition-colors">
                  {/* Event */}
                  <td className="md:px-4 py-6 px-6 md:pr-0 pr-16">
                    <div className="flex items-center gap-4">
                      <img
                        src={event.image}
                        className="h-14 w-14 rounded-lg object-cover"
                      />
                      <div>
                        <p className="font-bold text-[#F9EFE5] lg:whitespace-nowrap">
                          {event.title}
                        </p>
                        <p className="text-xs text-[#F9EFE5]/40">{event.id}</p>
                      </div>
                    </div>
                  </td>

                  {/* Organizer */}
                  <td className="md:px-2 px-5 text-[#F9EFE5]/80 md:whitespace-nowrap">
                    {event.organizer}
                  </td>

                  {/* Date */}
                  <td className="px-2 lg:pr-0 pr-4 text-[#F9EFE5]/80">
                    <div className="text-[#F9EFE5] whitespace-nowrap">{event.date}</div>
                    <div className="text-xs text-[#F9EFE5]/40">
                      {event.time}
                    </div>
                  </td>

                  {/* Status */}
                  <td className="px-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-[#C8B273]/10 text-[#C8B273]">
                      {event.status}
                    </span>
                  </td>

                  {/* Fee */}
                  <td className="px-2 text-[#C8B273] font-bold">
                    {event.fee}
                  </td>

                  {/* ACTION DROPDOWN */}
                  <td className="px-8 py-6 text-right">
                    <div className="relative inline-block group">
                      <button className="p-2 hover:bg-[#3A352E] rounded-lg">
                        <IconDotsVertical className="text-white" />
                      </button>

                      <div className="absolute right-0 -top-4 mt-2 w-44 bg-[#1F1B15] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                        <button className="flex items-center gap-2 px-4 py-2 w-full text-white hover:bg-[#2F2A24] text-sm">
                          <IconEye size={16} />
                          View
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 w-full text-red-400 hover:bg-red-400/10 text-sm">
                          <IconTrash size={16} />
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-8 py-6 flex md:flex-row flex-col space-y-5 items-center justify-between bg-[#1F1B15]">
          <span className="text-xs text-[#F9EFE5]/40">Showing 1–4 of 124</span>

          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center">
              <IconChevronLeft className="text-[#C8B273] hover:text-[#C8B273]/80 rounded cursor-pointer" />
            </button>

            <button className="w-8 h-8 bg-[#C8B273] text-black rounded hover:bg-[#C8B273]/80 cursor-pointer">
              1
            </button>

            <button className="w-8 h-8 text-white rounded hover:bg-[#C8B273]/10 cursor-pointer">
              2
            </button>

            <button className="w-8 h-8">
              <IconChevronRight className="text-[#C8B273] hover:text-[#C8B273]/80 rounded cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsManagement;
