"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-4 px-4 py-24 text-center sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Something went wrong
      </h1>
      <p className="max-w-md text-muted-foreground">
        An unexpected error occurred. You can try again or head back home.
      </p>
      <Button onClick={() => unstable_retry()} className="mt-2">
        Try again
      </Button>
    </section>
  );
}
