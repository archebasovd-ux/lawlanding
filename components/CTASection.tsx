import Link from "next/link";
import { Separator } from "@/components/Separator";
import { site } from "@/lib/data";

/**
 * Финальный блок-консультация. В варианте B — как в Attorneyster:
 * левая колонка с текстом, правая — контрастная панель с телефоном.
 */
export default function CTASection({
  title = "Обсудим вашу ситуацию?",
  text = "Первая консультация — честная оценка перспектив без обязательств. Напишите в Telegram или оставьте заявку.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-ink-900">
      <div className="container-site py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Свяжитесь со мной</p>
            <h2 className="h-section mt-4 text-mist-100">{title}</h2>
            <Separator className="mt-5" />
            <p className="measure mt-6 leading-relaxed text-mist-300">{text}</p>
            <div className="mt-9 flex flex-wrap gap-4">
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

          <div className="border border-brass-500/25 bg-ink-950 p-10 sm:p-12">
            <h3 className="font-display text-3xl text-mist-100">
              Первая оценка дела — бесплатно
            </h3>
            <p className="mt-4 leading-relaxed text-mist-500">
              Опишите ситуацию в двух словах — скажу, есть ли перспектива,
              и что делать в первую очередь.
            </p>
            <div className="hairline mt-8 border-t pt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-mist-500">
                Позвонить
              </p>
              <a
                href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                className="font-display mt-2 block text-3xl text-brass-400 hover:text-brass-300"
              >
                {site.phone}
              </a>
              <p className="mt-2 text-sm text-mist-500">{site.workHours}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
