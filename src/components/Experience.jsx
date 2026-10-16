import { experience } from '../data.js';
import Reveal from './Reveal.jsx';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal as="p" className="eyebrow">Experience</Reveal>
        <Reveal as="h2" className="section__title" delay={100}>Where I've worked</Reveal>
        <div className="timeline">
          {experience.map((job) => (
            <Reveal as="article" key={job.company} variant="left" className="card card--hover experience">
              <img className="experience__logo" src={job.logo} alt={`${job.company} logo`} />
              <div className="experience__body">
                <div className="experience__head">
                  <div>
                    <h3>{job.position}</h3>
                    <p className="experience__company">{job.company}</p>
                  </div>
                  <span className="experience__period">{job.period}</span>
                </div>
                <p>{job.summary}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
