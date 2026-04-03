"use client";
import { useState } from "react";
import {
  IconSearch,
  IconChevronDown,
  IconGridDots,
  IconList,
  IconChevronLeft,
  IconChevronRight,
  IconCalendar,
  IconUser,
} from "@tabler/icons-react";

const Events = () => {
  const [view, setView] = useState("grid");

  return (
    <main className="pt-20 flex-grow bg-background text-on-background">
      {/* HERO */}
      <section className="relative py-20 px-6 md:px-12 overflow-hidden border-b border-primary/5">
        {/* glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/10 blur-[80px] rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="serif-heading text-4xl md:text-6xl text-primary mb-12 font-bold italic tracking-tight">
            Find Your Next Elite Experience
          </h1>

          {/* SEARCH */}
          <div className="glass-card p-2 rounded-xl flex flex-col lg:flex-row gap-2 shadow-2xl">
            {/* input */}
            <div className="flex-grow flex items-center bg-background/50 rounded-lg px-4 gap-3 border border-primary/10 focus-within:border-primary/40">
              <IconSearch className="text-primary/60" size={20} />
              <input
                placeholder="Search by title or organizer..."
                className="w-full bg-transparent py-4 outline-none placeholder:text-on-background/30"
              />
            </div>

            {/* dropdowns */}
            <div className="flex flex-wrap md:flex-nowrap gap-2">
              {/* FILTER */}
              <div className="relative group">
                <button className="flex items-center gap-2 bg-background/50 border border-primary/10 rounded-lg px-6 py-4 min-w-[140px] hover:border-primary/40">
                  <span>Filter</span>
                  <IconChevronDown size={16} className="text-primary" />
                </button>

                <div className="absolute top-full left-0 mt-2 w-48 bg-surface border border-primary/20 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="flex flex-col">
                    {["PUBLIC", "PRIVATE", "PAID", "FREE"].map((item) => (
                      <button
                        key={item}
                        className="px-6 py-3 text-left text-sm hover:bg-primary hover:text-on-primary"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* FEE */}
              <div className="relative group">
                <button className="flex items-center gap-2 bg-background/50 border border-primary/10 rounded-lg px-6 py-4 min-w-[140px] hover:border-primary/40">
                  <span>Fee</span>
                  <IconChevronDown size={16} className="text-primary" />
                </button>

                <div className="absolute top-full left-0 mt-2 w-48 bg-surface border border-primary/20 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="flex flex-col">
                    <button className="px-6 py-3 text-left text-sm hover:bg-primary hover:text-on-primary">
                      High to Low
                    </button>
                    <button className="px-6 py-3 text-left text-sm hover:bg-primary hover:text-on-primary">
                      Low to High
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* button */}
            <button className="btn-gold px-10 py-4 rounded-lg font-bold hover:scale-[1.02] active:scale-95">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="py-16 px-6 md:px-12 max-w-[1440px] mx-auto">
        {/* header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-bold">
              Curated Selection
            </span>
            <h2 className="serif-heading text-4xl mt-2">
              Upcoming Events
            </h2>
          </div>

          {/* view toggle */}
          <div className="flex gap-4">
            <button
              onClick={() => setView("grid")}
              className={`w-10 h-10 flex items-center justify-center rounded border ${
                view === "grid"
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-primary/10 text-on-background/40"
              }`}
            >
              <IconGridDots size={18} />
            </button>

            <button
              onClick={() => setView("list")}
              className={`w-10 h-10 flex items-center justify-center rounded border ${
                view === "list"
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-primary/10 text-on-background/40"
              }`}
            >
              <IconList size={18} />
            </button>
          </div>
        </div>

        {/* GRID */}
        <div
          className={`grid gap-8 ${
            view === "grid"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1"
          }`}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="group glass-card rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={`https://picsum.photos/500/400?random=${i}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                />

                <div className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur px-4 py-2 rounded-lg font-bold text-primary border border-primary/20">
                  $99
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-primary/60 text-xs uppercase mb-3">
                  <IconCalendar size={14} />
                  Date & Time
                </div>

                <h3 className="serif-heading text-2xl mb-4 group-hover:text-primary transition-colors">
                  Event Title
                </h3>

                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <IconUser size={16} className="text-primary" />
                  </div>
                  <span className="text-sm text-on-background/60">
                    By <span className="text-on-background">Organizer</span>
                  </span>
                </div>

                <button className="mt-auto btn-gold py-4 rounded-lg font-bold">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="mt-20 flex justify-center items-center gap-3">
          <button className="w-12 h-12 rounded-lg border border-primary/20 flex items-center justify-center hover:bg-primary/10">
            <IconChevronLeft className="text-primary" />
          </button>

          <div className="flex gap-2">
            <button className="w-12 h-12 rounded-lg bg-primary text-on-primary font-bold">
              1
            </button>
            <button className="w-12 h-12 rounded-lg border border-primary/10 text-on-background/60">
              2
            </button>
            <button className="w-12 h-12 rounded-lg border border-primary/10 text-on-background/60">
              3
            </button>
          </div>

          <button className="w-12 h-12 rounded-lg border border-primary/20 flex items-center justify-center hover:bg-primary/10">
            <IconChevronRight className="text-primary" />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Events;