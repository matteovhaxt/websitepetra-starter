import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";

export type PostMetadata = {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author?: string;
  tags?: string[];
  draft?: boolean;
};

export type LoadedPost = {
  slug: string;
  metadata: PostMetadata;
  Component: ComponentType;
};

export type PostListEntry = {
  slug: string;
  metadata: PostMetadata;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

const includeDrafts = process.env.NODE_ENV !== "production";

function readSlugsFromDisk(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => /\.(md|mdx)$/.test(file))
    .map((file) => file.replace(/\.(md|mdx)$/, ""));
}

async function importPost(
  slug: string,
): Promise<{ default: ComponentType; metadata?: PostMetadata }> {
  return import(`@/content/blog/${slug}.mdx`);
}

export async function loadPost(slug: string): Promise<LoadedPost | null> {
  try {
    const mod = await importPost(slug);
    const metadata = mod.metadata;
    if (!metadata) return null;
    if (metadata.draft && !includeDrafts) return null;
    return { slug, metadata, Component: mod.default };
  } catch {
    return null;
  }
}

export async function getAllPosts(): Promise<PostListEntry[]> {
  const slugs = readSlugsFromDisk();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const loaded = await loadPost(slug);
      return loaded ? { slug: loaded.slug, metadata: loaded.metadata } : null;
    }),
  );
  return posts
    .filter((p): p is PostListEntry => p !== null)
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime(),
    );
}

export function getAllPostSlugs(): string[] {
  return readSlugsFromDisk();
}

export function formatPostDate(value: string): string {
  const date = new Date(value);
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}
