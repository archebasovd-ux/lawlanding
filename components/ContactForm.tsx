"use client";

import { useState } from "react";
import { site } from "@/lib/data";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [agree, setAgree] = useState(false);

  if (sent) {
    return (
      <div className="card-surface p-8 text-center">
        <span className="text-4xl">✅</span>
        <h3 className="mt-4 text-xl font-semibold text-mist-100">
          Заявка отправлена
        </h3>
        <p className="mt-2 text-sm text-mist-500">
          Марина Александровна свяжется с вами в ближайшее рабочее время.
        </p>
      </div>
    );
  }

  return (
    <form
      className="card-surface space-y-4 p-6 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        // Мок-отправка: на этапе публикации подключим email/Telegram-уведомления
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-mist-300">
            Имя
          </label>
          <input
            id="name"
            required
            placeholder="Как к вам обращаться"
            className="mt-1.5 w-full rounded-sm border border-ink-600/50 bg-ink-900 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-500/60 focus:border-brass-500 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-mist-300">
            Телефон или Telegram
          </label>
          <input
            id="phone"
            required
            placeholder="+7 ... или @username"
            className="mt-1.5 w-full rounded-sm border border-ink-600/50 bg-ink-900 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-500/60 focus:border-brass-500 focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-mist-300">
          Ситуация
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Коротко опишите вопрос — этого хватит для первой оценки"
          className="mt-1.5 w-full rounded-sm border border-ink-600/50 bg-ink-900 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-500/60 focus:border-brass-500 focus:outline-none"
        />
      </div>

      <label className="flex items-start gap-3 text-xs leading-relaxed text-mist-500">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="mt-0.5 h-4 w-4 accent-brass-500"
        />
        <span>
          Соглашаюсь с{" "}
          <a
            href="/politika-konfidencialnosti"
            className="text-brass-400 hover:underline"
          >
            политикой конфиденциальности
          </a>{" "}
          и даю согласие на обработку персональных данных (ФЗ-152)
        </span>
      </label>

      <button
        type="submit"
        disabled={!agree}
        className="btn-primary w-full"
      >
        Записаться на консультацию
      </button>

      <p className="text-center text-xs text-mist-500">
        Или напишите напрямую:{" "}
        <a
          href={site.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brass-400 hover:underline"
        >
          Telegram {site.telegramHandle}
        </a>
      </p>
    </form>
  );
}
