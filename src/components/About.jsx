import { FaCode, FaServer, FaMobileAlt } from 'react-icons/fa';
import aboutImg from '../assets/WhatsApp_Image_2026-10-10_at_17.17.47-removebg-preview.png';
import './About.css';

const highlights = [
  { icon: <FaCode />, label: 'Frontend Dev', desc: 'React, HTML, CSS, JavaScript' },
  { icon: <FaServer />, label: 'Backend Dev', desc: 'Node.js, Express, REST APIs' },
  { icon: <FaMobileAlt />, label: 'Responsive Design', desc: 'Mobile-first, cross-browser' },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <p className="section-label" data-aos="fade-up">Get To Know</p>
        <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
          About <span>Me</span>
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="150">
          A little bit about who I am and what I do
        </p>

        <div className="about-grid">
          <div className="about-img-col" data-aos="fade-right" data-aos-duration="900">
            <div className="about-img-frame">
              <img
                src={aboutImg}
                alt="About Ibukunoluwa"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="about-img-fallback">IO</div>
            </div>
            <div className="about-stats">
              <div className="stat-card" data-aos="zoom-in" data-aos-delay="300">
                <span>3</span>
                <p>Projects Completed</p>
              </div>
              <div className="stat-card" data-aos="zoom-in" data-aos-delay="400">
                <span>5+</span>
                <p>Technologies</p>
              </div>
            </div>
          </div>

          <div className="about-content" data-aos="fade-left" data-aos-duration="900">
            <h3>Full Stack Web Developer based in Nigeria</h3>
            <p>
              Hi! I&apos;m <strong>Ibukunoluwa Odebiyi</strong>, a passionate full stack web
              developer with hands-on experience building modern web applications. I
              specialize in creating seamless user experiences on the frontend and
              robust, scalable systems on the backend.
            </p>
            <p>
              My journey in web development has led me to build real-world products —
              from an agricultural e-commerce platform to a school management system
              and a ticketing application. I love solving problems and continuously
              learning new technologies.
            </p>

            <div className="about-highlights">
              {highlights.map((h, i) => (
                <div
                  className="highlight-card"
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={200 + i * 100}
                >
                  <div className="highlight-icon">{h.icon}</div>
                  <div>
                    <strong>{h.label}</strong>
                    <p>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-info">
              <div><span>Name:</span> Ibukunoluwa Odebiyi</div>
              <div><span>Email:</span> ibukunoluwaope@gmail.com</div>
              <div><span>Location:</span> Nigeria</div>
              <div><span>Available:</span> For Hire</div>
            </div>

            <a href="#contact" className="btn btn-primary" style={{ marginTop: '28px' }}>
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
