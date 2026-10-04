import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Mallesh G B",
      role: "Homeowner, Channapatna",
      text: "JS Constructions delivered exactly what was promised. Our residence in Channapatna is beautifully constructed with top-notch materials. Their professionalism and attention to detail are commendable."
    },
    {
      name: "Mr. Deekshith Raj",
      role: "Homeowner, Kunigal",
      text: "Building our dream home in Kunigal with JS Constructions was a seamless experience. They maintained complete transparency, maximized the use of space, and delivered the modern elevation we envisioned."
    },
    {
      name: "Dr. Ramesh",
      role: "Hospital Director, Chanpatna",
      text: "JS Constructions managed our multi-story hospital project with exceptional professionalism. They understood the strict structural requirements for medical facilities and delivered a highly functional space."
    },
    {
      name: "Mr. Kumar",
      role: "Property Owner, Mandya",
      text: "The grand residence they are constructing for us in Mandya is shaping up wonderfully. The team is dedicated, communicative, and clearly highly experienced with large-scale luxury projects."
    }
  ];

  return (
    <section className="section-padding bg-light" id="testimonials">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Client <span className="highlight-dark">Feedback</span></h2>
          <p className="section-subtitle">Read what our valued clients have to say about their experience with us.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--accent)" opacity="0.2">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V15M3.017 21L3.017 18C3.017 16.8954 3.91242 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V15" />
                </svg>
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-footer">
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{t.name}</h4>
                  <p className="testimonial-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          margin-top: 4rem;
        }

        .testimonial-card {
          width: calc(33.333% - 1.34rem);
          padding: 3rem 2.5rem;
          background: white;
          border-radius: 0px;
          border: 1px solid rgba(0,0,0,0.04);
          transition: all 0.4s ease;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .testimonial-card:hover {
          background: var(--bg-soft);
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.03);
          border-color: rgba(184,35,41,0.2);
        }

        .testimonial-text {
          font-style: italic;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          position: relative;
          z-index: 1;
          flex-grow: 1;
        }

        .testimonial-footer {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 1rem;
        }

        .testimonial-name {
          color: var(--primary);
          margin-bottom: 0.2rem;
          font-size: 1.1rem;
        }

        .testimonial-role {
          font-size: 0.85rem;
          color: var(--accent);
          font-weight: 600;
        }

        @media (max-width: 992px) {
          .testimonial-card { width: calc(50% - 1rem); }
        }
        @media (max-width: 768px) {
          .testimonials-grid { margin-top: 2rem; }
          .testimonial-card { width: 100%; padding: 2rem; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
