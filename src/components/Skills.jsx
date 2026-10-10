import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub,
} from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import './Skills.css';

const skills = [
  { icon: <FaHtml5 />, name: 'HTML5', level: 95, color: '#e34f26' },
  { icon: <FaCss3Alt />, name: 'CSS3', level: 90, color: '#1572b6' },
  { icon: <FaJs />, name: 'JavaScript', level: 85, color: '#f7df1e' },
  { icon: <FaReact />, name: 'React', level: 82, color: '#61dafb' },
  { icon: <FaNodeJs />, name: 'Node.js', level: 78, color: '#3c873a' },
  { icon: <SiExpress />, name: 'Express.js', level: 75, color: '#ffffff' },
  { icon: <SiMongodb />, name: 'MongoDB', level: 70, color: '#47a248' },
  { icon: <FaGitAlt />, name: 'Git', level: 80, color: '#f05032' },
  { icon: <FaGithub />, name: 'GitHub', level: 85, color: '#ffffff' },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <p className="section-label" data-aos="fade-up">What I Know</p>
        <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
          My <span>Skills</span>
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="150">
          Technologies and tools I work with
        </p>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div
              className="skill-card"
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <p className="skill-name">{skill.name}</p>
              <div className="skill-bar-wrap">
                <div
                  className="skill-bar"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <span className="skill-percent">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
