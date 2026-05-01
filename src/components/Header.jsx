import Container from "./Container";
import ButtonLink from "./ButtonLink";
import { navigationLinks } from "../data/homeContent";

export default function Header() {
  return (
    <header className="sticky top-0 z-[100] m-[3px] rounded-[10px] bg-header shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
      <Container className="flex flex-col items-center justify-between py-[15px] md:flex-row">
        <div className="text-[24px] font-bold text-primary">AutoElite</div>

        <nav>
          <ul className="mt-[15px] flex list-none flex-wrap justify-center md:mt-0">
            {navigationLinks.map((link) => (
              <li
                key={link}
                className="mx-[10px] my-[5px] md:my-0 md:ml-[20px] md:mr-0"
              >
                <a
                  href="#"
                  className="font-medium text-light no-underline transition-colors duration-300 hover:text-primary"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <ButtonLink href="#">Login</ButtonLink>
        </div>
      </Container>
    </header>
  );
}
