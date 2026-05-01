export default function Container({ children, className = "" }) {
  const classes = ["mx-auto w-full max-w-[1200px] px-[15px]", className]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}
