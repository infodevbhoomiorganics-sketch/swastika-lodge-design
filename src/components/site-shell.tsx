import { Link } from "@tanstack/react-router";
import { Menu, Mountain, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { ADDRESS, PHONE_DISPLAY, PHONE_LINK, WHATSAPP_LINK } from "@/lib/site";

const links = [
  ["Home", "/"], ["Rooms", "/rooms"], ["Cafe", "/cafe"], ["Amenities", "/amenities"],
  ["About", "/about"], ["Gallery", "/gallery"], ["Location", "/location"], ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/95 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span
            className={`grid size-11 shrink-0 place-items-center rounded-full border transition-colors duration-500 ${
              scrolled ? "border-primary/30 text-primary" : "border-primary-foreground/30 text-primary-foreground"
            }`}
          >
            <Mountain className="size-5" />
          </span>
          <span className="min-w-0">
            <strong
              className={`block truncate font-display text-xl leading-none transition-colors duration-500 ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Swastika Lodge
            </strong>
            <span
              className={`mt-1 block text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors duration-500 ${
                scrolled ? "text-muted-foreground" : "text-primary-foreground/70"
              }`}
            >
              & Cafe · Manali
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
          {links.map(([label, to]) => (
            <Link
              key={to}
              to={to}
              activeOptions={{ exact: to === "/" }}
              className={`relative rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-300 ${
                scrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
              activeProps={{ className: scrolled ? "text-primary" : "text-primary-foreground" }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex xl:ml-2">
          <Button
            asChild
            variant="ghost"
            size="icon"
            className={`hidden lg:inline-flex ${scrolled ? "" : "text-primary-foreground hover:bg-primary-foreground/15"}`}
          >
            <a href={PHONE_LINK} aria-label="Call us">
              <Phone />
            </a>
          </Button>
          <Button asChild size="sm" className="gap-2 rounded-full">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="size-4" />
              Book now
            </a>
          </Button>
        </div>

        <Button
          className="sm:hidden"
          variant="ghost"
          size="icon"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-400 sm:hidden ${
          open ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <nav className="border-t border-border bg-background px-5 py-5" aria-label="Mobile navigation">
          <div className="grid grid-cols-2 gap-1">
            {links.map(([label, to]) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: to === "/" }}
                className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-muted"
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <Button asChild variant="outline" className="flex-1">
              <a href={PHONE_LINK}>
                <Phone /> Call
              </a>
            </Button>
            <Button asChild className="flex-1 gap-2">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="size-4" /> WhatsApp
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-pine text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div>
          <Mountain className="mb-5 size-7" />
          <h2 className="text-3xl font-semibold">Swastika Lodge & Cafe</h2>
          <p className="mt-3 max-w-md text-sm leading-7 text-primary-foreground/70">
            A cozy stay by the Beas River in Manali, only 250m from Mall Road.
          </p>
        </div>
        <div>
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em]">Explore</h3>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-primary-foreground/70">
            {links.slice(1).map(([label, to]) => (
              <Link key={to} to={to} className="hover:text-primary-foreground">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em]">Stay in touch</h3>
          <p className="mt-5 text-sm leading-6 text-primary-foreground/70">{ADDRESS}</p>
          <a href={PHONE_LINK} className="mt-4 flex items-center gap-2 text-sm font-semibold">
            <Phone className="size-4" />
            {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-center gap-2 text-sm font-semibold"
          >
            <WhatsAppIcon className="size-4" />
            WhatsApp Booking
          </a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 px-5 py-5 text-center text-xs text-primary-foreground/55">
        © 2026 Swastika Lodge & Cafe · Manali, Himachal Pradesh
      </div>
    </footer>
  );
}
