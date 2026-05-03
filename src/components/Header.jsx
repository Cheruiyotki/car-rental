import { useEffect, useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentPath]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-[100] px-[3px] pt-[3px]">
      <Container className="rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-[rgba(23,20,43,0.82)] py-[12px] shadow-[0_2px_10px_rgba(0,0,0,0.18)] backdrop-blur-[10px] lg:py-[15px]">
        <div className="flex items-center justify-between gap-[12px]">
          <RouteLink
            to={routes.home}
            onClick={closeMenu}
            className="whitespace-nowrap text-[1.35rem] font-bold text-primary no-underline sm:text-[1.5rem]"
          >
            AutoElite
          </RouteLink>

          <nav className="hidden lg:block" aria-label="Primary navigation">
            <ul className="flex list-none flex-wrap justify-center">
              {navigationLinks.map((link) => (
                <li key={link.path} className="ml-[20px]">
                  <RouteLink
                    to={link.path}
                    className={getNavLinkClass(currentPath === link.path)}
                    aria-current={
                      currentPath === link.path ? "page" : undefined
                    }
                  >
                    {link.label}
                  </RouteLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden shrink-0 lg:block">
            <ButtonLink to={routes.login}>Login</ButtonLink>
          </div>

          <button
            type="button"
            className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-[4px] border border-[rgba(255,255,255,0.25)] bg-transparent text-white transition-colors duration-300 hover:border-primary hover:text-primary lg:hidden"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-[5px]" aria-hidden="true">
              <span
                className={[
                  "block h-[2px] w-[20px] rounded-full bg-current transition-transform duration-300",
                  isMenuOpen ? "translate-y-[7px] rotate-45" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              />
              <span
                className={[
                  "block h-[2px] w-[20px] rounded-full bg-current transition-opacity duration-300",
                  isMenuOpen ? "opacity-0" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              />
              <span
                className={[
                  "block h-[2px] w-[20px] rounded-full bg-current transition-transform duration-300",
                  isMenuOpen ? "-translate-y-[7px] -rotate-45" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              />
            </span>
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={isMenuOpen ? "block lg:hidden" : "hidden lg:hidden"}
        >
          <nav
            className="mt-[12px] border-t border-[rgba(255,255,255,0.12)] pt-[12px]"
            aria-label="Mobile navigation"
          >
            <ul className="grid list-none gap-[4px]">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <RouteLink
                    to={link.path}
                    onClick={closeMenu}
                    className={[
                      getNavLinkClass(currentPath === link.path),
                      "block rounded-[4px] px-[10px] py-[9px]",
                      currentPath === link.path
                        ? "bg-[rgba(255,255,255,0.12)]"
                        : "hover:bg-[rgba(255,255,255,0.08)]",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    aria-current={
                      currentPath === link.path ? "page" : undefined
                    }
                  >
                    {link.label}
                  </RouteLink>
                </li>
              ))}
            </ul>
          </nav>

          <ButtonLink
            to={routes.login}
            onClick={closeMenu}
            className="mt-[12px] w-full text-center"
          >
            Login
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
