"use client";
import React from "react";

const experienceData = [
  {
    id: 1,
    period: "2025 – Present",
    role: "Software Engineer",
    company: "Spiraledge",
    type: "Full-time",
    summary: "Progressed from Java backend development to full-stack engineering, building and maintaining applications using Java, Python, React, and MySQL.",
    stages: [
      {
        role: "Full-Stack Developer (Python & React)",
        current: true,
        achievements: [
          "Built end-to-end features across Python and React applications, collaborating with cross-functional teams to troubleshoot production issues and maintain reliable application behavior.",
          "Integrated OpenAI and Google Gemini APIs for invoice OCR, document processing, speech-to-text, and multilingual translation.",
          "Developed and enhanced Retrieval-Augmented Generation (RAG) workflows, focusing on knowledge-base chunking, semantic retrieval, and conversational context management.",
        ],
      },
      {
        role: "Java Backend Developer",
        achievements: [
          "Developed and maintained RESTful APIs and business logic for enterprise applications covering inventory management, purchasing, financial transactions, and automated workflows.",
          "Optimized complex MySQL queries and stored procedures, addressing performance bottlenecks, database locking, and data consistency issues.",
          "Implemented Stripe payment integrations, including subscription lifecycle management, webhook processing, and idempotency handling to prevent duplicate event processing.",
        ],
      },
    ],
    technologies: ["Java", "Spring Framework", "Python", "React", "MySQL", "REST APIs", "OpenAI API", "Google Gemini", "Stripe", "Git"],
    color: "cyan",
  },
  {
    id: 2,
    period: "06/2025 - 08/2025",
    role: "Product Backend Intern",
    company: "GEEK UP TECHNOLOGY JSC",
    type: "Internship",
    achievements: [
      "Developed and maintained internal HR management system with admin and user portals",
      "Built Commitment module for workload & office management",
      "Optimized backend services using NestJS, Go, PostgreSQL, and NATS in Agile/Scrum workflow",
    ],
    technologies: ["NestJS", "Go", "PostgreSQL", "NATS", "Agile/Scrum"],
    color: "nature",
  },
];

const ExperienceCard = ({ experience }) => (
  <article className="rounded-2xl border border-silver/10 bg-night-lighter p-6 sm:p-8 md:p-10">
    <header className="flex flex-wrap items-start justify-between gap-4">
      <div>
        <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-silver-light">{experience.company}</h3>
        <p className="mt-2 text-sm text-silver tabular-nums">{experience.period} <span aria-hidden="true">·</span> {experience.type}</p>
      </div>
      {experience.stages && <span className="rounded-full bg-nature/10 px-3 py-1 text-sm font-medium text-nature-light">Current</span>}
    </header>

    {experience.stages ? (
      <>
        <p className="mt-6 font-outfit text-lg font-semibold text-silver-light">{experience.role} — Java Backend → Full-Stack</p>
        <p className="mt-2 max-w-3xl text-sm sm:text-base leading-relaxed text-silver">{experience.summary}</p>
        <ol className="mt-8 space-y-8">
          {experience.stages.map((stage, index) => (
            <li key={stage.role} className="relative pl-7 sm:pl-8">
              {index === 0 && <span aria-hidden="true" className="absolute left-1.5 top-3 h-[calc(100%+2rem)] w-px bg-silver/20" />}
              <span aria-hidden="true" className={`absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 ${stage.current ? "border-cyan-light bg-cyan-light" : "border-silver bg-night-lighter"}`} />
              <h4 className="font-outfit text-lg sm:text-xl font-semibold text-silver-light">{stage.role}</h4>
              <ul className="mt-3 space-y-3 list-disc pl-4 marker:text-silver-dark">
                {stage.achievements.map((item) => <li key={item} className="text-sm sm:text-base leading-relaxed text-silver">{item}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </>
    ) : (
      <>
        <h4 className="mt-6 font-outfit text-xl font-semibold text-silver-light">{experience.role}</h4>
        <ul className="mt-3 space-y-3 list-disc pl-4 marker:text-nature-light">
          {experience.achievements.map((item) => <li key={item} className="text-sm sm:text-base leading-relaxed text-silver">{item}</li>)}
        </ul>
      </>
    )}
    <footer className="mt-8 border-t border-silver/10 pt-5">
      <p className="text-sm font-medium text-silver-light">Tech Stack</p>
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
        {experience.technologies.map((tech) => <li key={tech} className="text-sm text-silver">{tech}</li>)}
      </ul>
    </footer>
  </article>
);

const ExperienceSection = () => (
  <section id="experience" className="py-16 md:py-24 relative scroll-mt-24" aria-labelledby="experience-heading">
    <div className="mx-auto max-w-4xl">
      <header className="mb-10 md:mb-12">
        <h2 id="experience-heading" className="font-outfit font-bold text-4xl md:text-5xl text-silver-light">Work Experience</h2>
        <p className="mt-4 max-w-2xl text-silver leading-relaxed">From backend foundations to full-stack applications and AI-powered workflows.</p>
      </header>
      <div className="space-y-6">
        {experienceData.map((experience) => <ExperienceCard key={experience.id} experience={experience} />)}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
