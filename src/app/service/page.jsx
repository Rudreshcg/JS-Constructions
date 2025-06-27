"use client";
import { Box, Typography, Button, Grid } from "@mui/material";

const residentialImg = "https://lsuonline-static.s3.amazonaws.com/media/images/2021/08/02/blog-architecture-cs-civil-engeneering.jpg";
const commercialImg = "https://t3.ftcdn.net/jpg/03/27/26/24/360_F_327262492_XRZBgztHB3NFGR3YfFrkRHIHeMYw6oZU.jpg";
const infrastructureImg = "https://www.shutterstock.com/image-photo/double-exposure-team-railway-engineer-260nw-1957221109.jpg";
const tailored1 = "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80";
const tailored2 = "https://images.unsplash.com/photo-1503389152951-9c3d0c6b7a5a?auto=format&fit=crop&w=800&q=80";

export default function Page() {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', py: 6 }}>
      {/* Hero Section - Residential Construction */}
      <Box sx={{ position: 'relative', width: '100%', height: 400, mb: 6 }}>
        <img
          src={residentialImg}
          alt="Residential Construction"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', bgcolor: 'rgba(0,0,0,0.4)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>RESIDENTIAL CONSTRUCTION</Typography>
          <Typography variant="h5" sx={{ mb: 2 }}>Elevate Your Living Experience</Typography>
          <Typography variant="body1" sx={{ maxWidth: 600, mb: 3 }}>
            At JS Construction, we create beautiful, durable, and functional homes tailored to your lifestyle and vision. Our residential construction services cover everything from modern apartments and luxury villas to custom-built houses. We focus on quality, transparency, and timely delivery to turn your dream home into reality.
          </Typography>
          <Button variant="contained" color="primary" sx={{ px: 4, py: 1.5, fontWeight: 600, borderRadius: 2, textTransform: 'none', fontSize: 18 }}>
            SCHEDULE YOUR FREE CONSULTATION
          </Button>
        </Box>
      </Box>

      {/* Commercial Projects Section */}
      <Grid container spacing={6} alignItems="center" sx={{ mb: 6 }}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              Professional Commercial Project Delivery That Performs
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              As a leading construction company, our commercial project services are tailored to help businesses, offices, and retail brands maximize their space, efficiency, and value. With 20+ years of experience, we know what it takes to create a commercial space that doesn't just look impressive—it performs.
            </Typography>
            <Button variant="outlined" color="primary" sx={{ px: 4, py: 1.5, fontWeight: 600, borderRadius: 2, textTransform: 'none', fontSize: 18 }}>
              VIEW OUR RESULTS
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative', width: '100%', height: 300 }}>
            <img
              src={commercialImg}
              alt="Commercial Project"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12 }}
            />
            <Box sx={{ position: 'absolute', top: 16, left: 16, bgcolor: 'primary.main', color: 'white', px: 2, py: 1, borderRadius: 2, fontWeight: 700, fontSize: 20, boxShadow: 2 }}>
              +2<br />
              <span style={{ fontSize: 12, fontWeight: 400 }}>YEARS IN BUSINESS</span>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Infrastructure Projects Section */}
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative', width: '100%', height: 300 }}>
            <img
              src={infrastructureImg}
              alt="Infrastructure Project"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12 }}
            />
            <Box sx={{ position: 'absolute', top: 16, left: 16, bgcolor: 'primary.main', color: 'white', px: 2, py: 1, borderRadius: 2, fontWeight: 700, fontSize: 20, boxShadow: 2 }}>
              +5<br />
              <span style={{ fontSize: 12, fontWeight: 400 }}>MAJOR PROJECTS</span>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              Infrastructure Excellence, Built to Last
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Our infrastructure division delivers robust, innovative, and sustainable solutions for roads, bridges, railways, and public utilities. We combine advanced technology with proven expertise to ensure every project stands the test of time and serves the community for generations.
            </Typography>
            <Button variant="outlined" color="primary" sx={{ px: 4, py: 1.5, fontWeight: 600, borderRadius: 2, textTransform: 'none', fontSize: 18 }}>
              SEE OUR INFRASTRUCTURE WORK
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}