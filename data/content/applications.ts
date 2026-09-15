export interface ProductApplication {
  readonly id: string;
  readonly number: string;
  readonly label: string;
  readonly name: string;
  readonly subtitle: string;
  readonly status: 'CURRENT / FLAGSHIP' | 'PRODUCT' | 'RESEARCH + DEVELOPMENT';
  readonly statusColor: string;
  readonly heading: string;
  readonly description: string;
  readonly primaryCtaText: string;
  readonly primaryCtaHref: string;
  readonly isExternalCta?: boolean;
  readonly secondaryCtaText?: string;
  readonly secondaryCtaHref?: string;
  readonly isSecondaryExternal?: boolean;
  readonly specsTitle: string;
  readonly specs: readonly string[];
  readonly workflowSteps?: readonly {
    readonly step: string;
    readonly title: string;
    readonly detail: string;
  }[];
  readonly features?: readonly {
    readonly title: string;
    readonly description: string;
  }[];
  readonly researchDirections?: readonly {
    readonly title: string;
    readonly description: string;
    readonly status: string;
  }[];
}

export const applicationsData = {
  eyebrow: "SPANDAVIDYA AI • APPLICATIONS",
  heading: "Different health problems need different kinds of intelligence.",
  supportingText: "SpandaVidya brings together AI, computer vision, signal intelligence, and healthcare research to build focused systems for different stages and needs of life.",
  togetherHeading: "Different inputs. Different problems. One direction.",
  togetherBody: [
    "An eye image, a baby's response to visual stimuli, or a physiological signal may look like completely different problems.",
    "For SpandaVidya, they represent the same larger question: How can technology help us understand health earlier, more continuously, and with less friction?"
  ],
  products: [
    {
      id: "cataract-ai",
      number: "01",
      label: "01 / SPANDAVIDYA AI",
      name: "Cataract AI",
      subtitle: "Eye / Cataract Assessment",
      status: "CURRENT / FLAGSHIP",
      statusColor: "#5C6E52",
      heading: "Making eye screening easier to access.",
      description: "SpandaVidya AI uses computer vision and machine learning to analyze eye images captured through a guided mobile workflow and provide an AI-assisted cataract assessment.",
      primaryCtaText: "EXPLORE CATARACT AI",
      primaryCtaHref: "#cataract-workflow-view",
      secondaryCtaText: "DOWNLOAD APP",
      secondaryCtaHref: "https://drive.google.com/drive/folders/1bD0n2DUudqTkjEFt3JOjVrHUdHw7Y-Ah?usp=sharing",
      isSecondaryExternal: true,
      specsTitle: "TECHNICAL SPECIFICATIONS",
      specs: [
        "Computer Vision",
        "EfficientNet-B3",
        "Image Analysis",
        "AI Classification",
        "Mobile Capture",
        "Structured Results"
      ],
      workflowSteps: [
        { step: "01", title: "CAPTURE", detail: "Guided mobile anterior segment optical intake" },
        { step: "02", title: "VALIDATE", detail: "Quality, illumination & corneal centering check" },
        { step: "03", title: "ANALYZE", detail: "EfficientNet-B3 convolutional neural network inference" },
        { step: "04", title: "PREDICT", detail: "Lens opacity staging & AI confidence score calculation" },
        { step: "05", title: "RESULT", detail: "Structured PDF assessment report for patient & doctor" },
      ]
    },
    {
      id: "infantmind",
      number: "02",
      label: "02 / INFANTMIND",
      name: "InfantMind",
      subtitle: "Early-Life Understanding",
      status: "PRODUCT",
      statusColor: "#B8935A",
      heading: "Understanding the earliest moments of development.",
      description: "InfantMind is designed around the earliest stage of a baby's development, combining calm visual experiences with technology that helps parents engage with their baby's early visual attention and responses.",
      primaryCtaText: "EXPLORE INFANTMIND",
      primaryCtaHref: "https://www.infantmind.ai/",
      isExternalCta: true,
      specsTitle: "CORE PRODUCT FEATURES",
      specs: [
        "Newborn to 6 Months",
        "High-Contrast Visuals",
        "Gentle Motion",
        "Parent-Led Interaction",
        "Local Photo Privacy",
        "Developmental Engagement"
      ],
      features: [
        {
          title: "HIGH-CONTRAST VISUALS",
          description: "Gentle visual patterns specifically engineered for early neonatal visual attention and sensory engagement."
        },
        {
          title: "CALM ACTIVITIES",
          description: "Short, soothing activities crafted for quiet time, tummy time, and meaningful parent-baby bonding."
        },
        {
          title: "PARENT-LED EXPERIENCE",
          description: "A shared interaction model where the parent remains actively involved and at the center of the experience."
        },
        {
          title: "REACTION CAPTURE",
          description: "Empowers parents to capture and record subtle engagement moments during developmental sessions."
        },
        {
          title: "PRIVATE BY DESIGN",
          description: "Captured photos and family interactions are kept strictly local on the user's device for complete privacy."
        }
      ]
    },
    {
      id: "rf-signal-intelligence",
      number: "03",
      label: "03 / SIGNAL INTELLIGENCE",
      name: "RF Signal Intelligence",
      subtitle: "Continuous Physiological Monitoring",
      status: "RESEARCH + DEVELOPMENT",
      statusColor: "#8C6B3E",
      heading: "Health signals, without adding more friction.",
      description: "SpandaVidya is exploring non-contact and continuous physiological monitoring using RF sensing and multimodal signal intelligence.",
      primaryCtaText: "EXPLORE RESEARCH DIRECTIONS",
      primaryCtaHref: "#technology",
      specsTitle: "SIGNAL PROCESSING & SENSING SUITE",
      specs: [
        "RF Sensing",
        "Acoustic Cry Spectra",
        "Mobile Video",
        "BLE Wearables",
        "Multimodal Fusion",
        "Physiological Telemetry"
      ],
      researchDirections: [
        {
          title: "NEONATAL MONITORING",
          description: "Non-contact chest-wall motion tracking and acoustic cry pattern feature extraction.",
          status: "RESEARCH"
        },
        {
          title: "CONTINUOUS TELEMETRY",
          description: "Low-power BLE wristband streaming multi-hour ambulatory physiological data.",
          status: "PROTOTYPE"
        },
        {
          title: "BLOOD PRESSURE ESTIMATION",
          description: "Cuffless systolic and diastolic tracking directly from 1D CNN arterial pulse wave cycles.",
          status: "INTERNAL VALIDATION"
        },
        {
          title: "CARDIOVASCULAR & STRESS SIGNALS",
          description: "Correlating dicrotic notch dampening and secondary reflex peak shifts with systemic fatigue.",
          status: "RESEARCH"
        }
      ]
    }
  ]
} as const;
