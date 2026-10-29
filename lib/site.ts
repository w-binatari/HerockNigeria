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
    { display: "+234 (0) 806 923 9622", href: "tel:+2348069239622" },
    { display: "+234 (0) 803 303 5679", href: "tel:+2348033035679" },
  ],
  whatsapp: {
    display: "+44 7828 279565",
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

export const credentials: readonly {
  name: string;
  text: string;
  logo?: { src: string; width: number; height: number };
}[] = [
  { name: "Since 1993", text: "Over 30 years working from Port Harcourt." },
  {
    name: "COREN",
    text: "Accredited by the Council for the Regulation of Engineering in Nigeria.",
    logo: { src: "/images/coren.jpg", width: 226, height: 50 },
  },
  {
    name: "ISO 9001:2015",
    text: "Certified quality management system.",
    logo: { src: "/images/iso-9001.png", width: 317, height: 122 },
  },
  {
    name: "OGTAN",
    text: "Member of the Oil and Gas Trainers Association of Nigeria.",
    logo: { src: "/images/ogtan.png", width: 501, height: 570 },
  },
  {
    name: "HP Business Partner",
    text: "Business partner of HP.",
    logo: { src: "/images/hp-business-partner.png", width: 152, height: 117 },
  },
];

export const photos = {
  siteTeam: { src: "/images/site-team.jpg", alt: "Herock engineers in hard hats and hi-vis vests reviewing drawings on a construction site" },
  technician: { src: "/images/technician.jpg", alt: "A technician in a hard hat working on an electrical cabinet" },
  wasteTruck: { src: "/images/waste-truck.jpg", alt: "A refuse compactor truck lifting a green waste bin" },
  // Stock photos from Unsplash, free to use under the Unsplash License.
  epcPlant: { src: "/images/epc-plant.jpg", alt: "An industrial plant under construction beside the water, with cranes" },
  workforceCrew: { src: "/images/workforce-crew.jpg", alt: "A crew of workers in hard hats and hi-vis vests" },
  projectPlanning: { src: "/images/project-planning.jpg", alt: "An engineer drafting a plan with a pencil and ruler" },
  recyclingBins: { src: "/images/recycling-bins.jpg", alt: "Compost, waste and recycling bins side by side" },
  researchLab: { src: "/images/research-lab.jpg", alt: "A researcher using a microscope in a laboratory" },
} as const;

export const services = [
  {
    href: "/engineering-procurement-and-construction",
    title: "Engineering, procurement and construction",
    text: "Complete delivery of complex infrastructure projects, from first design to final execution, with training at handover.",
    photo: photos.epcPlant,
  },
  {
    href: "/human-capital-development",
    title: "Human capital development and manpower supply",
    text: "Practical engineering, digital and QHSE training, and a vetted workforce ready to join your operations.",
    photo: photos.workforceCrew,
  },
  {
    href: "/project-management",
    title: "Project management",
    text: "Training for teams delivering work on time, on budget and to technical specification.",
    photo: photos.projectPlanning,
  },
  {
    href: "/environment-and-circular-economy",
    title: "Environment and circular economy",
    text: "Waste management, sustainability and circular economy consulting and training.",
    photo: photos.recyclingBins,
  },
  {
    href: "/research-and-innovation",
    title: "Research and innovation",
    text: "Capacity building for researchers, and links to commercialise innovation in oil and gas.",
    photo: photos.researchLab,
  },
] as const;

// Client names and logos from the 2026 company profile, for the scrolling strip on the home page.
export const clients: readonly { name: string; logo: { src: string; width: number; height: number } }[] = [
  { name: "Nigeria LNG Limited", logo: { src: "/images/clients/nigeria-lng.png", width: 1024, height: 724 } },
  { name: "TotalEnergies", logo: { src: "/images/clients/totalenergies.png", width: 218, height: 212 } },
  { name: "Nigerian Content Development and Monitoring Board", logo: { src: "/images/clients/ncdmb.png", width: 200, height: 200 } },
  { name: "Niger Delta Development Commission", logo: { src: "/images/clients/nddc.png", width: 139, height: 139 } },
  { name: "Heritage Oil Limited", logo: { src: "/images/clients/heritage-oil.png", width: 173, height: 195 } },
  { name: "AOS Orwell", logo: { src: "/images/clients/aos-orwell.png", width: 150, height: 112 } },
  { name: "PIND", logo: { src: "/images/clients/pind.png", width: 267, height: 119 } },
  { name: "Federal Ministry of Environment, HYPREP", logo: { src: "/images/clients/hyprep.png", width: 274, height: 154 } },
  { name: "Ministry of Employment Generation and Economic Empowerment", logo: { src: "/images/clients/ministry-of-employment.png", width: 707, height: 588 } },
  { name: "NESREA", logo: { src: "/images/clients/nesrea.png", width: 272, height: 267 } },
  { name: "Rivers State University", logo: { src: "/images/clients/rivers-state-university.png", width: 122, height: 130 } },
  { name: "Oil and Gas Trainers Association of Nigeria", logo: { src: "/images/clients/ogtan.png", width: 213, height: 213 } },
  { name: "Circular Economy Alliance", logo: { src: "/images/clients/circular-economy-alliance.png", width: 299, height: 157 } },
  { name: "African Centre for Environmental Protection", logo: { src: "/images/clients/acep.png", width: 177, height: 177 } },
  { name: "RIVLED", logo: { src: "/images/clients/rivled.png", width: 205, height: 129 } },
  { name: "e&i Centre", logo: { src: "/images/clients/e-and-i-centre.png", width: 426, height: 425 } },
  { name: "Powerplus Engineering Ltd", logo: { src: "/images/clients/powerplus-engineering.png", width: 763, height: 382 } },
  { name: "PE Energy Ltd", logo: { src: "/images/clients/pe-energy.png", width: 200, height: 67 } },
  { name: "MCC Nigeria Ltd", logo: { src: "/images/clients/mcc-nigeria.png", width: 185, height: 185 } },
  { name: "Tranet Global QC Limited", logo: { src: "/images/clients/tranet-global.png", width: 256, height: 81 } },
  { name: "Costech", logo: { src: "/images/clients/costech.png", width: 419, height: 97 } },
  { name: "Cap-Stone DNL", logo: { src: "/images/clients/cap-stone-dnl.png", width: 369, height: 122 } },
  { name: "Nest Master Construction Ltd", logo: { src: "/images/clients/nest-master-construction.png", width: 284, height: 56 } },
  { name: "Cinfores", logo: { src: "/images/clients/cinfores.png", width: 183, height: 183 } },
  { name: "Appable Systems", logo: { src: "/images/clients/appable-systems.png", width: 446, height: 94 } },
  { name: "Innovio Energy", logo: { src: "/images/clients/innovio-energy.png", width: 310, height: 207 } },
  { name: "Chakel Security Service", logo: { src: "/images/clients/chakel-security.png", width: 157, height: 195 } },
  { name: "G&G", logo: { src: "/images/clients/g-and-g.png", width: 203, height: 203 } },
];

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
