import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPaperPlane, FaLinkedin, FaGithub, FaCheckCircle } from 'react-icons/fa';
import './Contact.css';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <p className="section-label" data-aos="fade-up">Get In Touch</p>
        <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
          Contact <span>Me</span>
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="150">
          Have a project in mind? Let&apos;s work together
        </p>

        <div className="contact-grid">
          <div className="contact-info" data-aos="fade-right" data-aos-duration="900">
            <h3>Let&apos;s Talk</h3>
            <p>
              I&apos;m always open to new opportunities, collaborations, or just a friendly
              chat about web development. Feel free to reach out!
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><FaEnvelope /></div>
                <div>
                  <strong>Email</strong>
                  <span>ibukunoluwaope@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://github.com/Ibk2222" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:ibukunoluwaope@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {status === 'success' ? (
            <div className="success-screen" data-aos="zoom-in">
              <div className="success-icon">
                <FaCheckCircle />
              </div>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
              <button className="btn btn-primary" onClick={() => setStatus('idle')}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              ref={formRef}
              className="contact-form"
              onSubmit={handleSubmit}
              data-aos="fade-left"
              data-aos-duration="900"
            >
              {status === 'error' && (
                <div className="form-alert form-error">
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className={`btn btn-primary submit-btn${status === 'loading' ? ' loading' : ''}`}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <span className="spinner" /> Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
