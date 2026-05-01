import { getHashHref } from "../utils/routes";

export default function RouteLink({ to, className = "", children, ...props }) {
  return (
    <a href={getHashHref(to)} className={className} {...props}>
      {children}
    </a>
  );
}
