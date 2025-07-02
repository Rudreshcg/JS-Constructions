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
import contactBg from "../../assets/images/careers_bg.jpg";

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
          <Typography variant="h2" component="h1" sx={{ fontWeight: 900, mb: 2, letterSpacing: 1, color: "#ffd000" }}>
            Contact Us
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 600, mx: 'auto', fontWeight: 400 }}>
            Ready to start your next project or have questions? Reach out and our team will get back to you promptly.
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
                p: { xs: 2, md: 4 },
                backgroundColor: 'white',
                borderRadius: 3,
                boxShadow: 3,
              }}
            >
              <Typography variant="h4" sx={{ color: "#bfa046", mb: 2, fontWeight: 800 }}>
                Send us a Message
              </Typography>
              <Divider sx={{ width: 60, height: 4, bgcolor: "#bfa046", mb: 3, borderRadius: 2 }} />
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
                      variant="standard"
                      InputLabelProps={{ sx: { color: "#bfa046", fontWeight: 600 } }}
                      InputProps={{
                        disableUnderline: false,
                        sx: {
                          fontSize: 17,
                          pb: 1,
                          color: "#222",
                          "&:after": { borderBottom: "2px solid #bfa046" },
                          "&:focus-within": { borderBottom: "2px solid #bfa046" },
                        },
                      }}
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
                      variant="standard"
                      InputLabelProps={{ sx: { color: "#bfa046", fontWeight: 600 } }}
                      InputProps={{
                        disableUnderline: false,
                        sx: {
                          fontSize: 17,
                          pb: 1,
                          color: "#222",
                          "&:after": { borderBottom: "2px solid #bfa046" },
                          "&:focus-within": { borderBottom: "2px solid #bfa046" },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      fullWidth
                      variant="standard"
                      InputLabelProps={{ sx: { color: "#bfa046", fontWeight: 600 } }}
                      InputProps={{
                        disableUnderline: false,
                        sx: {
                          fontSize: 17,
                          pb: 1,
                          color: "#222",
                          "&:after": { borderBottom: "2px solid #bfa046" },
                          "&:focus-within": { borderBottom: "2px solid #bfa046" },
                        },
                      }}
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
                      variant="standard"
                      InputLabelProps={{ sx: { color: "#bfa046", fontWeight: 600 } }}
                      InputProps={{
                        disableUnderline: false,
                        sx: {
                          fontSize: 17,
                          pb: 1,
                          color: "#222",
                          "&:after": { borderBottom: "2px solid #bfa046" },
                          "&:focus-within": { borderBottom: "2px solid #bfa046" },
                        },
                      }}
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
                        fontWeight: 700,
                        borderRadius: 2,
                        textTransform: "none",
                        fontSize: 18,
                        background: "#bfa046",
                        color: "#fff",
                        boxShadow: 2,
                        "&:hover": {
                          background: "#fff",
                          color: "#bfa046",
                          border: "2px solid #bfa046",
                        },
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
                p: { xs: 2, md: 4 },
                backgroundColor: 'white',
                borderRadius: 3,
                boxShadow: 3,
                height: "100%",
              }}
            >
              <Typography variant="h4" sx={{ color: "#bfa046", fontWeight: 800, mb: 2 }}>
                Contact Information
              </Typography>
              <Divider sx={{ width: 60, height: 4, bgcolor: "#bfa046", mb: 3, borderRadius: 2 }} />
              <Box sx={{ mb: 3 }}>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Address:</strong> #48, Lavelle Road, Hitananda II, 1st Floor, Bangalore 560001
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Email:</strong> info@jsconstructions.com
                </Typography>
                <Typography variant="body1">
                  <strong>Phone:</strong> (+91) 96061 25333
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ color: "#bfa046", fontWeight: 700, mb: 1 }}>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.858013049005!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c1b2c1b1%3A0x2c5b75b1b4a6c8a4!2sLavelle%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
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