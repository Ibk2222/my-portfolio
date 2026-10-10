import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import useTyping from '../hooks/useTyping';
import './Hero.css';
import profileImg from '../assets/WhatsApp_Image_2026-10-10_at_17.17.47-removebg-preview.png';

const ROLES = [
  'Full Stack Developer',
  'React Developer',
  'Node.js Developer',
  'UI/UX Enthusiast',
];

export default function Hero() {
  const typedText = useTyping(ROLES);

  return (
    <section id="home" className="hero">
      <div className="hero-bg-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
      </div>

      <div className="container hero-container">
        <div className="hero-text" data-aos="fade-right" data-aos-duration="900">
          <p className="hero-greeting">Hello, I&apos;m</p>
          <h1 className="hero-name">Ibukunoluwa Odebiyi</h1>
          <h2 className="hero-role">
            <span className="typed-text">{typedText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            I build modern, responsive, and user-friendly web applications using
            React, Node.js, and more. Passionate about turning ideas into
            real-world digital products.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Hire Me</a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Ibk2222" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="hero-image-wrap" data-aos="fade-left" data-aos-duration="900" data-aos-delay="200">
          <div className="hero-image-ring">
            <img
              src={profileImg}
              alt="Ibukunoluwa Odebiyi"
              className="hero-img"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hero-img-placeholder">
              <span>IO</span>
            </div>
          </div>
          <div className="hero-badge" data-aos="zoom-in" data-aos-delay="600">
            <span>1+</span>
            <p>Years Experience</p>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" data-aos="fade-up" data-aos-delay="800">
        <div className="scroll-mouse">
          <div className="scroll-dot" />
        </div>
      </div>
    </section>
  );
}
