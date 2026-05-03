import Container from "./Container";
import PageCard from "./PageCard";
import PageHero from "./PageHero";
import SectionTitle from "./SectionTitle";

export default function InfoPage({
  title,
  description,
  sections,
  subtitle = "Helpful information from the AutoElite team",
}) {
  return (
    <>
      <PageHero title={title} description={description} />

      <section className="py-[60px]" data-gsap-section>
        <Container>
          <SectionTitle
            title={title}
            subtitle={subtitle}
            data-gsap-section-item
          />

          <div
            className="mb-[40px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-[25px]"
            data-gsap-card-group
          >
            {sections.map((section) => (
              <PageCard key={section.title} title={section.title}>
                <p>{section.text}</p>
              </PageCard>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
