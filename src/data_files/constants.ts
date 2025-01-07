import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Meenakshi Industries",
  tagline: "Your Complete Packaging Solution Partner in Pune",
  description: "Meenakshi Industries offers a comprehensive range of corrugated, plastic, and wooden packaging solutions, tailored to your needs.",
  description_short: "Your Complete Packaging Solution Partner in Pune",
  url: "https://meenakshiindustries.in",
  author: "Rohit Khirapate",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Corrugated and PP Packaging Solutions`,
  description: "Meenakshi Industries offers a comprehensive range of corrugated, plastic, and wooden packaging solutions, tailored to your needs.",
  image: ogImageSrc,
};
