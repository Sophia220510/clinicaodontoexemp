import { ArrowDown, Check } from "lucide-react";
import heroImg from "@/assets/hero-dentist.jpg";
import { whatsappLink } from "@/lib/site-data";
import { Reveal, WhatsButton } from "./primitives";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[760px] overflow-hidden bg-primary text-primary-foreground lg:min-h-screen"
    >
      <div
        className="grain pointer-events-none absolute inset-0 z-20 opacity-[.025]"
        aria-hidden="true"
      />
      <div className="mx-auto grid min-h-[760px] min-w-0 max-w-[100rem] lg:min-h-screen lg:grid-cols-[48%_52%]">
        <div className="relative z-10 flex min-w-0 items-center px-5 pt-32 pb-16 sm:px-8 lg:px-12 lg:pt-36 lg:pb-28 xl:px-20">
          <div className="min-w-0 max-w-2xl">
            <Reveal>
              <p className="flex min-w-0 items-start gap-3 text-[.6rem] leading-5 font-bold tracking-[.2em] text-gold uppercase sm:items-center sm:text-[.63rem] sm:tracking-[.25em]">
                <span className="mt-2 h-px w-10 shrink-0 bg-gold/70 sm:mt-0" />
                <span>Odontologia contemporânea · São Paulo</span>
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-7 text-[3.5rem] leading-[.85] sm:text-7xl lg:text-[5.4rem] xl:text-[6.25rem]">
                Precisão para cuidar.
                <em className="mt-2 block font-normal text-gold">
                  Sensibilidade para transformar.
                </em>
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-8 max-w-lg text-sm leading-7 text-primary-foreground/62 sm:text-base">
                Uma experiência odontológica desenhada em torno de você — do diagnóstico digital ao
                cuidado que permanece depois do tratamento.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <WhatsButton href={whatsappLink} variant="gold">
                  Agendar avaliação
                </WhatsButton>
                <WhatsButton href="#tratamentos" variant="outline">
                  Conhecer tratamentos
                </WhatsButton>
              </div>
            </Reveal>
            <Reveal delay={310}>
              <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-primary-foreground/12 pt-6">
                {[
                  "Planejamento individual",
                  "Tecnologia integrada",
                  "Cuidado multidisciplinar",
                ].map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2 text-[.65rem] tracking-[.06em] text-primary-foreground/58 uppercase"
                  >
                    <Check className="h-3.5 w-3.5 text-gold" />
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <div className="relative min-h-[540px] overflow-hidden lg:min-h-screen">
          <img
            src={heroImg}
            alt="Atendimento odontológico em um consultório contemporâneo"
            width={1280}
            height={1600}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-[50%_28%]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-primary/25 via-transparent to-primary/45 lg:bg-gradient-to-r lg:from-primary/35 lg:via-transparent lg:to-transparent"
            aria-hidden="true"
          />
          <div className="absolute right-5 bottom-6 left-5 flex items-end justify-between border-t border-white/35 pt-4 text-white sm:right-10 sm:bottom-10 sm:left-10">
            <p className="max-w-[16rem] text-[.62rem] leading-5 font-bold tracking-[.15em] uppercase">
              Jardim Aurora
              <br />
              São Paulo — SP
            </p>
            <div className="relative grid h-20 w-20 place-items-center rounded-full border border-white/40">
              <div className="absolute inset-2 rounded-full border border-white/15" />
              <span className="text-center text-[.52rem] font-bold tracking-[.15em] uppercase">
                Cuidado
                <br />
                em cada
                <br />
                detalhe
              </span>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#clinica"
        aria-label="Explorar o site"
        className="absolute bottom-6 left-1/2 z-30 hidden -translate-x-1/2 items-center gap-2 text-[.55rem] font-bold tracking-[.18em] text-primary-foreground/55 uppercase lg:flex"
      >
        Explorar <ArrowDown className="h-3 w-3" />
      </a>
    </section>
  );
}
