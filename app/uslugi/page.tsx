import type { Metadata } from "next";
import { ServiceCard } from "@/components/Cards";
import CTASection from "@/components/CTASection";
import { helpFormats, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Услуги адвоката",
  description:
    "Услуги адвоката в Санкт-Петербурге: уголовные дела, гражданские и семейные споры, защита репутации, имущественные споры, судебное представительство.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="container-site py-20">
        <h1 className="font-display text-5xl text-mist-100">Услуги</h1>
        <p className="mt-3 max-w-2xl text-lg text-mist-500">
          Шесть ключевых практик. По каждой — честная оценка перспектив,
          понятная стратегия и фиксированная стоимость в соглашении.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <section className="border-t border-ink-600/40 bg-ink-900/50">
        <div className="container-site py-20">
          <h2 className="font-display text-4xl text-mist-100">
            Форматы работы
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {helpFormats.map((f) => (
              <div key={f.title} className="card-surface p-6">
                <h3 className="font-semibold text-mist-100">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-500">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Не нашли свою ситуацию?"
        text="Напишите — скажу честно, моя это практика или лучше обратиться к коллеге другого профиля."
      />
    </>
  );
}
