import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { formatPostDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Aktuelles, Ratgeber und Hintergründe rund um unser Handwerk.",
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <PageShell
      title="Blog"
      description="Aktuelles, Ratgeber und Hintergründe rund um unser Handwerk."
    >
      {posts.length === 0 ? (
        <p className="text-muted-foreground">
          Noch keine Beiträge. Neue MDX-Dateien in <code>content/blog/</code>{" "}
          erscheinen hier automatisch.
        </p>
      ) : (
        <ul className="divide-y divide-border">
          {posts.map(({ slug, metadata }) => (
            <li key={slug} className="py-6 first:pt-0 last:pb-0">
              <article className="space-y-2">
                <div className="text-xs uppercase tracking-wide text-muted-foreground">
                  <time dateTime={metadata.publishedAt}>
                    {formatPostDate(metadata.publishedAt)}
                  </time>
                  {metadata.draft ? (
                    <span className="ml-2 rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-foreground">
                      Entwurf
                    </span>
                  ) : null}
                </div>
                <h2 className="text-xl font-semibold tracking-tight">
                  <Link
                    href={`/blog/${slug}`}
                    className="hover:underline underline-offset-4"
                  >
                    {metadata.title}
                  </Link>
                </h2>
                <p className="text-muted-foreground">{metadata.description}</p>
              </article>
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  );
}
