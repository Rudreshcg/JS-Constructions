import { Box, Typography } from "@mui/material";

export default function Logo({ textColor = "black" }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        gap: 1,
        px: 2.5,
        py: 1,
        borderRadius: 2,
        position: "relative",
      }}
    >
      <Box sx={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: { xs: 32, md: 38 },
            color: "#bfa055",
            letterSpacing: 2,
            lineHeight: 1,
            textShadow: "0 2px 8px rgba(191,160,85,0.12)",
          }}
        >
          JS
        </Typography>
        <Box
          sx={{
            width: 36,
            height: 4,
            bgcolor: "#bfa055",
            borderRadius: 2,
            mt: 0.5,
          }}
        />
      </Box>
      <Typography
        sx={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: { xs: 24, md: 32 },
          color: textColor,
          letterSpacing: 1.5,
          ml: 1,
          textShadow: "0 1px 4px rgba(0,0,0,0.06)",
        }}
      >
        constructions
      </Typography>
    </Box>
  );
}