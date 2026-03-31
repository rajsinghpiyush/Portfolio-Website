/* eslint-disable no-unused-vars */
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Folder, ChevronLeft, ChevronRight } from 'lucide-react';
import './ProjectsSection.css';

const projects = [
  {
    title: 'Centrion Project Management',
    category: 'Web Development',
    date: 'May 2023 - Jul 2023',
    description: 'A comprehensive task tracking system with real-time updates using WebSockets. Features role-based access control, CRUD operations for projects/tasks, and team collaboration & commenting features.',
    tech: ['Express', 'React', 'Tailwind', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/rajsinghpiyush/Centrion-Project-Management-Website'
  },
  {
    title: 'Airbnb-Like Booking Platform',
    category: 'Web Development',
    date: 'Sep 2025 - Oct 2025',
    description: 'A full-stack booking website inspired by Airbnb. Implemented with MVC architecture, complete user authentication (bcrypt, express session), and modularized codebase for scalability.',
    tech: ['Node.js', 'Express', 'React', 'MongoDB'],
    github: 'https://github.com/rajsinghpiyush/Airbnb'
  },
  {
    title: 'Jharkhand Literacy Analysis',
    category: 'Predictive Analysis',
    date: 'Mar 2025 - Apr 2025',
    description: 'Data analysis on Jharkhand\'s 2011 Census data. Investigated female education trends, highlighted gender gaps by region, and applied Scikit-learn models to predict future population trends.',
    tech: ['Python', 'NumPy', 'Pandas', 'Scikit-learn'],
    github: 'https://github.com/rajsinghpiyush/Literacy-Rate-in-Jharkhand-by-age-and-gender'
  },
  {
    title: 'StayPrice-Analytics',
    category: 'Predictive Analysis',
    date: '2024',
    description: 'This project uses machine learning techniques to predict hotel room prices based on Airbnb listing data. Various regression and ensemble models were evaluated, with XGBoost achieving the best performance.',
    tech: ['Python', 'Scikit-learn', 'NumPy', 'Pandas'],
    github: 'https://github.com/rajsinghpiyush/StayPrice-Analytics'
  },
  {
    title: 'Kids World – Book Shop',
    category: 'Web Development',
    date: 'May 2023 - Jul 2023',
    description: 'A responsive e-commerce interface with precise cart price calculations. Integrated a WhatsApp order-generation feature that creates a direct checkout link from the cart for a fast desktop and mobile ordering experience.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/rajsinghpiyush/Book-Shopping-Website'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -382, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 382, behavior: 'smooth' });
    }
  };

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects-section section-wrapper">
      <div className="container">
        
        <div className="slider-header-container">
          <h2 className="section-title">Featured <span className="section-title-accent">Projects</span></h2>
          <div className="slider-controls">
            <button className="slider-btn" onClick={scrollLeft} aria-label="Scroll Left">
              <ChevronLeft size={24} />
            </button>
            <button className="slider-btn" onClick={scrollRight} aria-label="Scroll Right">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        <div className="project-filters">
          {['All', 'Web Development', 'Predictive Analysis'].map(cat => (
            <button 
              key={cat} 
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="section-ornament" />

        <motion.div 
          className="projects-slider"
          ref={(node) => {
            sliderRef.current = node;
            ref(node);
          }}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <Folder size={40} className="project-folder-icon" color="var(--gold)" />
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github size={22} />
                  </a>
                </div>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              {project.category && (
                <span className="project-category">{project.category}</span>
              )}
              <span className="project-date">{project.date}</span>
              
              <p className="project-description">
                {project.description}
              </p>
              
              <div className="project-tech-list">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-item">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;
