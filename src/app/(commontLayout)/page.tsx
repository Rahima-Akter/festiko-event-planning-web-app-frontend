import UpcomingEventsClient from "@/components/modules/home/client/upcomingEventsClient";
import CreateYourOwnEliteEventSection from "@/components/modules/home/createYourOwnEvent";
import HeroSection from "@/components/modules/home/heroSection";
import WhyFestikoSection from "@/components/modules/home/whyFestikoSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <WhyFestikoSection />
      <UpcomingEventsClient />
      <CreateYourOwnEliteEventSection />
    </div>
  );
};

export default HomePage;
