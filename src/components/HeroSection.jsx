import Container from "./Container";
import { Button } from "./ButtonLink";
import { heroBackground, searchFilters } from "../data/homeContent";

export default function HeroSection() {
  return (
    <section
      className="bg-cover bg-center pb-[70px] pt-[125px] text-center text-white sm:pt-[145px] md:pb-[120px] md:pt-[210px]"
      data-gsap-hero
      style={{
        backgroundImage: `linear-gradient(rgba(7,12,23,0.6), rgba(7,12,23,0.6)), url('${heroBackground}')`,
      }}
    >
      <Container>
        <h1
          className="mb-[20px] text-[1.8rem] leading-tight md:text-[2.5rem]"
          data-gsap-hero-item
        >
          Find Your Dream Car Today
        </h1>
        <p
          className="mx-auto mb-[30px] max-w-[700px] text-[1rem] sm:text-[1.1rem] md:text-[1.2rem]"
          data-gsap-hero-item
        >
          Browse thousands of quality vehicles with transparent pricing and
          hassle-free financing
        </p>

        <div
          className="mx-auto flex max-w-[800px] flex-col gap-[12px] rounded-[8px] bg-white p-[16px] sm:p-[20px] md:flex-row md:flex-wrap"
          data-gsap-hero-item
        >
          {searchFilters.map((filter) => (
            <select
              key={filter.key}
              defaultValue={filter.options[0]}
              className="min-w-0 flex-1 rounded-[4px] border border-[#ddd] p-[10px] text-secondary"
            >
              {filter.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ))}

          <Button variant="accent" className="w-full whitespace-nowrap md:w-auto">
            Search
          </Button>
        </div>
      </Container>
    </section>
  );
}
