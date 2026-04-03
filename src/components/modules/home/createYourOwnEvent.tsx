import { IconArrowRight } from "@tabler/icons-react";
import image from "@/assets/home-3.jpg";
import Image from "next/image";
const CreateYourOwnEliteEventSection = () => {
  return (
    <>
      <section className="py-32 bg-[#fcf2e8] px-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-square relative">
              <Image
                src={image}
                alt="artistic image"
                fill
                className="object-cover rounded shadow-2xl hover:grayscale transition-all duration-1000"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-[#6e5d27] mb-6 block">
              Host Excellence
            </span>
            <h2 className="font-headline text-5xl font-bold text-[#1f1b15] leading-tight mb-8">
              Create your own elite event
            </h2>
            <p className="font-body text-lg text-[#4b463a] mb-12 leading-relaxed">
              Access our suite of professional event management tools. From
              bespoke invitation design to secure ticketing and guest-list
              curation, Festiko provides the digital infrastructure for
              unforgettable experiences.
            </p>
            <button className="flex items-center gap-4 px-12 py-6 bg-[#6e5d27] text-[#ffffff] font-label text-sm uppercase tracking-widest font-bold group">
              Start Planning
              <IconArrowRight className="transition-transform group-hover:translate-x-2" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateYourOwnEliteEventSection;
