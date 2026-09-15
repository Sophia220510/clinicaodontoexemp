import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Clinica, Experiencia, Tratamentos } from "@/components/site/SectionsClinica";
import { Processo, Tecnologia } from "@/components/site/SectionsResultados";
import { Depoimentos, Equipe, Faq } from "@/components/site/SectionsPessoas";
import { CtaFinal, Footer, WhatsAppFab } from "@/components/site/SectionsFooter";
import { CLINIC } from "@/lib/site-data";

const title = "Odonto Aurora | Odontologia contemporânea em São Paulo";
const description =
  "Clínica odontológica no Jardim Aurora, São Paulo, com implantes, facetas, alinhadores e reabilitação oral planejados com precisão.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: CLINIC.name,
          description,
          telephone: "+55 11 4002-8922",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua das Palmeiras, 245",
            addressLocality: "São Paulo",
            addressRegion: "SP",
            postalCode: "04567-000",
            addressCountry: "BR",
          },
          openingHours: ["Mo-Fr 08:00-18:00"],
          areaServed: "Jardim Aurora, São Paulo",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Clinica />
        <Tratamentos />
        <Experiencia />
        <Tecnologia />
        <Equipe />
        <Depoimentos />
        <Processo />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
