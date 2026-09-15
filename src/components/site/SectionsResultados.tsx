import { ScanLine, Move3d, Crosshair, Box } from "lucide-react";
import clinic2 from "@/assets/clinic-2.jpg";
import { ETAPAS, TECNOLOGIA } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./primitives";

const techIcons = [ScanLine, Crosshair, Box, Move3d];

export function Tecnologia() {
  return (
    <section
      id="tecnologia"
      className="relative scroll-mt-24 overflow-hidden bg-primary py-24 text-primary-foreground sm:py-32 lg:py-44"
    >
      <div className="grain pointer-events-none absolute inset-0 opacity-[.03]" />
      <div
        className="pointer-events-none absolute -top-64 -right-64 h-[42rem] w-[42rem] rounded-full border border-primary-foreground/10"
        aria-hidden="true"
      >
        <span className="absolute inset-16 rounded-full border border-gold/10" />
        <span className="absolute inset-32 rounded-full border border-primary-foreground/10" />
      </div>
      <div className="relative mx-auto grid max-w-[90rem] gap-16 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-24 lg:px-12">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Tecnologia clínica"
            tone="dark"
            title={
              <>
                Precisão que você <em className="font-normal text-gold">pode perceber.</em>
              </>
            }
            lead="A tecnologia não substitui o olhar clínico. Ela amplia nossa capacidade de enxergar, planejar e conduzir cada etapa com mais clareza."
          />
          <Reveal delay={100} className="relative mt-10 overflow-hidden rounded-[1.6rem]">
            <img
              src={clinic2}
              alt="Equipamentos digitais no consultório odontológico"
              width={1200}
              height={900}
              loading="lazy"
              className="h-[26rem] w-full object-cover sm:h-[34rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-transparent to-transparent" />
            <div className="absolute right-6 bottom-6 left-6 flex items-center justify-between border-t border-white/30 pt-4">
              <span className="text-[.58rem] font-bold tracking-[.18em] uppercase">
                Planejamento digital integrado
              </span>
              <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_0_6px_rgb(190_153_104/.18)]" />
            </div>
          </Reveal>
        </div>

        <ol className="border-t border-primary-foreground/12">
          {TECNOLOGIA.map((item, index) => {
            const Icon = techIcons[index]!;
            return (
              <Reveal as="li" key={item.title} delay={index * 70}>
                <article className="group grid gap-5 border-b border-primary-foreground/12 py-10 sm:grid-cols-[4rem_1fr] sm:py-14">
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-primary-foreground/20 text-gold transition-colors duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="text-[.58rem] font-bold tracking-[.2em] text-primary-foreground/35 uppercase">
                      0{index + 1}
                    </span>
                    <h3 className="mt-2 text-3xl sm:text-4xl">{item.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-primary-foreground/55">
                      {item.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function Processo() {
  return (
    <section className="bg-card py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
          <div>
            <SectionHeading
              eyebrow="Sua jornada"
              title={
                <>
                  Cuidado claro,
                  <br />
                  <em className="font-normal text-accent">do início em diante.</em>
                </>
              }
              lead="Sem atalhos, sem excesso de informação. Apenas uma sequência bem conduzida e decisões compartilhadas."
            />
          </div>
          <ol className="border-t border-border">
            {ETAPAS.map((item, index) => (
              <Reveal as="li" key={item.step} delay={index * 60}>
                <div className="grid gap-3 border-b border-border py-7 sm:grid-cols-[4rem_.8fr_1.2fr] sm:items-center sm:gap-6 sm:py-9">
                  <span className="text-[.62rem] font-bold tracking-[.16em] text-gold">
                    {item.step}
                  </span>
                  <h3 className="text-2xl text-primary sm:text-3xl">{item.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
