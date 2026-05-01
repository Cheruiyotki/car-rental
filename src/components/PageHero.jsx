import Container from "./Container";
import { heroBackground } from "../data/homeContent";

export default function PageHero({
  title,
  description,
  children,
  backgroundImage = heroBackground,
}) {
  return (
    <section
      className="bg-cover bg-center py-[70px] text-center text-white md:py-[100px]"
      data-gsap-hero
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('${backgroundImage}')`,
      }}
    >
      <Container>
        <h1
          className="mb-[20px] text-[2rem] md:text-[2.5rem]"
          data-gsap-hero-item
        >
          {title}
        </h1>
        <p
          className="mx-auto max-w-[760px] text-[1.1rem] md:text-[1.2rem]"
          data-gsap-hero-item
        >
          {description}
        </p>

        {children ? (
          <div
            className="mt-[30px] flex flex-col items-center gap-[15px] md:flex-row md:flex-wrap md:justify-center"
            data-gsap-hero-item
          >
            {children}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
