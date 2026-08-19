import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import { posts, site } from "@/lib/data";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { type: "article", publishedTime: post.date },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: site.lawyer, jobTitle: "Адвокат" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="container-site max-w-3xl py-20">
        <Link
          href="/blog"
          className="text-sm text-mist-500 hover:text-accent-400"
        >
          ← Все статьи
        </Link>
        <div className="mt-6 flex items-center gap-3 text-sm text-mist-500">
          <span className="rounded-sm bg-accent-500/15 px-3 py-1 text-xs text-accent-400">
            {post.category}
          </span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("ru-RU", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <span>· {post.readingTime}</span>
        </div>
        <h1 className="mt-4 text-3xl font-bold leading-tight text-mist-100 sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-8 space-y-5">
          {post.body.map((paragraph, i) => (
            <p key={i} className="text-lg leading-relaxed text-mist-300">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="card-surface mt-12 p-6">
          <p className="text-sm leading-relaxed text-mist-500">
            Статья носит информационный характер и не заменяет консультацию по
            вашему делу. За оценкой конкретной ситуации обращайтесь:{" "}
            <a
              href={site.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-400 hover:underline"
            >
              Telegram {site.telegramHandle}
            </a>
            .
          </p>
        </div>
      </article>
      <CTASection />
    </>
  );
}
