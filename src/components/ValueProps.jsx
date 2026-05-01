import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { valueProps } from "../data/homeContent";

export default function ValueProps() {
  return (
    <section className="bg-light py-[60px]">
      <Container>
        <SectionTitle
          title="Why Choose AutoElite?"
          subtitle="We make car buying simple and stress-free"
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[30px]">
          {valueProps.map((item) => (
            <div key={item.title} className="p-[20px] text-center">
              <div className="mb-[15px] text-[2.5rem] text-primary">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
