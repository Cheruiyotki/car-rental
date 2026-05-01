import InfoPage from "../components/InfoPage";

const sections = [
  {
    title: "Can I reserve a vehicle?",
    text: "Yes. Reach out through the contact page and our team can help you confirm availability and next steps.",
  },
  {
    title: "Do you accept trade-ins?",
    text: "Yes. We can review your current vehicle and provide a trade-in offer that can be applied to your next purchase.",
  },
  {
    title: "Do you offer financing?",
    text: "Yes. AutoElite supports financing options for a range of budgets and buying situations.",
  },
  {
    title: "Can I schedule a test drive?",
    text: "Yes. Contact our team to arrange an in-person visit or discuss available delivery and test-drive options.",
  },
];

export default function FaqPage() {
  return (
    <InfoPage
      title="Frequently Asked Questions"
      description="Answers to some of the most common questions about buying, selling, financing, and contacting AutoElite."
      subtitle="Quick answers to help you move forward with confidence"
      sections={sections}
    />
  );
}
