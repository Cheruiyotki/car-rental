export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-[30px] mt-[50px] text-center">
      <h2 className="mb-[10px] text-[2rem] text-secondary">{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}
