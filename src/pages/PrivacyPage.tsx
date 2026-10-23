import { Link } from "react-router";
import { PATHS } from "../app/paths";
import { SITE } from "../app/site";
import type { TranslationKey } from "../i18n/types";
import { useI18n } from "../i18n/useI18n";

const GARANTE_URL = "https://www.garanteprivacy.it";

const DATA_ITEMS: { label: TranslationKey; text: TranslationKey }[] = [
  { label: "privacy.data.accountLabel", text: "privacy.data.accountText" },
  { label: "privacy.data.progressLabel", text: "privacy.data.progressText" },
  { label: "privacy.data.technicalLabel", text: "privacy.data.technicalText" },
  { label: "privacy.data.deviceLabel", text: "privacy.data.deviceText" },
];

const PURPOSE_KEYS: TranslationKey[] = ["privacy.purposes.service", "privacy.purposes.security"];

const SIMPLE_SECTIONS: { heading: TranslationKey; body: TranslationKey }[] = [
  { heading: "privacy.cookies.heading", body: "privacy.cookies.body" },
  { heading: "privacy.providers.heading", body: "privacy.providers.body" },
  { heading: "privacy.retention.heading", body: "privacy.retention.body" },
];

export function PrivacyPage() {
  const { t, rich, formatDate } = useI18n();
  const email = <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>;

  return (
    <article aria-labelledby="privacy-title">
      <h1 id="privacy-title">{t("privacy.title")}</h1>
      <p>{t("privacy.updated", { date: formatDate(SITE.privacyLastUpdated) })}</p>

      <section aria-labelledby="privacy-controller">
        <h2 id="privacy-controller">{t("privacy.controller.heading")}</h2>
        <p>{rich("privacy.controller.body", { email }, { name: SITE.name })}</p>
      </section>

      <section aria-labelledby="privacy-data">
        <h2 id="privacy-data">{t("privacy.data.heading")}</h2>
        <ul>
          {DATA_ITEMS.map((item) => (
            <li key={item.label}>
              <strong>{t(item.label)}</strong>: {t(item.text)}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="privacy-purposes">
        <h2 id="privacy-purposes">{t("privacy.purposes.heading")}</h2>
        <ul>
          {PURPOSE_KEYS.map((key) => (
            <li key={key}>{t(key)}</li>
          ))}
        </ul>
        <p>{t("privacy.purposes.noProfiling")}</p>
      </section>

      {SIMPLE_SECTIONS.map((section) => (
        <section key={section.heading} aria-label={t(section.heading)}>
          <h2>{t(section.heading)}</h2>
          <p>{t(section.body)}</p>
        </section>
      ))}

      <section aria-labelledby="privacy-rights">
        <h2 id="privacy-rights">{t("privacy.rights.heading")}</h2>
        <p>
          {rich("privacy.rights.body", {
            email,
            account: <Link to={PATHS.account}>{t("privacy.rights.accountLink")}</Link>,
            garante: (
              <a href={GARANTE_URL} rel="noreferrer">
                garanteprivacy.it
              </a>
            ),
          })}
        </p>
      </section>

      <section aria-labelledby="privacy-minors">
        <h2 id="privacy-minors">{t("privacy.minors.heading")}</h2>
        <p>{t("privacy.minors.body")}</p>
      </section>

      <section aria-labelledby="privacy-changes">
        <h2 id="privacy-changes">{t("privacy.changes.heading")}</h2>
        <p>{t("privacy.changes.body")}</p>
      </section>
    </article>
  );
}
