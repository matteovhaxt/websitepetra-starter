import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Pflichtangaben gemäß § 5 TMG.",
};

// Replace TODO values at clone-time. The structure below covers the
// pflichten that apply to a Handwerksbetrieb: TMG, USt-IdNr,
// berufsrechtliche Angaben (Kammer, Handwerksrolle, Berufsbezeichnung).
export default function ImpressumPage() {
  return (
    <PageShell
      title="Impressum"
      description="Angaben gemäß § 5 TMG."
    >
      <section>
        <h2 className="text-xl font-semibold">Betrieb</h2>
        <address className="not-italic mt-3 leading-7">
          Petra Handwerk GmbH
          <br />
          Inhaber: Max Mustermann
          <br />
          Musterstraße 12
          <br />
          10115 Berlin
        </address>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Kontakt</h2>
        <ul className="mt-3 space-y-1 leading-7">
          <li>
            Telefon:{" "}
            <a href="tel:+493012345678" className="underline">
              030 1234567
            </a>
          </li>
          <li>
            E-Mail:{" "}
            <a href="mailto:hallo@petra.example" className="underline">
              hallo@petra.example
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Registereintrag</h2>
        <p className="mt-3 leading-7">
          Eintragung im Handelsregister.
          <br />
          Registergericht: Amtsgericht Berlin-Charlottenburg
          <br />
          Registernummer: HRB 000000
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Umsatzsteuer-ID</h2>
        <p className="mt-3 leading-7">
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          DE000000000
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Berufsrechtliche Angaben</h2>
        <dl className="mt-3 space-y-3 leading-7">
          <div>
            <dt className="font-medium">Berufsbezeichnung:</dt>
            <dd>Maurer- und Betonbauermeister (Bundesrepublik Deutschland)</dd>
          </div>
          <div>
            <dt className="font-medium">Zuständige Kammer:</dt>
            <dd>
              Handwerkskammer Berlin
              <br />
              Blücherstraße 68, 10961 Berlin
            </dd>
          </div>
          <div>
            <dt className="font-medium">Eintragung in der Handwerksrolle:</dt>
            <dd>Nummer 000-000 bei der Handwerkskammer Berlin</dd>
          </div>
          <div>
            <dt className="font-medium">Berufsrechtliche Regelungen:</dt>
            <dd>
              Handwerksordnung (HwO) — einsehbar unter{" "}
              <a
                href="https://www.gesetze-im-internet.de/hwo/"
                className="underline"
                target="_blank"
                rel="noreferrer noopener"
              >
                gesetze-im-internet.de
              </a>
            </dd>
          </div>
        </dl>
      </section>

      <section>
        <h2 className="text-xl font-semibold">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </h2>
        <address className="not-italic mt-3 leading-7">
          Max Mustermann
          <br />
          Musterstraße 12
          <br />
          10115 Berlin
        </address>
      </section>

      <section>
        <h2 className="text-xl font-semibold">
          Verbraucherstreitbeilegung
        </h2>
        <p className="mt-3 leading-7">
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungs­verfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Haftung für Inhalte</h2>
        <p className="mt-3 leading-7">
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>
      </section>

      <p className="text-sm text-muted-foreground">
        Stand: Mai 2026. Bei Änderungen aktualisieren Sie bitte das Datum und
        prüfen die Angaben gegen die aktuelle HwO und § 5 TMG.
      </p>
    </PageShell>
  );
}
