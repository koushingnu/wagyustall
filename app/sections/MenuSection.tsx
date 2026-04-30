"use client";

import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const menuImages = [
  { key: "cheeseburger", src: "/Menu/_1110109.png", aspectRatio: "aspect-[4/3]" },
  { key: "skewers", src: "/Menu/_1110133.png", aspectRatio: "aspect-[9/16]" },
  { key: "steakRice", src: "/Menu/_1110109.png", aspectRatio: "aspect-[4/3]" },
] as const;

export function MenuSection() {
  const { language } = useLanguage();
  const t = translations[language].menu;

  const menuData = [
    {
      category: t.categories.cheeseburger,
      items: [
        [t.items.singleCheese, "¥2,600"],
        [t.items.doubleCheese, "¥2,800"],
        [t.items.tripleCheese, "¥3,000"],
      ],
    },
    {
      category: t.categories.burger,
      items: [
        [t.items.singleBurger, "¥2,500"],
        [t.items.doubleBurger, "¥2,700"],
        [t.items.tripleBurger, "¥2,900"],
      ],
    },
    {
      category: t.categories.steakRice,
      items: [
        [t.items.steakSmall, "¥3,900"],
        [t.items.steakMedium, "¥4,500"],
        [t.items.steakLarge, "¥5,200"],
      ],
    },
    {
      category: t.categories.skewers,
      items: [
        [t.items.regularSkewer, "¥2,500"],
        [t.items.primeSkewer, "¥2,900"],
      ],
    },
    {
      category: t.categories.sideMenu,
      items: [
        [t.items.combo, "¥600"],
        [t.items.fries, "¥400"],
        [t.items.drinks, "¥300"],
      ],
    },
  ];

  return (
    <section id="menu" className="border-b-2 border-[#f2cc3d] bg-black py-8 px-6">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 text-center">
          <h2 className="text-[20px] font-semibold tracking-wide">{t.title}</h2>
        </header>

        <div className="grid grid-cols-[20%_80%] gap-8 max-md:grid-cols-1">
          <aside className="space-y-6 text-[11px]">
            {menuImages.map(({ key, src, aspectRatio }) => (
              <div key={key}>
                <div className={`relative ${aspectRatio} overflow-hidden`}>
                  <Image
                    src={src}
                    alt={t.imageLabels[key as keyof typeof t.imageLabels]}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>
                <p className="mt-2 text-center text-white/80">
                  {t.imageLabels[key as keyof typeof t.imageLabels]}
                </p>
              </div>
            ))}
          </aside>

          <div className="space-y-6">
            {menuData.map(({ category, items }) => (
              <div key={category}>
                <h3 className="mb-4 text-[15px] font-semibold text-[#f2cc3d]">{category}</h3>
                <div className="space-y-3">
                  {items.map(([name, price]) => (
                    <div key={name} className="flex items-end gap-3 text-[13px]">
                      <span className="flex-shrink-0 pb-[2px]">{name}</span>
                      <div className="flex-1 border-b border-dotted border-white/30 mb-[2px]"></div>
                      <span className="flex-shrink-0 text-right tabular-nums text-white/90 pb-[2px]">
                        {price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
