"use client";
import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Container,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import contactBg from "../../assets/images/careers_bg.jpg";
import TalkToExpert from "@/components/TalkToExpert";

const StyledHeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '45vh',
  width: '100%',
  backgroundImage: `url(${contactBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },
}));

const HeroSection = () => (
  <Box sx={{ position: 'relative', height: '45vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
    <Image
      src={contactBg}
      alt="Contact background"
      fill
      style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
      priority
    />
    <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.55)', zIndex: 1 }} />
    <Box sx={{ position: 'relative', textAlign: 'center', color: 'white', zIndex: 2, width: '100%' }}>
    <Typography variant="h2" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: 32, md: 48 } }}>
        Contact Us
      </Typography>
      <Typography variant="h6" sx={{ maxWidth: 600, mx: 'auto', fontWeight: 400 }}>
        If you'd like to learn more about how we can help make your dream home a reality. We can't wait to hear from you!
      </Typography>
    </Box>
  </Box>
);

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection />
      {/* Contact Form Section */}
      <TalkToExpert />
      {/* Google Maps Section */}
      <Box sx={{ height: '400px', width: '100%', mt: 8, borderRadius: 3, overflow: 'hidden', boxShadow: 2 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62213.13320643585!2d77.41926444863276!3d12.951310900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f00780db497%3A0xbf66ac09d8b8519d!2sJS%20CONSTRUCTIONS!5e0!3m2!1sen!2sin!4v1751870749103!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        />
      </Box>
    </Box>
  );
}