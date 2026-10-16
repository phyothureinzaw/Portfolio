import { profile } from '../data.js';
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from './Icons.jsx';
import Reveal from './Reveal.jsx';

export default function Contact() {
  const items = [
    { icon: <MailIcon />, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: <PhoneIcon />, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
    { icon: <GitHubIcon />, label: 'GitHub', value: 'phyothureinzaw', href: profile.github, external: true },
    { icon: <LinkedInIcon />, label: 'LinkedIn', value: 'Phyo Thu Rein Zaw', href: profile.linkedin, external: true },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal as="p" className="eyebrow">Contact</Reveal>
        <Reveal as="h2" className="section__title" delay={100}>Let's work together</Reveal>
        <Reveal as="p" className="section__lead" delay={200}>
          I'm open to new opportunities and collaborations. Feel free to reach out through any of
          the channels below.
        </Reveal>
        <div className="grid grid--4">
          {items.map((c, i) => (
            <Reveal
              as="a"
              key={c.label}
              href={c.href}
              variant="zoom"
              className="card contact"
              delay={i * 120}
              {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className="contact__icon">{c.icon}</span>
              <span className="contact__label">{c.label}</span>
              <span className="contact__value">{c.value}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
