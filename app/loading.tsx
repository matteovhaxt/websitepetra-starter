import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 items-center justify-center px-4 py-24 sm:px-6">
      <Spinner className="size-6 text-muted-foreground" />
    </section>
  );
}
