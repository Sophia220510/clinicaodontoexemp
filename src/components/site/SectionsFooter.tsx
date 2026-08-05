import { MessageCircle, MapPin, Phone, Clock } from "lucide-react";
import { CLINIC, NAV, whatsappLink } from "@/lib/site-data";
import { Logo, Reveal, WhatsButton } from "./primitives";

export function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 lg:py-28">
      <div
        className="pointer-events-none absolute -bottom-32 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-accent/25 blur-3xl"
        aria-hidden="true"
      />
      <Reveal className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-[0.7rem] font-semibold tracking-[0.2em] text-gold uppercase">
          Agendamento rápido
        </span>
        <h2 className="mt-6 text-3xl leading-[1.12] text-primary-foreground sm:text-4xl lg:text-[2.9rem]">
          Pronto para conquistar um sorriso ainda mais bonito?
        </h2>
        <p className="mt-5 text-base leading-relaxed text-primary-foreground/75">
          Agende uma avaliação e descubra o tratamento ideal para você.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <WhatsButton href={whatsappLink} variant="gold" className="px-9 py-4 text-base">
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Agendar pelo WhatsApp
          </WhatsButton>
          <a
            href={CLINIC.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/25 px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:border-gold hover:text-gold"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {CLINIC.phone}
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.7fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {CLINIC.tagline}.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span className="min-w-0">{CLINIC.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a href={CLINIC.phoneHref} className="text-muted-foreground hover:text-accent">
                  {CLINIC.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent"
                >
                  WhatsApp da clínica
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Links rápidos">
            <h3 className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
              Links rápidos
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {NAV.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-muted-foreground hover:text-accent">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#top" className="text-muted-foreground hover:text-accent">
                  Início
                </a>
              </li>
            </ul>

            <h3 className="mt-8 flex items-center gap-2 text-sm font-semibold tracking-[0.16em] text-primary uppercase">
              <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
              Horários
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {CLINIC.hours.map((h) => (
                <li key={h.day} className="flex flex-wrap justify-between gap-2">
                  <span>{h.day}</span>
                  <span className="font-medium text-primary">{h.time}</span>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
              Como chegar
            </h3>
            <div className="mt-5 overflow-hidden rounded-3xl border border-border shadow-soft">
              <iframe
                title="Mapa da localização da clínica Odonto Aurora"
                src="https://www.google.com/maps?q=Rua%20das%20Palmeiras%2C%20245%2C%20Jardim%20Aurora%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004567-000&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 border-t border-border pt-7 text-xs text-muted-foreground sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
          <p className="min-w-0">
            © {new Date().getFullYear()} {CLINIC.name}. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap gap-5 sm:justify-end">
            <a href="#faq" className="hover:text-accent">
              Política de Privacidade
            </a>
            <a href="#faq" className="hover:text-accent">
              LGPD
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed right-5 bottom-5 z-50 inline-flex items-center gap-3 rounded-full bg-accent px-5 py-4 text-sm font-semibold text-accent-foreground shadow-lift transition-all duration-300 hover:-translate-y-1 hover:bg-primary"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">Agendar no WhatsApp</span>
    </a>
  );
}
