import Container from "./Container";
import { customerServiceLinks, quickLinks } from "../data/homeContent";
import RouteLink from "./RouteLink";

export default function Footer() {
  return (
    <footer className="bg-secondary pb-[30px] pt-[60px] text-white">
      <Container>
        <div className="mb-[40px] grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[30px]">
          <div>
            <h3 className="mb-[20px] text-[1.2rem]">AutoElite</h3>
            <p>Your trusted partner for buying and selling quality vehicles.</p>
          </div>

          <div>
            <h3 className="mb-[20px] text-[1.2rem]">Quick Links</h3>
            <ul className="list-none">
              {quickLinks.map((link) => (
                <li key={link.label} className="mb-[10px]">
                  {link.path ? (
                    <RouteLink
                      to={link.path}
                      className="no-underline text-[#ddd] transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </RouteLink>
                  ) : (
                    <a
                      href={link.href || "#"}
                      className="no-underline text-[#ddd] transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-[20px] text-[1.2rem]">Customer Service</h3>
            <ul className="list-none">
              {customerServiceLinks.map((link) => (
                <li key={link.label} className="mb-[10px]">
                  {link.path ? (
                    <RouteLink
                      to={link.path}
                      className="no-underline text-[#ddd] transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </RouteLink>
                  ) : (
                    <a
                      href={link.href || "#"}
                      className="no-underline text-[#ddd] transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-[20px] text-[1.2rem]">Contact Info</h3>
            <p className="mb-[16px]">
              1234 Auto Lane
              <br />
              Car City, CC 12345
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+15551234567"
                className="text-[#ddd] no-underline transition-colors duration-300 hover:text-white"
              >
                (555) 123-4567
              </a>
              <br />
              Email:{" "}
              <a
                href="mailto:info@autoelite.com"
                className="text-[#ddd] no-underline transition-colors duration-300 hover:text-white"
              >
                info@autoelite.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-[#555] pt-[20px] text-center">
          <p>&copy; 2023 AutoElite. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
