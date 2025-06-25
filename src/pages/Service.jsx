import React from "react";
import "./Service.css";

const residentialImg =
  "https://lsuonline-static.s3.amazonaws.com/media/images/2021/08/02/blog-architecture-cs-civil-engeneering.jpg";
const commercialImg =
  "https://t3.ftcdn.net/jpg/03/27/26/24/360_F_327262492_XRZBgztHB3NFGR3YfFrkRHIHeMYw6oZU.jpg";
const infrastructureImg =
  "https://www.shutterstock.com/image-photo/double-exposure-team-railway-engineer-260nw-1957221109.jpg";
const tailored1 =
  "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80";
const tailored2 =
  "https://images.unsplash.com/photo-1503389152951-9c3d0c6b7a5a?auto=format&fit=crop&w=800&q=80";

function Service() {
  return (
    <div>
      {/* Hero Section - Residential Construction */}
      <section
        className="service-hero-section"
        style={{
          backgroundImage: `url(${residentialImg})`,
        }}
      >
        <div className="service-hero-overlay">
          <div className="service-hero-content">
            <h1 className="service-hero-title">RESIDENTIAL CONSTRUCTION</h1>
            <h2 className="service-hero-subtitle">Elevate Your Living Experience</h2>
            <p className="service-hero-desc">
              At JS Construction, we create beautiful, durable, and functional homes tailored to your lifestyle and vision. Our residential construction services cover everything from modern apartments and luxury villas to custom-built houses. We focus on quality, transparency, and timely delivery to turn your dream home into reality.
            </p>
            <button className="service-hero-btn">
              SCHEDULE YOUR FREE CONSULTATION
            </button>
          </div>
        </div>
      </section>

      {/* Commercial Projects Section */}
      <section className="service-commercial-section">
        <div className="service-commercial-container">
          {/* Left: Text */}
          <div className="service-commercial-text">
            <h2>
              Professional Commercial Project Delivery That Performs
            </h2>
            <p>
              As a leading construction company, our commercial project services are tailored to help businesses, offices, and retail brands maximize their space, efficiency, and value. With 20+ years of experience, we know what it takes to create a commercial space that doesn't just look impressive—it performs.
            </p>
            <button className="service-commercial-btn">
              VIEW OUR RESULTS
            </button>
          </div>
          {/* Right: Image with badge */}
          <div className="service-commercial-image-wrap">
            <div className="service-commercial-image-box">
              <img
                src={commercialImg}
                alt="Commercial Project"
                className="service-commercial-image"
              />
              <div className="service-commercial-badge">
                +2<br />
                <span>YEARS IN BUSINESS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Projects Section */}
      <section className="service-infrastructure-section">
        <div className="service-infrastructure-container">
          {/* Left: Image with badge */}
          <div className="service-infrastructure-image-wrap">
            <div className="service-infrastructure-image-box">
              <img
                src={infrastructureImg}
                alt="Infrastructure Project"
                className="service-infrastructure-image"
              />
              <div className="service-infrastructure-badge">
                +5<br />
                <span>MAJOR PROJECTS</span>
              </div>
            </div>
          </div>
          {/* Right: Text */}
          <div className="service-infrastructure-text">
            <h2>
              Infrastructure Excellence, Built to Last
            </h2>
            <p>
              Our infrastructure division delivers robust, innovative, and sustainable solutions for roads, bridges, railways, and public utilities. We combine advanced technology with proven expertise to ensure every project stands the test of time and serves the community for generations.
            </p>
            <button className="service-infrastructure-btn">
              SEE OUR INFRASTRUCTURE WORK
            </button>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default Service;