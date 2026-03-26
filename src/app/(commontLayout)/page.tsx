import CreateYourOwnEliteEventSection from "@/components/modules/home/createYourOwnEvent";
import FreePublicEventsSection from "@/components/modules/home/freePublicEvents";
import HeroSection from "@/components/modules/home/heroSection";
import UpcomingEventsSection from "@/components/modules/home/upcomingEvents";
import WhyFestikoSection from "@/components/modules/home/whyFestikoSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <WhyFestikoSection />
      <UpcomingEventsSection />
      <FreePublicEventsSection />
      <CreateYourOwnEliteEventSection />
    </div>
  );
};

export default HomePage;
