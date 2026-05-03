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
      className="bg-cover bg-center pb-[70px] pt-[125px] text-center text-white sm:pt-[145px] md:pb-[120px] md:pt-[210px]"
      data-gsap-hero
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('${backgroundImage}')`,
      }}
    >
      <Container>
        <h1
          className="mb-[20px] text-[1.8rem] leading-tight md:text-[2.5rem]"
          data-gsap-hero-item
        >
          {title}
        </h1>
        <p
          className="mx-auto max-w-[760px] text-[1rem] sm:text-[1.1rem] md:text-[1.2rem]"
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
