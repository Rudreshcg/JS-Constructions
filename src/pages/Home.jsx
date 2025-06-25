import React from "react";
import HeroSlider from "../components/HeroSlider";
import TalkToExpert from "../components/TalkToExpert";
import "./Home.css";

function Home() {
  return (
    <main className="home-main-premium">
      {/* Full-width hero image instead of slider with arrows */}
      <div className="hero-full-image">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="JS Construction Hero"
        />
        <div className="hero-overlay">
          <h1>Welcome to JS Construction</h1>
          <p>Building your dreams with quality and trust.</p>
        </div>
      </div>

      <TalkToExpert />
    </main>
  );
}

export default Home;