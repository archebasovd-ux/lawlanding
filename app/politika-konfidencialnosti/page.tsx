import type { Metadata } from "next";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: `Политика обработки персональных данных сайта ${site.name} в соответствии с ФЗ-152.`,
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <section className="container-site max-w-3xl py-20">
      <h1 className="font-display text-4xl text-mist-100">
        Политика конфиденциальности
      </h1>
      <p className="mt-2 text-sm text-mist-500">
        В соответствии с Федеральным законом № 152-ФЗ «О персональных данных»
      </p>

      <div className="mt-8 space-y-6 text-mist-300">
        <section>
          <h2 className="text-lg font-semibold text-mist-100">
            1. Оператор персональных данных
          </h2>
          <p className="mt-2 leading-relaxed">
            {site.lawyer}, адвокат, реестровый номер {site.registryNumber} в
            едином реестре адвокатов Российской Федерации. Контакт:{" "}
            <a href={`mailto:${site.email}`} className="text-accent-400 hover:underline">
              {site.email}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-mist-100">
            2. Какие данные обрабатываются
          </h2>
          <p className="mt-2 leading-relaxed">
            Имя, номер телефона или имя пользователя Telegram, а также сведения,
            которые вы добровольно указываете в сообщении через формы сайта.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-mist-100">
            3. Цели обработки
          </h2>
          <p className="mt-2 leading-relaxed">
            Обратная связь по вашему обращению, согласование консультации,
            подготовка к оказанию юридической помощи.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-mist-100">
            4. Хранение и защита
          </h2>
          <p className="mt-2 leading-relaxed">
            Данные не передаются третьим лицам и хранятся не дольше, чем этого
            требуют цели обработки. Сведения, составляющие адвокатскую тайну,
            защищаются в соответствии с ФЗ «Об адвокатской деятельности и
            адвокатуре в РФ».
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-mist-100">5. Ваши права</h2>
          <p className="mt-2 leading-relaxed">
            Вы вправе запросить уточнение, блокирование или удаление своих
            персональных данных, а также отозвать согласие на обработку,
            направив запрос на {site.email}.
          </p>
        </section>
      </div>
    </section>
  );
}
