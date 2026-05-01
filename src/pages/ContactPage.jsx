import Container from "../components/Container";
import PageCard from "../components/PageCard";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import { Button } from "../components/ButtonLink";

const contactDetails = [
  {
    title: "Visit Us",
    text: "1234 Auto Lane, Car City, CC 12345",
  },
  {
    title: "Call Us",
    text: "(555) 123-4567",
  },
  {
    title: "Email Us",
    text: "info@autoelite.com",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact AutoElite"
        description="Questions about a vehicle, financing, or selling your car? Reach out and our team will help you get started."
      />

      <section className="py-[60px]">
        <Container>
          <SectionTitle
            title="Get In Touch"
            subtitle="Choose the contact method that works best for you"
          />

          <div className="mb-[40px] grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[25px]">
            {contactDetails.map((item) => (
              <PageCard key={item.title} title={item.title}>
                <p>{item.text}</p>
              </PageCard>
            ))}
          </div>

          <div className="grid gap-[30px] md:grid-cols-[1.1fr_0.9fr]">
            <form
              className="rounded-[8px] bg-light p-[30px] shadow-[0_4px_8px_rgba(0,0,0,0.05)]"
              onSubmit={(event) => event.preventDefault()}
            >
              <h3 className="mb-[20px] text-[1.5rem]">
                Send Us a Message
              </h3>
              <div className="mb-[15px] grid gap-[15px] md:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="rounded-[4px] border border-[#ddd] bg-white p-[12px] text-secondary placeholder:text-[#666]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="rounded-[4px] border border-[#ddd] bg-white p-[12px] text-secondary placeholder:text-[#666]"
                />
              </div>
              <div className="mb-[15px] grid gap-[15px] md:grid-cols-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-[4px] border border-[#ddd] bg-white p-[12px] text-secondary placeholder:text-[#666]"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="rounded-[4px] border border-[#ddd] bg-white p-[12px] text-secondary placeholder:text-[#666]"
                />
              </div>
              <textarea
                rows="6"
                placeholder="How can we help you?"
                className="mb-[20px] w-full rounded-[4px] border border-[#ddd] bg-white p-[12px] text-secondary placeholder:text-[#666]"
              />
              <Button variant="accent" type="submit">
                Submit Inquiry
              </Button>
            </form>

            <PageCard title="Business Hours" className="h-fit">
              <p className="mb-[12px]">Monday - Friday: 9:00 AM - 7:00 PM</p>
              <p className="mb-[12px]">Saturday: 10:00 AM - 6:00 PM</p>
              <p className="mb-[20px]">Sunday: 11:00 AM - 4:00 PM</p>
              <p>
                Stop by for a showroom visit, a trade-in appraisal, or help
                with financing options.
              </p>
            </PageCard>
          </div>
        </Container>
      </section>
    </>
  );
}
