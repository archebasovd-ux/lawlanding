import Link from "next/link";
import type { Service } from "@/lib/data";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/uslugi/${service.slug}`}
      className="card-surface group block h-full p-7"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={service.icon}
        alt=""
        className="card-icon h-16 w-16 object-contain"
      />
      <h3 className="mt-5 font-display text-xl text-mist-100 group-hover:text-accent-400">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-mist-500">
        {service.short}
      </p>
      <span className="mt-4 inline-block text-sm font-medium text-accent-400 transition-transform group-hover:translate-x-1">
        Подробнее →
      </span>
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
      className="card-surface group flex h-full flex-col p-7"
    >
      {/* Категория — сдержанная подпись с тонкой линией, без «чипа» */}
      <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.14em]">
        <span className="shrink-0 text-accent-400">{c.category}</span>
        <span className="h-px flex-1 bg-accent-500/25" aria-hidden="true" />
        <span className="shrink-0 font-display text-base normal-case tracking-normal text-mist-500">
          {c.year}
        </span>
      </div>

      {/* Вердикт — главный акцент карточки */}
      <p className="mt-6 font-display text-2xl leading-snug text-accent-400">
        <span className="mr-2 inline-flex h-5 w-5 translate-y-[2px] items-center justify-center rounded-full bg-accent-500/15 text-xs leading-none">
          ✓
        </span>
        {c.result}
      </p>

      {/* Суть дела — спокойным текстом под вердиктом */}
      <h3 className="mt-3 text-sm leading-relaxed text-mist-300">{c.title}</h3>

      <span className="mt-auto inline-block pt-5 text-sm font-medium text-accent-400 opacity-55 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
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
      className="card-surface group flex h-full flex-col p-6"
    >
      <div className="flex items-center gap-3 text-xs text-mist-500">
        <span className="rounded-sm bg-accent-500/15 px-2.5 py-1 text-accent-400">
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
      <h3 className="mt-3 font-display text-xl leading-snug text-mist-100 group-hover:text-accent-400">
        {post.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-mist-500">
        {post.excerpt}
      </p>
    </Link>
  );
}
