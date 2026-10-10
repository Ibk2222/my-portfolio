import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import './Footer.css';

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">Ibukunoluwa<span>.</span></span>
          <p>Full Stack Web Developer crafting modern web experiences.</p>
        </div>

        <nav className="footer-nav">
          {links.map((link) => (
            <a key={link} onClick={() => scrollTo(link.toLowerCase())}>
              {link}
            </a>
          ))}
        </nav>

        <div className="footer-socials">
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Ibukunoluwa Odebiyi. Made with <FaHeart className="heart" /> in Nigeria.
        </p>
      </div>
    </footer>
  );
}
