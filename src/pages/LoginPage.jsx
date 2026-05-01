import InfoPage from "../components/InfoPage";

const sections = [
  {
    title: "Portal Access",
    text: "This frontend includes a placeholder login destination so your deployed site has a complete user flow without broken links.",
  },
  {
    title: "Next Integration Step",
    text: "You can connect this page to your preferred authentication provider such as Firebase Auth, Auth0, Clerk, or a custom backend.",
  },
  {
    title: "Support",
    text: "Until authentication is connected, use the contact page to request account setup or dealership support.",
  },
];

export default function LoginPage() {
  return (
    <InfoPage
      title="Login"
      description="Secure account access can be connected here when you are ready to integrate authentication."
      subtitle="A frontend-ready destination prepared for future auth integration"
      sections={sections}
    />
  );
}
