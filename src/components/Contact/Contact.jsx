import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useAnimations';
import { FiMail, FiMapPin, FiPhone, FiSend, FiGithub, FiLinkedin, FiCheckCircle } from 'react-icons/fi';
import './Contact.css';

const contactInfo = [
  {
    icon: <FiMail />,
    label: 'Email',
    value: 'phyothureinzaw77@gmail.com',
    href: 'mailto:phyothureinzaw77@gmail.com',
  },
  {
    icon: <FiGithub />,
    label: 'GitHub',
    value: 'github.com/phyothureinzaw',
    href: 'https://github.com/phyothureinzaw',
  },
  {
    icon: <FiLinkedin />,
    label: 'LinkedIn',
    value: 'Phyo Thu Rein Zaw',
    href: 'https://www.linkedin.com/in/phyo-thu-rein-zaw-1b5573324',
  },
];

function Contact() {
  const [ref, isInView] = useInView();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form data:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="contact section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Contact</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? Let's connect!
          </p>
        </motion.div>

        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="contact__info-title">Let's talk about everything!</h3>
            <p className="contact__info-text">
              Feel free to reach out. I'm always open to discussing new projects,
              creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="contact__info-list">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__info-item"
                >
                  <div className="contact__info-icon">{item.icon}</div>
                  <div>
                    <span className="contact__info-label">{item.label}</span>
                    <span className="contact__info-value">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Decorative element */}
            <div className="contact__decoration">
              <div className="contact__decoration-circle" />
              <div className="contact__decoration-circle contact__decoration-circle--2" />
            </div>
          </motion.div>

          <motion.form
            className="contact__form"
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {submitted && (
              <motion.div
                className="contact__success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <FiCheckCircle />
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            <div className="contact__form-group">
              <label htmlFor="name" className="contact__label">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                className={`contact__input ${errors.name ? 'contact__input--error' : ''}`}
                placeholder="John Doe"
                {...register('name', {
                  required: 'Name is required',
                  minLength: { value: 2, message: 'Name must be at least 2 characters' },
                })}
              />
              {errors.name && <span className="contact__error">{errors.name.message}</span>}
            </div>

            <div className="contact__form-group">
              <label htmlFor="email" className="contact__label">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                className={`contact__input ${errors.email ? 'contact__input--error' : ''}`}
                placeholder="john@example.com"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email && <span className="contact__error">{errors.email.message}</span>}
            </div>

            <div className="contact__form-group">
              <label htmlFor="subject" className="contact__label">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                className={`contact__input ${errors.subject ? 'contact__input--error' : ''}`}
                placeholder="Project Discussion"
                {...register('subject', {
                  required: 'Subject is required',
                })}
              />
              {errors.subject && <span className="contact__error">{errors.subject.message}</span>}
            </div>

            <div className="contact__form-group">
              <label htmlFor="message" className="contact__label">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className={`contact__input contact__textarea ${errors.message ? 'contact__input--error' : ''}`}
                placeholder="Tell me about your project..."
                {...register('message', {
                  required: 'Message is required',
                  minLength: { value: 10, message: 'Message must be at least 10 characters' },
                })}
              />
              {errors.message && <span className="contact__error">{errors.message.message}</span>}
            </div>

            <button type="submit" className="contact__submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="contact__submit-loading">Sending...</span>
              ) : (
                <>
                  <FiSend />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
