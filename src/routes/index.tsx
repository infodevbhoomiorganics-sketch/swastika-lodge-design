import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BedDouble, Car, Coffee, MapPin, Mountain, Phone, ShieldCheck, Star, UtensilsCrossed, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingBand, SectionHeading, TextLink } from "@/components/page-parts";
import { DIRECTIONS_LINK, hotelSchema, PHONE_LINK, WHATSAPP_LINK } from "@/lib/site";
import exterior from "@/assets/lodge-exterior.png";
import room from "@/assets/deluxe-room.png";
import riverRoom from "@/assets/river-view-room.png";
import terrace from "@/assets/river-terrace.png";
import mountains from "@/assets/himalayan-view.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swastika Lodge Manali | 250m from Mall Road" },
      { name: "description", content: "Stay at Swastika Lodge & Cafe, a hotel near Mall Road Manali with Beas River and mountain views, cafe, parking and free Wi-Fi." },
      { property: "og:title", content: "Swastika Lodge & Cafe — Manali" },
      { property: "og:description", content: "A cozy stay by the Beas River, only 250m from Mall Road Manali." },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ], links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(hotelSchema) }],
  }), component: HomePage,
});

const highlights = [[Mountain,"River Views"],[Mountain,"Mountain Views"],[Coffee,"Cafe"],[Wifi,"Free Wi-Fi"],[Car,"Parking"],[BedDouble,"Room Service"],[ShieldCheck,"Power Backup"]] as const;

function HomePage() {
  return <>
    <section className="relative min-h-[82vh] overflow-hidden bg-pine text-primary-foreground">
      <img src={exterior} alt="Swastika Lodge exterior in Aleo, Manali" className="absolute inset-0 h-full w-full object-cover object-center opacity-65" />
      <div className="absolute inset-0 bg-gradient-to-r from-pine/90 via-pine/55 to-transparent" />
      <div className="relative mx-auto flex min-h-[82vh] max-w-7xl items-end px-5 pb-16 pt-24 lg:px-8 lg:pb-20">
        <div className="max-w-3xl reveal"><div className="mb-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.14em]"><span className="border border-primary-foreground/35 bg-pine/30 px-3 py-2">4.5 / 5 rating</span><span className="border border-primary-foreground/35 bg-pine/30 px-3 py-2">250m from Mall Road</span></div><h1 className="text-6xl font-semibold leading-[0.85] sm:text-7xl md:text-8xl">Swastika Lodge<br/><span className="text-secondary">& Cafe</span></h1><p className="mt-7 text-lg text-primary-foreground/85 md:text-2xl">A Cozy Stay by the Beas River in Manali</p><div className="mt-9 flex flex-wrap gap-3"><Button asChild variant="hero" size="lg"><a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Book on WhatsApp</a></Button><Button asChild variant="outline" size="lg" className="border-primary-foreground/50 bg-pine/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"><a href={PHONE_LINK}><Phone/>Call now</a></Button><Button asChild variant="outline" size="lg" className="border-primary-foreground/50 bg-pine/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"><a href={DIRECTIONS_LINK} target="_blank" rel="noreferrer"><MapPin/>Get directions</a></Button></div></div>
      </div>
    </section>
    <section className="border-b border-border bg-card"><div className="mx-auto grid max-w-7xl grid-cols-2 px-5 py-7 sm:grid-cols-4 lg:grid-cols-7 lg:px-8">{highlights.map(([Icon,label])=><div key={label} className="flex items-center gap-3 border-border px-2 py-3 lg:border-r lg:last:border-r-0"><Icon className="size-4 shrink-0 text-highlight"/><span className="text-xs font-semibold">{label}</span></div>)}</div></section>
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[0.85fr_1.15fr] md:items-center lg:px-8 lg:py-28"><div><SectionHeading eyebrow="The lodge" title="Close to town. Closer to nature." copy="Set in Aleo near the second Beas Bridge, Swastika Lodge puts Mall Road within an easy 250m while keeping the river and Himalayan landscape in view."/><div className="mt-8 flex items-center gap-5 border-t border-border pt-6"><span className="font-display text-4xl font-semibold text-primary">4.5</span><span className="text-sm leading-5 text-muted-foreground"><span className="block text-foreground">Guest rating</span>Out of 5</span></div></div><div className="grid grid-cols-[1.2fr_0.8fr] gap-3"><img src={mountains} alt="Snow-covered Himalayan mountains seen from Manali" loading="lazy" className="h-[420px] w-full object-cover image-lift"/><img src={terrace} alt="Open terrace overlooking the Beas River valley" loading="lazy" className="mt-14 h-[330px] w-full object-cover image-lift"/></div></section>
    <section className="bg-muted"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><SectionHeading eyebrow="Rooms" title="Rest well in Manali" copy="Three thoughtfully arranged room choices for simple comfort, balcony air and expansive views."/><TextLink to="/rooms">Explore all rooms</TextLink></div><div className="mt-12 grid gap-5 md:grid-cols-2"><Link to="/rooms" className="group relative min-h-[470px] overflow-hidden bg-pine"><img src={room} alt="Deluxe room at Swastika Lodge" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-pine/90 via-transparent"/><div className="absolute inset-x-0 bottom-0 p-7 text-primary-foreground"><p className="text-xs uppercase tracking-[0.16em]">144 sq.ft · Queen Bed</p><h3 className="mt-2 text-4xl">Deluxe Room</h3></div></Link><Link to="/rooms" className="group relative min-h-[470px] overflow-hidden bg-pine"><img src={riverRoom} alt="Super Deluxe room with balcony view" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-pine/90 via-transparent"/><div className="absolute inset-x-0 bottom-0 p-7 text-primary-foreground"><p className="text-xs uppercase tracking-[0.16em]">Balcony · River & Mountain Views</p><h3 className="mt-2 text-4xl">Super Deluxe</h3></div></Link></div></div></section>
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center lg:px-8 lg:py-28"><div className="overflow-hidden"><img src={terrace} alt="Terrace seating at Swastika Lodge overlooking the valley" loading="lazy" className="h-[480px] w-full object-cover image-lift"/></div><div><UtensilsCrossed className="mb-6 size-7 text-highlight"/><SectionHeading eyebrow="Lodge cafe" title="Meals with a river view" copy="Breakfast, lunch and dinner are served with customizable meals and the relaxed backdrop of the Beas River."/><TextLink to="/cafe">Discover the cafe</TextLink></div></section>
    <section className="bg-pine text-primary-foreground"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Beyond the lodge</p><h2 className="mt-3 max-w-2xl text-5xl font-semibold">Go further into the Himalayas.</h2><div className="mt-12 grid gap-px bg-primary-foreground/15 md:grid-cols-3">{["Spiti Valley Tours","Leh-Ladakh Tours","Atal Tunnel 4WD Rides"].map((x,i)=><div key={x} className="bg-pine p-7"><span className="text-xs text-secondary">0{i+1}</span><h3 className="mt-16 text-3xl">{x}</h3><ArrowRight className="mt-5 size-5 text-secondary"/></div>)}</div></div></section>
    <BookingBand/>
  </>;
}