import { IconStar, IconMapPin, IconCreditCard, IconTicket, IconChevronLeft, IconChevronRight, IconSparkles, IconChefHat } from "@tabler/icons-react";

// Invitations Component
const Invitations = () => {

  const invitations = [
    {
      title: "The Midnight Gala",
      type: "Paid Event",
      badgeColor: "#C8B273",
      badgeTextColor: "#2F2A24",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCj7Ea8SqDy6R56Mz7Xre1mrhd2azxLcHq0peVpqDVDWAzmfCDgpl8dLlsaOuL2jIWstQntoEmZfMMvrwat36UNX_8YjV0_I0VCF6YgGi1b-CEnOlfiz_-bY2fVMcUxd5iV70ImcBgpcwzJnJmcKnxrYvnIfFyCJV6i9Mn5Rh0ijL70HpAoE6nT4YFmJiuFcvhCStgLVSZK4ZJ9m7I7E79_vRwhu9u_tolXEG0ci7Kim1WDDbFaXfCoM8Kt175sRWiG3WwUNdKTes-O",
      tag: "VIP Access",
      icon: <IconStar size={14} />,
      date: "Oct 24",
      time: "21:00 PM",
      location: "Grand Asteria Pavilion, Paris",
      price: "$450.00",
      host: "Julian Rossi",
      hostImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMBYvHp_o8WkOD3haNvGabj2SJ_pWymkLvm1NagqwnCCcI-kowdgZ69qzhIrEeiYUm9EnUif7N_9Jy9HyGtzySUbkmT12rPKwX4EuVMhbCZxMlTETvdwTsDGWIJ-PeZ1EEDbudFFzfPKJJQIgA9CvPm6vu-undR9ejNIl6xlrmTZzINHFfPnGyhK4sWN9gVL-iF-uguhnjDIHgDfMKZEVQOvPvU3CS6WtMcVorTmLmuiCogHQQP_gt0NAIxeUcj_LcQnEuRd2i6AC3",
      paid: true
    },
    {
      title: "Aperture: Solo Exhibition",
      type: "Private Invite",
      badgeColor: "#6a5e38",
      badgeTextColor: "#ffffff",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAotUBzqOEzSgfXJjk9kl5e2ITea3NzCWPjJwab5t9meFtpbeZ_nD1tqHZMRs_n_-ZS7ymMpyzKfVpb3GENrB7nXdLSjPqZh0ZlElhelJL0acZA19v6op3Q4TfZ7Ix9jThyzkvgm1ny-fpKF64h0NVDuvaY9o7DOlrmOUwsXu6wf-qqj2BDkqEF95sKpOC4bFxi1_O_-66itDnPA2TaVdOJmq42JGrmtVH5KOoPvFbkXNDjPhQJGUfztsafUZQpB0G5GPYlM9p8zl5T",
      tag: "Guest List",
      icon: <IconTicket size={14} />,
      date: "Nov 02",
      time: "18:00 PM",
      location: "The Velvet Atelier, Chelsea",
      host: "Elena Moretti",
      hostImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY1QOuqSBYXwIly4CEA82qXDXsOwkC2UHnARQ5te0kQ7TTjfq9GhSmtM_xBgpKQ5MBClQ2p2w04nBeFo6-c5qapY3n6HopEuly7W1x6ut4n9hvSVaMushVmMcl4v3kjcLKITeczISlSkahfy1y8U7Z3mf_0150m89enMwseTllGNUZ9lrvwddeI1yHkyctPo1hX8P0yj11hvV2_-VYoqOPPOvlCDf5GFMtN8q8qnVTJQ1j9cXvTCWWeufwT1pidc1unWx1f6yZsNsj",
      paid: false
    },
    {
      title: "Estate Noir Tasting",
      type: "Paid Event",
      badgeColor: "#C8B273",
      badgeTextColor: "#2F2A24",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ-xscuCH10fa-jpYcTzeaujb3AUwxe92SELW7km3lfpx-wFDsy0goxiyg-lBhlZky8Pf0X2aTfr8Lqn5lXeZN7FMDaXbF30z3sL5rnOcPAiBClhkEsz7pCtiZKJ50hdASZTjuztKEX4iy_AEidOu0eKaC7IrD0QOjCoHvglKr3Kg9PCgbwFDswJutVjXPRIMwfnbNXL-4fudTkaSud5EWIliqDaxhyHL5_buagIlYDhqfbffbAJG5BL2_g8_gglNX_AfgRGsXSfBZ",
      tag: "Full Experience",
      icon: <IconChefHat size={14} />,
      date: "Nov 15",
      time: "16:30 PM",
      location: "Bordeaux Ridge Estates",
      price: "$125.00",
      host: "Sarah Jenkins",
      hostImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLXYIicd2rcouSMli26cOW4I7Cpb5TXF-ipr7vjpL1Y1nbBgLZCnN3_576cTEItA9FfKuwW5pOELy0Tf_0Gjlv-1xWcWOkLgC3Ad4F2l8z1kA2rCp1l__XhRelS7OAhzkOa5pyzqqgpK9pgpz6FJSNrzNE_v6Q3triA005zUh8VPlTLsqF2ipWqrfA0Gmr7-DfvxUaWXN0bJlvxfrMPwOvOG5cNddEuyMyco0Us36uk2daE2t4mO5KPmemyiFAIveYuNT5vYH6eu70",
      paid: true
    }
  ];

  return (
    <>
      <main className="lg:ml-72 flex-1 pt-16 px-12 pb-5 bg-[#2F2A24]">

        {/* Header */}
        <header className="mb-16 max-w-5xl mx-auto">
          <h1 className="font-headline text-6xl font-bold tracking-tight text-[#F7F1E3] mb-6">
            Pending <span className="text-[#C8B273] italic">Invitations</span>
          </h1>
          <p className="font-body text-[#A39580] text-lg leading-relaxed max-w-2xl">
            You have 3 curated experiences awaiting your response.
          </p>
          <div className="w-24 h-[2px] bg-[#C8B273] mt-8"></div>
        </header>

        {/* Cards */}
        <div className="max-w-5xl mx-auto space-y-8">
          {invitations.map((item, i) => (
            <div key={i} className="group relative flex flex-col md:flex-row bg-[#3A342D] border border-white/5 overflow-hidden transition-all duration-500 hover:border-[#C8B273]/30">

              <div className="md:w-[400px] h-64 md:h-auto relative overflow-hidden">
                <img src={item.image} className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute top-0 left-0 px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-bold" style={{ backgroundColor: item.badgeColor, color: item.badgeTextColor }}>
                  {item.type}
                </div>
              </div>

              <div className="flex-1 p-10 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-headline text-3xl font-bold text-[#F7F1E3] mb-2">{item.title}</h3>
                      <div className="flex items-center gap-2 text-[#C8B273] uppercase tracking-[0.2em] text-[10px] font-bold">
                        {item.icon}
                        {item.tag}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-headline text-2xl font-bold text-[#F7F1E3]">{item.date}</p>
                      <p className="text-[10px] uppercase tracking-widest text-[#A39580] font-medium">{item.time}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-8 mb-8 text-[#A39580]">
                    <div className="flex items-center gap-2">
                      <IconMapPin size={18} className="text-[#C8B273]" />
                      <span className="text-sm font-medium">{item.location}</span>
                    </div>
                    {item.price && (
                      <div className="flex items-center gap-2">
                        <IconCreditCard size={18} className="text-[#C8B273]" />
                        <span className="text-sm font-medium">{item.price}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-4 mb-5 p-4 bg-[#453F36]/30 rounded border border-white/5">
                    <img src={item.hostImg} className="w-10 h-10 rounded-full object-cover grayscale" />
                    <p className="text-sm italic text-[#A39580]">
                      Invited by <span className="font-bold text-[#F7F1E3]">{item.host}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button className="bg-[#C8B273] text-[#2F2A24] px-8 py-4 text-[10px] uppercase tracking-widest font-bold hover:opacity-90 transition-all flex items-center gap-2">
                    {item.paid && <IconCreditCard size={16} />}
                    {item.paid ? "Pay & Accept" : "Accept Invitation"}
                  </button>
                  <button className="bg-[#453F36] text-[#F7F1E3] px-8 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-[#453F36] transition-all">
                    Decline
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 max-w-5xl mx-auto flex items-center justify-between py-8 border-t border-white/10">
          <button className="text-[#A39580] hover:text-[#C8B273] flex items-center gap-2 transition-colors">
            <IconChevronLeft size={16} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Previous</span>
          </button>

          <div className="flex items-center gap-4">
            <button className="w-8 h-8 flex items-center justify-center bg-[#C8B273] text-[#2F2A24] text-xs font-bold rounded-sm">1</button>
            <button className="w-8 h-8 flex items-center justify-center text-[#A39580] hover:text-[#C8B273] text-xs font-bold transition-colors">2</button>
            <button className="w-8 h-8 flex items-center justify-center text-[#A39580] hover:text-[#C8B273] text-xs font-bold transition-colors">3</button>
          </div>

          <button className="text-[#A39580] hover:text-[#C8B273] flex items-center gap-2 transition-colors text-right">
            <span className="text-[10px] font-bold uppercase tracking-widest">Next</span>
            <IconChevronRight size={16} />
          </button>
        </div>

        {/* Footer */}
        {/* <div className="mt-20 text-center opacity-30 text-[#F7F1E3]">
          <IconSparkles size={32} className="mb-4 block text-[#C8B273] mx-auto" />
          <p className="font-label uppercase tracking-[0.3em] text-[10px]">
            End of pending curated experiences
          </p>
        </div> */}

      </main>
    </>
  );
};

export default Invitations;