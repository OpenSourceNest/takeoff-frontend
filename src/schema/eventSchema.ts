export const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "TAKEOFF by Open Source Nest",
  description:
    "The flagship annual gathering of the Open Source Nest community — celebrating contributions, workshops, networking, and making open source accessible to everyone in Nigeria.",
  startDate: "2026-04-11T09:00:00+01:00",
  endDate: "2026-04-11T18:00:00+01:00",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "The Block Hive",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "25 University Rd, opp. UNN Main Gate & beside MTN Office, UC Network House",
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
    {
      "@type": "Person",
      name: "Francis Onukwu",
      jobTitle: "Software Engineer & Open Source Advocate",
      sameAs: [
        "https://www.linkedin.com/in/onfranciis/",
        "https://www.x.com/onfranciis",
      ],
    },
    {
      "@type": "Person",
      name: "Precious Onyewuchi",
      jobTitle: "Open Source Manager",
      sameAs: ["https://www.linkedin.com/in/precious-onyewuchi/"],
    },
    {
      "@type": "Person",
      name: "Ezeugwu Romanus",
      jobTitle: "Software Engineer",
      sameAs: [
        "https://www.linkedin.com/in/ezeugwuromanus/",
        "https://x.com/romeoscript1",
      ],
    },
  ],
};
