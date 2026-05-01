import RouteLink from "./RouteLink";

const baseClasses =
  "inline-block cursor-pointer rounded-[4px] border-none px-[20px] py-[10px] font-semibold text-white no-underline transition-colors duration-300";

const variantClasses = {
  primary: "bg-primary hover:bg-[#0055aa]",
  accent: "bg-accent hover:bg-[#e55a00]",
  inverse: "bg-white text-primary hover:bg-white",
  lightOutline: "border-[2px] border-white bg-transparent hover:bg-transparent",
};

function buildClassName(variant, className) {
  return [baseClasses, variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");
}

export default function ButtonLink({
  children,
  href = "#",
  to,
  variant = "primary",
  className = "",
}) {
  if (to) {
    return (
      <RouteLink to={to} className={buildClassName(variant, className)}>
        {children}
      </RouteLink>
    );
  }

  return (
    <a href={href} className={buildClassName(variant, className)}>
      {children}
    </a>
  );
}

export function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
}) {
  return (
    <button type={type} className={buildClassName(variant, className)}>
      {children}
    </button>
  );
}
