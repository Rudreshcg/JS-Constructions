"use client";
import TalkToExpert from "../../components/TalkToExpert";
import { Box, Typography } from "@mui/material";
import WhyJsConstruction from "../../components/WhyJsConstruction";


export default function Page() {
  return (
    <Box component="main" sx={{ minHeight: '100vh', p: 0, m: 0 }}>
      {/* Full Page Hero Section */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          minHeight: '100vh',
          overflow: 'hidden',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="JS Construction Hero"
          style={{
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            bgcolor: 'rgba(0,0,0,0.4)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            zIndex: 2,
            textAlign: 'center',
            px: 2,
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: 32, md: 48 } }}>
            Welcome to JS Construction
          </Typography>
          <Typography variant="h5" sx={{ fontSize: { xs: 18, md: 28 } }}>
            Building your dreams with quality and trust.
          </Typography>
        </Box>
      </Box>
      <WhyJsConstruction />
      <Box sx={{ mt: 4 }}>
        <TalkToExpert />
      </Box>
    </Box>
  );
}