"use client";

import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

export function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section
      id="home"
      className="grid h-[100svh] grid-cols-[41%_59%] border-b-2 border-[#f2cc3d] max-md:grid-cols-1 max-md:h-auto"
    >
      <div className="relative px-6 py-5 max-md:pb-10">
        <div className="absolute left-1/2 top-[30%] w-full max-w-[460px] -translate-x-1/2 -translate-y-1/2 px-4">
          <div className="relative">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 opacity-15">
              <Image
                src="/Hero Page/halal logo.png"
                alt="Halal logo"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="relative z-10 whitespace-nowrap text-center text-[clamp(42px,4vw,68px)] font-semibold leading-[0.92]">
              WAGYU STALL
            </h1>
          </div>
        </div>

        <nav className="absolute left-[60%] top-[52%] w-full max-w-[460px] -translate-x-1/2 px-4 text-[22px] leading-tight max-md:static max-md:mt-[260px] max-md:translate-x-0 max-md:px-0">
          <div className="flex flex-col gap-5">
            <a href="#home">{t.nav.home}</a>
            <a href="#menu">{t.nav.menu}</a>
            <a href="#hospitality">{t.nav.hospitality}</a>
            <a href="#access">{t.nav.access}</a>
          </div>
        </nav>
      </div>

      <div className="relative min-h-[360px] overflow-hidden">
        <Image
          src="/Hero Page/_1110109.png"
          alt="Wagyu Stall hero image"
          fill
          priority
          className="object-cover object-center [object-position:center_22%]"
          sizes="(max-width: 768px) 100vw, 59vw"
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black via-black/65 via-40% to-transparent blur-md" />
      </div>
    </section>
  );
}
