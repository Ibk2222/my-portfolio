import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import agriImg from '../assets/Agric Ecommerce.png';
import schoolImg from '../assets/Screenshot (80).png';
import ticketImg from '../assets/Screenshot (92).png';
import './Projects.css';

const projects = [
  {
    img: agriImg,
    title: 'Agricultural E-Commerce Website',
    desc: 'A full-featured e-commerce platform connecting farmers and buyers. Includes product listings, cart functionality, secure checkout, and user authentication.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/Ibk2222/ecommerce',
    live: 'https://ecommerce-tau-six-78.vercel.app/',
  },
  {
    img: schoolImg,
    title: 'School Management System',
    desc: 'A comprehensive school management platform for managing students, teachers, attendance, grades, timetables, and administrative tasks.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Ibk2222/Abc-schools',
    live: 'https://abc-schools.vercel.app/',
  },
  {
    img: ticketImg,
    title: 'Twitter App clone',
    desc: 'A modern social media app clone where users can post updates, follow other users, and interact with content. Includes real-time messaging and a responsive design.',
    tags: ['React', 'Node.js', 'JavaScript', 'CSS'],
    github: 'https://github.com/Ibk2222/twitter',
    live: 'https://twitter-beta-seven.vercel.app/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <p className="section-label" data-aos="fade-up">My Work</p>
        <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
          Featured <span>Projects</span>
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="150">
          Real-world applications I have built
        </p>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              className="project-card"
              key={i}
              data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-duration="800"
              data-aos-delay={i * 100}
            >
              <div className="project-img-wrap">
                <img
                  src={project.img}
                  alt={project.title}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="project-img-fallback">
                  <span>{project.title.charAt(0)}</span>
                </div>
                <div className="project-overlay">
                  <a href={project.live} target="_blank" rel="noreferrer" className="overlay-btn">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="overlay-btn overlay-btn-ghost">
                    <FaGithub /> Source Code
                  </a>
                </div>
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
