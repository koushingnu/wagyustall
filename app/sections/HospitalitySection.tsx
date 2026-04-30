"use client";

import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const hospitalityImages = [
  "/Hospitality/IMG_3323.JPG",
  "/Hospitality/IMG_3397.JPG",
  "/Hospitality/shibuya_machinaka.png",
];

export function HospitalitySection() {
  const { language } = useLanguage();
  const t = translations[language].hospitality;

  const hospitalityData = [
    {
      title: t.title1,
      description: t.desc1,
      image: hospitalityImages[0],
    },
    {
      title: t.title2,
      description: t.desc2,
      image: hospitalityImages[1],
    },
    {
      title: t.title3,
      description: t.desc3,
      image: hospitalityImages[2],
    },
  ];

  return (
    <section id="hospitality" className="border-b-2 border-[#f2cc3d] bg-black px-8 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-12">
        {hospitalityData.map(({ title, description, image }, idx) => (
          <article key={title} className={idx === 1 ? "grid grid-cols-[55%_45%] gap-6 max-md:grid-cols-1" : "grid grid-cols-[45%_55%] gap-6 max-md:grid-cols-1"}>
            {idx === 1 ? (
              <>
                <div className="flex flex-col justify-center pr-4">
                  <h3 className="mb-4 text-[18px] font-bold leading-tight">{title}</h3>
                  <p className="whitespace-pre-line text-[13px] leading-relaxed text-white/85">
                    {description}
                  </p>
                </div>
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                </div>
                <div className="flex flex-col justify-center pr-4">
                  <h3 className="mb-4 text-[18px] font-bold leading-tight">{title}</h3>
                  <p className="whitespace-pre-line text-[13px] leading-relaxed text-white/85">
                    {description}
                  </p>
                </div>
              </>
            )}
          </article>
        ))}
        </div>
      </div>
    </section>
  );
}
