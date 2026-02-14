export const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "TAKEOFF by Open Source Nest",
  description:
    "The flagship annual gathering of the Open Source Nest community — celebrating contributions, workshops, networking, and making open source accessible to everyone in Nigeria.",
  startDate: "2026-03-21T09:00:00+01:00", // Adjust exact time + timezone (WAT is +01:00)
  endDate: "2026-03-21T18:00:00+01:00", // Or make it a full-day if no end time
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Princess Alexandra Auditorium",
    address: {
      "@type": "PostalAddress",
      streetAddress: "University of Nigeria",
      addressLocality: "Nsukka",
      addressRegion: "Enugu",
      postalCode: "410101",
      addressCountry: "NG",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Open Source Nest",
    url: "https://opensourcenest.org",
    logo: "https://ik.imagekit.io/opensourcenest/assets/Landscape%20Black.jpg?updatedAt=1764626624415",
  },
  image: [
    "https://ik.imagekit.io/opensourcenest/assets/Takeoff/takeoff-2026.png",
    "https://ik.imagekit.io/opensourcenest/assets/Takeoff/takeoff-2026-banner.png",
  ],
  url: "https://takeoff.opensourcenest.org/",
  offers: {
    "@type": "Offer",
    url: "https://takeoff.opensourcenest.org/register",
    price: "0", // Free? Or actual if ticketed
    priceCurrency: "NGN",
    availability: "https://schema.org/InStock",
  },
  performer: [
    // Optional: add speakers if listed
    // { "@type": "Person", "name": "Speaker Name" }
  ],
};
