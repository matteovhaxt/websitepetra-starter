import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Petra handles your data.",
};

export default function PrivacyPage() {
  return (
    <PageShell
      title="Privacy Policy"
      description="Last updated: replace with the publish date."
    >
      <p>
        This is placeholder copy. Replace it with your real privacy policy
        before launch.
      </p>
      <h2 className="text-xl font-semibold">Information we collect</h2>
      <p>Describe what data is collected and why.</p>
      <h2 className="text-xl font-semibold">How we use information</h2>
      <p>Describe how data is used, stored, and shared.</p>
      <h2 className="text-xl font-semibold">Your rights</h2>
      <p>Describe how users can access, correct, or delete their data.</p>
    </PageShell>
  );
}
