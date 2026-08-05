import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { CLINIC, NAV, whatsappLink } from "@/lib/site-data";
import { Logo } from "./primitives";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.6] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-background/85 py-2 backdrop-blur-xl"
          : "py-4",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8">
        <a href="#top" className="min-w-0 shrink-0" aria-label={CLINIC.name}>
          <Logo />
        </a>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 xl:flex" aria-label="Navegação principal">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  active === item.id
                    ? "text-accent"
                    : "text-muted-foreground hover:text-primary",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-gold transition-transform duration-300",
                    active === item.id ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            ))}
          </nav>

          <a
            href={CLINIC.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent lg:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {CLINIC.phone}
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:shadow-lift sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Agendar avaliação
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-colors hover:border-accent hover:text-accent xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "mx-4 overflow-hidden rounded-3xl border border-border bg-background shadow-soft transition-all duration-500 xl:hidden",
          open ? "mt-3 max-h-[32rem] opacity-100" : "max-h-0 border-transparent opacity-0",
        )}
      >
        <nav className="flex flex-col p-3" aria-label="Navegação mobile">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-primary transition-colors hover:bg-muted"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Agendar pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
