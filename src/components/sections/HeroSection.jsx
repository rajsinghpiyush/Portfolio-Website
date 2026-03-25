import { useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 700], [0, 160]);
  const opacityFade = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="hero" className="hero-section">
      <motion.div
        className="hero-content container"
        style={{ y: yText, opacity: opacityFade }}
      >
        {/* Masthead top line */}
        <div className="masthead-dateline">
          <span>Lovely Professional University · B.Tech CSE</span>
          <span>2023 — 2027</span>
          <span>Jalandhar, Punjab, India</span>
        </div>

        {/* Primary Title */}
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, clipPath: 'inset(-50% 100% -50% -50%)' }}
          animate={{ opacity: 1, clipPath: 'inset(-50% -50% -50% -50%)' }}
          transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1] }}
        >
          Piyush Raj
        </motion.h1>

        {/* Gold ornament divider */}
        <motion.div
          className="hero-ornament"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
        >
          <div className="ornament-line"></div>
          <span className="ornament-symbol">✦</span>
          <div className="ornament-line"></div>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          Software Engineer · Full-Stack Developer · Problem Solver
        </motion.p>

        {/* Two-column intro */}
        <motion.div
          className="hero-columns"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
        >
          <p className="hero-lead">
            <span className="dropcap">I</span>
            build exceptional digital experiences — scalable, accessible, and meticulously crafted.
            With a strong foundation in data structures and systems thinking, I approach
            every problem with precision and creative intent.
          </p>
          <p className="hero-aside">
            Currently seeking opportunities in software engineering where I can deliver
            meaningful, performant applications that blend robust backend logic with
            compelling frontend design.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <a href="#projects" className="cta-primary">
            View My Work <ArrowRight size={16} />
          </a>
          <a href="#contact" className="cta-secondary">
            Get In Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
