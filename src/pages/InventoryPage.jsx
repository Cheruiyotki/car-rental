import Container from "../components/Container";
import PageCard from "../components/PageCard";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import VehicleCard from "../components/VehicleCard";
import ButtonLink from "../components/ButtonLink";
import { featuredVehicles } from "../data/homeContent";
import { routes } from "../utils/routes";

const inventoryCategories = [
  {
    title: "Sedans",
    text: "Comfortable, efficient, and ready for daily driving or long-distance travel.",
  },
  {
    title: "SUVs",
    text: "Flexible cargo space and family-friendly practicality with modern safety features.",
  },
  {
    title: "Luxury Models",
    text: "Premium trims, refined interiors, and standout performance options.",
  },
];

export default function InventoryPage() {
  return (
    <>
      <PageHero
        title="Browse Our Inventory"
        description="Explore a carefully selected lineup of reliable, stylish, and performance-ready vehicles at transparent prices."
      >
        <ButtonLink to={routes.financing} variant="accent">
          Explore Financing
        </ButtonLink>
        <ButtonLink to={routes.contact} variant="lightOutline">
          Talk To A Specialist
        </ButtonLink>
      </PageHero>

      <section className="py-[60px]">
        <Container>
          <SectionTitle
            title="Shop By Category"
            subtitle="Find the right vehicle for your lifestyle and budget"
          />

          <div className="mb-[50px] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[25px]">
            {inventoryCategories.map((category) => (
              <PageCard key={category.title} title={category.title}>
                <p>{category.text}</p>
              </PageCard>
            ))}
          </div>

          <SectionTitle
            title="Featured Inventory"
            subtitle="A few standout vehicles currently drawing attention"
          />

          <div className="mb-[50px] grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[25px]">
            {featuredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.name} vehicle={vehicle} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
