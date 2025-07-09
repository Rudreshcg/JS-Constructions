import { Box, Typography, Paper } from "@mui/material";

export default function ServiceCard({ icon, title, desc }) {
  return (
    <Paper
      elevation={4}
      sx={{
        p: 4,
        borderRadius: 4,
        height: "100%",
        minHeight: 320,
        maxWidth: 280,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
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
        {icon}
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
        {title}
      </Typography>
      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <Typography
          variant="body2"
          sx={{
            color: "#444",
            textAlign: "center",
            fontSize: 15,
            lineHeight: 1.7,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            maxWidth: '100%',
          }}
        >
          {desc}
        </Typography>
      </Box>
    </Paper>
  );
} 