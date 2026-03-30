/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IconCalendar,
  IconMapPin,
  IconUsers,
  IconEdit,
  IconTrash,
  IconChevronLeft,
  IconChevronRight,
  IconSearch,
} from "@tabler/icons-react";
import CreateEventButtonClient from "./client/createEventButton";
import InviteToEventButtonClient from "./client/inviteToEventButton";
import { Event } from "@/types/event/event.types";

const MyEvents = ({ allEvents }: { allEvents: Event[] | null }) => {
  // Event card data
  const events = [
    {
      id: 1,
      title: "Golden Hour Gala",
      date: "October 24, 2024",
      location: "The Ritz-Carlton, Paris",
      status: "Coming Up",
      statusBg: "#eec96d",
      statusText: "#231b00",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQZW6r15CqceiI4osUw2SMzERb0WDgrcRVkU-bFNszpI8vL-p9R54TuU4YhZRw-9vQFg_S55SV3HTrXEZ4IWV6b2JoVHVR7kopjtNxpluvsXHRUum2kbAUMn54o3JLhTOgRD7YvyJkPx51gqda86F42HpI0LTWVb7pOG8saB5_BJc6ap1aA5FWBL00EEi6r_k-K6n2SvfFoK6d8I7Lq6X-08dOmY20oxSOZiLa8YVDbkIdFqno0ElGuZHQ35YTSTcY0GEHgx9sS95V",
    },
    {
      id: 2,
      title: "Tech Horizon Summit",
      date: "November 12, 2024",
      location: "Sky Loft, New York",
      status: "Planning",
      statusBg: "rgba(238,201,109,0.8)",
      statusText: "#231b00",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfOWjqzP62bs6M7l9OKLeZmBwBcOh7GOyOM_RwS1yOn8NfNXWYR7Wwaq3hKuggloepbAB8A_0wXxbIwbXc36fwHYXVOvn5PhyoCxKQC22E2SuLVSKuUUG7NlGaB78AkWY2RpmWXDmc6vzbMm5SdbRWTrUwGZ5aG9OP0_i1F7vpKzKR1C6yv6kfugFCJfj-ma8AV6aG_DHCOTRJfPRx4u68yUQS9etAHOYEZ_s5Vj4MhqAy49dJ-Mb2QGIAt6AkXwiR1ZmotA9TS3Xr",
    },
    {
      id: 3,
      title: "Nocturne Soirée",
      date: "Tonight, 9:00 PM",
      location: "Maison de Musique, London",
      status: "Live Now",
      statusBg: "#eec96d",
      statusText: "#231b00",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFLuBYbjT98rzBTLD0lv0q0ZxfbfKqyh0XjIRU5HOHnfAvnvrOKmHWvxjG0agHZrT5yltP1iJ9c-kicfd_awsmm6ie7-7HQh_otQICIdRQkqiWpZcY978XUIKahhQYoGoDns48mtEXIOwJWAzqFjABqGfJWOzytMvFz9yDjK65kTOR3KRtTaas4f_dggmApIw2hhrw4pATysYwOkMEjKO91KC-s95lZTN3I8R5AdgDOyNlJ9gNhOI15ZB5rRvTe8GS8MfHm0QobuGV",
    },
  ];

  return (
    <>
      <main className="lg:ml-72 p-12 min-h-screen flex flex-col gap-12 bg-[#2f2a24] relative">
        {/* Header Section */}
        <header className="flex flex-col justify-between items-center space-y-4">
          <div className="max-w-2xl flex flex-col items-center">
            <h1 className="text-5xl font-bold text-[#ebe1d7] tracking-tight leading-tight">
              My Created Events
            </h1>
            <p className="mt-4 text-[#d2ccc0] text-lg font-light italic">
              Curate your exclusive experiences and manage the guest list with
              precision.
            </p>
          </div>
          {/* create event button */}
          <CreateEventButtonClient />
        </header>

        {/* Search Input */}
        <div className="relative w-full">
          <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#d2ccc0]" />
          <input
            type="text"
            placeholder="Title, Date, Time, Venue"
            className="w-full bg-[#3a342d] border-none rounded-xl py-4 pl-12 pr-4 text-[#ebe1d7] placeholder:text-[#d2ccc0]/50 focus:ring-1 focus:ring-[#eec96d] transition-all"
          />
        </div>

        {/* Event Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="group bg-[#3a342d] flex flex-col overflow-hidden transition-all duration-500 hover:shadow-2xl rounded-xl border border-[#4b463a]/10"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className="text-[9px] px-2 py-0.5 tracking-widest uppercase rounded-full font-bold"
                    style={{
                      backgroundColor: event.statusBg,
                      color: event.statusText,
                    }}
                  >
                    {event.status}
                  </span>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-3">
                <div>
                  <h3 className="text-xl font-bold text-[#ebe1d7] mb-0.5">
                    {event.title}
                  </h3>
                  <div className="flex flex-col gap-0.5 text-[#d2ccc0] text-xs">
                    <span className="flex items-center gap-2">
                      <IconCalendar size={16} />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <IconMapPin size={16} />
                      {event.location}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <div className="grid grid-cols-2 gap-2">
                    {/* invite button */}
                    <InviteToEventButtonClient />
                    <button
                      style={{
                        background:
                          "linear-gradient(135deg, #eec96d 0%, #ffdf96 100%)",
                        color: "#231b00",
                      }}
                      className="py-2 font-semibold rounded-lg text-[11px] hover:brightness-110 transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
                    >
                      <IconUsers size={16} />
                      Manage
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="py-2 text-[#eec96d] font-medium text-[11px] hover:bg-[#eec96d]/10 transition-colors flex items-center justify-center gap-2 border border-[#eec96d]/20 rounded-lg">
                      <IconEdit size={16} />
                      Edit
                    </button>
                    <button className="py-2 text-[#ffb4ab] font-medium text-[11px] hover:bg-[#ffb4ab]/10 transition-colors flex items-center justify-center gap-2 border border-[#ffb4ab]/20 rounded-lg">
                      <IconTrash size={16} />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Pagination */}
        <footer className="mt-auto flex justify-center pt-6">
          <nav className="flex items-center gap-2">
            <button className="flex items-center gap-1 px-4 py-2 text-[#ebe1d7]/60 hover:text-[#eec96d] transition-colors text-sm font-medium cursor-pointer">
              <IconChevronLeft size={20} />
              Previous
            </button>

            <div className="flex items-center gap-1">
              <button className="w-10 h-10 bg-[#eec96d] text-[#231b00] font-bold flex items-center justify-center rounded-md cursor-pointer">
                1
              </button>

              <button className="w-10 h-10 rounded-md hover:bg-[#453f36] text-[#d2ccc0]/60 flex items-center justify-center transition-colors cursor-pointer">
                2
              </button>

              <button className="w-10 h-10 rounded-md hover:bg-[#453f36] text-[#d2ccc0]/60 flex items-center justify-center transition-colors cursor-pointer">
                3
              </button>
            </div>

            <button className="flex items-center gap-1 px-4 py-2 text-[#ebe1d7]/60 hover:text-[#eec96d] transition-colors text-sm font-medium cursor-pointer">
              Next
              <IconChevronRight size={20} />
            </button>
          </nav>
        </footer>
      </main>
    </>
  );
};

export default MyEvents;
