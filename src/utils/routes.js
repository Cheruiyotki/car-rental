export const routes = {
  home: "/",
  inventory: "/inventory",
  sellYourCar: "/sell-your-car",
  financing: "/financing",
  aboutUs: "/about-us",
  contact: "/contact",
  faq: "/faq",
  warranty: "/warranty",
  privacyPolicy: "/privacy-policy",
  termsOfService: "/terms-of-service",
  login: "/login",
};

export const routeTitles = {
  [routes.home]: "AutoElite - Find Your Dream Car",
  [routes.inventory]: "AutoElite - Inventory",
  [routes.sellYourCar]: "AutoElite - Sell Your Car",
  [routes.financing]: "AutoElite - Financing",
  [routes.aboutUs]: "AutoElite - About Us",
  [routes.contact]: "AutoElite - Contact",
  [routes.faq]: "AutoElite - FAQ",
  [routes.warranty]: "AutoElite - Warranty",
  [routes.privacyPolicy]: "AutoElite - Privacy Policy",
  [routes.termsOfService]: "AutoElite - Terms of Service",
  [routes.login]: "AutoElite - Login",
};

export function normalizePath(path = "") {
  if (!path || path === "#") {
    return routes.home;
  }

  const nextPath = path.startsWith("/") ? path : `/${path}`;
  return nextPath.length > 1 ? nextPath.replace(/\/+$/, "") : nextPath;
}

export function getCurrentHashPath() {
  return normalizePath(window.location.hash.replace(/^#/, ""));
}

export function getHashHref(path) {
  return `#${normalizePath(path)}`;
}
