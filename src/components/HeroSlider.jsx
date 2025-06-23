import React, { useState } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    title: "Your Dream Home Starts Here",
    subtitle: "Longitude Constructions",
    description: "Residential Construction at Just ₹1700/sq.ft"
  },
  {
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80",
    title: "Building Homes. Building Trust.",
    subtitle: "Longitude Constructions",
    description: "We Deliver On-Time, Every Time – With Zero Compromise on Quality"
  }
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="hero-slider">
      {slides.map((slide, idx) => (
        <div
          className={`slide${idx === current ? " active" : ""}`}
          key={idx}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {idx === current && (
            <div className="slide-overlay">
              <h2 className="slide-subtitle">{slide.subtitle}</h2>
              <h1 className="slide-title">{slide.title}</h1>
              <p className="slide-desc">{slide.description}</p>
            </div>
          )}
        </div>
      ))}
      <button className="slider-arrow left" onClick={prevSlide} aria-label="Previous Slide">&#60;</button>
      <button className="slider-arrow right" onClick={nextSlide} aria-label="Next Slide">&#62;</button>
    </section>
  );
}

export default HeroSlider; 