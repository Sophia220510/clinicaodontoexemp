import { useEffect, useState } from "react";
import { ArrowUp, Instagram, MessageCircle } from "lucide-react";
import clinic1 from "@/assets/clinic-1.jpg";
import { CLINIC, NAV, whatsappLink } from "@/lib/site-data";
import { Logo, Reveal, WhatsButton } from "./primitives";

export function CtaFinal() {
  return (
    <section className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative mx-auto min-h-[36rem] max-w-[100rem] overflow-hidden rounded-[1.75rem] bg-primary">
        <img
          src={clinic1}
          alt=""
          width={1200}
          height={900}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-primary/65" />
        <div className="grain absolute inset-0 opacity-[.03]" />
        <div className="relative flex min-h-[36rem] items-center justify-center px-6 py-20 text-center text-primary-foreground">
          <Reveal className="max-w-4xl">
            <p className="text-[.62rem] font-bold tracking-[.24em] text-gold uppercase">
              Seu próximo passo
            </p>
            <h2 className="mt-6 text-5xl leading-[.92] sm:text-6xl lg:text-[5.5rem]">
              Seu sorriso pode começar com uma{" "}
              <em className="font-normal text-gold">boa conversa.</em>
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-primary-foreground/65">
              Agende uma avaliação e descubra, com clareza, qual plano de cuidado faz sentido para
              você.
            </p>
            <div className="mt-9">
              <WhatsButton href={whatsappLink} variant="gold">
                Agendar minha avaliação
              </WhatsButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary px-5 pt-20 pb-10 text-primary-foreground sm:px-8 lg:px-12 lg:pt-28">
      <div className="mx-auto max-w-[90rem]">
        <div className="grid gap-12 border-b border-primary-foreground/12 pb-16 lg:grid-cols-[1.25fr_.75fr_.75fr_.85fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-7 max-w-sm text-sm leading-7 text-primary-foreground/52">
              {CLINIC.tagline}. Um espaço dedicado a decisões cuidadosas, tecnologia bem aplicada e
              resultados naturais.
            </p>
          </div>
          <div>
            <h3 className="font-sans text-[.6rem] font-bold tracking-[.18em] text-gold uppercase">
              Navegação
            </h3>
            <nav className="mt-5 grid gap-3" aria-label="Navegação do rodapé">
              {NAV.slice(0, 5).map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="w-fit text-sm text-primary-foreground/55 transition-colors hover:text-primary-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="font-sans text-[.6rem] font-bold tracking-[.18em] text-gold uppercase">
              Contato
            </h3>
            <div className="mt-5 grid gap-3 text-sm text-primary-foreground/55">
              <a href={CLINIC.phoneHref} className="w-fit hover:text-primary-foreground">
                {CLINIC.phone}
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit hover:text-primary-foreground"
              >
                WhatsApp
              </a>
              <a href="#" className="flex w-fit items-center gap-2 hover:text-primary-foreground">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-sans text-[.6rem] font-bold tracking-[.18em] text-gold uppercase">
              Visite-nos
            </h3>
            <p className="mt-5 text-sm leading-6 text-primary-foreground/55">{CLINIC.address}</p>
            <p className="mt-4 text-sm text-primary-foreground/55">
              {CLINIC.hours[0]?.day}
              <br />
              {CLINIC.hours[0]?.time}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-8 text-[.58rem] font-bold tracking-[.1em] text-primary-foreground/35 uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Odonto Aurora. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <a href="#">Privacidade</a>
            <a href="#">Termos de uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > window.innerHeight * 0.72);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className={`fixed right-4 bottom-4 z-40 flex items-center gap-2 transition-all duration-500 sm:right-6 sm:bottom-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-5 opacity-0"
      }`}
    >
      <a
        href="#top"
        aria-label="Voltar ao topo"
        className="hidden h-12 w-12 place-items-center rounded-full border border-border bg-background/90 text-primary shadow-soft backdrop-blur-md transition-transform hover:-translate-y-1 sm:grid"
      >
        <ArrowUp className="h-4 w-4" />
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar pelo WhatsApp"
        className="group flex h-14 items-center gap-3 rounded-full bg-accent px-5 text-xs font-bold tracking-[.06em] text-accent-foreground uppercase shadow-lift transition-transform hover:-translate-y-1"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">Agendar avaliação</span>
      </a>
    </div>
  );
}
