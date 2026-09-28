import React from 'react';

const Contact = () => {
  return (
    <section className="section-padding contact-section" id="contact-us">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Get In <span className="highlight-dark">Touch</span></h2>
          <p className="section-subtitle">Have a project in mind? Let's build something extraordinary together.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
              <div>
                <h4>Our Office</h4>
                <p>Ullal Main Rd, Annapurneshwari Layout, Jnananjyothinagar, Railway Layout, Jnana Ganga Nagar, Bengaluru, Karnataka 560056</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
              <div>
                <h4>Call Us</h4>
                <p>(+91) 7676534573</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></div>
              <div>
                <h4>Email Us</h4>
                <p>info@jsconstructions.com</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container glass">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background-image: linear-gradient(rgba(10, 29, 55, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 29, 55, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          margin-top: 4rem;
          align-items: start;
        }

        .info-item {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .info-icon {
          width: 50px;
          height: 50px;
          background: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: var(--accent);
          flex-shrink: 0;
        }

        .info-icon svg {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .info-item:hover .info-icon svg {
          transform: rotate(360deg);
        }

        .info-item h4 {
          margin-bottom: 0.3rem;
          color: var(--primary);
        }

        .info-item p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .contact-form-container {
          padding: 3rem;
          border-radius: 12px;
          box-shadow: var(--shadow);
          background: white;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group input, .form-group textarea {
          width: 100%;
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-family: var(--font-body);
          outline: none;
          transition: var(--transition);
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(238, 119, 35, 0.1);
        }

        .w-full {
          width: 100%;
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 768px) {
          .contact-form-container { padding: 2rem 1.5rem; }
          .info-item { gap: 1rem; }
          .info-icon { width: 42px; height: 42px; font-size: 1.2rem; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
