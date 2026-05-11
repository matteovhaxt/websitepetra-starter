import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "AGB",
  description:
    "Allgemeine Geschäfts­bedingungen für Werk- und Reparatur­leistungen.",
};

// AGB sind optional, aber für Handwerksbetriebe empfehlenswert. Vor Launch
// von einer Fachanwältin / einem Fachanwalt für Bau- und Architektenrecht
// prüfen lassen — insbesondere § 4 (Abschlagszahlungen) und § 7 (Gewähr­leistung).
export default function AgbPage() {
  return (
    <PageShell
      title="Allgemeine Geschäfts­bedingungen"
      description="Für Werk- und Reparatur­leistungen der Petra Handwerk GmbH."
    >
      <section>
        <h2 className="text-xl font-semibold">§ 1 Geltungsbereich</h2>
        <p className="mt-3 leading-7">
          Diese AGB gelten für sämtliche Werk- und Reparatur­leistungen, die
          Petra Handwerk GmbH (im Folgenden: „Auftrag­nehmerin“) gegenüber
          Verbrauchern und Unternehmern (im Folgenden: „Auftrag­geber“)
          erbringt. Abweichende Bedingungen des Auftrag­gebers gelten nur,
          wenn sie schriftlich bestätigt sind.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">§ 2 Angebot und Vertrags­schluss</h2>
        <p className="mt-3 leading-7">
          Angebote sind freibleibend, sofern nicht ausdrücklich als verbindlich
          gekennzeichnet. Mit Unterschrift oder schriftlicher Annahme des
          Angebots durch den Auftrag­geber kommt der Vertrag zustande.
          Festpreis-Angebote sind 30 Tage ab Ausstellungs­datum gültig.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">§ 3 Leistungs­erbringung</h2>
        <p className="mt-3 leading-7">
          Vereinbarte Termine sind verbindlich, sobald sie schriftlich
          bestätigt sind. Bei höherer Gewalt, Lieferengpässen oder Schlecht­wetter
          (bei Arbeiten im Außenbereich) verlängern sich Termine angemessen;
          der Auftrag­geber wird umgehend informiert.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">§ 4 Preise und Zahlung</h2>
        <p className="mt-3 leading-7">
          Es gelten die im Angebot ausgewiesenen Preise inklusive der gesetz­lichen
          Mehrwertsteuer. Rechnungen sind innerhalb von 14 Tagen ohne Abzug
          fällig. Bei Aufträgen über 5.000 € sind Abschlags­zahlungen nach
          Baufortschritt zulässig und werden im Angebot ausgewiesen.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">§ 5 Mitwirkung des Auftrag­gebers</h2>
        <p className="mt-3 leading-7">
          Der Auftrag­geber stellt rechtzeitig den Zugang zu den Arbeitsorten,
          Strom- und Wasser­anschluss sowie eine sichere Abstellfläche für
          Material und Werkzeug bereit. Verzögerungen aus unterbliebener
          Mitwirkung gehen nicht zu Lasten der Auftrag­nehmerin.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">§ 6 Abnahme</h2>
        <p className="mt-3 leading-7">
          Die Abnahme erfolgt nach Fertigstellung gemeinsam mit dem Auftrag­geber.
          Etwaige Mängel werden im Abnahme­protokoll festgehalten und in
          angemessener Frist nachgebessert.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">§ 7 Gewähr­leistung</h2>
        <p className="mt-3 leading-7">
          Es gilt die gesetzliche Gewähr­leistungsfrist von zwei Jahren auf
          Werkleistungen, fünf Jahre auf Arbeiten an tragenden Bauteilen
          gemäß § 634 a BGB. Mängel sind schriftlich anzuzeigen.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">§ 8 Haftung</h2>
        <p className="mt-3 leading-7">
          Wir haften unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie
          für Schäden aus der Verletzung des Lebens, des Körpers oder der
          Gesundheit. Im Übrigen ist die Haftung auf den vertrags­typischen,
          vorhersehbaren Schaden begrenzt.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">§ 9 Schluss­bestimmungen</h2>
        <p className="mt-3 leading-7">
          Es gilt deutsches Recht. Erfüllungsort und Gerichtsstand für
          Kaufleute ist Berlin. Sollte eine Bestimmung dieser AGB unwirksam
          sein, bleibt der übrige Vertrag wirksam.
        </p>
      </section>

      <p className="text-sm text-muted-foreground">
        Stand: Mai 2026.
      </p>
    </PageShell>
  );
}
