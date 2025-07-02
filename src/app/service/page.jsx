"use client";
import { Box, Typography, Button, Grid } from "@mui/material";

const residentialImg = "https://lsuonline-static.s3.amazonaws.com/media/images/2021/08/02/blog-architecture-cs-civil-engeneering.jpg";
const commercialImg = "https://t3.ftcdn.net/jpg/03/27/26/24/360_F_327262492_XRZBgztHB3NFGR3YfFrkRHIHeMYw6oZU.jpg";
const infrastructureImg = "https://www.shutterstock.com/image-photo/double-exposure-team-railway-engineer-260nw-1957221109.jpg";
const tailored1 = "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80";
const tailored2 = "https://images.unsplash.com/photo-1503389152951-9c3d0c6b7a5a?auto=format&fit=crop&w=800&q=80";

export default function Page() {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh", py: 6 }}>
      {/* Hero Section */}
      <Box sx={{ position: "relative", width: "100%", height: 400, mb: 8 }}>
        <img
          src={residentialImg}
          alt="Residential Construction"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0,0,0,0.45)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
            px: 2,
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 900, mb: 2, letterSpacing: 1 }}>
            Our Services
          </Typography>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 500 }}>
            Residential, Commercial & Infrastructure Construction
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 700, mb: 3 }}>
            JS Constructions delivers excellence across every sector. From dream homes to high-performance commercial spaces and robust infrastructure, our team brings expertise, innovation, and reliability to every project.
          </Typography>
        </Box>
      </Box>

      {/* Services Grid */}
      <Grid container spacing={6} sx={{ maxWidth: 1300, mx: "auto", mb: 8 }}>
        {/* Residential */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              bgcolor: "#fff",
              borderRadius: 4,
              boxShadow: 3,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              transition: "box-shadow 0.2s, transform 0.2s",
              "&:hover": {
                boxShadow: 8,
                transform: "translateY(-8px) scale(1.03)",
              },
            }}
          >
            <Box sx={{ height: 220, overflow: "hidden" }}>
              <img
                src={residentialImg}
                alt="Residential"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Box sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: "#bfa046", mb: 1 }}>
                Residential Construction
              </Typography>
              <Typography variant="body1" sx={{ color: "#444", mb: 2, flexGrow: 1 }}>
                We build beautiful, durable, and functional homes tailored to your lifestyle and vision. From modern apartments to luxury villas, our focus is on quality, transparency, and timely delivery.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: "#bfa046",
                  color: "#fff",
                  fontWeight: 700,
                  px: 3,
                  py: 1.2,
                  borderRadius: 2,
                  textTransform: "none",
                  "&:hover": {
                    background: "#fff",
                    color: "#bfa046",
                    border: "2px solid #bfa046",
                  },
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Grid>
        {/* Commercial */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              bgcolor: "#fff",
              borderRadius: 4,
              boxShadow: 3,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              transition: "box-shadow 0.2s, transform 0.2s",
              "&:hover": {
                boxShadow: 8,
                transform: "translateY(-8px) scale(1.03)",
              },
            }}
          >
            <Box sx={{ height: 220, overflow: "hidden" }}>
              <img
                src={commercialImg}
                alt="Commercial"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Box sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: "#bfa046", mb: 1 }}>
                Commercial Projects
              </Typography>
              <Typography variant="body1" sx={{ color: "#444", mb: 2, flexGrow: 1 }}>
                We deliver high-performance commercial spaces for offices, retail, and businesses. Our team maximizes efficiency, value, and aesthetics to help your business thrive.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: "#bfa046",
                  color: "#fff",
                  fontWeight: 700,
                  px: 3,
                  py: 1.2,
                  borderRadius: 2,
                  textTransform: "none",
                  "&:hover": {
                    background: "#fff",
                    color: "#bfa046",
                    border: "2px solid #bfa046",
                  },
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Grid>
        {/* Infrastructure */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              bgcolor: "#fff",
              borderRadius: 4,
              boxShadow: 3,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              transition: "box-shadow 0.2s, transform 0.2s",
              "&:hover": {
                boxShadow: 8,
                transform: "translateY(-8px) scale(1.03)",
              },
            }}
          >
            <Box sx={{ height: 220, overflow: "hidden" }}>
              <img
                src={infrastructureImg}
                alt="Infrastructure"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Box sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: "#bfa046", mb: 1 }}>
                Infrastructure Solutions
              </Typography>
              <Typography variant="body1" sx={{ color: "#444", mb: 2, flexGrow: 1 }}>
                From roads and bridges to public utilities, we deliver robust, innovative, and sustainable infrastructure that stands the test of time and serves the community.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: "#bfa046",
                  color: "#fff",
                  fontWeight: 700,
                  px: 3,
                  py: 1.2,
                  borderRadius: 2,
                  textTransform: "none",
                  "&:hover": {
                    background: "#fff",
                    color: "#bfa046",
                    border: "2px solid #bfa046",
                  },
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Tailored Solutions Section */}
      <Grid container spacing={6} sx={{ maxWidth: 1300, mx: "auto" }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              bgcolor: "#fff",
              borderRadius: 4,
              boxShadow: 3,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              transition: "box-shadow 0.2s, transform 0.2s",
              "&:hover": {
                boxShadow: 8,
                transform: "translateY(-8px) scale(1.03)",
              },
            }}
          >
            <Box sx={{ height: 220, overflow: "hidden" }}>
              <img
                src={tailored1}
                alt="Tailored Solutions"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Box sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: "#bfa046", mb: 1 }}>
                Tailored Project Management
              </Typography>
              <Typography variant="body1" sx={{ color: "#444", mb: 2, flexGrow: 1 }}>
                Every project is unique. We offer tailored project management and design-build solutions to ensure your vision is realized, on time and on budget.
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#bfa046",
                  color: "#bfa046",
                  fontWeight: 700,
                  px: 3,
                  py: 1.2,
                  borderRadius: 2,
                  textTransform: "none",
                  "&:hover": {
                    background: "#bfa046",
                    color: "#fff",
                  },
                }}
              >
                Discover More
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              bgcolor: "#fff",
              borderRadius: 4,
              boxShadow: 3,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              transition: "box-shadow 0.2s, transform 0.2s",
              "&:hover": {
                boxShadow: 8,
                transform: "translateY(-8px) scale(1.03)",
              },
            }}
          >
            <Box sx={{ height: 220, overflow: "hidden" }}>
              <img
                src={tailored2}
                alt="Client Collaboration"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Box sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: "#bfa046", mb: 1 }}>
                Client Collaboration
              </Typography>
              <Typography variant="body1" sx={{ color: "#444", mb: 2, flexGrow: 1 }}>
                We work closely with you at every stage, ensuring open communication and a seamless experience from concept to completion.
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#bfa046",
                  color: "#bfa046",
                  fontWeight: 700,
                  px: 3,
                  py: 1.2,
                  borderRadius: 2,
                  textTransform: "none",
                  "&:hover": {
                    background: "#bfa046",
                    color: "#fff",
                  },
                }}
              >
                Discover More
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}