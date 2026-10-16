import { projects } from '../data.js';
import Reveal from './Reveal.jsx';

export default function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <Reveal as="p" className="eyebrow">Projects</Reveal>
        <Reveal as="h2" className="section__title" delay={100}>Selected work</Reveal>
        <div className="projects">
          {projects.map((p, i) => (
            <Reveal
              as="article"
              key={p.title}
              variant={i % 2 ? 'right' : 'left'}
              className="card card--hover project"
            >
              <div className="project__head">
                <div>
                  <h3>{p.title}</h3>
                  <p className="project__subtitle">{p.subtitle}</p>
                </div>
                <span className="badge">{p.label}</span>
              </div>
              {p.description.map((d, i) => (
                <p key={i}>{d}</p>
              ))}
              <ul className="tags">
                {p.stack.map((s) => (
                  <li key={s} className="tag tag--sm">
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
