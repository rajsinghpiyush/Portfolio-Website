import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import profileImg from '../../assets/hero.PNG';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Slight delay for the submission animation
    setTimeout(() => {
      setIsSubmitting(false);
      
      if (formData.name && formData.email && formData.message) {
        // Open default mail client (e.g., Outlook) with prepopulated fields
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        window.location.href = `mailto:rajsinghpiyush3@gmail.com?subject=${subject}&body=${body}`;
        
        setFormData({ name: '', email: '', message: '' });
      }
    }, 800);
  };

  return (
    <section id="contact" className="contact-section section-wrapper">
      <div className="container">
        <h2 className="section-title text-center">Get In <span className="text-gradient">Touch</span></h2>
        
        <div className="contact-content glass-panel">
          <div className="contact-info">
            <h3>Let's build something great together.</h3>
            <p>I'm currently looking for new opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon"><Mail size={20} /></div>
                <span>rajsinghpiyush3@gmail.com</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><Phone size={20} /></div>
                <span>+91 9798529738</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><MapPin size={20} /></div>
                <span>Punjab, India</span>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {/* Profile image placeholder circle */}
            <div className="profile-img-container">
              <img src={profileImg} alt="Piyush Raj" className="contact-profile-img" />
            </div>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                ></textarea>
              </div>
              
              <motion.button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : (
                  <>Send Message <Send size={18} /></>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
