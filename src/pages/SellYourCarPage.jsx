import Container from "../components/Container";
import PageCard from "../components/PageCard";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import ButtonLink from "../components/ButtonLink";
import { routes } from "../utils/routes";

const sellingSteps = [
  {
    title: "1. Share Your Vehicle",
    text: "Tell us about the make, model, mileage, and condition of your current vehicle.",
  },
  {
    title: "2. Get An Offer",
    text: "Our team reviews the details and provides a fair, competitive market-based offer.",
  },
  {
    title: "3. Complete The Sale",
    text: "Accept the offer, finish the paperwork, and move forward on your timeline.",
  },
];

const sellerBenefits = [
  {
    title: "Transparent Appraisals",
    text: "We keep the valuation process simple and clear so you understand how your offer is built.",
  },
  {
    title: "Fast Turnaround",
    text: "From the first quote to final paperwork, we focus on saving you time.",
  },
  {
    title: "Trade-In Friendly",
    text: "Planning to upgrade? We can help apply your vehicle value toward your next purchase.",
  },
];

export default function SellYourCarPage() {
  return (
    <>
      <PageHero
        title="Sell Your Car"
        description="Get a straightforward selling experience with competitive offers, clear communication, and support at every step."
      >
        <ButtonLink to={routes.contact} variant="accent">
          Request An Appraisal
        </ButtonLink>
        <ButtonLink to={routes.inventory} variant="inverse">
          Browse Inventory
        </ButtonLink>
      </PageHero>

      <section className="bg-light py-[60px]" data-gsap-section>
        <Container>
          <SectionTitle
            data-gsap-section-item
            title="How Selling Works"
            subtitle="A simple process designed to keep things moving"
          />

          <div
            className="mb-[50px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] gap-[25px]"
            data-gsap-card-group
          >
            {sellingSteps.map((step) => (
              <PageCard key={step.title} title={step.title}>
                <p>{step.text}</p>
              </PageCard>
            ))}
          </div>

          <SectionTitle
            data-gsap-section-item
            title="Why Sellers Choose AutoElite"
            subtitle="Support that makes trading in or selling easier"
          />

          <div
            className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] gap-[25px]"
            data-gsap-card-group
          >
            {sellerBenefits.map((benefit) => (
              <PageCard key={benefit.title} title={benefit.title}>
                <p>{benefit.text}</p>
              </PageCard>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
