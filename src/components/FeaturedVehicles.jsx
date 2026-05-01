import Container from "./Container";
import SectionTitle from "./SectionTitle";
import VehicleCard from "./VehicleCard";
import ButtonLink from "./ButtonLink";
import { featuredVehicles } from "../data/homeContent";
import { routes } from "../utils/routes";

export default function FeaturedVehicles() {
  return (
    <section data-gsap-section>
      <Container>
        <SectionTitle
          data-gsap-section-item
          title="Featured Vehicles"
          subtitle="Hand-picked selection of quality cars"
        />

        <div
          className="mb-[50px] grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[25px]"
          data-gsap-card-group
        >
          {featuredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.name} vehicle={vehicle} />
          ))}
        </div>

        <div className="mb-[50px] text-center" data-gsap-section-item>
          <ButtonLink to={routes.inventory} variant="accent">
            View All Inventory
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
