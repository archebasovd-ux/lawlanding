import type { Metadata } from "next";
import { PostCard } from "@/components/Cards";
import CTASection from "@/components/CTASection";
import { posts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Блог — разборы и советы адвоката",
  description:
    "Практические статьи адвоката: что делать при задержании, как защитить репутацию, раздел имущества, взыскание ущерба. Новые материалы каждые 2–3 дня.",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="container-site py-20">
        <h1 className="font-display text-5xl text-mist-100">Блог</h1>
        <p className="mt-3 max-w-2xl text-lg text-mist-500">
          Разбираю реальные ситуации простым языком: ваши права, порядок
          действий и типичные ошибки.
        </p>

        {/* Свежая статья — крупно */}
        <article className="card-surface mt-10 overflow-hidden">
          <div className="p-8 sm:p-10">
            <div className="flex items-center gap-3 text-xs text-mist-500">
              <span className="rounded-sm bg-brass-500/15 px-2.5 py-1 text-brass-400">
                {featured.category}
              </span>
              <span>Новое</span>
            </div>
            <a href={`/blog/${featured.slug}`}>
              <h2 className="mt-4 max-w-2xl text-2xl font-bold leading-snug text-mist-100 hover:text-brass-400 sm:text-3xl">
                {featured.title}
              </h2>
            </a>
            <p className="mt-3 max-w-2xl leading-relaxed text-mist-500">
              {featured.excerpt}
            </p>
            <a
              href={`/blog/${featured.slug}`}
              className="mt-5 inline-block text-sm font-medium text-brass-400 hover:underline"
            >
              Читать →
            </a>
          </div>
        </article>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      <CTASection
        title="Есть тема для разбора?"
        text="Напишите в Telegram, какая ситуация вас интересует, — разберу её в следующей статье (анонимно)."
      />
    </>
  );
}
