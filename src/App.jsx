import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import usePageAnimations from "./hooks/usePageAnimations";
import {
  getCurrentHashPath,
  routeTitles,
  routes,
} from "./utils/routes";
import HomePage from "./pages/HomePage";
import InventoryPage from "./pages/InventoryPage";
import SellYourCarPage from "./pages/SellYourCarPage";
import FinancingPage from "./pages/FinancingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";
import WarrantyPage from "./pages/WarrantyPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";

const routeComponents = {
  [routes.home]: HomePage,
  [routes.inventory]: InventoryPage,
  [routes.sellYourCar]: SellYourCarPage,
  [routes.financing]: FinancingPage,
  [routes.aboutUs]: AboutPage,
  [routes.contact]: ContactPage,
  [routes.faq]: FaqPage,
  [routes.warranty]: WarrantyPage,
  [routes.privacyPolicy]: PrivacyPolicyPage,
  [routes.termsOfService]: TermsPage,
  [routes.login]: LoginPage,
};

export default function App() {
  const [path, setPath] = useState(getCurrentHashPath);
  const pageRef = usePageAnimations(path);

  useEffect(() => {
    const handleHashChange = () => {
      setPath(getCurrentHashPath());
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    document.title = routeTitles[path] || "AutoElite";
  }, [path]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [path]);

  const ActivePage = routeComponents[path] || NotFoundPage;

  return (
    <Layout currentPath={path}>
      <div ref={pageRef}>
        <ActivePage />
      </div>
    </Layout>
  );
}
