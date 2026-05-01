import Container from "./Container";
import ButtonLink from "./ButtonLink";
import { routes } from "../utils/routes";

export default function CtaSection() {
  return (
    <section className="bg-gradient-to-r from-primary to-[#004d99] py-[80px] text-center text-white">
      <Container>
        <h2 className="mb-[10px] text-[2rem]">Ready to Find Your Next Vehicle?</h2>
        <p>
          Start browsing our inventory or get pre-approved for financing in
          minutes
        </p>

        <div className="mt-[30px] flex flex-col items-center gap-[20px] md:flex-row md:flex-wrap md:justify-center">
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
