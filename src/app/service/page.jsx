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
import ServiceImage from "../../assets/images/service.png"
import Image from "next/image";
import ServiceCard from "../../components/ServiceCard";

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
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh", pb: 6 }}>
      {/* Hero Section */}
      <Box
        sx={{
          width: "100%",
          minHeight: 400,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          mb: 8,
          px: 2,
        }}
      >
        <Box sx={{ position: "absolute", inset: 0, zIndex: 1 }}>
          <Image
            src={ServiceImage}
            alt="Our Services"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(34,34,34,0.82) 0%, rgba(34,34,34,0.56) 100%)",
            }}
          />
        </Box>
        <Box sx={{ position: "relative", zIndex: 2, width: "100%" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              color: "#fff",
              letterSpacing: 2,
              mb: 2,
              textAlign: "center",
              fontSize: { xs: 32, md: 48 },
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#f5f5f5",
              fontWeight: 500,
              maxWidth: 700,
              textAlign: "center",
              mb: 1,
              mx: "auto",
            }}
          >
            Delivering end-to-end construction excellence with quality, safety, and professionalism.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#e0e0e0",
              maxWidth: 700,
              textAlign: "center",
              fontSize: { xs: 15, md: 17 },
              mx: "auto",
            }}
          >
            From concept to completion, JS Constructions brings expertise and innovation to every project—residential, commercial, and beyond.
          </Typography>
        </Box>
      </Box>
      {/* Services Grid */}
      <Grid
        container
        spacing={{ xs: 3, md: 5 }}
        sx={{
          maxWidth: 1300,
          mx: "auto",
          mb: 8,
          px: { xs: 2, md: 0 },
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={3} key={service.title}>
            <ServiceCard icon={service.icon} title={service.title} desc={service.desc} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}