import { ArrowUpRight } from "lucide-react";
import teamImg from "@/assets/team.jpg";
import clinic1 from "@/assets/clinic-1.jpg";
import clinic2 from "@/assets/clinic-2.jpg";
import clinic3 from "@/assets/clinic-3.jpg";
import heroImg from "@/assets/hero-dentist.jpg";
import { PROCEDIMENTOS, whatsappLink, whatsappLinkFor } from "@/lib/site-data";
import { Reveal, SectionHeading, WhatsButton } from "./primitives";

const treatmentImages = [clinic2, clinic3, heroImg, teamImg, clinic1];

export function Clinica() {
  return (
    <>
      <aside className="border-b border-border bg-card" aria-label="Princípios da clínica">
        <div className="mx-auto grid max-w-[90rem] grid-cols-2 divide-x divide-border px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
          {[
            "Escuta sem pressa",
            "Diagnóstico preciso",
            "Estética responsável",
            "Acompanhamento próximo",
          ].map((item, index) => (
            <div key={item} className="flex min-h-24 items-center gap-4 px-3 py-5 sm:px-6">
              <span className="font-display text-xl text-gold">0{index + 1}</span>
              <span className="text-[.62rem] leading-5 font-bold tracking-[.12em] text-primary uppercase">
                {item}
              </span>
            </div>
          ))}
        </div>
      </aside>

      <section id="clinica" className="scroll-mt-24 py-24 sm:py-32 lg:py-44">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:gap-24">
            <Reveal className="relative">
              <div className="overflow-hidden rounded-[1.75rem]">
                <img
                  src={teamImg}
                  alt="Equipe da Odonto Aurora reunida na clínica"
                  width={1600}
                  height={1104}
                  loading="lazy"
                  className="image-zoom h-[27rem] w-full object-cover sm:h-[38rem]"
                />
              </div>
              <div className="absolute -right-3 -bottom-8 w-[44%] overflow-hidden rounded-2xl border-[6px] border-background shadow-lift sm:-right-8">
                <img
                  src={clinic1}
                  alt="Recepção da Odonto Aurora"
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-36 w-full object-cover sm:h-48"
                />
              </div>
              <p className="absolute -bottom-12 left-2 hidden origin-left -rotate-90 text-[.55rem] font-bold tracking-[.22em] text-muted-foreground uppercase lg:block">
                Uma nova relação com o cuidado
              </p>
            </Reveal>
            <div className="lg:pl-4">
              <SectionHeading
                eyebrow="A clínica"
                title={
                  <>
                    Odontologia de excelência,{" "}
                    <em className="font-normal text-accent">sem perder o olhar humano.</em>
                  </>
                }
                lead="Criamos um espaço onde conhecimento clínico, tecnologia e sensibilidade trabalham juntos. Aqui, cada escolha parte de um diagnóstico cuidadoso — e cada tratamento respeita o seu tempo, sua saúde e sua identidade."
              />
              <Reveal delay={120}>
                <div className="mt-10 grid gap-7 border-t border-border pt-8 sm:grid-cols-2">
                  <div>
                    <p className="font-display text-2xl text-primary">Clareza em cada decisão</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Explicamos caminhos e alternativas para que você participe do próprio cuidado.
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-2xl text-primary">
                      Naturalidade como princípio
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Resultados equilibrados, coerentes com a sua expressão e com sua história.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={180} className="mt-9">
                <WhatsButton href="#experiencia" variant="outline">
                  Conhecer nossa experiência
                </WhatsButton>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function Tratamentos() {
  return (
    <section id="tratamentos" className="scroll-mt-24 bg-card py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_.65fr] lg:items-end">
          <SectionHeading
            eyebrow="Tratamentos"
            title={
              <>
                Soluções completas.
                <br />
                <em className="font-normal text-accent">Escolhas precisas.</em>
              </>
            }
            lead="Uma seleção dos tratamentos que mais transformam saúde, função e confiança — sempre a partir de uma indicação responsável."
          />
          <Reveal className="lg:justify-self-end lg:text-right">
            <p className="text-xs leading-6 text-muted-foreground">
              Não sabe qual caminho é o seu?
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-2 inline-flex items-center gap-2 text-xs font-bold tracking-[.1em] text-primary uppercase"
            >
              Converse com nossa equipe{" "}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-12">
          {PROCEDIMENTOS.map((item, index) => (
            <Reveal
              key={item.slug}
              className={
                index < 2
                  ? "lg:col-span-6"
                  : index === 2
                    ? "lg:col-span-5"
                    : index === 3
                      ? "lg:col-span-7"
                      : "lg:col-span-12"
              }
            >
              <article
                className={`group relative min-h-[31rem] overflow-hidden rounded-[1.6rem] ${index >= 2 ? "lg:min-h-[28rem]" : ""}`}
              >
                <img
                  src={treatmentImages[index]}
                  alt={item.title}
                  width={index === 2 ? 1280 : 1200}
                  height={index === 2 ? 1600 : 900}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/28 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-primary-foreground sm:p-9">
                  <div className="flex items-center gap-3 text-[.6rem] font-bold tracking-[.17em] text-gold uppercase">
                    <span>{item.number}</span>
                    <span className="h-px w-8 bg-gold/70" />
                    {item.detail}
                  </div>
                  <h3 className="mt-4 text-4xl leading-none sm:text-[2.75rem]">{item.title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-6 text-primary-foreground/65">
                    {item.description}
                  </p>
                  <a
                    href={whatsappLinkFor(item.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Saber mais sobre ${item.title}`}
                    className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/35 transition-colors hover:bg-primary-foreground hover:text-primary"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experiencia() {
  return (
    <section id="experiencia" className="scroll-mt-24 py-24 sm:py-32 lg:py-44">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          align="center"
          eyebrow="A experiência Aurora"
          title={
            <>
              Um ambiente que desacelera.
              <br />
              <em className="font-normal text-accent">Um cuidado que avança.</em>
            </>
          }
        />
        <Reveal className="relative mt-14 overflow-hidden rounded-[1.75rem] sm:mt-20">
          <img
            src={clinic3}
            alt="Ambiente tecnológico da Odonto Aurora"
            width={1200}
            height={900}
            loading="lazy"
            className="h-[34rem] w-full object-cover sm:h-[44rem]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/5 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 grid gap-6 p-7 text-primary-foreground sm:p-10 lg:grid-cols-[1.2fr_1fr_1fr] lg:p-14">
            <p className="max-w-lg font-display text-3xl leading-tight sm:text-4xl">
              Conforto não é um detalhe. É parte do tratamento.
            </p>
            <p className="text-sm leading-6 text-primary-foreground/65">
              Fluxos organizados, ambientes reservados e explicações sem pressa tornam cada visita
              mais leve.
            </p>
            <p className="text-sm leading-6 text-primary-foreground/65">
              Da recepção ao consultório, tudo foi pensado para que você se sinta seguro e bem
              cuidado.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
