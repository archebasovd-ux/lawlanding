import Link from "next/link";
import { site } from "@/lib/data";

export default function CTASection({
  title = "Обсудим вашу ситуацию?",
  text = "Первая консультация — честная оценка перспектив без обязательств. Напишите в Telegram или оставьте заявку.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-site pb-24 pt-8">
      <div className="relative overflow-hidden rounded border border-accent-500/25 bg-ink-900/60 px-8 py-14 sm:px-16">
        <div className="dot-halo absolute inset-0 opacity-50" />
        <div className="bg-brand-gradient absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-20 blur-3xl" />
        <div className="bg-brand-gradient absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-15 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl text-mist-100 sm:text-5xl">
              {title}
            </h2>
            <p className="mt-4 leading-relaxed text-mist-300">{text}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              href={site.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Написать в Telegram
            </a>
            <Link href="/kontakty" className="btn-ghost">
              Все контакты
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
