import Container from "./Container";
import ButtonLink from "./ButtonLink";
import { routes } from "../utils/routes";

export default function CtaSection() {
  return (
    <section
      className="bg-gradient-to-r from-primary to-[#004d99] py-[60px] text-center text-white md:py-[80px]"
      data-gsap-section
    >
      <Container>
        <h2
          className="mb-[10px] text-[1.6rem] leading-tight md:text-[2rem]"
          data-gsap-section-item
        >
          Ready to Find Your Next Vehicle?
        </h2>
        <p data-gsap-section-item>
          Start browsing our inventory or get pre-approved for financing in
          minutes
        </p>

        <div
          className="mt-[30px] flex flex-col items-stretch gap-[14px] sm:items-center md:flex-row md:flex-wrap md:justify-center md:gap-[20px]"
          data-gsap-section-item
        >
          <ButtonLink to={routes.inventory} variant="inverse">
            Browse Inventory
          </ButtonLink>
          <ButtonLink to={routes.financing} variant="accent">
            Get Pre-Approved
          </ButtonLink>
          <ButtonLink to={routes.sellYourCar} variant="lightOutline">
            Sell Your Car
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
