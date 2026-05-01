export default function SectionTitle({
  title,
  subtitle,
  className = "",
  ...props
}) {
  return (
    <div
      className={["mb-[30px] mt-[50px] text-center", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <h2 className="mb-[10px] text-[2rem] text-secondary">{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}
