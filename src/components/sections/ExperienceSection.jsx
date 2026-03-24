import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Code, Award, Users } from 'lucide-react';
import './ExperienceSection.css';

const ExperienceSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const bentoVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <section id="experience" className="experience-section section-wrapper">
      <div className="container">
        <h2 className="section-title">Internship and <span className="section-title-accent">Training</span></h2>
        <div className="section-ornament" />

        <div className="bento-grid" ref={ref}>
          {/* Main Title Block */}
          <motion.div 
            className="bento-cell bento-title-cell"
            variants={bentoVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <span className="bento-date">May 2025 — July 2025</span>
            <h2>Competitive Programming Summer Training</h2>
            <p className="bento-org">Programming Pathshala</p>
          </motion.div>

          {/* Highlight Badge */}
          <motion.div 
            className="bento-cell bento-highlight-cell"
            variants={bentoVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Award size={40} className="bento-icon" />
            <div className="bento-stat">Top 150</div>
            <div className="bento-stat-desc">University Students Selected</div>
          </motion.div>

          {/* Core Description Block */}
          <motion.div 
            className="bento-cell bento-desc-cell"
            variants={bentoVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Briefcase size={28} className="bento-small-icon" />
            <p>
              Completed an intensive 2-month in-person training covering Data Structures & Algorithms from fundamentals to advanced concepts. Refined problem-solving methodology through rigorous daily contests and peer-reviewed algorithmic challenges.
            </p>
          </motion.div>

          {/* Skills Acquired */}
          <motion.div 
            className="bento-cell bento-skills-cell"
            variants={bentoVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Code size={28} className="bento-small-icon" />
            <h4>Core Focus</h4>
            <ul>
              <li>Advanced Graph Theory</li>
              <li>Dynamic Programming</li>
              <li>Time/Space Optimization</li>
              <li>Competitive Math</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
