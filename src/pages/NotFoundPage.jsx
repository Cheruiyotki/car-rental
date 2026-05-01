import PageHero from "../components/PageHero";
import ButtonLink from "../components/ButtonLink";
import { routes } from "../utils/routes";

export default function NotFoundPage() {
  return (
    <PageHero
      title="Page Not Found"
      description="The page you tried to open is not available. Head back to the homepage and continue browsing from there."
    >
      <ButtonLink to={routes.home} variant="accent">
        Return Home
      </ButtonLink>
    </PageHero>
  );
}
