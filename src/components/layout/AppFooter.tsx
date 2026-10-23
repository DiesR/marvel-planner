import { Link } from "react-router";
import { PATHS } from "../../app/paths";

export function AppFooter() {
  return (
    <footer>
      <p>Sito non ufficiale, non affiliato a Marvel Studios o The Walt Disney Company.</p>
      <nav aria-label="Informazioni legali">
        <Link to={PATHS.privacy}>Privacy</Link>
      </nav>
    </footer>
  );
}
