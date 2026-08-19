import Link from "next/link";
import { legalBlock, nav, services, site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-ink-600/40 bg-ink-900">
      <div className="container-site py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/icons/brass/logo.png" alt="" className="h-10 w-10 object-contain" />
              <span className="text-brass-500 text-sm font-bold tracking-wide">
                ГАРАНТИЯ ЗАЩИТЫ
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-mist-500">
              {site.lawyer} — адвокат в {site.city}е. {site.experience}.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-mist-100">Разделы</h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-mist-500 hover:text-brass-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-mist-100">Практики</h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/uslugi/${s.slug}`}
                    className="text-sm text-mist-500 hover:text-brass-400"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-mist-100">Контакты</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-mist-500">
              <li>
                <a
                  href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                  className="hover:text-brass-400"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-brass-400">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brass-400"
                >
                  Telegram {site.telegramHandle}
                </a>
              </li>
              <li>{site.workHours}</li>
            </ul>
          </div>
        </div>

        {/* Юридический блок: реестр + 152-ФЗ */}
        <div className="mt-12 rounded-sm border border-ink-600/40 bg-ink-950/60 p-5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-mist-500">
            {legalBlock.title}
          </h4>
          <ul className="mt-3 space-y-1.5">
            {legalBlock.lines.map((line) => (
              <li key={line} className="text-xs leading-relaxed text-mist-500">
                {line}
              </li>
            ))}
          </ul>
          <Link
            href={legalBlock.privacyHref}
            className="mt-3 inline-block text-xs text-brass-400 hover:underline"
          >
            Политика конфиденциальности →
          </Link>
        </div>

        <p className="mt-8 text-center text-xs text-mist-500">
          © {new Date().getFullYear()} {site.name} · {site.lawyer} ·{" "}
          {site.registryNote}
        </p>
      </div>
    </footer>
  );
}
