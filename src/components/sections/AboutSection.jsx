import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Server, Database, Globe } from 'lucide-react';
import './AboutSection.css';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const el = sectionRef.current;
    
    // Title and text reveal
    gsap.fromTo(textRef.current.children, 
      { opacity: 0, y: 70 },
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "top 20%",
          scrub: 1,
        }
      }
    );

    // Cards reveal
    gsap.fromTo(cardsRef.current,
      { opacity: 0, y: 150, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: el.querySelector('.about-cards'),
          start: "top 90%",
          end: "top 40%",
          scrub: 1,
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section id="about" className="about-section section-wrapper" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">About <span className="section-title-accent">Me</span></h2>
        <div className="section-ornament" />

        <div className="about-content" ref={textRef}>
          <div className="about-text-block">
            <p className="about-description">
              Hello! I'm Piyush Raj, a passionate computer science student at Lovely Professional University.
              I enjoy creating things that live on the internet — websites, applications, and anything in between.
              My goal is to always build products that provide pixel-perfect, performant experiences.
            </p>
            <p className="about-description">
              With a solid foundation in Data Structures and Algorithms combined with full-stack web development
              skills, I approach problem-solving systematically and creatively.
            </p>
          </div>
          <div className="about-meta">
            <span>📍 Lovely Professional University</span>
            <span>🎓 B.Tech Computer Science &amp; Engineering</span>
            <span>💼 Open to opportunities</span>
            <span>🏆 260+ DSA Problems Solved</span>
          </div>
        </div>

        <div className="about-cards">
          <div className="about-card" ref={addToCardsRef}>
            <div className="card-icon"><Code size={28} /></div>
            <h3>ML Enthusiast</h3>
            <p>Machine Learning Enthusiast with hands-on experience in data analysis and model building</p>
          </div>
          <div className="about-card" ref={addToCardsRef}>
            <div className="card-icon"><Server size={28} /></div>
            <h3>Backend Logic</h3>
            <p>Node.js, Express, MVC architecture — building scalable and secure server-side applications.</p>
          </div>
          <div className="about-card" ref={addToCardsRef}>
            <div className="card-icon"><Database size={28} /></div>
            <h3>Open Source Contributor</h3>
            <p>Contributed to the Desh Darshan Open Source Project under GirlScript Summer of Code (GSSoC)</p>
          </div>
          <div className="about-card" ref={addToCardsRef}>
            <div className="card-icon"><Globe size={28} /></div>
            <h3>Problem Solver</h3>
            <p>C++, Java, Python — 260+ problems solved across platforms with a competitive mindset.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
