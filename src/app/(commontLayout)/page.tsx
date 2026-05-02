import UpcomingEventsClient from "@/components/modules/home/client/upcomingEventsClient";
import CreateYourOwnEliteEventSection from "@/components/modules/home/createYourOwnEvent";
import HeroSection from "@/components/modules/home/heroSection";
import HowItWorks from "@/components/modules/home/howItWorks";
import Testimonials from "@/components/modules/home/testimonials";
import WhyFestikoSection from "@/components/modules/home/whyFestikoSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <WhyFestikoSection />
      <UpcomingEventsClient />
      <HowItWorks />
      <Testimonials />
      <CreateYourOwnEliteEventSection />
    </div>
  );
};

export default HomePage;
