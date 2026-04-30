"use client";

import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

export function AccessSection() {
  const { language } = useLanguage();
  const t = translations[language].access;

  return (
    <section id="access" className="bg-black px-8 py-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 text-center">
          <h2 className="text-[20px] font-semibold tracking-wide">{t.title}</h2>
        </header>

        <div className="grid grid-cols-[45%_55%] gap-8 max-md:grid-cols-1">
          <div className="relative h-[400px] overflow-hidden bg-gray-900">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.2!2d139.6981!3d35.6618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDM5JzQyLjUiTiAxMznCsDQxJzUzLjIiRQ!5e0!3m2!1sen!2sjp!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6 text-[13px] leading-relaxed">
            <div>
              <h3 className="mb-4 text-[16px] font-bold">{t.shopName}</h3>
            </div>
            
            <div>
              <p className="mb-2 font-bold text-white/90">{t.location}</p>
              <ul className="list-disc pl-5 text-white/80">
                <li className="whitespace-pre-line">{t.locationDetails}</li>
              </ul>
            </div>

            <div>
              <p className="mb-2 font-bold text-white/90">{t.station}</p>
              <ul className="list-disc pl-5 text-white/80">
                <li>{t.stationDetails}</li>
              </ul>
            </div>

            <div>
              <p className="mb-2 font-bold text-white/90">{t.hours}</p>
              <ul className="list-disc pl-5 text-white/80">
                <li>{t.hoursDetails}</li>
              </ul>
            </div>

            <div>
              <p className="mb-2 font-bold text-white/90">{t.payment}</p>
              <ul className="list-disc pl-5 text-white/80">
                <li className="whitespace-pre-line">
                  <span className="font-semibold">{t.creditCards}</span> {t.creditCardsDetails}
                </li>
                <li className="whitespace-pre-line">
                  <span className="font-semibold">{t.eMoney}</span> {t.eMoneyDetails}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <footer className="mt-12 flex items-center justify-center gap-12 border-t border-white/20 pt-8 text-[13px]">
          <a href="#home" className="hover:text-[#f2cc3d] transition-colors">
            {translations[language].hero.nav.home}
          </a>
          <a href="#menu" className="hover:text-[#f2cc3d] transition-colors">
            {translations[language].hero.nav.menu}
          </a>
          <a href="#hospitality" className="hover:text-[#f2cc3d] transition-colors">
            {translations[language].hero.nav.hospitality}
          </a>
          <a href="#access" className="hover:text-[#f2cc3d] transition-colors">
            {translations[language].hero.nav.access}
          </a>
        </footer>

        <div className="mt-6 text-center text-[11px] text-white/50">
          <p>{t.copyright}</p>
        </div>
      </div>
    </section>
  );
}
