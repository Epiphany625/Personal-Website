import React, { useEffect, useMemo, useState } from 'react';
import './Introduction.css';
import MyPhoto from '../../assets/my-photo.JPG';
import { Link } from 'react-router-dom';

const Introduction = () => {
  const levels = ['freshman', 'sophomore', 'junior', 'senior'];
  const enrollYear = 2023;
  const currYear = new Date().getFullYear();

  const diff = currYear - enrollYear;
  let grade;
  if (diff >= 0 && diff < 4) {
    grade = levels[diff];
  } else if (diff >= 4) {
    grade = 'graduate';
  } else {
    grade = 'incoming student';
  }

  const signalStats = [
    { label: 'Now', value: `USC CS ${grade}` },
    { label: 'Focus', value: 'Agentic workflows • HRI research' },
    { label: 'Toolbox', value: 'React · Vue · NestJS · PyTorch' },
  ];

  const commandStream = useMemo(
    () => [
      { prompt: 'whoami', output: 'leo_xu — creative CS builder' },
      { prompt: 'status', output: `USC ${grade.toUpperCase()} • Computer Science` },
      { prompt: 'current_mission', output: 'Deploying agentic MCP workflows to smart glasses' },
      { prompt: 'research', output: 'HRI benchmarks with the USC Interaction Lab' },
      { prompt: 'play', output: 'Drone photography, piano improv, joyful code' },
    ],
    [grade]
  );

  const [visibleCommands, setVisibleCommands] = useState([]);

  useEffect(() => {
    setVisibleCommands([]);
    const interval = window.setInterval(() => {
      setVisibleCommands((prev) => {
        if (prev.length === commandStream.length) {
          window.clearInterval(interval);
          return prev;
        }
        return [...prev, commandStream[prev.length]];
      });
    }, 1100);

    return () => window.clearInterval(interval);
  }, [commandStream]);

  return (
    <section className="hero section-shell">
      <div className="hero-grid glass-panel">
        <article className="hero-panel hero-panel--story">
          <p className="hero-eyebrow">Creativity × Computer Science</p>
          <h1 className="hero-title">
            I’m Xinyang (Leo) Xu, crafting expressive, AI-powered software solutions.
          </h1>
          <p className="hero-body">
            Based in Los Angeles, I explore the overlap between imaginative design and rigorous
            engineering. Lately I’ve been shipping a Model Context Protocol powered workflow studio
            for Adaps Photonics smart glasses and co-authoring HRIBench with the USC Interaction Lab
            to evaluate how LLMs parse human emotion for HRI. This site is my playground for
            showcasing that blend of creativity, research, and full-stack craft.
          </p>
          <div className="hero-stats">
            {signalStats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <p>{stat.label}</p>
                <span>{stat.value}</span>
              </div>
            ))}
          </div>
          <div className="hero-ctas">
            <Link to="/projects" className="hero-cta primary">
              View builds
            </Link>
            <Link to="/experience" className="hero-cta ghost">
              Experience log
            </Link>
          </div>
        </article>
        <article className="hero-panel hero-panel--terminal">
          <div className="hero-photo-frame">
            <img src={MyPhoto} alt="Leo Xu smiling" />
            <span>Los Angeles, CA</span>
          </div>
          <div className="hero-terminal">
            {visibleCommands.map((line, index) => (
              <div className="hero-terminal-line" key={`${line.prompt}-${index}`}>
                <span className="prompt">$ {line.prompt}</span>
                <span className="output">{line.output}</span>
              </div>
            ))}
            <div className="hero-terminal-line cursor">
              <span className="prompt">$</span>
              <span className="cursor-bar" />
            </div>
          </div>
          <p className="hero-footer">
            Favorite spark:{' '}
            <Link to="/hobbies">
              <b>Drone photography adventures</b>
            </Link>
          </p>
        </article>
      </div>
    </section>
  );
};

export default Introduction;
