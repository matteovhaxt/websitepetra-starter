import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-4 px-4 py-24 text-center sm:px-6">
      <p className="text-sm font-medium text-muted-foreground">404</p>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Page not found
      </h1>
      <p className="max-w-md text-muted-foreground">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link href="/" className={buttonVariants({ className: "mt-2" })}>
        Back to home
      </Link>
    </section>
  );
}
