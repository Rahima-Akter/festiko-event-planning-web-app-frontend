import { IconKey, IconMapPin, IconHeadset } from "@tabler/icons-react";

const WhyFestikoSection = () => {
  return (
    <>
      <section className="py-24 px-12 bg-[#ffffff] dark:bg-[#fff8f4]">
        <div className="max-w-360 mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#f6ece3] flex items-center justify-center mb-8">
              <IconKey className="text-[#6e5d27] text-3xl" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-[#1f1b15] mb-4">
              Exclusive Access
            </h3>
            <p className="font-body text-[#4b463a] leading-relaxed opacity-70">
              Unlock invitations to the world&apos;s most coveted private
              gatherings and member-only soirées.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#f6ece3] flex items-center justify-center mb-8">
              <IconMapPin className="text-[#6e5d27] text-3xl" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-[#1f1b15] mb-4">
              Premium Venues
            </h3>
            <p className="font-body text-[#4b463a] leading-relaxed opacity-70">
              Experience events hosted in historic palaces, modern masterpieces,
              and secret city hideaways.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#f6ece3] flex items-center justify-center mb-8">
              <IconHeadset className="text-[#6e5d27] text-3xl" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-[#1f1b15] mb-4">
              Personalized Concierge
            </h3>
            <p className="font-body text-[#4b463a] leading-relaxed opacity-70">
              Dedicated digital assistance for every detail of your event
              experience, from travel to tailoring.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyFestikoSection;
