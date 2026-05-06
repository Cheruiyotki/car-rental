import { routes } from "../utils/routes";
import heroBackgroundImage from "../assets/hero.avif";

export const navigationLinks = [
  { label: "Home", path: routes.home },
  { label: "Inventory", path: routes.inventory },
  { label: "Sell Your Car", path: routes.sellYourCar },
  { label: "Financing", path: routes.financing },
  { label: "About Us", path: routes.aboutUs },
  { label: "Contact", path: routes.contact },
];

export const searchFilters = [
  {
    key: "make",
    options: ["Make", "Toyota", "Honda", "Ford", "BMW", "Nissan", "Mercedes-Benz", "Volkswagen", "Audi", "Hyundai"],
  },
  {
    key: "model",
    options: ["Model", "Camry", "CR-V", "F-150", "X5", "Altima", "C-Class", "Golf", "A4", "Tucson"],
  },
  {
    key: "priceRange",
    options: [
      "Price Range",
      "Under 1,300,000 KSH",
      "1,300,000 - 2,600,000 KSH",
      "2,600,000 - 3,900,000 KSH",
      "Over 3,900,000 KSH",
    ],
  },
  {
    key: "year",
    options: ["Year", "2024", "2023", "2022", "2021", "2020", "2019"],
  },
];

export const featuredVehicles = [
  {
    name: "2022 Toyota Camry SE",
    price: "3,249,870 KSH",
    specs: ["25,000 mi", "Automatic", "Hybrid"],
    image:
      "https://placehold.co/300x200/3366CC/FFFFFF/png?text=Toyota+Camry",
  },
  {
    name: "2021 Honda CR-V EX",
    price: "3,575,000 KSH",
    specs: ["18,500 mi", "Automatic", "Gas"],
    image: "https://placehold.co/300x200/CC3333/FFFFFF/png?text=Honda+CR-V",
  },
  {
    name: "2020 BMW X5 xDrive40i",
    price: "6,499,350 KSH",
    specs: ["22,000 mi", "Automatic", "Gas"],
    image: "https://placehold.co/300x200/333333/FFFFFF/png?text=BMW+X5",
  },
  {
    name: "2023 Nissan Altima SV",
    price: "2,860,000 KSH",
    specs: ["15,000 mi", "CVT", "Gas"],
    image: "https://placehold.co/300x200/FF6600/FFFFFF/png?text=Nissan+Altima",
  },
  {
    name: "2021 Mercedes-Benz C-Class C300",
    price: "5,200,000 KSH",
    specs: ["20,000 mi", "Automatic", "Gas"],
    image: "https://placehold.co/300x200/000000/FFFFFF/png?text=Mercedes+C-Class",
  },
  {
    name: "2022 Volkswagen Golf GTI",
    price: "3,900,000 KSH",
    specs: ["12,000 mi", "Manual", "Gas"],
    image: "https://placehold.co/300x200/003366/FFFFFF/png?text=Volkswagen+Golf",
  },
];

export const valueProps = [
  {
    title: "Quality Certified",
    description: "All our vehicles undergo a rigorous 150-point inspection",
    icon: "\u2713",
  },
  {
    title: "Best Price Guarantee",
    description: "We'll match any competitor's price on similar vehicles",
    icon: "\uD83D\uDCB0",
  },
  {
    title: "Warranty Included",
    description: "12-month comprehensive warranty on all purchases",
    icon: "\uD83D\uDD27",
  },
  {
    title: "Test Drive At Home",
    description: "We'll bring the vehicle to you for a test drive",
    icon: "\uD83D\uDE97",
  },
];

export const testimonials = [
  {
    author: "Sarah Johnson",
    text: '"The entire process was seamless. I found my perfect car and got financing approved within hours. Highly recommend!"',
  },
  {
    author: "Michael Torres",
    text: '"I was hesitant to buy a car online, but AutoElite made it easy. The vehicle was exactly as described."',
  },
  {
    author: "James Wilson",
    text: "\"Their price beat guarantee saved me over $2,000 compared to other dealers. Great service too!\"",
  },
];

export const quickLinks = [
  { label: "New Vehicles", path: routes.inventory },
  { label: "Used Vehicles", path: routes.inventory },
  { label: "Sell Your Car", path: routes.sellYourCar },
  { label: "Financing", path: routes.financing },
  { label: "Testimonials", path: routes.home },
];

export const customerServiceLinks = [
  { label: "Contact Us", path: routes.contact },
  { label: "FAQ", path: routes.faq },
  { label: "Warranty", path: routes.warranty },
  { label: "Privacy Policy", path: routes.privacyPolicy },
  { label: "Terms of Service", path: routes.termsOfService },
];

export const heroBackground = heroBackgroundImage;
