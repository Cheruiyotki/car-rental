import Container from "../components/Container";
import PageCard from "../components/PageCard";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import ButtonLink from "../components/ButtonLink";
import { routes } from "../utils/routes";

const financingBenefits = [
  {
    title: "Fast Pre-Approval",
    text: "Start with a quick application process designed to save time and keep your options open.",
  },
  {
    title: "Flexible Terms",
    text: "We work with a range of lenders to help match budgets, loan lengths, and payment goals.",
  },
  {
    title: "Guided Support",
    text: "Our financing team walks you through rates, trade-ins, and next steps before you commit.",
  },
];

const steps = [
  {
    title: "1. Apply",
    text: "Share your basic details so we can begin matching financing options.",
  },
  {
    title: "2. Review",
    text: "Compare terms, payment ranges, and lender choices with help from our team.",
  },
  {
    title: "3. Choose",
    text: "Select the vehicle and financing path that best fits your needs.",
  },
];

export default function FinancingPage() {
  return (
    <>
      <PageHero
        title="Financing Made Simple"
        description="From first-time buyers to drivers upgrading their current vehicle, we help you explore financing options with clarity and confidence."
      >
        <ButtonLink to={routes.contact} variant="accent">
          Start Your Application
        </ButtonLink>
        <ButtonLink to={routes.inventory} variant="inverse">
          View Inventory
        </ButtonLink>
      </PageHero>

      <section className="py-[60px]">
        <Container>
          <SectionTitle
            title="Why Finance With AutoElite"
            subtitle="Support designed around speed, flexibility, and peace of mind"
          />

          <div className="mb-[50px] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[25px]">
            {financingBenefits.map((item) => (
              <PageCard key={item.title} title={item.title}>
                <p>{item.text}</p>
              </PageCard>
            ))}
          </div>

          <SectionTitle
            title="How It Works"
            subtitle="A straightforward path from application to approval"
          />

          <div className="mb-[50px] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[25px]">
            {steps.map((step) => (
              <PageCard key={step.title} title={step.title}>
                <p>{step.text}</p>
              </PageCard>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
