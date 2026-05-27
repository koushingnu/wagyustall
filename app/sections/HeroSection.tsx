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
      className="grid h-[100svh] grid-cols-[41%_59%] border-b-2 border-[#f2cc3d] max-md:h-[35vh]"
    >
      <div className="relative px-6 py-5 max-md:px-3 max-md:py-4">
        <div className="absolute left-1/2 top-[30%] w-full max-w-[460px] -translate-x-1/2 -translate-y-1/2 px-4 max-md:top-[25%] max-md:px-2">
          <div className="relative">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 opacity-15 max-md:h-24 max-md:w-24">
              <Image
                src="/Hero Page/halal logo.png"
                alt="Halal logo"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="relative z-10 whitespace-nowrap text-center text-[clamp(20px,4vw,68px)] font-semibold leading-[0.92]">
              WAGYU STALL
            </h1>
          </div>
        </div>

        <nav className="absolute left-[60%] top-[52%] w-full max-w-[460px] -translate-x-1/2 px-4 text-[22px] leading-tight max-md:left-1/2 max-md:top-[60%] max-md:text-[14px] max-md:px-2">
          <div className="flex flex-col gap-5 max-md:gap-3">
            <a href="#home">{t.nav.home}</a>
            <a href="#menu">{t.nav.menu}</a>
            <a href="#hospitality">{t.nav.hospitality}</a>
            <a href="#access">{t.nav.access}</a>
          </div>
        </nav>
      </div>

      <div className="relative min-h-[360px] overflow-hidden max-md:min-h-0">
        <Image
          src="/Hero Page/_1110109.png"
          alt="Wagyu Stall hero image"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center 70%" }}
          sizes="(max-width: 768px) 60vw, 59vw"
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-80 bg-gradient-to-r from-black via-black/90 via-50% to-transparent blur-3xl max-md:w-40" />
      </div>
    </section>
  );
}
