import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { cases } from "@/lib/data";

export const metadata: Metadata = {
  title: "Практика — кейсы и результаты",
  description:
    "Примеры дел адвоката Родиной Марины Александровны: прекращённые уголовные дела, раздел имущества, защита репутации, взыскание ущерба.",
};

export default function CasesPage() {
  return (
    <>
      <section className="container-site py-20">
        <h1 className="font-display text-5xl text-mist-100">Практика</h1>
        <p className="mt-3 max-w-2xl text-lg text-mist-500">
          Обезличенные примеры дел. Детали изменены в соответствии с
          адвокатской тайной — результаты реальны.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {cases.map((c) => (
            <article key={c.slug} id={c.slug} className="card-surface scroll-mt-24 p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="rounded-sm bg-brass-500/15 px-3 py-1 text-xs font-medium text-brass-400">
                  {c.category}
                </span>
                <span className="text-xs text-mist-500">{c.year}</span>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-mist-100">
                {c.title}
              </h2>
              <p className="mt-3 leading-relaxed text-mist-500">{c.summary}</p>
              <p className="mt-4 rounded-sm bg-ink-800/70 px-4 py-2.5 text-sm font-medium text-brass-400">
                ✓ {c.result}
              </p>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="Узнали свою ситуацию?"
        text="Каждое дело уникально — расскажите о своём, и я скажу, какие варианты есть именно у вас."
      />
    </>
  );
}
