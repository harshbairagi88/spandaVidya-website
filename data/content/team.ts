export interface TeamMember {
  readonly name: string;
  readonly role: string;
  readonly image: string;
  readonly imageWidth: number;
  readonly imageHeight: number;
  readonly description: string;
}

export const teamMembers = [
  {
    name: 'Rahul Gupta',
    role: 'CEO & Founder',
    image: '/rahul.jpeg',
    imageWidth: 1121,
    imageHeight: 1280,
    description:
      'Accomplished senior leader with 20+ years of experience across regulatory governance, legal advisory, aviation operations, technical education. Holds M Tech in Rf and Microwave Engg and Aeronautical Engg from IIT Kanpur and JNTU, Medical Laws from NLSIU and DBRAU, and an MBA',
  },
  {
    name: 'Dilip Parmar',
    role: 'CTO & Co-Founder',
    image: '/dilip.png',
    imageWidth: 1254,
    imageHeight: 1254,
    description:
      'PhD scholar in Electrical Engineering at IIT Kanpur focused on AI-driven healthcare systems, pulse diagnostics, machine learning, and computational research for medical technologies.',
  },
  {
    name: 'Dheeraj Singla',
    role: 'Co-Founder',
    image: '/dheeraj.jpeg',
    imageWidth: 981,
    imageHeight: 1184,
    description:
      'Mechanical Engineering graduate with a B.Tech–M.Tech Dual Degree from IIT Kanpur and currently work as a Mechatronics Engineer at Jaguar Land Rover, focusing on system-level engineering and integration',
  },

  {
    name: 'Dr. Rakesh Roshan',
    role: 'RF & Sensing Technology Expert',
    image: '/rakesh.jpeg',
    imageWidth: 1254,
    imageHeight: 1254,
    description:
      'RF and EMC specialist with 10+ years of experience in compliance testing, RF systems, and medical device validation, currently managing the NABL-accredited EMC laboratory at IIT Kanpur.',
  },
  {
    name: 'DIG Shri Mahendra Yadav, IPS',
    role: 'Board of Advisors',
    image: '/mahendra.jpeg',
    imageWidth: 892,
    imageHeight: 780,
    description:
      'Experienced Senior Leader handling operations, partnerships, and strategic execution for organizational growth and institutional coordination.',
  },

  {
    name: 'Sameer Khan',
    role: 'Full Stack Developer',
    image: '/sameer.jpg',
    imageWidth: 2138,
    imageHeight: 2560,
    description:
      'Full Stack Developer building production-ready web applications — from designing APIs and managing databases to crafting responsive, interactive frontends. Built real-time collaborative platforms, integrated AI-driven features, and shipped secure, optimized systems',
  },
  {
    name: 'Harsh Bairagi',
    role: 'Full Stack Developer',
    image: '/harsh.jpg',
    imageWidth: 853,
    imageHeight: 932,
    description:
      'Full stack developer focused on building scalable AI-powered healthcare platforms, modern web applications, and intelligent diagnostic systems.',
  },
] as const satisfies readonly TeamMember[];
