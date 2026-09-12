import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { WHATSAPP_LINK } from "@/lib/site";

export function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <section className="border-b border-border bg-secondary/45 pt-20">
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.95] md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">{copy}</p>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-semibold leading-none md:text-5xl">{title}</h2>
      {copy && <p className="mt-5 leading-7 text-muted-foreground">{copy}</p>}
    </div>
  );
}

export function BookingBand() {
  return (
    <section className="bg-highlight text-highlight-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 py-12 md:flex-row md:items-center lg:px-8">
        <div>
          <div className="mb-2 flex items-center gap-1 text-sm">
            <Star className="size-4 fill-current" /> 4.5 / 5 guest rating
          </div>
          <h2 className="text-4xl font-semibold md:text-5xl">Your Manali stay starts here.</h2>
          <p className="mt-3 text-highlight-foreground/80">Message us directly for availability and rates.</p>
        </div>
        <Button asChild variant="hero" size="lg" className="gap-2">
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="size-4" />
            Book on WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
}

export function TextLink({ to, children }: { to: "/rooms" | "/cafe" | "/gallery" | "/location"; children: React.ReactNode }) {
  return (
    <Link to={to} className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary hover:text-highlight">
      {children}
      <ArrowRight className="size-4" />
    </Link>
  );
}

export function CallButton({ className }: { className?: string }) {
  return (
    <Button asChild variant="outline" size="lg" className={className}>
      <a href="tel:+918219589187">
        <Phone /> Call now
      </a>
    </Button>
  );
}
