import { routes } from "../utils/routes";

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
    options: ["Make", "Toyota", "Honda", "Ford", "BMW"],
  },
  {
    key: "model",
    options: ["Model"],
  },
  {
    key: "priceRange",
    options: [
      "Price Range",
      "Under $10,000",
      "$10,000 - $20,000",
      "$20,000 - $30,000",
      "Over $30,000",
    ],
  },
  {
    key: "year",
    options: ["Year", "2023", "2022", "2021", "2020"],
  },
];

export const featuredVehicles = [
  {
    name: "2022 Toyota Camry SE",
    price: "$24,999",
    specs: ["25,000 mi", "Automatic", "Hybrid"],
    image:
      "https://placehold.co/300x200/3366CC/FFFFFF/png?text=Toyota+Camry",
  },
  {
    name: "2021 Honda CR-V EX",
    price: "$27,500",
    specs: ["18,500 mi", "Automatic", "Gas"],
    image: "https://placehold.co/300x200/CC3333/FFFFFF/png?text=Honda+CR-V",
  },
  {
    name: "2020 BMW X5 xDrive40i",
    price: "$49,995",
    specs: ["22,000 mi", "Automatic", "Gas"],
    image: "https://placehold.co/300x200/333333/FFFFFF/png?text=BMW+X5",
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
  { label: "FAQ", href: "#" },
  { label: "Warranty", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export const heroBackground =
  "https://placehold.co/1200x600/333333/FFFFFF/png?text=Luxury+Cars";
