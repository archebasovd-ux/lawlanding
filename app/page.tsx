import Image from "next/image";
import Link from "next/link";
import { CaseCard, PostCard, ServiceCard } from "@/components/Cards";
import CTASection from "@/components/CTASection";
import HeroEffects from "@/components/HeroEffects";
import { PlayIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import { SectionTitle, Separator } from "@/components/Separator";
import { cases, faq, helpFormats, posts, services, site, steps, testimonials, videos } from "@/lib/data";

const stats = [
  { value: "17+", label: "лет адвокатской практики" },
  { value: "23+", label: "года в юриспруденции" },
  { value: "6", label: "ключевых практик" },
  { value: "78/8339", label: "в реестре адвокатов РФ" },
];

// Практические факты для блока «Об адвокате»: где, как и когда.
// Намеренно без цифр — 17+/23+/реестр уже стоят в полосе под hero.
const credentials = [
  { value: "Очно", label: "Санкт-Петербург и Ленинградская область" },
  { value: "Онлайн", label: "консультации по всей России" },
  { value: "По записи", label: "Пн–Пт, 10:00–19:00" },
];

// Принципы работы — блок «Об адвокате». Заменяет собой повтор портрета.
const principles = [
  {
    title: "Честная оценка на входе",
    text: "Если перспектив нет — скажу об этом на первой консультации, а не после оплаты соглашения.",
  },
  {
    title: "Фиксированные условия",
    text: "Стоимость и объём работы закреплены в соглашении об оказании юридической помощи.",
  },
  {
    title: "Отчёт после каждого этапа",
    text: "Вы знаете, что происходит по делу, без необходимости напоминать о себе.",
  },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-ink-950">
        {/* Портрет справа, мягко растворяется в фоне */}
        {/* Блок повторяет квадратную пропорцию фото, поэтому маска совпадает
            с краем картинки и не даёт резкой кромки. Прижат к низу, обрезка
            при нехватке высоты идёт снизу — макушка не срезается никогда. */}
        <div className="portrait-fade pointer-events-none absolute bottom-0 right-0 hidden aspect-square max-h-full w-[46%] lg:block">
          <Image
            src="/images/marina-portrait-hd.jpg"
            alt={`Адвокат ${site.lawyer}`}
            fill
            priority
            className="object-cover object-top"
            sizes="46vw"
          />
        </div>
        <HeroEffects />

        <div className="container-site relative py-16 lg:py-32">
          <div className="max-w-2xl">
            <Reveal>
              <Separator />
            </Reveal>
            <Reveal delay={100}>
              {/* Заказчик отдельно отметил слово «Гарантия» в этом цвете —
                  так называется её кабинет. Это и есть смысловой акцент hero. */}
              <h1 className="h-hero mt-7 text-mist-100">
                <span className="text-accent-500">Гарантия</span> защиты
                <br />
                ваших интересов
                <br />
                в суде
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-7 max-w-md text-[1.05rem] leading-relaxed text-mist-300">
                {site.lawyer} — адвокат в {site.city}е. Уголовные, гражданские
                и семейные дела, защита репутации, имущественные споры.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/kontakty" className="btn-primary">
                  Бесплатная оценка дела
                </Link>
                <Link href="/uslugi" className="btn-ghost">
                  Услуги и практики
                </Link>
              </div>
            </Reveal>

            {/* На узких экранах портрет уходит из абсолютного слоя под текст */}
            <Reveal delay={360} className="lg:hidden">
              <div className="relative mt-12 aspect-[3/2] w-full overflow-hidden">
                <Image
                  src="/images/marina-portrait-hd.jpg"
                  alt={`Адвокат ${site.lawyer}`}
                  fill
                  className="object-cover object-[center_18%]"
                  sizes="100vw"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Полоса статистики по нижнему краю hero */}
        <div className="hairline relative border-t bg-ink-900/70">
          <div className="container-site">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal
                  key={s.label}
                  delay={i * 80}
                  className={`hairline py-7 ${
                    i < 2 ? "border-b lg:border-b-0" : ""
                  } ${i % 2 === 0 ? "border-r" : ""} ${
                    i === 1 ? "lg:border-r" : ""
                  }`}
                >
                  <div className="px-2 lg:px-8">
                    <p className="font-display text-4xl font-semibold text-accent-400">
                      {s.value}
                    </p>
                    <p className="mt-1.5 text-xs leading-snug text-mist-500">
                      {s.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ Об адвокате — светлая секция ============ */}
      <section className="section-light">
        <div className="container-site py-24">
          <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Левая колонка — предметная деталь профессии.
                Цифры отсюда убраны: 17+/23+/реестр уже стоят в полосе под hero. */}
            <Reveal>
              <div className="relative max-w-lg">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src="/images/texture-seal.jpg"
                    alt="Соглашение об оказании юридической помощи, перо и печать"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 45vw, 90vw"
                  />
                </div>
                {/* Карточка наезжает на угол фото — приём Attorneyster */}
                <div className="relative -mt-16 ml-8 border-l-2 border-accent-500 bg-ink-950 px-9 py-8 sm:ml-16">
                  <p className="font-display !text-mist-100 text-2xl leading-snug">
                    «Соглашение — это и есть гарантия: объём работы и стоимость
                    зафиксированы до её начала».
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-5">
                  {credentials.map((c) => (
                    <div key={c.label} className="border-t border-graphite-900/15 pt-4">
                      <p className="font-display text-lg leading-tight text-graphite-900">
                        {c.value}
                      </p>
                      <p className="mt-1 text-xs leading-snug">{c.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <SectionTitle
                eyebrow="Об адвокате"
                tone="dark"
                title={site.lawyer}
              />
              <p className="measure mt-7 leading-relaxed">
                Веду дела в судах общей юрисдикции и арбитражных судах
                Санкт-Петербурга и Ленинградской области, консультирую онлайн по
                всей России. Уголовная защита, семейные и имущественные споры,
                защита чести и деловой репутации.
              </p>
              <p className="measure mt-4 leading-relaxed">
                Статус адвоката — это не только право работать по уголовным
                делам. Это адвокатская тайна, которую нельзя истребовать, право
                делать адвокатский запрос и ответственность перед палатой за
                каждое дело. Юридическая фирма без этого статуса таких гарантий
                не даёт.
              </p>

              {/* Принципы работы — то, что отличает адвоката от «юруслуг» */}
              <ul className="mt-10 space-y-7 border-t border-graphite-900/10 pt-9">
                {principles.map((p, i) => (
                  <li key={p.title} className="flex gap-5">
                    <span className="font-display shrink-0 text-2xl leading-none text-accent-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="font-display block text-lg text-graphite-900">
                        {p.title}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-graphite-600">
                        {p.text}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              <Link href="/o-sebe" className="btn-dark mt-10">
                Подробнее обо мне
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ Специализация ============ */}
      <section className="bg-ink-950">
        <div className="container-site py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <Reveal>
              <SectionTitle eyebrow="Практики" title="Специализация" />
            </Reveal>
            <Reveal delay={100}>
              <p className="measure leading-relaxed text-mist-300 lg:pb-2">
                Шесть направлений, в которых я веду дела постоянно, а не «по
                случаю». По каждому — понятный объём работы и порядок оплаты.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70} className="h-full">
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Виды помощи ============ */}
      <section className="section-light-alt">
        <div className="container-site py-24">
          <Reveal>
            <SectionTitle
              eyebrow="Форматы работы"
              title="Виды помощи"
              align="center"
              tone="dark"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {helpFormats.map((f, i) => (
              <Reveal key={f.title} delay={i * 70} className="h-full">
                <div className="card-paper h-full p-8">
                  <p className="font-display text-3xl text-accent-500">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display mt-4 text-xl text-graphite-900">
                    {f.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Как я работаю ============ */}
      <section className="bg-ink-950">
        <div className="container-site py-24">
          <Reveal>
            <SectionTitle eyebrow="Процесс" title="Как я работаю" />
          </Reveal>

          <div className="mt-14 grid gap-px bg-accent-500/15 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 90} className="h-full">
                <div className="h-full bg-ink-950 p-8">
                  <p className="font-display text-5xl leading-none text-accent-500/45">
                    {s.num}
                  </p>
                  <h3 className="font-display mt-6 text-xl text-mist-100">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-mist-500">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Видео ============ */}
      <section id="video" className="hairline scroll-mt-24 border-y bg-ink-900">
        <div className="container-site py-24">
          <Reveal>
            <SectionTitle eyebrow="Разбираю простыми словами" title="Видео" />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v, i) => (
              <Reveal key={v.title} delay={i * 70} className="h-full">
                <a
                  href={v.url}
                  className="card-surface group flex h-full flex-col overflow-hidden"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={v.image}
                      alt={v.title}
                      fill
                      className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-ink-950/45" />
                    <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent-500/70 bg-ink-950/70 text-accent-400 transition-transform group-hover:scale-110">
                      <PlayIcon />
                    </span>
                    <span className="absolute bottom-3 right-3 bg-ink-950/85 px-2 py-0.5 text-xs text-mist-300">
                      {v.duration}
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-accent-500">
                      {v.topic}
                    </span>
                    <h3 className="font-display mt-2.5 line-clamp-2 min-h-[3.2rem] text-lg leading-snug text-mist-100 group-hover:text-accent-400">
                      {v.title}
                    </h3>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Практика / кейсы ============ */}
      <section className="section-light">
        <div className="container-site py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <SectionTitle eyebrow="Результаты" title="Практика" tone="dark" />
            </Reveal>
            <Reveal delay={100}>
              <Link href="/praktika" className="btn-dark">
                Все кейсы
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cases.slice(0, 3).map((c, i) => (
              <Reveal key={c.slug} delay={i * 70} className="h-full">
                <CaseCard c={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Отзывы ============ */}
      <section className="bg-ink-950">
        <div className="container-site py-24">
          <Reveal>
            <SectionTitle
              eyebrow="Слова доверителей"
              title="Отзывы"
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 70} className="h-full">
                <blockquote className="card-surface h-full p-9">
                  <svg
                    width="28"
                    height="22"
                    viewBox="0 0 28 22"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 22V11.6C0 5.2 3.7 1 10.4 0l1.2 3.4C7.6 4.5 5.6 6.7 5.4 9.8H11V22H0Zm16.4 0V11.6C16.4 5.2 20.1 1 26.8 0L28 3.4c-4 1.1-6 3.3-6.2 6.4H27V22h-10.6Z"
                      fill="#4a6cf7"
                      fillOpacity="0.55"
                    />
                  </svg>
                  <p className="mt-5 leading-relaxed text-mist-300">{t.text}</p>
                  <footer className="hairline mt-7 border-t pt-5 text-sm">
                    <span className="font-display text-lg text-mist-100">
                      {t.name}
                    </span>
                    <span className="text-mist-500"> · {t.context}</span>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Блог ============ */}
      <section className="section-light-alt">
        <div className="container-site py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <SectionTitle eyebrow="Полезное" title="Блог" tone="dark" />
            </Reveal>
            <Reveal delay={100}>
              <Link href="/blog" className="btn-dark">
                Все статьи
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 70} className="h-full">
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-ink-950">
        <div className="container-site py-24">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <SectionTitle
                eyebrow="Вопрос — ответ"
                title="Частые вопросы"
                align="center"
              />
            </Reveal>
            <div className="mt-14 space-y-3">
              {faq.map((item, i) => (
                <Reveal key={item.q} delay={i * 60}>
                  <details className="card-surface group p-7">
                    <summary className="cursor-pointer list-none font-medium text-mist-100">
                      <span className="flex items-center justify-between gap-4">
                        {item.q}
                        <span className="text-xl text-accent-500 transition-transform group-open:rotate-45">
                          +
                        </span>
                      </span>
                    </summary>
                    <p className="mt-4 text-sm leading-relaxed text-mist-500">
                      {item.a}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
