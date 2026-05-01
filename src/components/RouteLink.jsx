import { getHashHref } from "../utils/routes";

export default function RouteLink({ to, className = "", children }) {
  return (
    <a href={getHashHref(to)} className={className}>
      {children}
    </a>
  );
}
