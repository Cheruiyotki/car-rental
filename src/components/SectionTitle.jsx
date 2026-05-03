export default function SectionTitle({
  title,
  subtitle,
  className = "",
  ...props
}) {
  return (
    <div
      className={["mb-[26px] mt-[42px] text-center sm:mb-[30px] sm:mt-[50px]", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <h2 className="mb-[10px] text-[1.6rem] leading-tight text-secondary md:text-[2rem]">
        {title}
      </h2>
      <p>{subtitle}</p>
    </div>
  );
}
