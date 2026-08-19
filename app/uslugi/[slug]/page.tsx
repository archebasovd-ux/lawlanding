import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import { cases, services, site } from "@/lib/data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} — адвокат в ${site.city}е`,
    description: service.short,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedCases = cases
    .filter((c) => c.category === service.title.replace(/^Защита чести и репутации$/, "Защита репутации"))
    .slice(0, 2);

  return (
    <>
      <section className="container-site max-w-4xl py-20">
        <Link
          href="/uslugi"
          className="text-sm text-mist-500 hover:text-accent-400"
        >
          ← Все услуги
        </Link>
        <div className="mt-6 flex items-start gap-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={service.icon} alt="" className="h-20 w-20 object-contain" />
          <div>
            <h1 className="font-display text-5xl text-mist-100">
              {service.title}
            </h1>
            <p className="mt-2 text-lg text-accent-400">{service.short}</p>
          </div>
        </div>
        <p className="mt-8 text-lg leading-relaxed text-mist-300">
          {service.description}
        </p>

        <div className="card-surface mt-10 p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-mist-100">
            Чем конкретно я помогаю
          </h2>
          <ul className="mt-4 space-y-3">
            {service.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-mist-300">
                <span className="mt-1 text-accent-400">✓</span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {relatedCases.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-mist-100">
              Примеры из практики
            </h2>
            <div className="mt-4 space-y-4">
              {relatedCases.map((c) => (
                <div key={c.slug} className="card-surface p-5">
                  <h3 className="font-semibold text-mist-100">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-500">
                    {c.summary}
                  </p>
                  <p className="mt-3 text-sm font-medium text-accent-400">
                    ✓ {c.result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <CTASection
        title={`Есть вопрос по теме «${service.title}»?`}
        text="Опишите ситуацию в Telegram — оценю перспективы и назову стоимость работы."
      />
    </>
  );
}
