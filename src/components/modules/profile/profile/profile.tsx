import Link from "next/link";
import { 
  IconCalendarEvent, 
  IconLocation, 
  IconEdit, 
  IconSparkles2 
} from '@tabler/icons-react';

const ProfilePage = () => {
  return (
    <div className="flex min-h-screen bg-[#2F2A24] text-[#F7F1E3] font-body">
      <main className="lg:ml-72 ml-0 pt-8 px-12 pb-20 w-full mx-auto">
        {/* Expanded Profile Header Section */}
          <div className="col-span-12">
            <h1 className="font-headline text-6xl font-bold tracking-tight text-[#F7F1E3] mb-6">
              Alexander <span className="text-[#C8B273] italic">Vance</span>
            </h1>
            <p className="text-[#A39580] max-w-2xl font-body text-lg leading-relaxed mb-8">
              An architect of atmospheres, Alexander Vance specializes in curating exclusive social intersections where art, gastronomy, and culture converge. With a focus on boutique gatherings and elite networking events, his portfolio is a testament to the art of the unforgettable.
            </p>
          </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-12 gap-5 mb-16">
          {/* Next Premiere (Large Feature) */}
          <div className="col-span-12 lg:col-span-8 relative overflow-hidden h-90 border border-[#ffffff]/5">
            <img 
              className="w-full h-full object-cover brightness-75 transition-transform duration-[2s] hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJbJPLatnbV6HSKNagEx5plBmPP_tEmuB2LUD9u10psVBuEzOJ89dspzOQy0L9ixvH3tlRy4Jln-7067cVWMtKzGyjnl-dLXEBNWuWgEW0Vd5ulK13ec1HvpiLTM-xLtcS9PdO32Jy9IIITJGqjGKFgR113_Em5Bg-4Jdfupe0cQyG2m9ePNpeF-LP_Q5SNCaNIUhGetUMDM9m7zfS2iFfBfEgGPUOLp8MMhwd0DlQikcFxyfQ_QLV4RfJbKK8MaSaRw_UFK45VEwY" 
              alt="Elegant evening gala event atmosphere" 
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#2F2A24]/95 via-[#2F2A24]/60 to-transparent flex items-center px-12">
              <div className="max-w-md">
                <span className="font-label text-[10px] uppercase tracking-[0.3em] text-[#C8B273] font-bold mb-4 block">Next Premiere</span>
                <h3 className="text-4xl font-headline text-[#ffffff] font-bold mb-6">The Midsummer Night&apos;s Gala</h3>
                <div className="flex gap-8 items-center text-[#b4a692] font-label text-xs uppercase tracking-widest">
                  <span className="flex items-center gap-2"><IconCalendarEvent size={16} className="text-[#C8B273]"/> June 24, 2024</span>
                  <span className="flex items-center gap-2"><IconLocation size={16} className="text-[#C8B273]"/> Paris, FR</span>
                </div>
                <button className="mt-8 px-8 py-3 bg-[#C8B273] text-[#ffffff] font-label text-[10px] uppercase tracking-widest font-bold hover:opacity-90 transition-opacity">Manage Event</button>
              </div>
            </div>
          </div>

          {/* Profile Summary / Stat Cards */}
          <div className="col-span-12 lg:col-span-4 grid grid-cols-2 gap-5">
            <div className="bg-[#6e5d27] p-8 flex flex-col justify-between border border-[#ffffff]/5">
              <IconCalendarEvent className="text-[#ffffff]" />
              <div>
                <span className="text-4xl font-headline font-bold block text-[#ffffff]">15</span>
                <span className="font-label text-[10px] uppercase tracking-widest text-[#ffffff]/70">Events Hosted</span>
              </div>
            </div>
            <div className="bg-[#3a342d] p-8 flex flex-col border border-[#ffffff]/5">
              <IconSparkles2 className="text-[#c8b273] mb-8" />
              <div>
                <span className="text-4xl font-headline font-bold block text-[#ffffff]">4.9</span>
                <span className="font-label text-[10px] uppercase tracking-widest text-[#ffffff]">Rating</span>
              </div>
            </div>
            <div className="col-span-2 bg-[#3a342d] p-8 flex items-center justify-between border border-[#ffffff]/5">
              <div>
                <span className="font-label text-[10px] uppercase tracking-widest text-[#ada384] font-bold block mb-2">Member Since</span>
                <span className="text-2xl font-headline font-bold text-[#ffffff]">Nov 2021</span>
              </div>
              <IconEdit className="text-[#ffffff] hover:text-[#6e5d27] transition-colors" />
            </div>
          </div>
        </div>

        {/* Recent Reviews */}
        <section className="mb-20">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="font-headline text-3xl font-bold mb-2">Recent Appraisals</h2>
              <p className="text-[#baa677] text-sm">Feedback from the last quarterly season.</p>
            </div>
            <Link href="#" className="font-label text-xs uppercase tracking-widest text-[#b9aa79] font-bold hover:underline">View All</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Review Card 1 */}
            <div className="bg-[#3a342d] p-8 border border-[#ffffff]/5 flex gap-6">
              <div className="w-12 h-12 rounded-md bg-[#ebe1d7] overflow-hidden shrink-0">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwKYX4rRHEROOxxKQshvfLc7bhE8oQzX9XI6cFW7spURHwZADCsCZd8_i0mQuDKANLyJEkMONTxlfr-pFz5Ibf1kL1B39AjZFN2XTAl0gAZX4bM2hma7EmoMnyAexEDF_y2UMNgvKSqrsgIq48yqVzRowtzPBnA4EOK59-Fr5y2fFn07_pNylFxW4IpmUe7QoyhigDDwOb7OaDBSnktj2Cq_jFZyhjnLVIpfG4WLM6fTEFyCz5UzG3zoAcXPZgOW-C257-ggy-B3x_" alt="Sophia Chen"/>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-headline font-bold">Sophia Chen</span>
                  <span className="text-[#a89145] text-[10px]">★★★★★</span>
                </div>
                <p className="text-[#baa97d] font-body italic text-sm leading-relaxed">
                  &apos;Alexande&apos;s attention to detail during the Yacht Soirée was unparalleled. Truly a masterclass in hospitality.&apos;
                </p>
              </div>
            </div>
            {/* Review Card 2 */}
            <div className="bg-[#3a342d] p-8 border border-[#ffffff]/5 flex gap-6">
              <div className="w-12 h-12 rounded-md bg-[#ebe1d7] overflow-hidden shrink-0">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQnkQXEJZcrzsMfUH-Zxe2hv-tiN3KA_qHBgcetEpFWsLRwp_uAmzPKMmm3Sb3uFkFFOhrWAtMxk2RaczFC0IsrL7AWLvGUp0RreBrFIRIZMteVKhOFZYWOF22oU4jfkfyp5UdEqyhKrcDpIeo2JMdscNvuJGzObaK-o9EZnrqLzbJdCkCae5ectDvn1GhPbcWTPfE5SM2s0lTuA4zMjE27LuOSxOWFTiORM_6thNt8pl2DG4v5tbzo9LUOBE0k8tL7h6IZ8--4yas" alt="Julian Rossi"/>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-headline font-bold">Julian Rossi</span>
                  <span className="text-[#a89145] text-[10px]">★★★★★</span>
                </div>
                <p className="text-[#baa97d] font-body italic text-sm leading-relaxed">
                  &apos;The curation of the private gallery view exceeded all expectations. Every element felt bespoke.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Spotlight Section */}
        <section>
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-headline text-3xl font-bold">Portfolio Highlights</h2>
            <div className="h-px grow mx-12 bg-[#ffffff]/10"></div>
            <button className="bg-[#6e5d27] px-6 py-2 text-[#ffffff] font-label text-[10px] uppercase tracking-widest font-bold">Add Project</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Portfolio Card 1 */}
            <div className="space-y-4 group">
              <div className="aspect-[4/5] bg-[#f6ece3] overflow-hidden border border-[#ffffff]/5 grayscale hover:grayscale-0 transition-all duration-700">
                <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr_tXBpzMTVFBhGpxRS-_3NohuAaJO_xTOMC9iwSjlmLeEucqKkpCVlvYMsBHsg-wHH0g8frngpWvXcZUTixkFbzUulFh1ugoH0kfCJkgO1R3KwM-5c-coHawrIVY6XtnQrprA7tN8uW8G0EhXTZHH3X1xMAjKKnGLfaWDUv0QskXRBxSj1LDDOROlyEK7LoADOZNghi8SfHzSc4u8TFW89BRsy8OMt2SwqLnSvlhYYOb85-rPdJ5oXSk4q2dhDrMtkINAfKfLTuTx" alt="High-end culinary presentation"/>
              </div>
              <h4 className="font-headline text-xl font-bold group-hover:text-[#ebc752] transition-colors">Artisan Dining Series</h4>
              <p className="font-body text-[#b3a380] text-sm">A 12-course immersive experience featuring avant-garde textures.</p>
            </div>
            {/* Portfolio Card 2 */}
            <div className="space-y-4 translate-y-8 group">
              <div className="aspect-[4/5] bg-[#f6ece3] overflow-hidden border border-[#ffffff]/5 grayscale hover:grayscale-0 transition-all duration-700">
                <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkGGeaRxSteI1TIjTQufCD0-70e2fnHl5vswO-LOn8NVHsAz_d1gWiLlbQfqZDjsXw51WpfcqkxmdUlmivmNZDhEkXUEDgzfOxnmeqD3h687oGnLoh4S6qTHrtWXYNdZdaWKVZ-i1IK0mTBHtLuzXlhL3H7bg3Whaj_cxZOyPo3HP06GvPmE2FUzDpsTPkcPvaThN3aZWkqwAk7oAzwZCiLNbDwaG61tSSF-it2bfy_vLrAh7cfiY0RMroJwKuVV610YAiHRvHukSf" alt="Luxury performance theater"/>
              </div>
              <h4 className="font-headline text-xl font-bold group-hover:text-[#ebc752] transition-colors">The Silent Opera</h4>
              <p className="font-body text-[#b3a380] text-sm">Private performance for selective patrons at the Marble Hall.</p>
            </div>
            {/* Portfolio Card 3 */}
            <div className="space-y-4 group">
              <div className="aspect-[4/5] bg-[#f6ece3] overflow-hidden border border-[#ffffff]/5 grayscale hover:grayscale-0 transition-all duration-700">
                <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs9O-iIiui1jyD9yMaw0I1r8DHspPNdLoV_GC9ynYOltP9QT2NDjOzYPv-YlLwRDa9RdtZ5GipGM4fqVWPu4JjV__UsZtpxq2AER7q_rvG20iAeh5Ac3_uUBa2Def-HIhrEucpyQKd_7YEPzRchFz7bZBH0ZVu_NjRo2IlkMtsFxw9SgJR7KfCphEF7xwwJaWHg8bthgR8pDtyH2sAVNbz-Q51TnTOEzvV2PY4YPFr-GrfseuFfTKAhYk09FmNhJ47iSbtPvb5Fc9s" alt="Elegant garden party at twilight"/>
              </div>
              <h4 className="font-headline text-xl font-bold group-hover:text-[#ebc752] transition-colors">Noir Garden Party</h4>
              <p className="font-body text-[#b3a380] text-sm">Minimalist aesthetic meet organic luxury in the heart of the city.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;