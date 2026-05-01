import { useState } from "react";
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
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = `AutoElite Inquiry from ${formValues.firstName} ${formValues.lastName}`.trim();
    const body = [
      `First Name: ${formValues.firstName}`,
      `Last Name: ${formValues.lastName}`,
      `Email: ${formValues.email}`,
      `Phone: ${formValues.phone}`,
      "",
      "Message:",
      formValues.message,
    ].join("\n");

    window.location.href = `mailto:info@autoelite.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <PageHero
        title="Contact AutoElite"
        description="Questions about a vehicle, financing, or selling your car? Reach out and our team will help you get started."
      />

      <section className="py-[60px]" data-gsap-section>
        <Container>
          <SectionTitle
            data-gsap-section-item
            title="Get In Touch"
            subtitle="Choose the contact method that works best for you"
          />

          <div
            className="mb-[40px] grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[25px]"
            data-gsap-card-group
          >
            {contactDetails.map((item) => (
              <PageCard key={item.title} title={item.title}>
                <p>{item.text}</p>
              </PageCard>
            ))}
          </div>

          <div className="grid gap-[30px] md:grid-cols-[1.1fr_0.9fr]">
            <form
              className="rounded-[8px] bg-light p-[30px] shadow-[0_4px_8px_rgba(0,0,0,0.05)]"
              onSubmit={handleSubmit}
              data-gsap-section-item
            >
              <h3 className="mb-[20px] text-[1.5rem]">
                Send Us a Message
              </h3>
              <div className="mb-[15px] grid gap-[15px] md:grid-cols-2">
                <label className="block text-secondary">
                  <span className="mb-[6px] block text-[0.95rem] font-semibold">
                    First Name
                  </span>
                  <input
                    type="text"
                    name="firstName"
                    autoComplete="given-name"
                    required
                    value={formValues.firstName}
                    onChange={handleChange}
                    className="w-full rounded-[4px] border border-[#ddd] bg-white p-[12px] text-secondary placeholder:text-[#666]"
                  />
                </label>
                <label className="block text-secondary">
                  <span className="mb-[6px] block text-[0.95rem] font-semibold">
                    Last Name
                  </span>
                  <input
                    type="text"
                    name="lastName"
                    autoComplete="family-name"
                    required
                    value={formValues.lastName}
                    onChange={handleChange}
                    className="w-full rounded-[4px] border border-[#ddd] bg-white p-[12px] text-secondary placeholder:text-[#666]"
                  />
                </label>
              </div>
              <div className="mb-[15px] grid gap-[15px] md:grid-cols-2">
                <label className="block text-secondary">
                  <span className="mb-[6px] block text-[0.95rem] font-semibold">
                    Email Address
                  </span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={formValues.email}
                    onChange={handleChange}
                    className="w-full rounded-[4px] border border-[#ddd] bg-white p-[12px] text-secondary placeholder:text-[#666]"
                  />
                </label>
                <label className="block text-secondary">
                  <span className="mb-[6px] block text-[0.95rem] font-semibold">
                    Phone Number
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    required
                    value={formValues.phone}
                    onChange={handleChange}
                    className="w-full rounded-[4px] border border-[#ddd] bg-white p-[12px] text-secondary placeholder:text-[#666]"
                  />
                </label>
              </div>
              <label className="mb-[20px] block text-secondary">
                <span className="mb-[6px] block text-[0.95rem] font-semibold">
                  How can we help you?
                </span>
                <textarea
                  rows="6"
                  name="message"
                  required
                  value={formValues.message}
                  onChange={handleChange}
                  className="w-full rounded-[4px] border border-[#ddd] bg-white p-[12px] text-secondary placeholder:text-[#666]"
                />
              </label>
              <Button variant="accent" type="submit">
                Open Email Draft
              </Button>
              <p className="mt-[12px] text-[0.95rem] text-secondary">
                Submitting opens your default email app with your message ready
                to send.
              </p>
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
