export default function PageCard({ title, children, className = "" }) {
  return (
    <div
      className={[
        "rounded-[8px] bg-white p-[25px] shadow-[0_4px_12px_rgba(0,0,0,0.08)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <h3 className="mb-[12px] text-[1.2rem] text-secondary">{title}</h3>
      <div className="text-[#555]">{children}</div>
    </div>
  );
}
