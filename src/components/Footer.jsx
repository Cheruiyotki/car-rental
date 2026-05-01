import Container from "./Container";
import { customerServiceLinks, quickLinks } from "../data/homeContent";

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
                <li key={link} className="mb-[10px]">
                  <a
                    href="#"
                    className="no-underline text-[#ddd] transition-colors duration-300 hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-[20px] text-[1.2rem]">Customer Service</h3>
            <ul className="list-none">
              {customerServiceLinks.map((link) => (
                <li key={link} className="mb-[10px]">
                  <a
                    href="#"
                    className="no-underline text-[#ddd] transition-colors duration-300 hover:text-white"
                  >
                    {link}
                  </a>
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
              Phone: (555) 123-4567
              <br />
              Email: info@autoelite.com
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
