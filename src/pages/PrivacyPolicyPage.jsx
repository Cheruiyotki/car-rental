import InfoPage from "../components/InfoPage";

const sections = [
  {
    title: "Information We Collect",
    text: "We may collect contact details and inquiry information that you choose to share through forms, calls, or email.",
  },
  {
    title: "How We Use It",
    text: "That information helps us respond to questions, discuss inventory, and support financing or trade-in conversations.",
  },
  {
    title: "Your Control",
    text: "You can contact us at any time to request updates or removal of personal information shared through this website.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <InfoPage
      title="Privacy Policy"
      description="A simple overview of how information shared with AutoElite may be collected and used."
      subtitle="Clear guidance on how customer information is handled"
      sections={sections}
    />
  );
}
