import { createFileRoute } from "@tanstack/react-router";
import { BedDouble, Expand, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingBand, PageIntro } from "@/components/page-parts";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { WHATSAPP_LINK } from "@/lib/site";
import standard from "@/assets/river-view-room.png";
import deluxe from "@/assets/deluxe-room.png";
import superDeluxe from "@/assets/super-deluxe-room.png";

export const Route = createFileRoute("/rooms")({head:()=>({meta:[{title:"Rooms at Swastika Lodge Manali"},{name:"description",content:"Standard, Deluxe and Super Deluxe rooms at Swastika Lodge, a hotel near Beas River Manali and Mall Road."},{property:"og:title",content:"Rooms — Swastika Lodge Manali"},{property:"og:description",content:"Comfortable rooms with queen beds, balconies, river and mountain views."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"canonical",href:"/rooms"}]}),component:RoomsPage});
const rooms = [
  {name:"Standard Room",size:"120 sq.ft",image:standard,alt:"Standard room at Swastika Lodge",features:["Queen Bed"]},
  {name:"Deluxe Room",size:"144 sq.ft",image:deluxe,alt:"Deluxe queen room at Swastika Lodge",features:["Queen Bed","Balcony Views"]},
  {name:"Super Deluxe Room",size:"144 sq.ft",image:superDeluxe,alt:"Super Deluxe room with balcony at Swastika Lodge",features:["Balcony","River & Mountain Views"]},
];
function RoomsPage(){return <><PageIntro eyebrow="Stay" title="Rooms made for mountain mornings" copy="Choose the room that suits your Manali stay, from simple queen-bed comfort to a balcony overlooking the river and mountains."/><section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">{rooms.map((r,i)=><article key={r.name} className="grid gap-8 border-b border-border py-12 first:pt-0 md:grid-cols-2 md:items-center"><div className={i%2?"md:order-2":""}><img src={r.image} alt={r.alt} loading={i?"lazy":"eager"} className="aspect-[4/3] w-full object-cover image-lift"/></div><div className="md:px-8"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-highlight">Room 0{i+1}</p><h2 className="mt-3 text-5xl font-semibold">{r.name}</h2><div className="mt-7 flex flex-wrap gap-6 text-sm text-muted-foreground"><span className="flex items-center gap-2"><Expand className="size-4 text-primary"/>{r.size}</span>{r.features.map((f,j)=><span key={f} className="flex items-center gap-2">{j===0?<BedDouble className="size-4 text-primary"/>:<Eye className="size-4 text-primary"/>}{f}</span>)}</div><Button asChild className="mt-9 gap-2"><a href={WHATSAPP_LINK} target="_blank" rel="noreferrer"><WhatsAppIcon className="size-4"/>Enquire on WhatsApp</a></Button></div></article>)}</section><BookingBand/></>}