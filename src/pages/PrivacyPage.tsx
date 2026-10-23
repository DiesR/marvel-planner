import { Link } from "react-router";
import { PATHS } from "../app/paths";
import { SITE } from "../app/site";

export function PrivacyPage() {
  const mailto = `mailto:${SITE.contactEmail}`;

  return (
    <article aria-labelledby="privacy-title">
      <h1 id="privacy-title">Informativa sulla privacy</h1>
      <p>Ultimo aggiornamento: {SITE.privacyLastUpdated}</p>

      <section aria-labelledby="privacy-controller">
        <h2 id="privacy-controller">Titolare del trattamento</h2>
        <p>
          Il titolare del trattamento è {SITE.name}. Per qualsiasi richiesta sui tuoi dati puoi
          scrivere a <a href={mailto}>{SITE.contactEmail}</a>.
        </p>
      </section>

      <section aria-labelledby="privacy-data">
        <h2 id="privacy-data">Quali dati trattiamo</h2>
        <ul>
          <li>
            <strong>Dati dell'account</strong>: nome ed email. Se ti registri con email e password,
            la password è conservata solo in forma cifrata (hash) e non è mai leggibile.
          </li>
          <li>
            <strong>Accesso con Google</strong>: se scegli questa opzione, Google ci comunica nome,
            email, immagine del profilo e un identificativo dell'account, oltre ai token tecnici
            necessari a completare l'accesso. Non riceviamo la tua password Google.
          </li>
          <li>
            <strong>Progressi</strong>: i titoli che segni come visti e la data in cui li hai
            segnati.
          </li>
          <li>
            <strong>Dati tecnici</strong>: indirizzo IP e tipo di browser associati alle sessioni di
            accesso, usati anche per limitare i tentativi di accesso ripetuti.
          </li>
          <li>
            <strong>Senza account</strong>: i progressi restano salvati solo nel tuo browser
            (localStorage) e non vengono inviati a noi.
          </li>
        </ul>
      </section>

      <section aria-labelledby="privacy-purposes">
        <h2 id="privacy-purposes">Perché li trattiamo</h2>
        <ul>
          <li>
            Per fornirti il servizio: creare e gestire l'account e conservare i tuoi progressi
            (esecuzione del servizio richiesto, art. 6.1.b GDPR).
          </li>
          <li>
            Per la sicurezza del servizio e la prevenzione degli abusi (legittimo interesse, art.
            6.1.f GDPR).
          </li>
        </ul>
        <p>
          Non usiamo i tuoi dati per pubblicità o profilazione, non li vendiamo e non li cediamo a
          terzi.
        </p>
      </section>

      <section aria-labelledby="privacy-cookies">
        <h2 id="privacy-cookies">Cookie</h2>
        <p>
          Usiamo solo un cookie tecnico di sessione, necessario per mantenerti connesso. Non usiamo
          cookie di analisi o di profilazione.
        </p>
      </section>

      <section aria-labelledby="privacy-providers">
        <h2 id="privacy-providers">Dove sono conservati e chi li tratta</h2>
        <p>
          Il sito e il database sono ospitati da Cloudflare, con database situato nell'Europa
          occidentale. Cloudflare agisce come responsabile del trattamento. Se usi l'accesso con
          Google, Google tratta i dati necessari all'autenticazione secondo la propria informativa.
          Poiché entrambi i fornitori hanno sede negli Stati Uniti, alcuni dati potrebbero essere
          trasferiti fuori dall'Unione europea, nel rispetto delle garanzie previste dal GDPR (EU-US
          Data Privacy Framework e clausole contrattuali standard).
        </p>
      </section>

      <section aria-labelledby="privacy-retention">
        <h2 id="privacy-retention">Per quanto tempo</h2>
        <p>
          Conserviamo i dati finché il tuo account esiste. Le sessioni scadono dopo 7 giorni di
          inattività. Quando elimini l'account, nome, email, progressi e sessioni vengono cancellati
          subito; eventuali copie di backup tecniche vengono sovrascritte entro 30 giorni.
        </p>
      </section>

      <section aria-labelledby="privacy-rights">
        <h2 id="privacy-rights">I tuoi diritti</h2>
        <p>
          Puoi chiedere in qualsiasi momento l'accesso, la rettifica, la cancellazione, la
          limitazione o la portabilità dei tuoi dati, oppure opporti al trattamento, scrivendo a{" "}
          <a href={mailto}>{SITE.contactEmail}</a>. Puoi modificare il nome ed eliminare l'account
          direttamente dalla pagina <Link to={PATHS.account}>Il tuo account</Link>. Hai inoltre il
          diritto di proporre reclamo al Garante per la protezione dei dati personali (
          <a href="https://www.garanteprivacy.it" rel="noreferrer">
            garanteprivacy.it
          </a>
          ).
        </p>
      </section>

      <section aria-labelledby="privacy-minors">
        <h2 id="privacy-minors">Minori</h2>
        <p>Il servizio non è destinato a persone con meno di 14 anni.</p>
      </section>

      <section aria-labelledby="privacy-changes">
        <h2 id="privacy-changes">Modifiche</h2>
        <p>
          Eventuali modifiche a questa informativa saranno pubblicate su questa pagina, con la data
          di aggiornamento indicata in alto.
        </p>
      </section>
    </article>
  );
}
