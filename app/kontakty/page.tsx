import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { MailIcon, PhoneIcon, PinIcon, TelegramIcon } from "@/components/Icons";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Контакты",
  description: `Записаться на консультацию к адвокату ${site.lawyer}: телефон, Telegram, email. ${site.city}, ${site.workHours}.`,
};

export default function ContactsPage() {
  return (
    <section className="container-site py-20">
      <h1 className="font-display text-5xl text-mist-100">Контакты</h1>
      <p className="mt-3 max-w-2xl text-lg text-mist-500">
        Выберите удобный способ связи — отвечаю в рабочее время в течение часа.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div className="space-y-5">
          <a
            href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
            className="card-surface flex items-center gap-4 p-5 hover:-translate-y-0.5"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-sm border border-accent-500/30 bg-ink-800/60">
              <PhoneIcon />
            </span>
            <span>
              <span className="block text-xs text-mist-500">Телефон</span>
              <span className="font-semibold text-mist-100">{site.phone}</span>
            </span>
          </a>

          <a
            href={site.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="card-surface flex items-center gap-4 p-5 hover:-translate-y-0.5"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-sm border border-accent-500/30 bg-ink-800/60">
              <TelegramIcon />
            </span>
            <span>
              <span className="block text-xs text-mist-500">
                Telegram — самый быстрый способ
              </span>
              <span className="font-semibold text-mist-100">
                {site.telegramHandle}
              </span>
            </span>
          </a>

          <a
            href={`mailto:${site.email}`}
            className="card-surface flex items-center gap-4 p-5 hover:-translate-y-0.5"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-sm border border-accent-500/30 bg-ink-800/60">
              <MailIcon />
            </span>
            <span>
              <span className="block text-xs text-mist-500">Почта</span>
              <span className="font-semibold text-mist-100">{site.email}</span>
            </span>
          </a>

          <div className="card-surface flex items-center gap-4 p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-sm border border-accent-500/30 bg-ink-800/60">
              <PinIcon />
            </span>
            <span>
              <span className="block text-xs text-mist-500">Кабинет</span>
              <span className="font-semibold text-mist-100">{site.city}</span>
              <span className="block text-sm text-mist-500">
                {site.workHours}
              </span>
            </span>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
