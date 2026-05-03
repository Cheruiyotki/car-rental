import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { testimonials } from "../data/homeContent";

export default function Testimonials() {
  return (
    <section className="bg-white py-[60px]" data-gsap-section>
      <Container>
        <SectionTitle
          data-gsap-section-item
          title="What Our Customers Say"
          subtitle="Don't just take our word for it"
        />

        <div
          className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[24px] md:gap-[30px]"
          data-gsap-card-group
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="rounded-[8px] bg-light p-[20px] shadow-[0_4px_8px_rgba(0,0,0,0.05)] sm:p-[25px]"
              data-gsap-card
            >
              <div className="mb-[20px] italic">{testimonial.text}</div>
              <div className="font-bold">- {testimonial.author}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
