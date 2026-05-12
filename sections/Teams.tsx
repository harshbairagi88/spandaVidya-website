import React from 'react';

const teamMembers = [
  {
    name: 'Rahul Gupta',
    role: 'CEO & Founder',
    
    image: '/abc.jpeg' ,
    description:
      'Accomplished senior leader with 20+ years of experience across regulatory governance, legal advisory, aviation operations, technical education. Holds M Tech in Rf and Microwave Engg and Aeronautical Engg from IIT Kanpur and JNTU, Medical Laws from NLSIU and DBRAU, and an MBA',
  },
  {
    name: 'Dilip Parmar',
    role: 'CTO & Co-Founder',
    image: '/dilip.png',
    description:
      'PhD scholar in Electrical Engineering at IIT Kanpur focused on AI-driven healthcare systems, pulse diagnostics, machine learning, and computational research for medical technologies.',
  },
  {
    name: 'Dr. Rakesh Roshan',
    role: 'RF & Sensing Technology Expert',
    image: '/rakesh.jpeg',
    description:
      'RF and EMC specialist with 10+ years of experience in compliance testing, RF systems, and medical device validation, currently managing the NABL-accredited EMC laboratory at IIT Kanpur.',
  },
  {
    name: 'DIG Shri Mahendra Yadav, IPS',
    role: 'Board of Advisors',
    image: '/mahendra.jpeg',
    description:
      'Experienced Senior Leader handling operations, partnerships, and strategic execution for organizational growth and institutional coordination.',
  },
  {
    name: 'Dr. Jyoti Dimri',
    role: 'CVO & Ayurvedic Expert',
    image: '/jyoti.jpeg',
    description:
      'BAMS, Patanjali Ayurvedic Hospital (MHA) with expertise in Ayurvedic healthcare and patient-centered wellness practices.',
  },
  {
    name: 'Harsh Bairagi',
    role: 'Full Stack Developer',
    image: '/harsh.jpg',
    description:
      'Full stack developer focused on building scalable AI-powered healthcare platforms, modern web applications, and intelligent diagnostic systems. ',
  },
];

const Team: React.FC = () => {
  return (
    <section
      id="team"
      className="relative py-24 px-6 md:px-[8vw] bg-[#faf8f2] overflow-hidden"
    >
      {/* Background Blur Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-brand-accent/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-brand-accent/10 rounded-full blur-[100px]" />

      <div className="relative z-10">
        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-brand-accent uppercase tracking-[0.25em] text-xs font-bold">
            Our Team
          </span>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-text mt-4 leading-tight">
            The Minds Behind
            <span className="text-brand-accent"> SpandaVidya AI</span>
          </h2>

          <p className="text-brand-muted text-lg mt-5 leading-relaxed">
            A multidisciplinary team working at the intersection of Ayurveda,
            artificial intelligence, signal processing, and healthcare systems.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border border-black/5 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Image */}
              <div className="overflow-hidden bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[320px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-brand-text">
                  {member.name}
                </h3>

                <p className="text-brand-accent text-sm font-semibold uppercase tracking-wider mt-2 mb-4">
                  {member.role}
                </p>

                <p className="text-brand-muted text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;