import ButtonLink from "./ButtonLink";

export default function VehicleCard({ vehicle }) {
  return (
    <article className="overflow-hidden rounded-[8px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-[5px]">
      <div
        className="h-[200px] bg-[#ddd] bg-cover bg-center"
        style={{ backgroundImage: `url('${vehicle.image}')` }}
      />

      <div className="p-[20px]">
        <h3 className="mb-[10px] text-[1.2rem]">{vehicle.name}</h3>
        <div className="mb-[10px] text-[1.3rem] font-bold text-primary">
          {vehicle.price}
        </div>
        <div className="mb-[15px] flex justify-between text-[0.9rem] text-[#666]">
          {vehicle.specs.map((spec) => (
            <span key={spec}>{spec}</span>
          ))}
        </div>
        <ButtonLink href="#">View Details</ButtonLink>
      </div>
    </article>
  );
}
