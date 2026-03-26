const FreePublicEventsSection = () => {
  return (
    <>
      <section className="py-24 px-12 bg-[#ffffff]">
        <div className="max-w-360 mx-auto">
          <div className="mb-16">
            <h2 className="font-headline text-4xl text-[#1f1b15] font-semibold mb-2">
              Free Public Events
            </h2>
            <p className="font-body text-[#4b463a] opacity-70">
              Experience elegance without boundaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group flex flex-col h-full">
                <div className="relative overflow-hidden aspect-video mb-6 rounded-sm shadow-md">
                  <img
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    src={
                      i === 1
                        ? "https://lh3.googleusercontent.com/aida-public/AB6AXuAqNDBIOYncUUo57QLhWEUhCIDXTPtHplg5gsJMKVmVtMuSME3Rs3_zcOhcgCwdvsI9f4YA3YDVa6_zntLiaHv_Leb2wJuN7ovpZWj12QwNicZAOJKng6hNJmEfImmkXd6fD6eg1BvqrHN3AFEAeOu9wYSHNdbLsnPynYR1Hd6pXEZ_eYQ_hWUgxecFBYxbSuTjuM2Oefn1sVphPKgj_1oXM-ZbFu-0wmlPk-R3xJw7ARFsZitpZdVAmABHC5hSozWD8saBmTuEQwe8"
                        : i === 2
                          ? "https://lh3.googleusercontent.com/aida-public/AB6AXuCSrNUlLQ0HBDQ94iWQxKlzCxAbxCMoohWudVRPFXaGgGe9L0F05dwsRC7e68t0La2utZQ1jJZ4DGamAoQpghZcQqV7aVZscdWbgnQh5NJGva-QaWr7dP32-sQ_JmGj8E0FWX7PtWFpkpZDkZQU1-KKCT_cnYI50OdmQ506wmaYG2Vpxi0C2uNK9-EgUCklcCv3STMOzIkWDOhUZg73Az_laYPfS3S1yZZNWllf_nsM9jcV-hiqgZhnMKPOhrMyUdTnMaqO7T2vhTQj"
                          : "https://lh3.googleusercontent.com/aida-public/AB6AXuCCjDZ0yjweW96DOueq6m937BlAOKJWNMHRtMnr5ihQgW2i83mQKBi8m5QQkfmRzPXjVNt-UYpRfy7lQ5W6fSLwqjhlgfiMgEA4N4g67cqwAAl5Jy9sMN5pqX6WzmNNR3A2nejmWKeQd6AzA-7NYhkInvSmotqD4A9upUxwfrKtRjUX292ZUf4813k3hdtE-ya7Piarq5QZ-p2cq1mxLLzmTiR-gV8zTQDFl-TTJGRAXvSVmj2tWyWUar9MutHnJZobjIT1GGP2yEHO"
                    }
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
                </div>

                <div className="flex flex-col grow">
                  <p className="font-label text-[10px] uppercase tracking-widest text-[#6e5d27] mb-2">
                    {i === 1
                      ? "March 12 • Barcelona"
                      : i === 2
                        ? "March 25 • Berlin"
                        : "April 05 • Vienna"}
                  </p>
                  <h3 className="font-headline text-2xl font-bold text-[#1f1b15] mb-3 italic">
                    {i === 1
                      ? "Mediterranean Jazz Night"
                      : i === 2
                        ? "Modernist Mural Tour"
                        : "Classical Echoes Festival"}
                  </h3>
                  <p className="font-body text-sm text-[#4b463a] leading-relaxed opacity-80 mb-6 line-clamp-2">
                    {i === 1
                      ? "An open-air evening of contemporary jazz overlooking the shimmering Mediterranean coast."
                      : i === 2
                        ? "A curated walking tour through the city's newest and most provocative architectural artworks."
                        : "The city's finest string ensemble performs timeless masterpieces in the historic Royal Gardens."}
                  </p>
                  <div className="mt-auto">
                    <button className="w-full py-4 border border-[#6e5d27] text-[#6e5d27] font-label text-xs uppercase tracking-widest font-bold hover:bg-[#6e5d27] hover:text-[#ffffff] transition-all duration-300">
                      Join Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FreePublicEventsSection;
