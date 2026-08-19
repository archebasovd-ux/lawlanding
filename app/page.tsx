import Image from "next/image";
import Link from "next/link";
import { CaseCard, PostCard, ServiceCard } from "@/components/Cards";
import CTASection from "@/components/CTASection";
import HeroEffects from "@/components/HeroEffects";
import { PlayIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import { cases, faq, helpFormats, posts, services, site, steps, testimonials, videos } from "@/lib/data";

const stats = [
  { value: "17+", label: "лет адвокатской практики" },
  { value: "23+", label: "года в юриспруденции" },
  { value: "6", label: "ключевых практик" },
  { value: "78/8339", label: "в реестре адвокатов РФ" },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO на всю ширину ============ */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Реальный студийный портрет вместо AI-картинки с неоновыми полками.
            Кадр квадратный, поэтому прижат вправо и к низу — визуально
            повторяет прежнюю компоновку, но без нейросетевого фона. */}
        <div className="hero-portrait pointer-events-none absolute inset-y-0 right-0 hidden w-[60%] lg:block">
          <Image
            src="/images/marina-portrait-hd.jpg"
            alt={`Адвокат ${site.lawyer}`}
            fill
            priority
            className="object-cover object-[center_28%]"
            sizes="60vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
        <div className="dot-halo absolute inset-0 opacity-40" />
        {/* Кинематографика: параллакс-свечение, виньетка, плёночное зерно */}
        <HeroEffects />

        <div className="container-site relative flex min-h-[85vh] flex-col justify-center py-24">
          <div className="max-w-2xl">
            <Reveal delay={120}>
              <h1 className="font-display mt-6 text-5xl leading-[1.05] text-mist-100 sm:text-6xl lg:text-7xl">
                <span className="text-brand-gradient">Гарантия</span> защиты
                <br />
                ваших интересов в суде
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-mist-300">
                {site.lawyer}. Уголовные, гражданские и семейные дела,
                защита репутации, имущественные споры.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/kontakty" className="btn-primary">
                  Бесплатная оценка дела
                </Link>
                <Link href="/uslugi" className="btn-ghost">
                  Услуги и практики
                </Link>
              </div>
            </Reveal>

            {/* На узких экранах абсолютный портрет скрыт — показываем его
                в потоке, иначе первый экран остаётся без фотографии */}
            <Reveal delay={420} className="lg:hidden">
              <div className="relative mt-12 aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/marina-portrait-hd.jpg"
                  alt={`Адвокат ${site.lawyer}`}
                  fill
                  className="object-cover object-[center_15%]"
                  sizes="100vw"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={480}>
            <div className="mt-16 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-4xl font-bold text-mist-100">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-mist-500">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ Бегущая строка направлений ============ */}
      <div className="hairline overflow-hidden border-y bg-ink-900/60 py-5">
        <div className="marquee font-display text-2xl text-mist-300">
          {[...services, ...services].map((s, i) => (
            <span key={i} className="marquee-item">
              {s.title}
              <span className="marquee-star">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ============ Специализация ============ */}
      <section className="container-site py-20">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-4xl text-mist-100 sm:text-5xl">
              Специализация
            </h2>
            <Link
              href="/uslugi"
              className="hidden shrink-0 text-sm font-medium text-accent-400 hover:underline sm:block"
            >
              Все услуги →
            </Link>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 90} className="h-full">
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ Виды помощи ============ */}
      <section className="hairline border-y bg-ink-900/40">
        <div className="container-site py-20">
          <Reveal>
            <h2 className="font-display text-4xl text-mist-100 sm:text-5xl">
              Виды помощи
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {helpFormats.map((f, i) => (
              <Reveal key={f.title} delay={i * 90} className="h-full">
                <div className="card-surface h-full p-7">
                  <h3 className="font-display text-xl text-mist-100">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-500">
                    {f.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Как мы работаем — роудмап ============ */}
      <section className="container-site py-20">
        <Reveal>
          <h2 className="font-display text-4xl text-mist-100 sm:text-5xl">
            Как мы работаем
          </h2>
        </Reveal>

        {/* Десктоп: маршрут-карта с извилистым пунктиром и пинами */}
        <div className="relative mt-8 hidden lg:block" style={{ height: 440 }}>
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1200 280"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="routeGrad"
                x1="0"
                y1="0"
                x2="1200"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4a6cf7" />
                <stop offset="1" stopColor="#4a6cf7" />
              </linearGradient>
            </defs>
            <path
              d="M60 190 C 180 190 180 90 320 90 C 460 90 460 190 600 190 C 740 190 740 90 880 90 C 1020 90 1020 190 1140 190"
              stroke="url(#routeGrad)"
              strokeWidth="3"
              className="route-path"
            />
          </svg>

          {steps.map((s, i) => {
            // Позиции пинов точно на кривой маршрута (в % от viewBox 1200x280)
            const pins = [
              { x: 26.7, y: 32.1, up: true },
              { x: 50.0, y: 67.9, up: false },
              { x: 73.3, y: 32.1, up: true },
              { x: 95.0, y: 67.9, up: false },
            ];
            const pin = pins[i];
            return (
              <div key={s.num}>
                {/* Пин-метка на маршруте */}
                <Reveal
                  delay={i * 180}
                  className="absolute"
                  style={{
                    left: `calc(${pin.x}% - 24px)`,
                    top: `calc(${pin.y}% - 24px)`,
                  }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent-500 bg-ink-950 font-display text-lg font-bold text-accent-400">
                    {i + 1}
                  </div>
                </Reveal>
                {/* Карточка шага — по очереди над/под маршрутом */}
                <Reveal
                  delay={i * 180 + 90}
                  className="absolute"
                  style={{
                    left: `calc(${pin.x}% - 112px)`,
                    ...(pin.up
                      ? { bottom: `calc(${100 - pin.y}% + 20px)` }
                      : { top: `calc(${pin.y}% + 36px)` }),
                  }}
                >
                  <div className="card-surface w-[224px] p-4">
                    <h3 className="font-display text-base text-mist-100">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-mist-500">
                      {s.text}
                    </p>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>

        {/* Мобильные: вертикальный пунктир с пинами */}
        <div className="relative mt-12 space-y-10 lg:hidden">
          <div className="roadmap-line-vertical absolute bottom-2 left-[23px] top-2" />
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 100}>
              <div className="relative pl-16">
                <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent-500 bg-ink-950 font-display text-lg font-bold text-accent-400">
                  {i + 1}
                </span>
                <h3 className="font-display pt-2 text-xl text-mist-100">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-500">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ Видео ============ */}
      <section id="video" className="hairline border-y bg-ink-900/40 scroll-mt-24">
        <div className="container-site py-20">
          <Reveal>
            <h2 className="font-display text-4xl text-mist-100 sm:text-5xl">
              Видео
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v, i) => (
              <Reveal key={v.title} delay={i * 90} className="h-full">
                <a href={v.url} className="card-surface group flex h-full flex-col overflow-hidden">
                  {/* Превью ролика */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={v.image}
                      alt={v.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
                    <span className="play-pulse absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent-500/50 bg-ink-900/80 backdrop-blur-sm transition-transform group-hover:scale-110">
                      <PlayIcon />
                    </span>
                    <span className="absolute bottom-3 right-3 rounded-sm bg-ink-950/80 px-2 py-0.5 text-xs text-mist-300">
                      {v.duration}
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium uppercase tracking-wider text-accent-400">
                      {v.topic}
                    </span>
                    <h3 className="font-display mt-2 line-clamp-2 min-h-[3.2rem] text-lg leading-snug text-mist-100 group-hover:text-accent-400">
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
      <section className="relative overflow-hidden">
        <div className="section-texture">
          <Image src="/images/texture-columns.jpg" alt="" fill sizes="100vw" />
        </div>
        <div className="container-site relative py-20">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-display text-4xl text-mist-100 sm:text-5xl">
                Практика
              </h2>
              <Link
                href="/praktika"
                className="hidden shrink-0 text-sm font-medium text-accent-400 hover:underline sm:block"
              >
                Все кейсы →
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cases.slice(0, 3).map((c, i) => (
              <Reveal key={c.slug} delay={i * 90} className="h-full">
                <CaseCard c={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Отзывы ============ */}
      <section className="hairline relative overflow-hidden border-y bg-ink-900/40">
        <div className="section-texture">
          <Image src="/images/texture-seal.jpg" alt="" fill sizes="100vw" />
        </div>
        <div className="container-site relative py-20">
          <Reveal>
            <h2 className="font-display text-4xl text-mist-100 sm:text-5xl">
              Отзывы
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 90} className="h-full">
                <blockquote className="card-surface h-full p-8">
                  <span className="font-display text-5xl leading-none text-accent-500/50">
                    «
                  </span>
                  <p className="mt-2 leading-relaxed text-mist-300">{t.text}</p>
                  <footer className="hairline mt-6 border-t pt-4 text-sm">
                    <span className="font-semibold text-mist-100">{t.name}</span>
                    <span className="text-mist-500"> · {t.context}</span>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Блог ============ */}
      <section className="container-site py-20">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-4xl text-mist-100 sm:text-5xl">
              Блог
            </h2>
            <Link
              href="/blog"
              className="hidden shrink-0 text-sm font-medium text-accent-400 hover:underline sm:block"
            >
              Все статьи →
            </Link>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 90} className="h-full">
              <PostCard post={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="hairline border-t bg-ink-900/40">
        <div className="container-site py-20">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="font-display text-center text-4xl text-mist-100 sm:text-5xl">
                Частые вопросы
              </h2>
            </Reveal>
            <div className="mt-10 space-y-4">
              {faq.map((item, i) => (
                <Reveal key={item.q} delay={i * 70}>
                  <details className="card-surface group p-6">
                    <summary className="cursor-pointer list-none font-medium text-mist-100">
                      <span className="flex items-center justify-between gap-4">
                        {item.q}
                        <span className="text-xl text-accent-400 transition-transform group-open:rotate-45">
                          +
                        </span>
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-mist-500">
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
