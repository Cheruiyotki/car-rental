import InfoPage from "../components/InfoPage";

const sections = [
  {
    title: "Website Use",
    text: "Content on this website is provided for general information about vehicles, services, and dealership support.",
  },
  {
    title: "Availability",
    text: "Vehicle listings, pricing, and promotions may change over time and should be confirmed with the AutoElite team.",
  },
  {
    title: "Contact For Details",
    text: "For final purchase, warranty, or financing terms, please contact us directly before making a decision.",
  },
];

export default function TermsPage() {
  return (
    <InfoPage
      title="Terms of Service"
      description="General terms for using the AutoElite website and reviewing its inventory and service information."
      subtitle="Helpful expectations for using this dealership website"
      sections={sections}
    />
  );
}
