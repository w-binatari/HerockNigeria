export const siteUrl = "https://herocknigeria.vercel.app";

export const logo = {
  src: "/images/logo.png",
  alt: "Herock Nigeria",
  width: 500,
  height: 500,
} as const;

export const companyName = "Herock Nigeria Ltd";

export const description =
  "Herock Nigeria is a leading EPC (Engineering, Procurement and Construction) and Human Capacity Development company, established in 1993.";

export const contact = {
  street: "No. 41 Mbonu Street, D/line",
  city: "Port Harcourt",
  region: "Rivers State, Nigeria",
  phones: [
    { display: "+234 (0) 806 923 9622", href: "tel:+234 (0) 806 923 9622" },
    { display: "+234(0)8033035679", href: "tel:+2348033035679" },
  ],
  whatsapp: {
    display: "+447828279565",
    note: "WhatsApp only",
    href: "https://wa.me/447828279565",
  },
  emails: ["admin@herocknigeria.com", "herocknigeria@yahoo.com"],
  website: { display: "www.herocknigeria.com", href: "https://www.herocknigeria.com" },
} as const;

export const social = [
  { name: "Facebook", href: "https://www.facebook.com/herock.nigeria/" },
  { name: "X", href: "https://x.com/HerockNigeria" },
  { name: "Instagram", href: "https://www.instagram.com/herocknigeria/" },
] as const;

export const mission =
  "Deliver professional services that drive business growth and sustainability, empowering our clients to thrive through pivotal partnerships.";

export const vision =
  "To be Nigeria's leading EPC and capacity development company, renowned for excellence in oil and gas services delivery.";

export const commitment = "Fostering a culture of Innovation & Excellence.";

export const values = [
  { letter: "I", name: "Integrity" },
  { letter: "R", name: "Respect" },
  { letter: "I", name: "Innovation" },
  { letter: "S", name: "Service" },
  { letter: "E", name: "Excellence" },
] as const;

// Add `logo: "/images/<file>"` to an entry once the institution's logo file is in public/images.
export const credentials: readonly { name: string; text: string; logo?: string }[] = [
  { name: "Since 1993", text: "Over 30 years working from Port Harcourt." },
  { name: "COREN", text: "Accredited by the Council for the Regulation of Engineering in Nigeria." },
  { name: "ISO 9001:2015", text: "Certified quality management system." },
  { name: "OGTAN", text: "Member of the Oil and Gas Training Association of Nigeria." },
];

export const photos = {
  siteTeam: { src: "/images/site-team.jpg", alt: "Herock engineers in hard hats and hi-vis vests reviewing drawings on a construction site" },
  technician: { src: "/images/technician.jpg", alt: "A technician in a hard hat working on an electrical cabinet" },
  wasteTruck: { src: "/images/waste-truck.jpg", alt: "A refuse compactor truck lifting a green waste bin" },
} as const;

export const accreditations = [
  "Accredited by COREN (Council for the Regulation of Engineering in Nigeria).",
  "Members of OGTAN (Oil and Gas Training Association of Nigeria).",
  "ISO 9001:2015 certified for Quality Management Systems.",
] as const;

export const experience =
  "Because of our many years of experience, we have been able to develop a team of skilled and experienced professionals who can handle various parts of our operations as a company giving us an edge in the market.";

export const quality =
  "We are committed to delivering high-quality services and excellent training that exceed the expectations of our clients, enabling them to achieve their goals. Quality and Excellence is at the heart of what we do and we are passionate about helping our clients succeed.";

export const servicesIntro =
  "We provide leading solutions across five main service areas. While we have expertise in many fields, a key part of our work is training and building capacity. We believe that giving people the right knowledge and skills is the best way to ensure long-term success.";

export const clientsLine =
  "Over the years, we have worked with several top organizations across several sectors and industries and this has increased our skill and experience making us the best at what we do.";

export const group = [
  {
    name: "Herock Tech-IDEAS",
    role: "Digital skills development.",
  },
  {
    name: "Herock Integrated Safety Services Limited",
    role: "Occupational health and safety.",
  },
  {
    name: "Herock Envirotech Limited",
    role: "Eco-friendly environmental clean-up.",
  },
] as const;

export const epcCopy =
  "We offer complete Engineering, Procurement and Construction services, managing complex infrastructure projects from the first design to final execution. We make sure that all engineering, sourcing, and construction tasks meet the safety and quality standards. Importantly, our EPC handover process includes extensive training. Before we finish a project, we thoroughly train the client's facility managers and technical staff on how to safely operate, maintain, and troubleshoot the new infrastructure, ensuring long-term asset integrity.";

export const trainingIntro =
  "We design and execute targeted modules to build a high-performing workforce. Our curriculum is practical, industry-aligned, and delivered by experts.";

export const engineeringTraining =
  "Specialized Train the Trainer sessions for the Oil and Gas Sector, Construction and other industries, Drilling Engineering, Subsea Engineering, Automation and Control, Operations and Maintenance (O & M) - Electrical, Instrumentation/Mechanical Engineering Project Management.";

export const ictTraining =
  "Digital skills, software applications, and technological tools necessary for the modern workplace.";

export const qhseIntro =
  "Comprehensive Health, Safety, and Environment programs to ensure a culture of safety and regulatory compliance. A few of the courses we have successfully handled and delivered include:";

export const qhseCourses = [
  "Incident Investigation and Root Cause Analysis",
  "Permit to Work (PTW) & Safe Work Practices",
  "Hazard Chemicals Handling and Storage",
  "Minerals Oils (Safety) Regulations, 1997",
  "Behaviour-Based Safety (BBS)",
  "First Aid & CPR",
  "HSE Audit and Compliance Awareness",
  "Incident Investigation",
  "First Aid (Basic)",
] as const;

export const manpowerIntro =
  "When we provide manpower, we offer more than just personnel; we offer a vetted and prepared workforce.";

export const manpower = [
  {
    title: "Certified Personnel",
    text: "We supply fully trained and certified staff who fit smoothly into your operations and deliver immediate value.",
  },
  {
    title: "Upskilling and Reskilling",
    text: "We regularly evaluate industry needs and provide specific training to enhance the skills of existing workers, helping them stay competitive.",
  },
  {
    title: "Knowledge Transfer",
    text: "We strengthen our clients' internal capacity by training their teams to maintain high performance well after our initial work is done.",
  },
] as const;

export const researchCopy =
  "In Herock, we provide Training/Capacity building to researchers and provide linkages to support commercialization of viable research and innovation efforts within the Oil and Gas Industry. We guide researchers to turn their ideas and innovation into reality.";

export const projectManagementIntro =
  "Our Project Management Training equips teams with practical skills to deliver projects on time, budget and technical specifications. We cover:";

export const projectManagementTopics = [
  "Project Planning and Scheduling",
  "Risk Management and Mitigation",
  "Resource Allocation and Management",
  "Communication and Stakeholder Management",
] as const;

export const environmentIntro =
  "We provide a range of services that support the protection of our environment, sustainable development, waste reduction, and resource efficiency.";

export const environmentServices = [
  "Waste Management",
  "Sustainability Consulting",
  "Circular Economy Consulting",
  "Resource Efficiency Optimization",
  "Supply Chain Optimization",
  "Carbon Footprint Reduction Programs",
  "Stakeholder Engagement and Education",
] as const;

export const circularFocus =
  "A key area of focus is our Circular Economy Training and Consultancy services. These are designed to enable organizations to effectively transition to a circular economy model, minimizing their environmental footprint and maximizing business opportunities.";

export const ceaUrl = "https://circulareconomyalliance.com";

export const circularConsultancy = [
  "Product design and development for circularity",
  "Business model innovation for the circular economy",
  "Supply chain optimization for circularity",
  "Performance metrics and monitoring for the circular economy",
] as const;

export const reachOut =
  "Let us do what we know how to do best for you, we are experts and are fully at your service anytime, please reach out to us today. Thank you so much.";

export const pages = [
  {
    href: "/",
    label: "Home",
    title: "Home",
    description:
      "Herock Nigeria Ltd is an EPC and man power supply company in Port Harcourt, established in 1993.",
  },
  {
    href: "/company",
    label: "Company",
    title: "Company",
    description:
      "Herock Nigeria Ltd in Port Harcourt: vision, mission, values, and the Nigerian companies that sit under it.",
  },
  {
    href: "/engineering-procurement-and-construction",
    label: "EPC",
    title: "Engineering, procurement and construction",
    description:
      "Complete engineering, procurement and construction for complex infrastructure projects, including handover training.",
  },
  {
    href: "/human-capital-development",
    label: "People",
    title: "Human capital development and manpower supply",
    description:
      "Training, skills development, and manpower supply from Herock Nigeria Ltd.",
  },
  {
    href: "/research-and-innovation",
    label: "Research",
    title: "Research and innovation",
    description:
      "Training and capacity building for researchers, and linkages for commercialization in the oil and gas industry.",
  },
  {
    href: "/project-management",
    label: "Projects",
    title: "Project management",
    description:
      "Project management training in planning, risk, resources, and stakeholder communication.",
  },
  {
    href: "/environment-and-circular-economy",
    label: "Environment",
    title: "Environment and circular economy",
    description:
      "Environmental services and circular economy training and consultancy from Herock Nigeria Ltd.",
  },
  {
    href: "/contact",
    label: "Contact",
    title: "Contact",
    description:
      "Herock Nigeria Ltd, No. 41 Mbonu Street, D/line, Port Harcourt, Rivers State. Phone, WhatsApp, and email.",
  },
] as const;

export const nav = pages;

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: companyName,
  url: siteUrl,
  logo: `${siteUrl}${logo.src}`,
  foundingDate: "1993",
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.street,
    addressLocality: contact.city,
    addressRegion: "Rivers",
    addressCountry: "NG",
  },
  email: [...contact.emails],
  telephone: ["+2348069239622", "+2348033035679"],
  sameAs: [contact.website.href, ...social.map((item) => item.href)],
};
