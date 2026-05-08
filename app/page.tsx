import Link from "next/link";
import {
  Compass,
  HeartHandshake,
  Sparkles,
  Search,
  PencilRuler,
  CheckCircle2,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ImagePlaceholder } from "@/components/image-placeholder";

const services = [
  {
    icon: Compass,
    title: "Thoughtful guidance",
    description:
      "We help you find direction, weigh options, and make decisions you can stand behind.",
  },
  {
    icon: HeartHandshake,
    title: "Personal service",
    description:
      "Every engagement is hands-on. You'll always know who you're working with and why.",
  },
  {
    icon: Sparkles,
    title: "Quiet craftsmanship",
    description:
      "Careful work, on time, with the small details that make the difference.",
  },
];

const process = [
  {
    step: "01",
    icon: Search,
    title: "Listen",
    description:
      "We start with a conversation to understand what you need and what success looks like.",
  },
  {
    step: "02",
    icon: PencilRuler,
    title: "Plan",
    description:
      "Together we shape a clear, honest plan — scope, timeline, and a price that doesn't move.",
  },
  {
    step: "03",
    icon: CheckCircle2,
    title: "Deliver",
    description:
      "We do the work, keep you in the loop, and stay around after to make sure it lands.",
  },
];

const stats = [
  { value: "12+", label: "Years in business" },
  { value: "200+", label: "Happy clients" },
  { value: "4.9", label: "Average rating" },
  { value: "100%", label: "Locally owned" },
];

const testimonials = [
  {
    quote:
      "They listened more than they talked. By the time we got going, the plan already felt like ours.",
    name: "Anna R.",
    role: "Returning client",
  },
  {
    quote:
      "Honest, on time, and clearly proud of the work. We've been recommending them ever since.",
    name: "Markus L.",
    role: "Local business owner",
  },
  {
    quote:
      "A small team that punches above its weight. The follow-up after the project was the part that surprised me.",
    name: "Sofia B.",
    role: "First-time client",
  },
];

const faqs = [
  {
    q: "Where are you based?",
    a: "We're a small, locally owned team. Most of our clients are within a short drive, but we work further afield when it makes sense.",
  },
  {
    q: "How do you price your work?",
    a: "We give a clear, fixed price after the first conversation. No hidden fees, no surprise invoices.",
  },
  {
    q: "Do you take on small projects?",
    a: "Yes. Some of our favorite work has been for small, focused projects with clear goals.",
  },
  {
    q: "What happens after the project is finished?",
    a: "We check in to make sure everything is working well, and we're easy to reach if anything comes up later.",
  },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto w-full max-w-5xl px-4 py-20 sm:px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <Badge variant="secondary">Family-run since 2013</Badge>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Careful work, done well.
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            A small team helping people and local businesses with the things
            that matter — done thoughtfully, with no fuss.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className={buttonVariants({ size: "lg" })}>
              Start a conversation
            </Link>
            <Link
              href="/about"
              className={buttonVariants({ size: "lg", variant: "outline" })}
            >
              About us
            </Link>
          </div>
        </div>
        <div className="mt-12">
          <ImagePlaceholder ratio={16 / 7} label="Hero image" rounded="xl" />
        </div>
      </section>

      <Separator />

      <section className="mx-auto w-full max-w-5xl px-4 py-20 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            What we do
          </h2>
          <p className="mt-3 text-muted-foreground">
            A short list, taken seriously.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-muted">
                  <Icon className="size-5" />
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-muted/30 border-y border-border">
        <div className="mx-auto w-full max-w-5xl px-4 py-20 sm:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight">
              How we work
            </h2>
            <p className="mt-3 text-muted-foreground">
              No mystery. No moving targets.
            </p>
          </div>
          <ol className="grid gap-6 sm:grid-cols-3">
            {process.map(({ step, icon: Icon, title, description }) => (
              <li
                key={step}
                className="rounded-xl bg-background p-6 ring-1 ring-foreground/10"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                    <Icon className="size-5" />
                  </div>
                  <span className="text-sm font-mono text-muted-foreground">
                    {step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-20 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      <section className="mx-auto w-full max-w-5xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <ImagePlaceholder ratio={4 / 5} label="Team / shop" rounded="xl" />
          <div className="space-y-5">
            <Badge variant="secondary">A bit about us</Badge>
            <h2 className="text-3xl font-semibold tracking-tight">
              Small enough to care, steady enough to deliver.
            </h2>
            <p className="text-muted-foreground">
              We've kept the team small on purpose. It means the person you
              meet on day one is the person you'll work with at the end.
            </p>
            <p className="text-muted-foreground">
              Good work takes time, attention, and the patience to get the
              little things right. That's the part we enjoy most.
            </p>
            <div>
              <Link
                href="/about"
                className={buttonVariants({ variant: "outline" })}
              >
                Read our story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      <section className="mx-auto w-full max-w-5xl px-4 py-20 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            What people say
          </h2>
          <p className="mt-3 text-muted-foreground">
            Word of mouth is most of how we grow.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map(({ quote, name, role }) => (
            <Card key={name}>
              <CardContent className="flex h-full flex-col gap-4">
                <p className="text-base leading-7">“{quote}”</p>
                <div className="mt-auto flex items-center gap-3 pt-2">
                  <Avatar className="size-9">
                    <AvatarFallback>
                      {name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-sm">
                    <div className="font-medium">{name}</div>
                    <div className="text-muted-foreground">{role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            A look around
          </h2>
          <p className="text-sm text-muted-foreground">
            Glimpses from recent work.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <ImagePlaceholder ratio={1} label="01" />
          <ImagePlaceholder ratio={1} label="02" />
          <ImagePlaceholder ratio={1} label="03" />
        </div>
      </section>

      <section className="bg-muted/30 border-y border-border">
        <div className="mx-auto w-full max-w-3xl px-4 py-20 sm:px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight">
              Common questions
            </h2>
            <p className="mt-3 text-muted-foreground">
              If yours isn't here, just ask.
            </p>
          </div>
          <Accordion className="rounded-xl bg-background ring-1 ring-foreground/10">
            {faqs.map(({ q, a }, i) => (
              <AccordionItem key={q} value={`item-${i}`}>
                <AccordionTrigger className="px-5 text-left">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="px-5 text-muted-foreground">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-4 py-24 text-center sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight">
          Have something in mind?
        </h2>
        <p className="mt-3 text-muted-foreground">
          We reply to every message, usually within a day.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link href="/contact" className={buttonVariants({ size: "lg" })}>
            Get in touch
          </Link>
          <Link
            href="/about"
            className={buttonVariants({ size: "lg", variant: "ghost" })}
          >
            Learn more about us
          </Link>
        </div>
      </section>
    </>
  );
}
