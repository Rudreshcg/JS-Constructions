"use client";
import { Box, Typography, Button, Divider } from "@mui/material";

export default function Page() {
  return (
    <Box sx={{ py: 8, px: 2, bgcolor: "#fafafa", minHeight: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          maxWidth: 1200,
          mx: "auto",
          bgcolor: "#fff",
          borderRadius: 3,
          boxShadow: 3,
          p: { xs: 2, md: 5 },
          gap: { xs: 4, md: 8 },
        }}
      >
        {/* Left: Text Content */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h6"
            sx={{
              color: "#bfa046",
              fontWeight: 700,
              mb: 1,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              mb: 2,
              color: "#222",
              letterSpacing: 1,
              lineHeight: 1.1,
            }}
          >
            Building Trust, Delivering Excellence
          </Typography>
          <Divider sx={{ width: 60, height: 4, bgcolor: "#bfa046", mb: 3, borderRadius: 2 }} />
          <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: "#444" }}>
            JS Constructions is committed to turning your vision into reality with quality, integrity, and innovation.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: "#555", lineHeight: 1.8 }}>
            With decades of experience in residential and commercial construction, JS Constructions has earned a reputation for delivering strong, reliable, and lasting structures. Our team of skilled professionals and engineers ensures every project is completed with meticulous attention to detail, on time, and within budget.
            <br /><br />
            We believe in transparent communication, customer-centric solutions, and a relentless pursuit of excellence. From concept to completion, we partner with you every step of the way to create spaces that inspire and endure.
          </Typography>
          <Button
            variant="contained"
            sx={{
              background: "#bfa046",
              color: "#fff",
              px: 4,
              py: 1.5,
              fontWeight: 700,
              borderRadius: 2,
              textTransform: "none",
              fontSize: 18,
              letterSpacing: 1,
              boxShadow: "0 2px 8px 0 rgba(191,160,70,0.10)",
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
        {/* Right: Media (Image) */}
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&w=600&h=400&fit=crop"
            alt="Engineers reviewing plans at construction site"
            style={{
              width: "100%",
              maxWidth: 420,
              borderRadius: 16,
              boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}