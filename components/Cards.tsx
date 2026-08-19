import Link from "next/link";
import type { Service } from "@/lib/data";

/**
 * Карточка практики — структура Attorneyster: заголовок и текст сверху,
 * внизу отбитая линией строка «иконка + ссылка».
 */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/uslugi/${service.slug}`}
      className="card-surface group flex h-full flex-col p-8"
    >
      <h3 className="font-display text-2xl leading-snug text-mist-100 transition-colors group-hover:text-brass-400">
        {service.title}
      </h3>
      <p className="mb-8 mt-3 text-sm leading-relaxed text-mist-500">
        {service.short}
      </p>
      <div className="hairline mt-auto flex items-center justify-between border-t pt-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={service.icon}
          alt=""
          className="card-icon h-11 w-11 object-contain"
        />
        <span className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-brass-500 transition-transform group-hover:translate-x-1">
          Подробнее →
        </span>
      </div>
    </Link>
  );
}

export function CaseCard({
  c,
}: {
  c: { slug: string; category: string; title: string; result: string; year: number };
}) {
  return (
    <Link
      href={`/praktika#${c.slug}`}
      className="card-paper group flex h-full flex-col p-8"
    >
      <div className="flex items-center gap-4 text-[0.7rem] font-bold uppercase tracking-[0.16em]">
        <span className="shrink-0 text-brass-600">{c.category}</span>
        <span className="h-px flex-1 bg-graphite-900/12" aria-hidden="true" />
        <span className="font-display shrink-0 text-base normal-case tracking-normal text-graphite-600">
          {c.year}
        </span>
      </div>

      <p className="font-display mt-6 text-2xl leading-snug text-graphite-900">
        {c.result}
      </p>

      <p className="mt-3 text-sm leading-relaxed">{c.title}</p>

      <span className="mt-auto pt-6 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-brass-600 transition-transform group-hover:translate-x-1">
        Читать кейс →
      </span>
    </Link>
  );
}

export function PostCard({
  post,
}: {
  post: { slug: string; title: string; excerpt: string; date: string; readingTime: string; category: string };
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="card-paper group flex h-full flex-col p-7"
    >
      <div className="flex flex-wrap items-center gap-3 text-xs text-graphite-600">
        <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brass-600">
          {post.category}
        </span>
        <span className="h-3 w-px bg-graphite-900/15" />
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
        <span>· {post.readingTime}</span>
      </div>
      <h3 className="font-display mt-4 text-xl leading-snug text-graphite-900 transition-colors group-hover:text-brass-600">
        {post.title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed">{post.excerpt}</p>
    </Link>
  );
}
