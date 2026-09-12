export const PHONE_DISPLAY = "+91 82195 89187";
export const PHONE_LINK = "tel:+918219589187";
export const ADDRESS = "2nd Beas Bridge, Tibetan Colony, Aleo, Manali, Himachal Pradesh 175131";
export const WHATSAPP_MESSAGE = "Hi, I would like to enquire about booking a room at Swastika Lodge & Cafe, Manali. Please share availability and rates.";
export const WHATSAPP_LINK = `https://wa.me/918219589187?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const DIRECTIONS_LINK = "https://www.google.com/maps/dir/?api=1&destination=Swastika+Lodge%2C+2nd+Beas+Bridge%2C+Tibetan+Colony%2C+Aleo%2C+Manali%2C+Himachal+Pradesh+175131";

export const hotelSchema = {
  "@context": "https://schema.org",
  "@type": ["Hotel", "LocalBusiness"],
  name: "Swastika Lodge & Cafe",
  telephone: "+918219589187",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2nd Beas Bridge, Tibetan Colony, Aleo",
    addressLocality: "Manali",
    addressRegion: "Himachal Pradesh",
    postalCode: "175131",
    addressCountry: "IN",
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.5", bestRating: "5" },
};