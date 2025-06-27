"use client";
import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import contactBg from "../../assets/images/careers_bg.jpg"


const StyledHeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '50vh',
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
}));

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
      <StyledHeroSection>
        <Box sx={{ position: 'relative', textAlign: 'center', color: 'white', zIndex: 1 }}>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 700, mb: 2, letterSpacing: 1 }}>
            Contact Us
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 600, mx: 'auto', fontWeight: 400 }}>
            If you'd like to learn more about how we can help make your dream home a reality. We can't wait to hear from you!
          </Typography>
        </Box>
      </StyledHeroSection>

      {/* Contact Form Section */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                p: 4,
                backgroundColor: 'white',
                borderRadius: 3,
                boxShadow: 3,
              }}
            >
              <Typography variant="h4" sx={{ color: 'primary.main', mb: 3, fontWeight: 700 }}>
                Send us a Message
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={4}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={{
                        px: 5,
                        py: 1.5,
                        fontWeight: 600,
                        borderRadius: 2,
                        textTransform: "none",
                        fontSize: 18,
                        boxShadow: 2,
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                p: 4,
                backgroundColor: 'white',
                borderRadius: 3,
                boxShadow: 3,
                height: "100%",
              }}
            >
              <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700, mb: 2 }}>
                Contact Information
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Address:</strong> XYZ Construction<br />123 Building Lane, Suite 456 City, State, ZIP Code
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Email:</strong> info@xyzconstruction.com
                </Typography>
                <Typography variant="body1">
                  <strong>Website:</strong> www.xyzconstruction.com
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700, mb: 1 }}>
                Business Hours
              </Typography>
              <Typography variant="body1">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Google Maps Section */}
      <Box sx={{ height: '400px', width: '100%', mt: 8, borderRadius: 3, overflow: 'hidden', boxShadow: 2 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.4910851644447!2d-122.5672493!3d45.4285799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495740aa5c2c8ab%3A0x2c5b75b1b4a6c8a4!2s9206%20SE%20Idleman%20Rd%2C%20Happy%20Valley%2C%20OR%2097086!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
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