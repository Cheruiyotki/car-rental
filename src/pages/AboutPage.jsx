import Container from "../components/Container";
import PageCard from "../components/PageCard";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import ButtonLink from "../components/ButtonLink";
import { routes } from "../utils/routes";

const values = [
  {
    title: "Transparency First",
    text: "We keep pricing, inspections, and financing details clear so every customer can shop with confidence.",
  },
  {
    title: "Quality Standards",
    text: "Each vehicle goes through a careful inspection process before it ever reaches our featured inventory.",
  },
  {
    title: "Customer Care",
    text: "From your first question to final delivery, our team stays focused on a smooth and stress-free experience.",
  },
];

const stats = [
  { title: "10+ Years", text: "Helping drivers find reliable vehicles." },
  { title: "5,000+", text: "Successful purchases and trade-ins completed." },
  { title: "Top Rated", text: "Trusted service backed by repeat customers." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About AutoElite"
        description="AutoElite was built to make car buying and selling easier, clearer, and more customer-focused without losing the personal touch."
      >
        <ButtonLink to={routes.inventory} variant="accent">
          Explore Inventory
        </ButtonLink>
        <ButtonLink to={routes.contact} variant="lightOutline">
          Talk To Our Team
        </ButtonLink>
      </PageHero>

      <section className="py-[60px]" data-gsap-section>
        <Container>
          <div className="grid gap-[30px] md:grid-cols-[1.2fr_0.8fr]">
            <div
              className="rounded-[8px] bg-light p-[30px] shadow-[0_4px_8px_rgba(0,0,0,0.05)]"
              data-gsap-section-item
            >
              <h2 className="mb-[15px] text-[2rem] text-secondary">
                Built Around Trust
              </h2>
              <p className="mb-[16px]">
                We started AutoElite with one goal: create a dealership
                experience that feels modern, honest, and convenient. That
                means better vehicle selection, flexible financing, and support
                that feels personal from start to finish.
              </p>
              <p>
                Whether you are upgrading your daily driver, buying your first
                SUV, or selling your current vehicle, we aim to make each step
                straightforward and comfortable.
              </p>
            </div>

            <div className="grid gap-[20px]" data-gsap-card-group>
              {stats.map((stat) => (
                <PageCard key={stat.title} title={stat.title}>
                  <p>{stat.text}</p>
                </PageCard>
              ))}
            </div>
          </div>

          <SectionTitle
            data-gsap-section-item
            title="Our Core Values"
            subtitle="The standards that guide every interaction"
          />

          <div
            className="mb-[50px] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[25px]"
            data-gsap-card-group
          >
            {values.map((value) => (
              <PageCard key={value.title} title={value.title}>
                <p>{value.text}</p>
              </PageCard>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
