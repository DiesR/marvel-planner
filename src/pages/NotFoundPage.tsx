import { Link } from "react-router";
import { PATHS } from "../app/paths";

export function NotFoundPage() {
  return (
    <section aria-labelledby="not-found-title">
      <h1 id="not-found-title">Pagina non trovata</h1>
      <Link to={PATHS.home}>Torna al planner</Link>
    </section>
  );
}
