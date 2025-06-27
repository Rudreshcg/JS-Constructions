"use client";
import { Box, Typography, Button } from "@mui/material";

export default function Page() {
  return (
    <Box sx={{ py: 8, px: 2, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', maxWidth: 1200, mx: 'auto', bgcolor: 'white', borderRadius: 3, boxShadow: 3, p: 4 }}>
        {/* Left: Text Content */}
        <Box sx={{ flex: 1, pr: { md: 4 }, mb: { xs: 4, md: 0 } }}>
          <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700, mb: 1 }}>WELCOME TO</Typography>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>JS CONSTRUCTIONS</Typography>
          <Typography variant="h5" sx={{ fontWeight: 500, mb: 2 }}>
            JS CONSTRUCTIONS BUILDS WITH PURPOSE — DELIVERING STRONG, RELIABLE, AND LASTING STRUCTURES THAT TURN VISIONS INTO REALITY.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            JS Constructions builds with purpose — delivering strong, reliable, and lasting structures that turn visions into reality.
          </Typography>
          <Button variant="contained" color="primary" sx={{ px: 4, py: 1.5, fontWeight: 600, borderRadius: 2, textTransform: 'none', fontSize: 18 }}>READ MORE —</Button>
        </Box>
        {/* Right: Media (Image) */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img
            src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&w=600&h=400&fit=crop"
            alt="Engineers reviewing plans at construction site"
            style={{ width: '100%', maxWidth: 400, borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}
          />
        </Box>
      </Box>
    </Box>
  );
}