import React from 'react';

const AboutUs = () => {
  const values = [
    { icon: '🏗️', title: 'Expert Craftsmanship', desc: 'Every project is handled by our team of certified engineers and architects with decades of experience.' },
    { icon: '💡', title: 'Innovative Design', desc: 'We blend modern architectural trends with timeless design principles to create spaces that inspire.' },
    { icon: '✅', title: 'Quality Assured', desc: 'We adhere to the highest quality standards, ensuring every brick laid meets our stringent quality benchmarks.' },
    { icon: '🤝', title: 'Client-Centric', desc: 'Your satisfaction is our success. We involve our clients at every step of the construction journey.' },
  ];

  return (
    <div className="about-page">
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
                <div className="about-stat"><span>3+</span><p>Years Experience</p></div>
                <div className="about-stat"><span>20</span><p>Projects Done</p></div>
                <div className="about-stat"><span>6</span><p>Expert Team</p></div>
              </div>
            </div>
            <div className="about-image-col">
              <img src="/assets/hero-bg-v2.png" alt="JS Constructions team at work" className="about-image" />
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
          background: linear-gradient(to right, #0A1D37, #1a3a6b);
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
        .about-hero h1 span { color: #ee7723; }
        .about-hero p { color: #ddd; font-size: 1.2rem; }
        .about-intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .about-intro-text p { color: #555; margin-bottom: 1.2rem; line-height: 1.8; }
        .about-image { width: 100%; border-radius: 12px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); object-fit: cover; height: 420px; }
        .about-stats-row { display: flex; gap: 2rem; margin-top: 2rem; flex-wrap: wrap; }
        .about-stat span { font-size: 2.2rem; font-weight: 700; color: #ee7723; }
        .about-stat p { font-size: 0.9rem; color: #555; }
        .about-values-section { background: #F4F7FA; }
        .values-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 2rem; margin-top: 3rem; }
        .value-card { background: white; padding: 2.5rem; border-radius: 12px; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border-top: 4px solid #ee7723; transition: transform 0.3s ease; }
        .value-card:hover { transform: translateY(-5px); }
        .value-icon { font-size: 2.5rem; margin-bottom: 1rem; }
        .value-card h3 { color: #0A1D37; margin-bottom: 0.8rem; }
        .value-card p { color: #666; font-size: 0.95rem; }
        @media(max-width:768px) { .about-intro-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
};

export default AboutUs;
