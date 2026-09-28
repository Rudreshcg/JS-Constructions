import React from 'react';
import SEO from '../components/SEO';

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "JS Constructions",
  "url": "https://www.jsconstructions22.in",
  "logo": "https://www.jsconstructions22.in/assets/logo.jpg",
  "foundingDate": "2008",
  "description": "JS Constructions was founded in 2008 in Bengaluru. We specialize in premium residential and commercial construction.",
  "telephone": "+91-7676534573",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  }
};

const AboutUs = () => {
  const values = [
    { icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>, title: 'Expert Craftsmanship', desc: 'Every project is handled by our team of certified engineers and architects with decades of experience.' },
    { icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="9" y1="18" x2="15" y2="18"></line><line x1="10" y1="22" x2="14" y2="22"></line><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path></svg>, title: 'Innovative Design', desc: 'We blend modern architectural trends with timeless design principles to create spaces that inspire.' },
    { icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>, title: 'Quality Assured', desc: 'We adhere to the highest quality standards, ensuring every brick laid meets our stringent quality benchmarks.' },
    { icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>, title: 'Client-Centric', desc: 'Your satisfaction is our success. We involve our clients at every step of the construction journey.' },
  ];

  return (
    <div className="about-page">
      <SEO
        title="About Us | JS Constructions Bengaluru"
        description="Learn about JS Constructions — founded in 2008 in Bengaluru. We specialize in luxury residences, commercial buildings, and more with a team of certified experts."
        canonical="https://www.jsconstructions22.in/about"
        schema={aboutSchema}
      />
      {/* Hero Banner */}
      <div className="page-hero">
        <div className="page-hero-overlay" style={{ backgroundImage: 'url(/assets/hero-bg-v2.png)' }}></div>
        <div className="container">
          <h1>About <span>JS Constructions</span></h1>
          <p>Building Excellence Since 2008</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-intro-text">
              <h2 className="section-title">We Build Your <span className="highlight-dark">Vision</span></h2>
              <p>JS Constructions was founded in 2008 with a singular vision: to create structures that stand the test of time, blending superior craftsmanship with innovative design. Based in Bengaluru, we have grown into one of the region's most trusted names in residential and commercial construction.</p>
              <p>From luxury villas and duplex homes to large-scale commercial campuses, our portfolio speaks of our commitment to quality, transparency, and client satisfaction. We believe that a great building is not just a structure — it's a story.</p>
              <div className="about-stats-row">
                <div className="about-stat"><span>4+</span><p>Years Experience</p></div>
                <div className="about-stat"><span>20</span><p>Projects Done</p></div>
                <div className="about-stat"><span>6</span><p>Expert Team</p></div>
              </div>
            </div>
            <div className="about-image-col">
              <img src="/assets/about-image.jpg" alt="JS Constructions team at work" className="about-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding about-values-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Core <span className="highlight-dark">Values</span></h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card" key={i}>
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-hero {
          height: 350px;
          background: linear-gradient(to right, var(--primary), #1a3a6b);
          position: relative;
          display: flex;
          align-items: center;
        }
        .about-hero-overlay {
          position: absolute; inset: 0;
          background: url('/assets/hero-bg-v2.png') center/cover no-repeat;
          opacity: 0.25;
        }
        .about-hero .container { position: relative; z-index: 1; }
        .about-hero h1 { font-size: 3rem; color: white; margin-bottom: 0.5rem; }
        .about-hero h1 span { color: var(--accent); }
        .about-hero p { color: #ddd; font-size: 1.2rem; }
        .about-intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .about-intro-text p { color: #555; margin-bottom: 1.2rem; line-height: 1.8; }
        .about-image { width: 100%; border-radius: 12px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); object-fit: cover; height: 420px; }
        .about-stats-row { display: flex; gap: 2rem; margin-top: 2rem; flex-wrap: wrap; }
        .about-stat span { font-size: 2.2rem; font-weight: 700; color: var(--accent); }
        .about-stat p { font-size: 0.9rem; color: #555; }
        .about-values-section { background: #F4F7FA; }
        .values-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 2rem; margin-top: 3rem; }
        .value-card { background: white; padding: 2.5rem; border-radius: 12px; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border-top: 4px solid var(--accent); transition: transform 0.3s ease; }
        .value-card:hover { transform: translateY(-5px); }
        .value-icon { font-size: 2.5rem; margin-bottom: 1rem; color: var(--accent); }
        .value-icon svg { transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
        .value-card:hover .value-icon svg { transform: rotate(360deg); }
        .value-card h3 { color: var(--primary); margin-bottom: 0.8rem; }
        .value-card p { color: #666; font-size: 0.95rem; }
        @media(max-width:768px) { .about-intro-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
};

export default AboutUs;
