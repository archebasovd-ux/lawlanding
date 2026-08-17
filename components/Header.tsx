"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MailIcon, PhoneIcon, TelegramIcon } from "@/components/Icons";
import { nav, site } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink-950/90 backdrop-blur-md">
      {/* Верхняя контактная панель — как в Attorneyster */}
      <div className="hairline hidden border-b lg:block">
        <div className="container-site flex h-10 items-center justify-between text-xs text-mist-500">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-2 transition-colors hover:text-accent-400"
            >
              <PhoneIcon className="h-3.5 w-3.5 text-accent-400" /> {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 transition-colors hover:text-accent-400"
            >
              <MailIcon className="h-3.5 w-3.5 text-accent-400" /> {site.email}
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span>{site.city} · {site.workHours}</span>
            <a
              href={site.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-accent-400"
            >
              <TelegramIcon className="h-3.5 w-3.5 text-accent-400" /> {site.telegramHandle}
            </a>
          </div>
        </div>
      </div>

      {/* Основная навигация */}
      <div className="hairline border-b">
        <div className="container-site flex h-[72px] items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/icons/logo.png" alt="" className="logo-icon h-11 w-11 object-contain" />
            <span className="leading-tight">
              <span className="font-display block text-lg font-bold tracking-wide text-mist-100">
                <span className="text-brand-gradient">Гарантия</span> защиты
              </span>
              <span className="block text-[11px] tracking-wider text-mist-500">
                Адвокат · {site.city}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    active ? "text-mist-100" : "text-mist-500 hover:text-mist-100"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="bg-brand-gradient absolute inset-x-4 -bottom-[1px] h-[2px] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link href="/kontakty" className="btn-primary !py-2.5 !px-6">
              Записаться
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Меню"
            className="rounded-sm border border-ink-600/50 p-2.5 text-mist-300 lg:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              {open ? (
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="hairline border-b bg-ink-950 px-6 pb-5 pt-2 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-mist-300 hover:bg-ink-800 hover:text-mist-100"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/kontakty"
            onClick={() => setOpen(false)}
            className="btn-primary mt-3 w-full"
          >
            Записаться на консультацию
          </Link>
        </nav>
      )}
    </header>
  );
}
