import { AccessSection } from "./sections/AccessSection";
import { HeroSection } from "./sections/HeroSection";
import { HospitalitySection } from "./sections/HospitalitySection";
import { MenuSection } from "./sections/MenuSection";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="w-full bg-black text-white">
        <LanguageSwitcher />
        <HeroSection />
        <MenuSection />
        <HospitalitySection />
        <AccessSection />
      </main>
    </LanguageProvider>
  );
}
