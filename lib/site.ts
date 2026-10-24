export const siteUrl = "https://herocknigeria.vercel.app";

export const logo = {
  src: "https://www.herocknigeria.com/wp-content/uploads/2024/08/Untitled-design-20.png",
  alt: "Herock Nigeria",
  width: 500,
  height: 500,
} as const;

export const companyName = "Herock Nigeria Limited";

export const description =
  "Herock Nigeria Limited is an engineering, procurement and construction, environmental, and equipment leasing and manpower supply company, incorporated since 1993.";

export const contact = {
  street: "13 Agudama Street, D/Line",
  city: "Port Harcourt",
  phones: [
    { display: "+234 (0) 806 923 9622", href: "tel:+2348069239622" },
    { display: "+234 (0) 803 303 5679", href: "tel:+2348033035679" },
  ],
  emails: ["admin@herocknigeria.com", "herocknigeria@yahoo.com"],
} as const;

export const social = [
  { name: "Facebook", href: "https://www.facebook.com/herock.nigeria/" },
  { name: "X", href: "https://x.com/HerockNigeria" },
  { name: "Instagram", href: "https://www.instagram.com/herocknigeria/" },
] as const;

export const mission =
  "To become the foremost Engineering, Procurement, Construction, Environmental, Equipment leasing and manpower supply company in Nigeria, leveraging technology, innovation and partnerships.";

export const vision =
  "To be a global leading engineering company that provides innovative solutions, delivers sustainable projects that exceed our client's expectations and also impact the communities we work in.";

export const stance = "Professional, Dedicated, Meticulous, Project Focused.";

export const values = [
  { letter: "I", name: "Innovation" },
  { letter: "R", name: "Respect" },
  { letter: "I", name: "Integrity" },
  { letter: "S", name: "Service" },
  { letter: "E", name: "Excellence" },
] as const;

export const epcServices = [
  "Engineering design",
  "Project management",
  "Feasibility studies",
  "Procurement and logistics",
  "Supply chain management",
  "Construction and installation",
] as const;

export const environmentServices = [
  "Waste management",
  "Sustainability consulting",
  "Circular-economy consulting",
  "Resource-efficiency optimization",
  "Supply-chain optimization",
  "Carbon-footprint reduction programs",
  "Stakeholder engagement and education",
] as const;

export const circularConsultancy = [
  "Product design for circularity",
  "Business-model innovation",
  "Supply-chain optimization",
  "Performance metrics",
] as const;

export const equipmentCategories = [
  "Heavy machinery",
  "Construction equipment",
  "Environment and waste equipment",
  "Industry equipment",
  "IT equipment",
] as const;

export const leasingBenefits = ["Flexibility", "Cost saving", "Innovation"] as const;

export const pages = [
  {
    href: "/",
    label: "Home",
    title: "Home",
    description:
      "Herock Nigeria Limited. Engineering, procurement and construction, environmental services, and equipment leasing and manpower in Port Harcourt.",
  },
  {
    href: "/company",
    label: "Company",
    title: "Company",
    description:
      "Herock Nigeria Limited in Port Harcourt: the company, its mission, vision, and values, and the published office.",
  },
  {
    href: "/engineering-procurement-and-construction",
    label: "Engineering",
    title: "Engineering, procurement and construction",
    description:
      "Engineering design, project management, feasibility studies, procurement and logistics, supply chain management, and construction and installation.",
  },
  {
    href: "/environment-and-circular-economy",
    label: "Environment",
    title: "Environment and circular economy",
    description:
      "Waste management, sustainability consulting, and circular-economy consulting and training from Herock Nigeria Limited.",
  },
  {
    href: "/equipment-people-and-training",
    label: "Equipment",
    title: "Equipment, people and training",
    description:
      "Equipment rental and leasing, skilled labour, and training from Herock Nigeria Limited.",
  },
  {
    href: "/contact",
    label: "Contact",
    title: "Contact",
    description:
      "Office of Herock Nigeria Limited: 13 Agudama Street, D/Line, Port Harcourt. Phone and email.",
  },
] as const;

export const nav = pages;

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: companyName,
  url: siteUrl,
  logo: logo.src,
  foundingDate: "1993",
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.street,
    addressLocality: contact.city,
    addressCountry: "NG",
  },
  email: [...contact.emails],
  telephone: ["+2348069239622", "+2348033035679"],
  sameAs: social.map((item) => item.href),
};
