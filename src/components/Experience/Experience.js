import React from 'react';
import InfoCard from '../InfoCard/InfoCard.js';
import './Experience.css';
import ReturnToTop from '../ReturnToTop/ReturnToTop.js';

const experiences = [
  {
    image: 'adaps.png',
    title: 'Adaps Photonics Inc., Algorithms Intern: Full-Stack',
    sub: 'Full-stack Software Development · May 2025 – Jul 2025',
    location: 'Zhejiang, China',
    description1:
      'Designed an MCP-powered agentic workflow studio where Vue.js (Pinia) frontends stream into NestJS services and Streamable HTTP deployments so smart-glass partners can spin workflows up instantly.',
    description2:
      'Hardened performance with Dockerized releases, nginx cache controls, SVG optimization, TypeORM migrations across four SQL systems, layered RBAC/ABAC, i18n localization, and LangChain + OpenMeter telemetry.',
    badges: ['Vue.js', 'NestJS', 'MCP', 'Docker', 'LangChain'],
  },
  {
    image: 'viterbi.avif',
    title: 'USC Interaction Lab, AI Research Assistant',
    sub: 'Prof. Maja Matarić · Sep 2024 – Jun 2025',
    location: 'Los Angeles, CA',
    description1:
      'Benchmarked Llama 3.2 Vision and four other VLMs/LLMs for HRIBench to see how well they infer emotion and select HRI actions, contributing quantitative analyses to a peer-reviewed paper.',
    description2:
      'Owned SageMaker + S3 MLOps with IAM guardrails (≈30% faster sims), led PyTorch ResNet32 and LoRA fine-tuning with 30+ commits, and documented reproducible Conda workflows for the lab.',
    badges: ['PyTorch', 'AWS SageMaker', 'LoRA', 'HRI'],
  },
  {
    image: 'stealth.png',
    title: 'Bot Auto TX Inc., Autonomous Driving SWE Intern',
    sub: 'Jun 2024 – Present',
    location: 'Houston, TX',
    description1:
      'Automated DBC-to-MATLAB script conversions with Python and built a Simulink model that flags truck-simulation errors before hardware-in-the-loop runs.',
    description2:
      'Currently prototyping a Raspberry Pi handler in C++ to broadcast instructions to simulated fleets for faster iteration cycles.',
    badges: ['Python', 'Simulink', 'Raspberry Pi'],
  },
];

const Experience = () => {
  return (
    <section className="experience-backdrop">
      <div className="experience section-shell" id="experience-container">
        <header className="experience-header">
          <p className="section-heading">Experience</p>
          <h2>Building systems that feel imaginative and reliable.</h2>
          <p>
            Whether I am sculpting agentic workflows or build smart softwares, I chase the same goal: expressive computing with measurable impact.
          </p>
        </header>

        <div className="experience-grid">
          {experiences.map((item) => (
            <InfoCard
              key={item.title}
              image={item.image}
              title={item.title}
              sub={item.sub}
              description1={item.description1}
              description2={item.description2}
              location={item.location}
              badges={item.badges}
            />
          ))}
        </div>

        <ReturnToTop idName="experience-container" />
      </div>
    </section>
  );
};

export default Experience;
