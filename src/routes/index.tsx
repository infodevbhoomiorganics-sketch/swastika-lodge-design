import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BatteryCharging,
  BedDouble,
  Car,
  Coffee,
  MapPin,
  Mountain,
  Phone,
  ShieldCheck,
  Star,
  UtensilsCrossed,
  Wifi,
  Wind,
  Sunrise,
  Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingBand, SectionHeading, TextLink } from "@/components/page-parts";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { DIRECTIONS_LINK, hotelSchema, PHONE_LINK, WHATSAPP_LINK } from "@/lib/site";
import exterior from "@/assets/lodge-exterior.png";
import room from "@/assets/deluxe-room.png";
import riverRoom from "@/assets/river-view-room.png";
import terrace from "@/assets/river-terrace.png";
import mountains from "@/assets/himalayan-view.png";
import river from "@/assets/beas-river-view.png";
import detail from "@/assets/lodge-detail.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swastika Lodge Manali | 250m from Mall Road" },
      {
        name: "description",
        content:
          "Stay at Swastika Lodge & Cafe, a hotel near Mall Road Manali with Beas River and mountain views, cafe, parking and free Wi-Fi.",
      },
      { property: "og:title", content: "Swastika Lodge & Cafe — Manali" },
      { property: "og:description", content: "A cozy stay by the Beas River, only 250m from Mall Road Manali." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(hotelSchema) }],
  }),
  component: HomePage,
});

const highlights = [
  [Mountain, "River Views"],
  [Mountain, "Mountain Views"],
  [Coffee, "Cafe"],
  [Wifi, "Free Wi-Fi"],
  [Car, "Parking"],
  [BedDouble, "Room Service"],
  [ShieldCheck, "Power Backup"],
] as const;

const whyChooseUs = [
  [MapPin, "250m from Mall Road", "Walk to Manali's main street in minutes — restaurants, shops and cafes at your doorstep."],
  [Wind, "Beas River setting", "Wake up to the sound of the river and fresh mountain air every morning."],
  [Coffee, "In-house cafe", "Breakfast, lunch and dinner with customizable meals and river views."],
  [Car, "Free private parking", "Secure on-site parking for your vehicle throughout your stay."],
] as const;

const experiences = [
  ["01", "Spiti Valley Tours", "Journey through ancient monasteries and high mountain passes."],
  ["02", "Leh-Ladakh Tours", "Explore the stark beauty of Ladakh's landscapes and lakes."],
  ["03", "Atal Tunnel 4WD Rides", "Ride through the engineering marvel under the Rohtang Pass."],
] as const;

function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-screen items-end overflow-hidden bg-pine text-primary-foreground">
        <img
          src={exterior}
          alt="Swastika Lodge exterior in Aleo, Manali"
          className="hero-zoom absolute inset-0 h-full w-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pine/95 via-pine/60 to-pine/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-pine/80 via-transparent to-pine/30" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-28 lg:px-8 lg:pb-24">
          <div className="max-w-3xl">
            <div className="hero-fade-up flex flex-wrap gap-3" style={{ animationDelay: "200ms" }}>
              <span className="flex items-center gap-2 border border-primary-foreground/30 bg-pine/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] backdrop-blur-sm">
                <Star className="size-4 fill-secondary text-secondary" /> 4.5 / 5 Rating
              </span>
              <span className="flex items-center gap-2 border border-primary-foreground/30 bg-pine/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] backdrop-blur-sm">
                <MapPin className="size-4 text-secondary" /> 250m from Mall Road
              </span>
            </div>

            <h1
              className="hero-fade-up mt-7 text-6xl font-semibold leading-[0.85] sm:text-7xl md:text-8xl"
              style={{ animationDelay: "400ms" }}
            >
              Swastika Lodge
              <br />
              <span className="text-secondary">& Cafe</span>
            </h1>

            <p
              className="hero-fade-up mt-7 text-lg text-primary-foreground/85 md:text-2xl"
              style={{ animationDelay: "600ms" }}
            >
              A Cozy Stay by the Beas River in Manali
            </p>

            <div
              className="hero-fade-up mt-9 flex flex-wrap gap-3"
              style={{ animationDelay: "800ms" }}
            >
              <Button asChild variant="hero" size="lg" className="gap-2">
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                  <WhatsAppIcon className="size-4" />
                  Book on WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 border-primary-foreground/50 bg-pine/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <a href={PHONE_LINK}>
                  <Phone /> Call now
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 border-primary-foreground/50 bg-pine/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <a href={DIRECTIONS_LINK} target="_blank" rel="noreferrer">
                  <MapPin /> Get directions
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-primary-foreground/40 p-1.5">
            <span className="h-2 w-1 animate-bounce rounded-full bg-primary-foreground/60" />
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS STRIP ===== */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 py-6 sm:grid-cols-4 lg:grid-cols-7 lg:px-8">
          {highlights.map(([Icon, label]) => (
            <div
              key={label}
              className="flex items-center gap-3 border-border px-2 py-3 lg:border-r lg:last:border-r-0"
            >
              <Icon className="size-4 shrink-0 text-highlight" />
              <span className="text-xs font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ABOUT / WELCOME ===== */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[0.85fr_1.15fr] md:items-center lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="The lodge"
            title="Close to town. Closer to nature."
            copy="Set in Aleo near the second Beas Bridge, Swastika Lodge puts Mall Road within an easy 250m while keeping the river and Himalayan landscape in view."
          />
          <div className="mt-8 flex items-center gap-5 border-t border-border pt-6">
            <span className="font-display text-4xl font-semibold text-primary">4.5</span>
            <span className="text-sm leading-5 text-muted-foreground">
              <span className="block text-foreground">Guest rating</span>
              Out of 5
            </span>
          </div>
        </Reveal>
        <div className="grid grid-cols-[1.2fr_0.8fr] gap-3">
          <Reveal delay={100}>
            <img
              src={mountains}
              alt="Snow-covered Himalayan mountains seen from Manali"
              loading="lazy"
              className="h-[420px] w-full object-cover image-lift"
            />
          </Reveal>
          <Reveal delay={200}>
            <img
              src={terrace}
              alt="Open terrace overlooking the Beas River valley"
              loading="lazy"
              className="mt-14 h-[330px] w-full object-cover image-lift"
            />
          </Reveal>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="Why stay with us"
              title="Everything you need, right where you need it"
              copy="A comfortable Manali base that blends riverside calm with easy access to the town's best spots."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map(([Icon, title, desc], i) => (
              <Reveal key={title} delay={i * 100}>
                <article className="h-full rounded-lg border border-border bg-card p-7 transition-shadow hover:shadow-md">
                  <div className="grid size-12 place-items-center rounded-full bg-highlight/10">
                    <Icon className="size-6 text-highlight" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ROOMS PREVIEW ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Rooms"
              title="Rest well in Manali"
              copy="Three thoughtfully arranged room choices for simple comfort, balcony air and expansive views."
            />
            <TextLink to="/rooms">Explore all rooms</TextLink>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Reveal>
            <Link to="/rooms" className="group relative block min-h-[470px] overflow-hidden bg-pine">
              <img
                src={room}
                alt="Deluxe room at Swastika Lodge"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pine/90 via-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-primary-foreground">
                <p className="text-xs uppercase tracking-[0.16em]">144 sq.ft · Queen Bed</p>
                <h3 className="mt-2 text-4xl">Deluxe Room</h3>
                <span className="mt-3 inline-flex items-center gap-2 text-xs text-secondary">
                  View details <ArrowRight className="size-3" />
                </span>
              </div>
            </Link>
          </Reveal>
          <Reveal delay={150}>
            <Link to="/rooms" className="group relative block min-h-[470px] overflow-hidden bg-pine">
              <img
                src={riverRoom}
                alt="Super Deluxe room with balcony view"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pine/90 via-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-primary-foreground">
                <p className="text-xs uppercase tracking-[0.16em]">Balcony · River & Mountain Views</p>
                <h3 className="mt-2 text-4xl">Super Deluxe</h3>
                <span className="mt-3 inline-flex items-center gap-2 text-xs text-secondary">
                  View details <ArrowRight className="size-3" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===== CAFE PREVIEW ===== */}
      <section className="bg-muted">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center lg:px-8 lg:py-28">
          <Reveal>
            <div className="overflow-hidden rounded-lg">
              <img
                src={terrace}
                alt="Terrace seating at Swastika Lodge overlooking the valley"
                loading="lazy"
                className="h-[480px] w-full object-cover image-lift"
              />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div>
              <UtensilsCrossed className="mb-6 size-7 text-highlight" />
              <SectionHeading
                eyebrow="Lodge cafe"
                title="Meals with a river view"
                copy="Breakfast, lunch and dinner are served with customizable meals and the relaxed backdrop of the Beas River."
              />
              <TextLink to="/cafe">Discover the cafe</TextLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== RIVER BANNER (parallax-style) ===== */}
      <section className="relative min-h-[440px] overflow-hidden bg-pine">
        <img
          src={river}
          alt="Beas River flowing through the Manali valley"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-pine/50" />
        <div className="relative mx-auto flex min-h-[440px] max-w-7xl flex-col items-center justify-center px-5 text-center text-primary-foreground lg:px-8">
          <Reveal>
            <Sunrise className="mx-auto size-10 text-secondary" />
            <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              Wake to the sound of the Beas.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-primary-foreground/80 md:text-lg">
              Mornings here begin with mountain light on the water and fresh Himalayan air.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== AMENITIES QUICK GRID ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="At the lodge"
            title="Comforts that make the stay easy"
            copy="Practical facilities for a relaxed and convenient Manali trip."
          />
        </Reveal>
        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {[
            [Wifi, "Free Wi-Fi"],
            [Car, "Free Private Parking"],
            [BedDouble, "Room Service"],
            [ShieldCheck, "Power Backup"],
            [Wind, "Balcony Views"],
            [BatteryCharging, "Laundry"],
            [Coffee, "In-house Cafe"],
            [UtensilsCrossed, "Customizable Meals"],
          ].map(([Icon, label], i) => (
            <Reveal key={label as string} delay={(i % 4) * 80}>
              <article className="flex h-full min-h-44 items-center gap-4 bg-background p-6 transition-colors hover:bg-accent/50">
                <Icon className="size-6 shrink-0 text-highlight" />
                <span className="text-sm font-semibold">{label}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== EXPERIENCES ===== */}
      <section className="bg-pine text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              Beyond the lodge
            </p>
            <h2 className="mt-3 max-w-2xl text-5xl font-semibold">Go further into the Himalayas.</h2>
          </Reveal>
          <div className="mt-12 grid gap-px bg-primary-foreground/15 md:grid-cols-3">
            {experiences.map(([num, title, desc], i) => (
              <Reveal key={title} delay={i * 120}>
                <div className="group bg-pine p-8 transition-colors hover:bg-pine/80 lg:p-10">
                  <span className="text-xs text-secondary">{num}</span>
                  <h3 className="mt-16 text-3xl">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-primary-foreground/60">{desc}</p>
                  <ArrowRight className="mt-5 size-5 text-secondary transition-transform group-hover:translate-x-2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY PREVIEW ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Gallery"
              title="See the lodge for yourself"
              copy="Rooms, river light, balcony moments and the Himalayan landscape around Swastika Lodge."
            />
            <TextLink to="/gallery">View full gallery</TextLink>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          <Reveal>
            <img
              src={exterior}
              alt="Swastika Lodge exterior"
              loading="lazy"
              className="h-56 w-full object-cover image-lift"
            />
          </Reveal>
          <Reveal delay={100}>
            <img
              src={river}
              alt="Beas River view"
              loading="lazy"
              className="h-56 w-full object-cover image-lift"
            />
          </Reveal>
          <Reveal delay={200}>
            <img
              src={detail}
              alt="Lodge interior detail"
              loading="lazy"
              className="h-56 w-full object-cover image-lift"
            />
          </Reveal>
          <Reveal delay={300}>
            <img
              src={mountains}
              alt="Himalayan mountain view"
              loading="lazy"
              className="h-56 w-full object-cover image-lift"
            />
          </Reveal>
        </div>
      </section>

      {/* ===== LOCATION TEASER ===== */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[1fr_1fr] md:items-center lg:px-8 lg:py-28">
          <Reveal>
            <Compass className="size-8 text-highlight" />
            <SectionHeading
              eyebrow="Location"
              title="Only 250m from Mall Road"
              copy="2nd Beas Bridge, Tibetan Colony, Aleo, Manali. Close to Tibetan Monastery, Hidimba Devi Temple and Vashisht Hot Water Springs."
            />
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={DIRECTIONS_LINK} target="_blank" rel="noreferrer">
                  <MapPin /> Get directions
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/location">View location</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-muted p-5">
                <span className="font-display text-3xl font-semibold text-primary">250m</span>
                <p className="mt-1 text-xs text-muted-foreground">From Mall Road</p>
              </div>
              <div className="rounded-lg bg-muted p-5">
                <span className="font-display text-3xl font-semibold text-primary">&lt;1 km</span>
                <p className="mt-1 text-xs text-muted-foreground">Tibetan Monastery</p>
              </div>
              <div className="rounded-lg bg-muted p-5">
                <span className="font-display text-3xl font-semibold text-primary">2.1 km</span>
                <p className="mt-1 text-xs text-muted-foreground">Hidimba Devi Temple</p>
              </div>
              <div className="rounded-lg bg-muted p-5">
                <span className="font-display text-3xl font-semibold text-primary">5.3 km</span>
                <p className="mt-1 text-xs text-muted-foreground">Vashisht Springs</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <BookingBand />

      {/* ===== FLOATING WHATSAPP BUTTON ===== */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      >
        <WhatsAppIcon className="size-7" />
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
      </a>
    </>
  );
}
