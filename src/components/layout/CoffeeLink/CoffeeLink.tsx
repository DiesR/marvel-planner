import { Coffee } from "lucide-react";
import { SITE } from "../../../app/site";
import { useI18n } from "../../../i18n/useI18n";

export function CoffeeLink() {
  const { t } = useI18n();

  if (!SITE.coffeeUrl) return null;

  return (
    <p className="coffee-link">
      <a href={SITE.coffeeUrl} target="_blank" rel="noreferrer">
        <Coffee aria-hidden />
        {t("footer.coffee")}
      </a>
    </p>
  );
}
