import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { formatPostDate, getAllPostSlugs, loadPost } from "@/lib/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await loadPost(slug);
  if (!post) return {};
  return {
    title: post.metadata.title,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      type: "article",
      publishedTime: post.metadata.publishedAt,
      modifiedTime: post.metadata.updatedAt,
      authors: post.metadata.author ? [post.metadata.author] : undefined,
      tags: post.metadata.tags,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await loadPost(slug);
  if (!post) notFound();

  const { Component, metadata } = post;

  return (
    <PageShell title={metadata.title} description={metadata.description}>
      <div className="-mt-6 mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
        <time dateTime={metadata.publishedAt}>
          {formatPostDate(metadata.publishedAt)}
        </time>
        {metadata.author ? <span>· {metadata.author}</span> : null}
        {metadata.tags?.length
          ? <span>· {metadata.tags.join(", ")}</span>
          : null}
      </div>
      <article>
        <Component />
      </article>
      <div className="pt-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Zurück zur Übersicht
        </Link>
      </div>
    </PageShell>
  );
}
