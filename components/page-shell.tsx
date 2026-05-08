import { cn } from "@/lib/utils";

export function PageShell({
  title,
  description,
  children,
  className,
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("mx-auto w-full max-w-3xl px-4 py-16 sm:px-6", className)}>
      <header className="mb-10 space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="text-lg text-muted-foreground">{description}</p>
        ) : null}
      </header>
      {children ? <div className="prose-neutral space-y-6 text-base leading-7 text-foreground/90">{children}</div> : null}
    </section>
  );
}
