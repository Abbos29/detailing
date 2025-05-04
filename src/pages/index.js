
import Benefits from "@/components/layout/Benefits/Benefits";
import Faq from "@/components/layout/FAQ/Faq";
import Hero from "@/components/layout/Hero/Hero";
import RandomCards from "@/components/layout/RandomCards/RandomCards";
import Reviews from "@/components/layout/Reviews/Reviews";
import Seo from "@/components/ui/Seo/Seo";
// 1
export default function Home() {
  return (
    <>

      <Seo
        title="Detailing"
        description="Платформа ASM для управления авторскими правами и лицензиями. Создание договоров, защита собственности, маркетплейс прав."
      />

      <Hero />
      <Benefits />
      <RandomCards />
      <Faq />
      <Reviews />
    </>
  );
}
