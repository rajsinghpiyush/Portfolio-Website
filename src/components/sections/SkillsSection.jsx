/* eslint-disable no-unused-vars */
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './SkillsSection.css';

const skillCategories = [
  {
    title: 'Programming Languages',
    kanji: '言語', // Language
    skills: ['C++', 'C', 'Java', 'Python', 'Kotlin']
  },
  {
    title: 'Web Development',
    kanji: '開発', // Development
    skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB']
  },
  {
    title: 'ML & Data',
    kanji: '情報', // Information/Data
    skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Jupyter']
  },
  {
    title: 'Tools & Platforms',
    kanji: '道具', // Tools
    skills: ['Android Studio', 'Git', 'GitHub', 'Power BI', 'Excel']
  },
  {
    title: 'Domain Knowledge',
    kanji: '知識', // Knowledge
    skills: ['Data Structures & Algorithms', 'OOPs', 'Networking', 'Operating Systems', 'MVC']
  },
  {
    title: 'Core Competencies',
    kanji: '能力', // Ability/Competence
    skills: ['Problem Solving', 'Communication', 'Creativity', 'Strategic Thinking']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const blockVariants = {
  hidden: { y: 80, opacity: 0, scale: 0.95, rotateX: 5 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 12,
      duration: 0.8
    }
  }
};

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Allows it to re-animate on every scroll
    threshold: 0.15
  });

  return (
    <section id="skills" className="skills-section section-wrapper">
      <div className="container">
        
        <div className="section-header text-center">
          <h2 className="section-title">Skills &amp; <span className="section-title-accent">Technology</span></h2>
          <div className="section-ornament" />
          <p className="section-subtitle">
            A comprehensive breakdown of my engineering arsenal, mapped by discipline.
          </p>
        </div>

        <motion.div
          ref={ref}
          className="skills-kanji-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} className="kanji-card" variants={blockVariants} whileHover={{ y: -8 }}>
              <h3 className="kanji-card-title">{category.title}</h3>
              <div className="kanji-skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="kanji-skill-badge">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;
