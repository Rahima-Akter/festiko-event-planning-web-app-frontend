// Settings Component
const Settings = () => {
  return (
    <>
      <main className="flex-1 lg:ml-72 min-h-screen p-12 bg-[#2F2A24]">
        <div className="max-w-3xl mx-auto">
          
          {/* Header */}
          <header className="mb-12">
            <h1 className="font-headline text-5xl font-bold text-[#fcf2e8] tracking-tight mb-4 italic">
              Settings
            </h1>
            <p className="text-[#CEC6B5] font-body max-w-xl leading-relaxed">
              Refine your profile and security credentials to maintain the exclusivity of your account.
            </p>
          </header>

          <div className="space-y-12">
            
            {/* Profile Information Section */}
            <section className="bg-[#3D372F] p-10 rounded-xl border border-[#4b463a]/20">
              <h2 className="font-headline text-2xl font-bold mb-8 text-[#c8b273] italic">
                Profile Information
              </h2>

              <form className="space-y-8">
                
                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-[#CEC6B5]">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-[#433d34] border-none rounded-lg p-4 font-body text-[#fcf2e8] focus:ring-1 focus:ring-[#c8b273]/50 transition-all placeholder-[#CEC6B5]/40"
                    placeholder="Your full name"
                    type="text"
                    defaultValue="Alexander Montgomery"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-[#CEC6B5]">
                    Bio
                  </label>
                  <textarea
                    className="w-full bg-[#433d34] border-none rounded-lg p-4 font-body text-[#fcf2e8] focus:ring-1 focus:ring-[#c8b273]/50 transition-all resize-none placeholder-[#CEC6B5]/40"
                    placeholder="Share your event curation philosophy..."
                    rows={4}
                    defaultValue="Curator of intimate gatherings and high-fidelity sonic experiences. Based in London, traveling for the perfect atmosphere."
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-[#CEC6B5]">
                    Profile Image
                  </label>

                  <div className="flex items-center gap-6 mt-2">
                    <div className="h-24 w-24 rounded-full overflow-hidden bg-[#4b463a] ring-2 ring-[#c8b273]/20 p-1">
                      <img
                        alt="Profile Preview"
                        className="h-full w-full object-cover rounded-full"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOxJCqoUviAT-Lgaz094uY2PzXNShXy2X768lvZlPoYLg4sQSkfRNOm4l8UgrleF513J6WGz_BCMkNzltvbJXCqjJlD-2YSaOVhBDq-erwsDeO2dml5ancia28EEo3o0_f4wtpE1eRs6aCFjlJZkgSMKUelcSCgNrBmW6ILpxOlgOk2tmOf3MEGvKvZz2XTWfmpFIwt6b3QN8onOO9pdL_pOyCuntlBpt7kaDt2fXaCeRemUvV3qHB0iKzHasp6l6PNluYWYbEeOeb"
                      />
                    </div>

                    <div className="flex-1">
                      <input
                        className="block w-full text-xs text-[#CEC6B5] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-[10px] file:font-bold file:uppercase file:tracking-widest file:bg-[#c8b273]/10 file:text-[#c8b273] hover:file:bg-[#c8b273]/20 transition-all cursor-pointer"
                        type="file"
                      />
                      <p className="mt-2 text-[10px] text-[#CEC6B5]/60">
                        JPG, GIF or PNG. Max size of 2MB.
                      </p>
                    </div>
                  </div>
                </div>

              </form>
            </section>

            {/* Security Section */}
            <section className="bg-[#3D372F] p-10 rounded-xl border border-[#4b463a]/20">
              <h2 className="font-headline text-2xl font-bold mb-8 text-[#c8b273] italic">
                Security
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-[#CEC6B5]">
                    Current Password
                  </label>
                  <input
                    className="w-full bg-[#433d34] border-none rounded-lg p-4 font-body text-[#fcf2e8] focus:ring-1 focus:ring-[#c8b273]/50 transition-all"
                    type="password"
                    defaultValue="********"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-[#CEC6B5]">
                    New Password
                  </label>
                  <input
                    className="w-full bg-[#433d34] border-none rounded-lg p-4 font-body text-[#fcf2e8] focus:ring-1 focus:ring-[#c8b273]/50 transition-all"
                    placeholder="Enter new password......"
                    type="password"
                  />
                </div>

              </div>
            </section>

            {/* Save Actions */}
            <div className="flex justify-end items-center gap-10 pt-4">
              <button className="text-[#CEC6B5]/60 font-label text-[10px] uppercase tracking-[0.2em] font-bold hover:text-[#fcf2e8] transition-colors">
                Discard Changes
              </button>
              <button className="bg-[#c8b273] text-[#2F2A24] px-12 py-4 rounded-lg font-label text-[10px] uppercase tracking-[0.2em] font-bold shadow-xl shadow-[#c8b273]/20 hover:opacity-90 active:scale-[0.98] transition-all">
                Save Profile
              </button>
            </div>

          </div>
        </div>
      </main>
    </>
  );
};

export default Settings;