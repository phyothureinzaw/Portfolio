import { skills } from '../data.js';
import Reveal from './Reveal.jsx';

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <Reveal as="p" className="eyebrow">Skills</Reveal>
        <Reveal as="h2" className="section__title" delay={100}>Technologies I work with</Reveal>
        <div className="grid grid--3">
          {skills.map((group, i) => (
            <Reveal key={group.title} variant="zoom" className="card card--hover" delay={i * 150}>
              <h3 className="card__title">{group.title}</h3>
              <ul className="tags">
                {group.items.map((s) => (
                  <li key={s} className="tag">
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
