import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';
import './EducationSection.css';

const education = [
  {
    title: 'B.Tech Computer Science & Engineering',
    institution: 'Lovely Professional University, Punjab',
    date: 'August 2023 - Present',
    details: 'Current CGPA: 8.4',
  },
  {
    title: 'Intermediate',
    institution: 'Guru Gobind Singh Public School, Jharkhand',
    date: 'April 2021 - March 2023',
    details: 'Percentage: 70.6%',
  },
  {
    title: 'Matriculation',
    institution: 'Patratu School of Economics, Jharkhand',
    date: 'Completed 2021',
    details: 'Percentage: 87.6%',
  }
];

const EducationSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="education-section section-wrapper">
      <div className="container">
        <h2 className="section-title">Academic <span className="section-title-accent">Journey</span></h2>
        <div className="section-ornament" />

        <div className="edu-list" ref={ref}>
          {education.map((item, index) => (
            <motion.div 
              key={index} 
              className="edu-item"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="edu-icon"><GraduationCap size={24} /></div>
              <div className="edu-content">
                <span className="edu-date">{item.date}</span>
                <h3 className="edu-title">{item.title}</h3>
                <h4 className="edu-institution">{item.institution}</h4>
                <p className="edu-details">{item.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
