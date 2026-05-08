import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "About",
  description: "About Petra.",
};

export default function AboutPage() {
  return (
    <PageShell
      title="About"
      description="A short introduction to who we are and what we do."
    >
      <p>
        Petra is a placeholder site. Replace this copy with the story of your
        company, your team, and what you care about.
      </p>
      <p>
        This page is a good home for mission, values, and a brief history.
      </p>
    </PageShell>
  );
}
