import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of Petra.",
};

export default function TermsPage() {
  return (
    <PageShell
      title="Terms of Service"
      description="Last updated: replace with the publish date."
    >
      <p>
        This is placeholder copy. Replace it with your real terms of service
        before launch.
      </p>
      <h2 className="text-xl font-semibold">Use of the service</h2>
      <p>Describe acceptable use and account responsibilities.</p>
      <h2 className="text-xl font-semibold">Intellectual property</h2>
      <p>Describe ownership of content and licenses.</p>
      <h2 className="text-xl font-semibold">Liability</h2>
      <p>Describe limitations of liability and disclaimers.</p>
    </PageShell>
  );
}
