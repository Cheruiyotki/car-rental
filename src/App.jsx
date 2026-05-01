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
import NotFoundPage from "./pages/NotFoundPage";

const routeComponents = {
  [routes.home]: HomePage,
  [routes.inventory]: InventoryPage,
  [routes.sellYourCar]: SellYourCarPage,
  [routes.financing]: FinancingPage,
  [routes.aboutUs]: AboutPage,
  [routes.contact]: ContactPage,
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
    <Layout>
      <div ref={pageRef}>
        <ActivePage />
      </div>
    </Layout>
  );
}
