import InfoPage from "../components/InfoPage";

const sections = [
  {
    title: "Included Coverage",
    text: "AutoElite vehicles may include limited warranty coverage depending on the model, condition, and specific sale terms.",
  },
  {
    title: "What To Confirm",
    text: "Before purchase, confirm duration, mileage limits, and covered components with our team.",
  },
  {
    title: "Support After Purchase",
    text: "If you have questions about existing coverage, contact us and we will help review the available warranty details.",
  },
];

export default function WarrantyPage() {
  return (
    <InfoPage
      title="Warranty Information"
      description="An overview of the type of warranty support AutoElite may provide with qualifying vehicles."
      subtitle="Helpful warranty guidance before and after purchase"
      sections={sections}
    />
  );
}
