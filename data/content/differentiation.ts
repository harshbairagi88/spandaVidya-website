export interface EcosystemArea {
  readonly id: string;
  readonly number: string;
  readonly label: string;
  readonly heading: string;
  readonly body: readonly string[];
  readonly tags: readonly string[];
  readonly status: 'CURRENT' | 'IN DEVELOPMENT' | 'RESEARCH' | 'EXPLORING';
}

export const differentiationData = {
  eyebrow: "WHAT WE ARE BUILDING",
  heading: "Healthcare is not one problem.",
  supportingText: "From everyday questions to specialized assessments, healthcare requires different tools for different situations. SpandaVidya brings AI, healthcare knowledge, research, and product development together to explore what a more connected digital healthcare experience can look like.",
  closingPrimary: "Not every healthcare problem needs the same technology.",
  closingSecondary: "That is why we are building a platform that can grow in different directions.",
  ctaText: "EXPLORE OUR APPROACH",
  areas: [
    {
      id: "healthcare-ai",
      number: "01",
      label: "01 / HEALTHCARE AI",
      heading: "AI that starts with the person.",
      body: [
        "Healthcare conversations are often the first place people turn when they have a question, concern, or simply want to understand their health better.",
        "SpandaVidya explores AI-assisted experiences that make those interactions easier to start, easier to understand, and more useful."
      ],
      tags: ["AI CONSULTATION", "HEALTH CONVERSATIONS", "PERSONALIZED GUIDANCE"],
      status: "CURRENT",
    },
    {
      id: "health-products",
      number: "02",
      label: "02 / HEALTH PRODUCTS",
      heading: "Technology should become something people can use.",
      body: [
        "SpandaVidya is not limited to software experiments.",
        "We explore healthcare products and digital tools that bring technology closer to everyday life — from personal health experiences to specialized systems built around specific needs."
      ],
      tags: ["DIGITAL HEALTH", "AI PRODUCTS", "HEALTH TOOLS", "USER EXPERIENCES"],
      status: "IN DEVELOPMENT",
    },
    {
      id: "research-development",
      number: "03",
      label: "03 / RESEARCH + DEVELOPMENT",
      heading: "Some ideas need to be researched before they become products.",
      body: [
        "SpandaVidya also works as a research and development initiative.",
        "We explore how artificial intelligence, computer vision, healthcare knowledge, signal analysis, and modern software systems can be combined to solve problems that are difficult to approach with traditional digital tools alone."
      ],
      tags: ["AI", "COMPUTER VISION", "SIGNAL ANALYSIS", "HEALTHCARE", "AYURVEDA", "SOFTWARE SYSTEMS"],
      status: "RESEARCH",
    },
    {
      id: "across-life",
      number: "04",
      label: "04 / ACROSS LIFE",
      heading: "Different people. Different needs.",
      body: [
        "Healthcare changes with age, circumstance, and everyday life.",
        "SpandaVidya explores healthcare experiences for people at different stages of life — from children and families to adults and older people — with technology adapted to the problem rather than forcing everyone into the same experience."
      ],
      tags: ["CHILD HEALTH", "FAMILY HEALTH", "ADULT HEALTH", "OLDER ADULT CARE", "PREVENTIVE WELLNESS"],
      status: "EXPLORING",
    },
    {
      id: "specialized-systems",
      number: "05",
      label: "05 / SPECIALIZED SYSTEMS",
      heading: "One platform. Many directions.",
      body: [
        "Cataract assessment is one example of what this approach can produce.",
        "SpandaVidya is designed to explore specialized AI systems for specific healthcare problems — combining focused models, healthcare workflows, and practical user experiences."
      ],
      tags: ["EYE ASSESSMENT", "AYURVEDIC AI", "PULSE ANALYSIS", "FUTURE AI DIAGNOSTICS"],
      status: "IN DEVELOPMENT",
    },
  ]
} as const;

// Backward-compatible alias
export const differentiators = differentiationData.areas;
