import { createFileRoute } from "@tanstack/react-router";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PageIntro } from "@/components/page-parts";
import exterior from "@/assets/lodge-exterior.png";
import terrace from "@/assets/river-terrace.png";
import bathOne from "@/assets/room-bathroom.png";
import room from "@/assets/deluxe-room.png";
import riverRoom from "@/assets/river-view-room.png";
import bathTwo from "@/assets/bathroom.png";
import mountains from "@/assets/himalayan-view.png";
import river from "@/assets/beas-river-view.png";
import superRoom from "@/assets/super-deluxe-room.png";
import detail from "@/assets/lodge-detail.png";
export const Route=createFileRoute("/gallery")({head:()=>({meta:[{title:"Gallery | Swastika Lodge Manali"},{name:"description",content:"View rooms, balcony views, the Beas River, Himalayan scenery and lodge details at Swastika Lodge & Cafe Manali."},{property:"og:title",content:"Gallery — Swastika Lodge Manali"},{property:"og:description",content:"See Swastika Lodge, its rooms and the Manali landscape."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"canonical",href:"/gallery"}]}),component:GalleryPage});
const photos=[
  [exterior,"Swastika Lodge exterior in Aleo Manali","md:col-span-2 md:row-span-2"],
  [terrace,"Terrace seating overlooking the Beas River",""],
  [room,"Deluxe room with queen bed",""],
  [mountains,"Snow-covered Himalayan mountains","md:col-span-2"],
  [riverRoom,"Room with window seating and river view",""],
  [bathOne,"Private bathroom at the lodge",""],
  [river,"Hot drink overlooking the Beas River","md:row-span-2"],
  [superRoom,"Super Deluxe room interior",""],
  [bathTwo,"Clean private bathroom",""],
  [detail,"Warm handcrafted lodge decor","md:col-span-2"],
] as const;
function GalleryPage(){return <><PageIntro eyebrow="Gallery" title="A closer look at the lodge" copy="Rooms, river light, balcony moments and the Himalayan landscape around Swastika Lodge & Cafe."/><section className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><div className="grid auto-rows-[230px] grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">{photos.map(([src,alt,span])=><Dialog key={alt}><DialogTrigger asChild><button aria-label={`View ${alt} fullscreen`} className={`group relative overflow-hidden bg-muted text-left ${span}`}><img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-90"/><span className="absolute inset-x-0 bottom-0 translate-y-full bg-pine/80 px-4 py-3 text-xs text-primary-foreground transition-transform duration-300 group-hover:translate-y-0">{alt}</span></button></DialogTrigger><DialogContent className="max-w-5xl border-0 bg-pine p-2"><DialogTitle className="sr-only">{alt}</DialogTitle><img src={src} alt={alt} className="max-h-[82vh] w-full object-contain"/></DialogContent></Dialog>)}</div></section></>}