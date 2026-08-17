import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: `О себе — ${site.lawyer}`,
  description: `${site.lawyer}, адвокат в ${site.city}е. ${site.experience}. ${site.registryNote}.`,
};

const facts = [
  { label: "Адвокатская практика", value: "17+ лет" },
  { label: "Юридическая практика", value: "23+ года" },
  { label: "Реестровый номер", value: site.registryNumber },
  { label: "География", value: `${site.city} и онлайн по РФ` },
];

const principles = [
  {
    title: "Честная оценка",
    text: "Если перспектив нет — скажу прямо на первой консультации и предложу альтернативу.",
  },
  {
    title: "Постоянная связь",
    text: "Вы узнаёте о каждом шаге по делу в день, когда он произошёл. Никаких «перезвоните позже».",
  },
  {
    title: "Фиксированная стоимость",
    text: "Стоимость работы фиксируется в соглашении до начала дела и не меняется в процессе.",
  },
  {
    title: "Адвокатская тайна",
    text: "Всё, что вы рассказываете, защищено законом. Без исключений.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="container-site py-20">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-accent-400">О себе</p>
            <h1 className="mt-3 font-display text-5xl text-mist-100">
              {site.lawyer}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-mist-300">
              Адвокат в {site.city}е. Защищаю доверителей по уголовным,
              гражданским и семейным делам, спорам о репутации и имуществе.
            </p>
            <p className="mt-4 leading-relaxed text-mist-500">
              Убеждена: хорошая защита начинается с честного разговора. На
              первой консультации я разбираю ситуацию, называю реальные
              перспективы и предлагаю конкретный план — дальше вы принимаете
              взвешенное решение.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {facts.map((f) => (
                <div key={f.label} className="card-surface p-4">
                  <p className="text-xs text-mist-500">{f.label}</p>
                  <p className="mt-1 font-semibold text-mist-100">{f.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <div className="bg-brand-gradient absolute -inset-3 rounded-sm opacity-15 blur-2xl" />
              <Image
                src="/images/marina-office.jpg"
                alt={`${site.lawyer} в кабинете`}
                width={960}
                height={1280}
                className="relative w-full rounded-sm border border-ink-600/40 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink-600/40 bg-ink-900/50">
        <div className="container-site py-20">
          <h2 className="font-display text-4xl text-mist-100">
            Принципы работы
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="card-surface p-6">
                <h3 className="text-lg font-semibold text-accent-400">
                  {p.title}
                </h3>
                <p className="mt-2 leading-relaxed text-mist-500">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Познакомимся лично?"
        text="Запишитесь на консультацию — очно в кабинете или онлайн из любого города."
      />
    </>
  );
}
