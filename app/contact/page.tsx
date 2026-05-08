import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Petra.",
};

export default function ContactPage() {
  return (
    <PageShell
      title="Contact"
      description="Send us a message and we'll get back to you."
    >
      <form className="space-y-5">
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input id="name" name="name" placeholder="Your name" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea
            id="message"
            name="message"
            placeholder="What's on your mind?"
            rows={6}
            required
          />
        </Field>
        <Button type="submit">Send message</Button>
      </form>
    </PageShell>
  );
}
