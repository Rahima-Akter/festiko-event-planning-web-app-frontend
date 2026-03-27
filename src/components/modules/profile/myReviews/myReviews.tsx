import {
  IconStar,
  IconEdit,
  IconTrash,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";

const MYREVIEWS = () => {
  return (
    <>
      <main className="flex-1 ml-0 lg:ml-72 p-8 md:p-12 bg-[#2F2A24]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <h1 className="font-headline text-4xl md:text-5xl text-[#c8b273] font-bold mb-4 tracking-tight">
              My Reviews
            </h1>
            <p className="font-body text-[#fcf2e8]/60 text-lg">
              Manage your feedback for past celebrations and curated
              experiences.
            </p>
          </header>

          {/* Reviews List Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Review Card 1 */}
            <div className="bg-[#353029] p-6 rounded-xl shadow-2xl relative overflow-hidden flex flex-col min-h-100">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#c8b273]/10 to-transparent rounded-full -mr-12 -mt-12 blur-2xl"></div>

              <div className="mb-4">
                <h3 className="font-headline text-xl text-[#ffffff] font-semibold line-clamp-2 min-h-[3.5rem]">
                  The Sapphire Gala 2024
                </h3>
                <p className="font-label text-[10px] uppercase tracking-[0.1em] text-[#c8b273] mt-1">
                  Oct 12, 2024
                </p>
              </div>

              <div className="flex gap-1 text-[#c8b273] mb-4">
                <IconStar className="text-sm fill-[#c8b273]" />
                <IconStar className="text-sm fill-[#c8b273]" />
                <IconStar className="text-sm fill-[#c8b273]" />
                <IconStar className="text-sm fill-[#c8b273]" />
                <IconStar className="text-sm fill-[#c8b273]" />
              </div>

              <div className="relative z-10 grow mb-6">
                <p className="text-[#fcf2e8]/80 leading-relaxed italic text-sm line-clamp-6">
                  "An absolutely breathtaking evening. From the curated menu to
                  the seamless logistics handled by Festiko, every detail felt
                  intentional. The atmospheric lighting and the transition
                  between courses were pure magic. Looking forward to the next
                  one!"
                </p>
              </div>

              <div className="flex gap-4 items-center justify-between mt-auto pt-4 border-t border-[#fcf2e8]/5">
                <button className="flex items-center gap-2 text-[#c8b273] hover:text-[#ffffff] transition-colors font-label uppercase text-[10px] tracking-widest font-bold">
                  <IconEdit className="text-xs" /> Edit
                </button>
                <button className="flex items-center gap-2 text-[#ba1a1a]/80 hover:text-[#ba1a1a] transition-colors font-label uppercase text-[10px] tracking-widest font-bold">
                  <IconTrash className="text-xs" /> Delete
                </button>
              </div>
            </div>

            {/* Review Card 2 */}
            <div className="bg-[#353029] p-6 rounded-xl shadow-2xl relative overflow-hidden flex flex-col min-h-[400px]">
              <div className="mb-4">
                <h3 className="font-headline text-xl text-[#ffffff] font-semibold line-clamp-2 min-h-[3.5rem]">
                  Boutique Wine Tasting
                </h3>
                <p className="font-label text-[10px] uppercase tracking-[0.1em] text-[#c8b273] mt-1">
                  Sep 28, 2024
                </p>
              </div>

              <div className="flex gap-1 text-[#c8b273] mb-4">
                <IconStar className="text-sm fill-[#c8b273]" />
                <IconStar className="text-sm fill-[#c8b273]" />
                <IconStar className="text-sm fill-[#c8b273]" />
                <IconStar className="text-sm fill-[#c8b273]" />
                <IconStar className="text-sm text-[#fcf2e8]/20" />
              </div>

              <div className="relative z-10 flex-grow mb-6">
                <p className="text-[#fcf2e8]/80 leading-relaxed italic text-sm line-clamp-6">
                  "The sommelier was incredibly knowledgeable. The only minor
                  issue was the seating arrangement which felt slightly cramped,
                  but the wine selection more than made up for it. A very
                  sophisticated afternoon."
                </p>
              </div>

              <div className="flex gap-4 items-center justify-between mt-auto pt-4 border-t border-[#fcf2e8]/5">
                <button className="flex items-center gap-2 text-[#c8b273] hover:text-[#ffffff] transition-colors font-label uppercase text-[10px] tracking-widest font-bold">
                  <IconEdit className="text-xs" /> Edit
                </button>
                <button className="flex items-center gap-2 text-[#ba1a1a]/80 hover:text-[#ba1a1a] transition-colors font-label uppercase text-[10px] tracking-widest font-bold">
                  <IconTrash className="text-xs" /> Delete
                </button>
              </div>
            </div>

            {/* Review Card 3 */}
            <div className="bg-[#353029] p-6 rounded-xl shadow-2xl relative overflow-hidden flex flex-col min-h-[400px]">
              <div className="mb-4">
                <h3 className="font-headline text-xl text-[#ffffff] font-semibold line-clamp-2 min-h-[3.5rem]">
                  Art Basel Afterparty
                </h3>
                <p className="font-label text-[10px] uppercase tracking-[0.1em] text-[#c8b273] mt-1">
                  Aug 05, 2024
                </p>
              </div>

              <div className="flex gap-1 text-[#c8b273] mb-4">
                <IconStar className="text-sm fill-[#c8b273]" />
                <IconStar className="text-sm fill-[#c8b273]" />
                <IconStar className="text-sm fill-[#c8b273]" />
                <IconStar className="text-sm fill-[#c8b273]" />
                <IconStar className="text-sm fill-[#c8b273]" />
              </div>

              <div className="relative z-10 grow mb-6">
                <p className="text-[#fcf2e8]/80 leading-relaxed italic text-sm line-clamp-6">
                  "High energy, exclusive crowd, and perfect service. Festiko
                  really knows how to manage guest lists for elite gatherings.
                  Zero friction at entry. Exceptional."
                </p>
              </div>

              <div className="flex gap-4 items-center justify-between mt-auto pt-4 border-t border-[#fcf2e8]/5">
                <button className="flex items-center gap-2 text-[#c8b273] hover:text-[#ffffff] transition-colors font-label uppercase text-[10px] tracking-widest font-bold">
                  <IconEdit className="text-xs" /> Edit
                </button>
                <button className="flex items-center gap-2 text-[#ba1a1a]/80 hover:text-[#ba1a1a] transition-colors font-label uppercase text-[10px] tracking-widest font-bold">
                  <IconTrash className="text-xs" /> Delete
                </button>
              </div>
            </div>
          </div>

          {/* Pagination Component */}
          <div className="mt-16 flex justify-center items-center gap-2">
            <button
              className="flex items-center justify-center w-10 h-10 rounded border border-[#c8b273]/30 text-[#c8b273] hover:bg-[#c8b273] hover:text-[#1f1b15] transition-all disabled:opacity-30 disabled:pointer-events-none"
              disabled
            >
              <IconChevronLeft className="text-lg" />
            </button>

            <div className="flex gap-2">
              <button className="w-10 h-10 rounded bg-[#c8b273] text-[#1f1b15] font-label font-bold text-xs flex items-center justify-center">
                1
              </button>
              <button className="w-10 h-10 rounded border border-[#c8b273]/30 text-[#c8b273] hover:bg-[#c8b273]/10 font-label font-bold text-xs flex items-center justify-center transition-all">
                2
              </button>
              <button className="w-10 h-10 rounded border border-[#c8b273]/30 text-[#c8b273] hover:bg-[#c8b273]/10 font-label font-bold text-xs flex items-center justify-center transition-all">
                3
              </button>
            </div>

            <button className="flex items-center justify-center w-10 h-10 rounded border border-[#c8b273]/30 text-[#c8b273] hover:bg-[#c8b273] hover:text-[#1f1b15] transition-all">
              <IconChevronRight className="text-lg" />
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default MYREVIEWS;
