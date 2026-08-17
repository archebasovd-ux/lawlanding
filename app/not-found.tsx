import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <p className="text-brand-gradient text-6xl font-bold">404</p>
      <h1 className="mt-4 text-2xl font-bold text-mist-100">
        Страница не найдена
      </h1>
      <p className="mt-3 text-mist-500">
        Возможно, страница была перемещена. Вернитесь на главную или напишите
        мне напрямую.
      </p>
      <Link
        href="/"
        className="btn-primary mt-8"
      >
        На главную
      </Link>
    </section>
  );
}
