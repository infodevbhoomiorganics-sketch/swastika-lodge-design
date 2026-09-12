import { Link } from "@tanstack/react-router";
import { Menu, Mountain, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ADDRESS, PHONE_DISPLAY, PHONE_LINK, WHATSAPP_LINK } from "@/lib/site";

const links = [
  ["Home", "/"], ["Rooms", "/rooms"], ["Cafe", "/cafe"], ["Amenities", "/amenities"],
  ["About", "/about"], ["Gallery", "/gallery"], ["Location", "/location"], ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <>
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <div className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-primary/25 text-primary"><Mountain className="size-4" /></span>
          <span className="min-w-0"><strong className="block truncate font-display text-lg leading-none">Swastika Lodge</strong><span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">& Cafe · Manali</span></span>
        </Link>
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">
          {links.map(([label, to]) => <Link key={to} to={to} activeOptions={{ exact: to === "/" }} className="text-xs font-semibold text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>{label}</Link>)}
        </nav>
        <div className="hidden items-center gap-2 sm:flex xl:ml-3"><Button asChild><a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Book now</a></Button></div>
        <Button className="sm:hidden" variant="ghost" size="icon" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav className="border-t border-border bg-background px-5 py-5 sm:hidden" aria-label="Mobile navigation"><div className="grid grid-cols-2 gap-1">{links.map(([label, to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="rounded-sm px-3 py-3 text-sm font-medium hover:bg-muted">{label}</Link>)}</div><Button asChild className="mt-4 w-full"><a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Book on WhatsApp</a></Button></nav>}
    </header>
  </>;
}

export function SiteFooter() {
  return <footer className="bg-pine text-primary-foreground"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8"><div><Mountain className="mb-5 size-7"/><h2 className="text-3xl font-semibold">Swastika Lodge & Cafe</h2><p className="mt-3 max-w-md text-sm leading-7 text-primary-foreground/70">A cozy stay by the Beas River in Manali, only 250m from Mall Road.</p></div><div><h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em]">Explore</h3><div className="mt-5 grid grid-cols-2 gap-3 text-sm text-primary-foreground/70">{links.slice(1).map(([label,to])=><Link key={to} to={to} className="hover:text-primary-foreground">{label}</Link>)}</div></div><div><h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em]">Stay in touch</h3><p className="mt-5 text-sm leading-6 text-primary-foreground/70">{ADDRESS}</p><a href={PHONE_LINK} className="mt-4 flex items-center gap-2 text-sm font-semibold"><Phone className="size-4"/>{PHONE_DISPLAY}</a></div></div><div className="border-t border-primary-foreground/10 px-5 py-5 text-center text-xs text-primary-foreground/55">© 2026 Swastika Lodge & Cafe · Manali, Himachal Pradesh</div></footer>;
}