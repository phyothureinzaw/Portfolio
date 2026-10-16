import { profile } from '../data.js';
import Reveal from './Reveal.jsx';

export default function About() {
  const info = [
    { label: 'Name', value: profile.name },
    { label: 'Date of Birth', value: profile.dob },
    { label: 'Education', value: profile.education },
    { label: 'Current Work', value: 'Fusion Solution Co., Ltd' },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal as="p" className="eyebrow">About</Reveal>
        <Reveal as="h2" className="section__title" delay={100}>A little about me</Reveal>
        <div className="about">
          <Reveal variant="left" className="about__text">
            <p>
              I'm a full-stack developer based in Myanmar, currently working at Fusion Solution
              Co., Ltd since February 2025. I enjoy turning business requirements into clean,
              maintainable software — building intuitive user interfaces with React and Vue.js,
              and robust backends with C#, ASP.NET Core Web API and Entity Framework Core.
            </p>
            <p>
              With a background in Chemistry, I bring an analytical, detail-oriented mindset to
              software development, focusing on data accuracy, clear architecture and a great
              user experience.
            </p>
          </Reveal>
          <Reveal as="ul" variant="right" className="about__info" delay={150}>
            {info.map((i) => (
              <li key={i.label}>
                <span>{i.label}</span>
                <strong>{i.value}</strong>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
