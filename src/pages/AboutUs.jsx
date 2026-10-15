import React from 'react';
import SEO from '../components/SEO';

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": ["GeneralContractor", "Organization"],
  "@id": "https://www.jsconstructions22.in/#organization",
  "name": "JS Constructions",
  "alternateName": ["JS Constructions Bengaluru", "JS Construction Karnataka"],
  "url": "https://www.jsconstructions22.in/our-business",
  "logo": "https://www.jsconstructions22.in/assets/logo.jpg",
  "foundingDate": "2022",
  "description": "JS Constructions was founded in 2022 in Bengaluru, Karnataka. We specialize in premium turnkey residential and commercial construction across Karnataka.",
  "telephone": "+91-7676534573",
  "email": "constructionsjs22@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ullal Main Rd, Annapurneshwari Layout, Jnananjyothinagar, Railway Layout, Jnana Ganga Nagar",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "postalCode": "560056",
    "addressCountry": "IN"
  },
  "areaServed": ["Bengaluru", "Bangalore", "Kunigal", "Channapatna", "Mandya", "Belagavi", "Tumakuru", "Ramanagara", "Karnataka"]
};

const AboutUs = () => {
  const values = [
    { icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>, title: 'Expert Craftsmanship', desc: 'Every project is handled by our team of certified civil engineers and architects with decades of combined Karnataka construction experience.' },
    { icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="9" y1="18" x2="15" y2="18"></line><line x1="10" y1="22" x2="14" y2="22"></line><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path></svg>, title: 'Innovative & Vastu Design', desc: 'We harmonize contemporary elevation trends with 100% authentic Vastu Shastra principles to maximize positive energy and cross-ventilation.' },
    { icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>, title: 'Certified Quality Materials', desc: 'We adhere to IS building standards, using exclusively Tata Tiscon / JSW steel and Ultratech / ACC 53-grade cement for long-lasting structural strength.' },
    { icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>, title: 'Transparent & Client-Centric', desc: 'Zero hidden escalations. Complete milestone tracking with stage-wise photographic updates and guaranteed handover dates.' },
  ];

  return (
    <div className="about-page">
      <SEO
        title="About Us | JS Constructions - Building Contractors in Bangalore & Karnataka"
        description="Learn about JS Constructions — premier building contractors founded in Bengaluru in 2022. Expert turnkey residential, commercial, and healthcare construction across Karnataka."
        canonical="https://www.jsconstructions22.in/our-business"
        keywords="about JS Constructions, building contractors Bangalore, construction company Karnataka, turnkey residential builders Bengaluru, civil contractors Karnataka"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'About Us', item: '/our-business' }
        ]}
        schema={aboutSchema}
      />
      {/* Hero Banner */}
      <div className="page-hero">
        <div className="page-hero-overlay" style={{ backgroundImage: 'url(/assets/hero-premium.webp)' }}></div>
        <div className="container">
          <h1>About <span>JS Constructions</span></h1>
          <p>Building Architectural Landmarks Across Karnataka Since 2022</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-intro-text">
              <h2 className="section-title">Building With Passion Across <span className="highlight-dark">Bangalore &amp; Karnataka</span></h2>
              <p>JS Constructions was founded in 2022 in Bengaluru with a singular vision: to create architectural structures that stand the test of time, blending superior structural engineering with innovative, functional design. Over the years, we have grown into one of Karnataka's most reliable and progressive construction contractors.</p>
              <p>While our corporate operations are centered at Ullal Main Road in West Bengaluru, our building projects extend across pivotal Karnataka districts — from expansive 7,500 sq.ft wedding convention halls (chowtries) in Kunigal and specialized multi-story hospitals in Channapatna, to luxury duplex homes in Belagavi and grand 7,000+ sq.ft estates in Mandya.</p>
              <p>Whether you are planning a 30x40 modern duplex in Bengaluru or a multi-generational estate in regional Karnataka, we deliver 100% turnkey peace of mind with rigorous IS-standard quality checks, transparent pricing, and guaranteed delivery.</p>
              <div className="about-stats-row">
                <div className="about-stat"><span>4+</span><p>Years Experience</p></div>
                <div className="about-stat"><span>20+</span><p>Projects Done</p></div>
                <div className="about-stat"><span>5+</span><p>Karnataka Districts</p></div>
              </div>
            </div>
            <div className="about-image-col">
              <img src="/assets/about-image.jpg" alt="JS Constructions structural engineering and architecture team at work in Karnataka" className="about-image" />
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
          background: url('/assets/hero-premium.webp') center/cover no-repeat;
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
