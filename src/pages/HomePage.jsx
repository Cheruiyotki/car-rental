import HeroSection from "../components/HeroSection";
import FeaturedVehicles from "../components/FeaturedVehicles";
import ValueProps from "../components/ValueProps";
import Testimonials from "../components/Testimonials";
import CtaSection from "../components/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedVehicles />
      <ValueProps />
      <Testimonials />
      <CtaSection />
    </>
  );
}
