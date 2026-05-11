import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
};

// DSGVO/BDSG/TTDSG scaffold. Audit again before launch: each cloned Betrieb
// should remove sections that don't apply (z. B. Newsletter, Tracking) und
// die tatsächlich eingesetzten Tools eintragen.
export default function DatenschutzPage() {
  return (
    <PageShell
      title="Datenschutz­erklärung"
      description="Hinweise zur Verarbeitung personen­bezogener Daten gemäß DSGVO."
    >
      <section>
        <h2 className="text-xl font-semibold">
          1. Verantwortliche Stelle
        </h2>
        <address className="not-italic mt-3 leading-7">
          Petra Handwerk GmbH
          <br />
          Musterstraße 12, 10115 Berlin
          <br />
          Telefon:{" "}
          <a href="tel:+493012345678" className="underline">
            030 1234567
          </a>
          <br />
          E-Mail:{" "}
          <a href="mailto:hallo@petra.example" className="underline">
            hallo@petra.example
          </a>
        </address>
      </section>

      <section>
        <h2 className="text-xl font-semibold">
          2. Allgemeine Hinweise zur Datenverarbeitung
        </h2>
        <p className="mt-3 leading-7">
          Wir verarbeiten personen­bezogene Daten unserer Nutzer grundsätzlich
          nur, soweit dies zur Bereitstellung einer funktionsfähigen Website
          sowie unserer Leistungen erforderlich ist. Eine Verarbeitung erfolgt
          regelmäßig nur nach Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), zur
          Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO) oder auf Grundlage
          eines berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">
          3. Erhebung beim Aufruf der Website
        </h2>
        <p className="mt-3 leading-7">
          Beim Aufruf der Seite überträgt Ihr Browser technisch notwendige
          Daten (IP-Adresse, Datum und Uhrzeit, abgerufene Ressource,
          übertragene Datenmenge, Browser-Typ). Diese Daten werden im Server-Log
          gespeichert und nach 14 Tagen gelöscht. Rechtsgrundlage ist Art. 6
          Abs. 1 lit. f DSGVO (sicherer Betrieb der Website).
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">
          4. Kontaktaufnahme
        </h2>
        <p className="mt-3 leading-7">
          Wenn Sie uns per Formular, E-Mail oder Telefon kontaktieren, werden
          Ihre Angaben zur Bearbeitung der Anfrage und für den Fall von
          Anschlussfragen gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
          DSGVO (vorvertragliche Maßnahmen). Wir geben diese Daten nicht ohne
          Ihre Einwilligung weiter und löschen sie, sobald die Verarbeitung
          nicht mehr erforderlich ist — spätestens nach Ablauf gesetzlicher
          Aufbewahrungs­fristen.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">5. Cookies</h2>
        <p className="mt-3 leading-7">
          Diese Website setzt ausschließlich technisch notwendige Cookies ein,
          die für den Betrieb der Seite erforderlich sind. Es erfolgt kein
          Tracking, kein Analyse-Tool und kein Werbe-Netzwerk auf dieser
          Seite. Sollte sich das ändern, werden Sie über ein Consent-Banner
          informiert und um Einwilligung gebeten (§ 25 Abs. 1 TTDSG).
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">
          6. Schriften und externe Dienste
        </h2>
        <p className="mt-3 leading-7">
          Schriften (Geist, Geist Mono) werden lokal über next/font geladen,
          es findet keine Verbindung zu Google-Servern statt. Karten,
          Bewertungs-Widgets oder Social-Plugins setzen wir nur ein, wenn Sie
          dem ausdrücklich zustimmen.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">7. Ihre Rechte</h2>
        <ul className="mt-3 ml-6 list-disc space-y-2 leading-7">
          <li>Auskunft über gespeicherte Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>
            Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO) sowie
            Widerspruch (Art. 21 DSGVO)
          </li>
          <li>
            Beschwerde bei der zuständigen Aufsichtsbehörde — in Berlin:
            Berliner Beauftragte für Datenschutz und Informationsfreiheit
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">8. Speicherdauer</h2>
        <p className="mt-3 leading-7">
          Wir verarbeiten und speichern Daten nur so lange, wie dies für die
          jeweilige Zweckerreichung erforderlich ist oder gesetzliche
          Aufbewahrungs­pflichten (HGB, AO) dies vorsehen.
        </p>
      </section>

      <p className="text-sm text-muted-foreground">
        Stand: Mai 2026.
      </p>
    </PageShell>
  );
}
