/* eslint-disable no-unused-vars */
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Award, Trophy, Bookmark } from 'lucide-react';
import './AchievementsSection.css';

const certifications = [
  {
    title: 'Certified AI Foundation Associate',
    issuer: 'Oracle',
    date: 'November 2025',
    registration: 'C-2025-ORC',
    link: 'https://drive.google.com/file/d/1WSdVaNeglY0KbP5t9fd-Smb6xXr56sFI/view'
  },
  {
    title: 'Generative AI Apps & Solutions',
    issuer: 'Infosys',
    date: 'August 2025',
    registration: 'C-2025-INF',
    link: 'https://drive.google.com/file/d/1KzwY16vtauxQPpjrYS4BQd1Elj4KgScS/view'
  },
  {
    title: 'Comprehensive DSA Training',
    issuer: 'Programming Pathshala',
    date: 'July 2025',
    registration: 'C-2025-PPS',
    link: 'https://certificates.programmingpathshala.com/v2/doc?id=aae194c7379e7c8f5f40759c63b17a2ecc532b40c349f59ae04f00ebb24c0b18'
  },
  {
    title: 'C Programming Mastery',
    issuer: 'CipherSchools',
    date: 'May 2024',
    registration: 'C-2024-CIP',
    link: 'https://drive.google.com/file/d/1noiqPKaRbmiCyob8qq32Zh47f2EuTs8G/view'
  }
];

const achievements = [
  {
    title: 'Competitive Programming',
    description: 'Solved 260+ problems across platforms (LeetCode, Codeforces, HackerRank).',
  },
  {
    title: 'LeetCode Elite Standing',
    description: 'Top 36.21% globally in contests; peak contest rating 1526.',
  },
  {
    title: 'Oration & Public Speaking',
    description: 'Secured 3rd prize in rigorous university speech competition on Forest Day.',
  }
];

const AchievementsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section id="achievements" className="achievements-section section-wrapper">
      <div className="container">
        
        <div className="achievements-grid" ref={ref}>
          {/* Certifications (Non-mainstream layout) */}
          <div className="cert-column">
            <h2 className="section-title text-left">Certifications</h2>
            <div className="section-ornament-left" />
            
            <div className="cert-stack">
              {certifications.map((cert, index) => (
                <motion.a 
                  key={index} 
                  className="cert-ticket"
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -80 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
                  transition={{ delay: index * 0.15, type: 'spring', stiffness: 80, damping: 12 }}
                >
                  <div className="cert-ticket-stub">
                    <Award size={24} className="cert-hanko" />
                    <span className="cert-reg">{cert.registration}</span>
                  </div>
                  <div className="cert-ticket-main">
                    <span className="cert-date">{cert.date}</span>
                    <h3 className="cert-title">{cert.title}</h3>
                    <div className="cert-issuer">Issued by: <strong>{cert.issuer}</strong></div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Achievements Block */}
          <div className="achieve-column">
            <h2 className="section-title text-left">Achievements</h2>
            <div className="section-ornament-left" />

            <div className="achieve-list">
              {achievements.map((achieve, index) => (
                <motion.div 
                  key={index}
                  className="achieve-block"
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ delay: 0.2 + (index * 0.15), type: 'spring', stiffness: 80, damping: 12 }}
                >
                  <Bookmark size={20} className="achieve-mark" />
                  <div className="achieve-content">
                    <h4>{achieve.title}</h4>
                    <p>{achieve.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AchievementsSection;
