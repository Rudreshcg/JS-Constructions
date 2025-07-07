"use client";
import { Box, Typography, Grid, Paper } from "@mui/material";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import BusinessIcon from "@mui/icons-material/Business";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import FoundationIcon from "@mui/icons-material/Foundation";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
// import EcoIcon from "@mui/icons-material/Eco";

const services = [
  {
    icon: <HomeWorkIcon sx={{ fontSize: 48, color: "#bfa046" }} />,
    title: "Residential Construction",
    desc: "Custom homes, villas, and apartment buildings built with quality and care.",
  },
  {
    icon: <BusinessIcon sx={{ fontSize: 48, color: "#bfa046" }} />,
    title: "Commercial Construction",
    desc: "Office buildings, retail shops, warehouses, and malls for your business needs.",
  },
  {
    icon: <BuildCircleIcon sx={{ fontSize: 48, color: "#bfa046" }} />,
    title: "Renovation & Remodeling",
    desc: "Upgrading old spaces with modern designs and quality materials.",
  },
  {
    icon: <FoundationIcon sx={{ fontSize: 48, color: "#bfa046" }} />,
    title: "Structural Work",
    desc: "Concrete, steelwork, foundation laying, and framing for robust structures.",
  },
  {
    icon: <FormatPaintIcon sx={{ fontSize: 48, color: "#bfa046" }} />,
    title: "Interior & Exterior Finishing",
    desc: "Painting, tiling, false ceilings, carpentry, flooring, cladding, and more.",
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 48, color: "#bfa046" }} />,
    title: "Design & Planning",
    desc: "Architectural design, 3D modeling, site layout, and Vastu compliance.",
  },
  {
    icon: <AssignmentTurnedInIcon sx={{ fontSize: 48, color: "#bfa046" }} />,
    title: "Project Management",
    desc: "Cost estimation, scheduling, site supervision, and vendor coordination.",
  },
  // {
  //   icon: <EcoIcon sx={{ fontSize: 48, color: "#bfa046" }} />,
  //   title: "Sustainable & Green Building",
  //   desc: "Eco-friendly materials, rainwater harvesting, and energy-efficient designs.",
  // },
];

export default function Page() {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh", py: 6 }}>
      {/* Hero Section */}
      <Box
        sx={{
          width: "100%",
          minHeight: 340,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "linear-gradient(90deg, #bfa046 0%, #fffbe6 100%)",
          mb: 8,
          px: 2,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            color: "#222",
            letterSpacing: 2,
            mb: 2,
            textAlign: "center",
            textTransform: "uppercase",
            fontSize: { xs: 32, md: 48 },
          }}
        >
          Our Services
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "#444",
            fontWeight: 500,
            maxWidth: 700,
            textAlign: "center",
            mb: 1,
          }}
        >
          Delivering end-to-end construction excellence with quality, safety, and professionalism.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#555",
            maxWidth: 700,
            textAlign: "center",
            fontSize: { xs: 15, md: 17 },
          }}
        >
          From concept to completion, JS Constructions brings expertise and innovation to every project—residential, commercial, and beyond.
        </Typography>
      </Box>

      {/* Services Grid */}
      <Grid
        container
        spacing={5}
        sx={{
          maxWidth: 1300,
          mx: "auto",
          mb: 8,
          px: { xs: 2, md: 0 },
        }}
      >
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={3} key={service.title}>
            <Paper
              elevation={4}
              sx={{
                p: 4,
                borderRadius: 4,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "#fff",
                boxShadow: "0 4px 16px 0 rgba(191,160,70,0.08)",
                transition: "transform 0.22s, box-shadow 0.22s",
                "&:hover": {
                  transform: "translateY(-10px) scale(1.04)",
                  boxShadow: "0 12px 32px 0 rgba(191,160,70,0.18)",
                },
              }}
            >
              <Box
                sx={{
                  bgcolor: "#fffbe6",
                  borderRadius: "50%",
                  width: 90,
                  height: 90,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                  boxShadow: "0 2px 8px 0 rgba(191,160,70,0.10)",
                }}
              >
                {service.icon}
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "#bfa046",
                  mb: 1,
                  textAlign: "center",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  fontSize: 18,
                }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#444",
                  textAlign: "center",
                  fontSize: 15,
                  lineHeight: 1.7,
                }}
              >
                {service.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}