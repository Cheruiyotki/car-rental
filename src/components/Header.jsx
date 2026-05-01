import Container from "./Container";
import ButtonLink from "./ButtonLink";
import { navigationLinks } from "../data/homeContent";
import RouteLink from "./RouteLink";
import { routes } from "../utils/routes";

function getNavLinkClass(isActive) {
  return [
    "font-medium no-underline transition-colors duration-300",
    isActive ? "text-primary" : "text-light hover:text-primary",
  ].join(" ");
}

export default function Header({ currentPath }) {
  return (
    <header className="sticky top-0 z-[100] m-[3px] rounded-[10px] bg-header shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
      <Container className="flex flex-col items-center justify-between py-[15px] md:flex-row">
        <RouteLink
          to={routes.home}
          className="text-[24px] font-bold text-primary no-underline"
        >
          AutoElite
        </RouteLink>

        <nav aria-label="Primary navigation">
          <ul className="mt-[15px] flex list-none flex-wrap justify-center md:mt-0">
            {navigationLinks.map((link) => (
              <li
                key={link.path}
                className="mx-[10px] my-[5px] md:my-0 md:ml-[20px] md:mr-0"
              >
                <RouteLink
                  to={link.path}
                  className={getNavLinkClass(currentPath === link.path)}
                  aria-current={currentPath === link.path ? "page" : undefined}
                >
                  {link.label}
                </RouteLink>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <ButtonLink to={routes.login}>Login</ButtonLink>
        </div>
      </Container>
    </header>
  );
}
