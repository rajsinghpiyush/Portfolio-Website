import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-print">
      <div className="container">
        
        {/* Top thick border characteristic of newspapers */}
        <div className="footer-masthead">
          <div className="footer-logo">PR / <span>Vol. I</span></div>
          <div className="footer-colophon">
          </div>
        </div>

        <div className="footer-grid">
          
          <div className="footer-story">
            <h3>Author's Note</h3>
            <p>
              Thank you for reading through this volume. I am constantly exploring the intersection of robust backend data structures and meticulous frontend typography. 
              My ultimate goal is to craft digital products that function powerfully and read beautifully.
            </p>
            <a href="mailto:rajsinghpiyush3@gmail.com" className="footer-cta">Drop a Letter →</a>
          </div>

          <div className="footer-links">
            <h3>Directory</h3>
            <ul>
              <li><a href="#about">I. Prologue</a></li>
              <li><a href="#projects">II. Portfolio</a></li>
              <li><a href="#experience">III. Chronicle</a></li>
              <li><a href="#achievements">IV. Honors</a></li>
            </ul>
          </div>

          <div className="footer-channels">
            <h3>Channels</h3>
            <div className="social-stamps">
              <a href="https://github.com/rajsinghpiyush" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/piyush-raj12" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:rajsinghpiyush3@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            {/* <div className="footer-hanko">
              <span>印</span>
            </div> */}
          </div>

        </div>

        <div className="footer-circulation">
          <p>&copy; {currentYear} Piyush Raj. All Rights Reserved.</p>
          {/* <p className="footer-credit">Printed via React, Framer Motion & Lenis</p> */}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
