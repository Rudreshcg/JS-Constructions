import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import FeaturedProjects from '../components/FeaturedProjects';
import HowWeWork from '../components/HowWeWork';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Hero />
      <div className="reveal"><Stats /></div>
      <div className="reveal"><Services /></div>
      <div className="reveal"><WhyChooseUs /></div>
      <div className="reveal"><FeaturedProjects /></div>
      <div className="reveal"><HowWeWork /></div>
      <div className="reveal"><Testimonials /></div>
      <CtaBanner />
    </div>
  );
};

export default Home;
