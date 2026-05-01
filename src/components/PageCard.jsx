const toneClasses = {
  white: "bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)]",
  light: "bg-light shadow-[0_4px_8px_rgba(0,0,0,0.05)]",
};

export default function PageCard({
  title,
  children,
  className = "",
  tone = "white",
}) {
  return (
    <div
      data-gsap-card
      className={[
        "rounded-[8px] p-[25px]",
        toneClasses[tone] || toneClasses.white,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <h3 className="mb-[10px] text-[1.2rem]">{title}</h3>
      <div className="leading-[1.6]">{children}</div>
    </div>
  );
}
