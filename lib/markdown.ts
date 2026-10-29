// Plain Markdown copies of each page, built from the same content in lib/site.ts that the
// HTML pages render, so the two cannot drift apart. Served at /md/<slug>.md, listed in
// /sitemap.md and introduced by /llms.txt.
import {
  circularConsultancy,
  circularFocus,
  clients,
  clientsLine,
  commitment,
  companyName,
  contact,
  credentials,
  description,
  engineeringTraining,
  environmentIntro,
  environmentServices,
  epcStages,
  experience,
  group,
  ictTraining,
  manpower,
  manpowerIntro,
  mission,
  pages,
  projectManagementIntro,
  projectTopics,
  qhseCourses,
  qhseIntro,
  quality,
  researchCopy,
  researchSteps,
  services,
  servicesIntro,
  siteUpdated,
  siteUrl,
  trainingIntro,
  values,
  vision,
} from "@/lib/site";

type Page = (typeof pages)[number];

export const markdownSlug = (href: string) => (href === "/" ? "index" : href.slice(1));
export const markdownPath = (href: string) => `/md/${markdownSlug(href)}.md`;
export const htmlUrl = (href: string) => `${siteUrl}${href === "/" ? "" : href}`;

const list = (items: readonly string[]) => items.map((item) => `- ${item}`).join("\n");
const pairs = (items: readonly { title: string; text: string }[]) =>
  items.map((item) => `- **${item.title}.** ${item.text}`).join("\n");

const contactBlock = `## Contact

- Address: ${contact.street}, ${contact.city}, ${contact.region}
- Phone: ${contact.phones.map((phone) => phone.display).join(", ")}
- WhatsApp (messages only): ${contact.whatsapp.display}
- Email: ${contact.emails.join(", ")}
- Contact page: ${htmlUrl("/contact")}`;

const bodies: Record<string, () => string> = {
  "/": () => `${description}

${servicesIntro}

## Services

${services.map((service) => `- [${service.title}](${siteUrl}${markdownPath(service.href)}): ${service.text}`).join("\n")}

## Credentials

${credentials.map((item) => `- **${item.name}.** ${item.text}`).join("\n")}

## Workforce

${manpowerIntro}

${pairs(manpower)}

## Clients

${clientsLine}

${list(clients.map((client) => client.name))}

## The Herock group

${group.map((item) => `- **${item.name}.** ${item.role}${item.url ? ` ${item.url}` : ""}`).join("\n")}

${contactBlock}`,

  "/company": () => `${companyName} has worked from Port Harcourt, Rivers State, since 1993.

${experience}

${quality}

## Mission

${mission}

## Vision

${vision}

## Commitment

${commitment}

## Values (I-RISE)

${list(values.map((value) => value.name))}

## Credentials

${credentials.map((item) => `- **${item.name}.** ${item.text}`).join("\n")}

## The Herock group

${group.map((item) => `- **${item.name}.** ${item.role}${item.url ? ` ${item.url}` : ""}`).join("\n")}

## Clients

${clientsLine}

${list(clients.map((client) => client.name))}

${contactBlock}`,

  "/engineering-procurement-and-construction": () => `We offer complete engineering, procurement and construction services, managing complex infrastructure projects from the first design to final execution. We make sure all engineering, sourcing and construction tasks meet the safety and quality standards, so one accountable team carries the project the whole way.

## Handover training

Before we finish a project, we thoroughly train the client's facility managers and technical staff on how to safely operate, maintain and troubleshoot the new infrastructure. It is how we protect long-term asset integrity after our crews leave site.

## How we deliver

${pairs(epcStages)}

${contactBlock}`,

  "/human-capital-development": () => `${trainingIntro}

## Training areas

- **Engineering training.** ${engineeringTraining}
- **ICT and technology.** ${ictTraining}
- **Digitalization and digital innovation.** Training that helps teams adopt digital tools and ways of working, alongside Herock Tech-IDEAS, our digital skills company.
- **QHSE training.** Health, safety and environment programmes that build a culture of safety and regulatory compliance.

## QHSE courses we have delivered

${qhseIntro.replace(/ A few of the courses.*$/, "")}

${list(qhseCourses.map((course) => course.title))}

## Manpower supply

${manpowerIntro}

${pairs(manpower)}

${contactBlock}`,

  "/research-and-innovation": () => `${researchCopy}

## How we support researchers

${pairs(researchSteps)}

${contactBlock}`,

  "/project-management": () => `${projectManagementIntro.replace(/ We cover:$/, "")}

## Topics covered

${pairs(projectTopics)}

${contactBlock}`,

  "/environment-and-circular-economy": () => `${environmentIntro}

## Services

${list(environmentServices)}

## Circular economy training and consultancy

${circularFocus}

Delivered in partnership with the Circular Economy Alliance (https://circulareconomyalliance.com), covering:

${list(circularConsultancy)}

## Herock Envirotech

Our sister company Herock Envirotech Limited turns poultry feather waste into the Chicken Feather Oil Pillow, a biodegradable oil-spill sorbent that absorbs over ten times its own weight in oil and floats on water. It is validated at technology readiness level 7. In 2026 it was one of the top eight finalists in the Nigerian Academy of Engineering's 3rd National Innovation Competition and received the Academy's Certificate of Merit. https://www.herockenvirotech.com

${contactBlock}`,

  "/contact": () => `Call, message on WhatsApp, email or visit ${companyName} in Port Harcourt.

${contactBlock.replace("## Contact\n\n", "")}

Directions: https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${contact.street}, ${contact.city}, Nigeria`)}`,
};

export function pageMarkdown(page: Page) {
  const heading = page.href === "/" ? companyName : `${page.title} · ${companyName}`;
  return `# ${heading}

> ${page.description}

- Web page: ${htmlUrl(page.href)}
- Language: en-NG
- Updated: ${siteUpdated}
- Source: the published ${companyName} website; ask the office to confirm anything not stated here.

${bodies[page.href]()}
`;
}

export function sitemapMarkdown() {
  return `# ${companyName} site map

Every public page on ${siteUrl}, with its Markdown copy. Updated ${siteUpdated}.

| Page | What it answers | Markdown |
| --- | --- | --- |
${pages.map((page) => `| [${page.title}](${htmlUrl(page.href)}) | ${page.description} | [${markdownSlug(page.href)}.md](${siteUrl}${markdownPath(page.href)}) |`).join("\n")}
`;
}

export function llmsTxt() {
  const link = (page: Page, note: string) => `- [${page.title}](${siteUrl}${markdownPath(page.href)}): ${note}`;
  const byHref = (href: string) => pages.find((page) => page.href === href)!;
  return `# ${companyName}

> ${description} Based at ${contact.street}, ${contact.city}, ${contact.region}.

If you are an LLM looking for information about ${companyName}, use the site map to find the relevant page and its linked Markdown copy. Use that page's facts and its web page link; if the information you need is not there, say so rather than guessing.

- [Site map](${siteUrl}/sitemap.md): every page with its Markdown copy.

## Company

${link(byHref("/"), "overview, services, credentials, clients and the Herock group")}
${link(byHref("/company"), "history since 1993, mission, vision, values, credentials and group companies")}
${link(byHref("/contact"), "address, phone numbers, WhatsApp and email")}

## Services

${link(byHref("/engineering-procurement-and-construction"), "EPC delivery stages and handover training")}
${link(byHref("/human-capital-development"), "engineering, ICT, digital and QHSE training, the QHSE courses delivered, and manpower supply")}
${link(byHref("/project-management"), "project management training topics")}
${link(byHref("/environment-and-circular-economy"), "environmental services, circular economy consultancy and Herock Envirotech")}
${link(byHref("/research-and-innovation"), "support for researchers in oil and gas")}
`;
}
