import React, { useEffect, useState } from 'react';
import './Projects.css';
import ReturnToTop from '../ReturnToTop/ReturnToTop.js';

const techGlyphs = ['javascript.png', 'cpp.png', 'python.png', 'simulink.png', 'ts.png'];

const projectData = [
  {
    image: 'website.png',
    title: 'Personal Command Center',
    timeline: '2024 — Present',
    summary:
      'A living, ever-evolving React experience that captures my artful take on computer science and storytelling.',
    story:
      'Built 15+ bespoke components, routed the entire site as a SPA, and designed a neon terminal-inspired system that keeps growing with each experiment.',
    stack: ['React', 'SPA', 'Creative Coding'],
    repo: 'https://github.com/Epiphany625/Epiphany625.github.io',
  },
  {
    image: 'USChedule.png',
    title: 'USChedule',
    timeline: 'Mar 2024 — Present',
    summary:
      'A course-scheduling assistant for USC students that balances wake-up time, no-Friday wishes, and every quirky preference we bring to registration.',
    story:
      'Optimized in C++ with monthly updates to the scheduling heuristics, adding “what-if” toggles that keep the algorithm surprisingly human.',
    stack: ['C++', 'Scheduling Algorithms', 'CLI UX'],
    repo: 'https://github.com/Epiphany625/USChedule',
  },
  {
    image: 'stock.png',
    title: 'Historical Stock & Revenue Analysis',
    timeline: 'Dec 2023 — Jan 2024',
    summary:
      'A data-visual playground that compares Tesla and Netflix market narratives through public APIs and precise revenue modeling.',
    story:
      'Scripted in Python with Pandas, Matplotlib, and yfinance to pipeline, clean, and visualize trends for better long-term calls.',
    stack: ['Python', 'Pandas', 'Data Visualization'],
    repo: 'https://github.com/Epiphany625/StockDataWebscraping',
  },
];

const Projects = () => {
  const mantra = 'dream it · code it · deploy it';
  const [typed, setTyped] = useState('>>>');

  useEffect(() => {
    const uppercase = mantra.toUpperCase();
    setTyped('>>>');
    let index = 0;
    const interval = window.setInterval(() => {
      setTyped(`>>> ${uppercase.slice(0, index + 1)}`);
      index += 1;
      if (index === uppercase.length) {
        window.clearInterval(interval);
      }
    }, 120);

    return () => window.clearInterval(interval);
  }, [mantra]);

  return (
    <section className="projects-backdrop">
      <div className="projects section-shell" id="projects-container">
        <header className="projects-header">
          <p className="section-heading">Build Log</p>
          <h2 className="projects-title">
            <code>{typed}</code>
          </h2>
          <p className="projects-description">
            Each project below mixes creativity with systems thinking—from storytelling websites to
            pragmatic scheduling algorithms and data-informed explorations. These are the sandboxes
            where I test ideas before graduating them into products and research.
          </p>
        </header>

        <div className="projects-sparkline">
          {techGlyphs.map((glyph) => (
            <img
              key={glyph}
              src={require(`../../assets/${glyph}`)}
              alt={glyph}
              className="projects-glyph"
            />
          ))}
        </div>

        <div className="project-grid">
          {projectData.map((project) => (
            <article className="project-card glass-panel" key={project.title}>
              <div className="project-card__media">
                <img src={require(`../../assets/${project.image}`)} alt={project.title} />
              </div>
              <div className="project-card__body">
                <p className="project-card__timeline">{project.timeline}</p>
                <h3>{project.title}</h3>
                <p className="project-card__summary">{project.summary}</p>
                <p className="project-card__story">{project.story}</p>
                <div className="project-card__stack">
                  {project.stack.map((tag) => (
                    <span className="tag-chip" key={`${project.title}-${tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-card__links">
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i> Code
                  </a>
                  {project.web && (
                    <a href={project.web} target="_blank" rel="noreferrer">
                      <i className="fas fa-square-up-right"></i> Launch
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <ReturnToTop idName="projects-container" />
      </div>
    </section>
  );
};

export default Projects;
