import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import FeaturedVehicles from "../components/FeaturedVehicles";
import ValueProps from "../components/ValueProps";
import Testimonials from "../components/Testimonials";
import CtaSection from "../components/CtaSection";

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <FeaturedVehicles />
      <ValueProps />
      <Testimonials />
      <CtaSection />
    </Layout>
  );
}
