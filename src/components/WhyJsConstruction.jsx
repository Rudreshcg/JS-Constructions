import { Box, Typography } from "@mui/material";

const features = [
  {
    title: "Experienced Team",
    desc: "Our certified engineers and skilled professionals bring years of experience to every project, ensuring quality and reliability.",
  },
  {
    title: "Creative & Professional",
    desc: "We blend creativity with professionalism to deliver innovative construction solutions tailored to your needs.",
  },
  {
    title: "Customer Satisfaction",
    desc: "We prioritize transparent communication and timely delivery, making your satisfaction our top priority.",
  },
];

export default function WhyJsConstruction() {
  return (
    <Box sx={{ py: { xs: 5, md: 8 }, px: { xs: 1, md: 0 }, bgcolor: "#fafafa" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          mb: 5,
          color: "#1a237e",
          textAlign: "center",
          letterSpacing: 1,
          fontSize: { xs: 28, md: 38 },
        }}
      >
        Why Choose JS Constructions?
      </Typography>
      <Box
        sx={{
          maxWidth: 1100,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        {features.map((item, idx) => (
          <Box
            key={item.title}
            sx={{
              background: "#fff",
              borderRadius: 3,
              boxShadow: "0 4px 16px 0 rgba(40,62,81,0.10)",
              px: { xs: 2, md: 5 },
              py: { xs: 3, md: 4 },
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              borderLeft: "6px solid #bfa046",
              transition: "box-shadow 0.2s",
              "&:hover": {
                boxShadow: "0 8px 32px 0 rgba(40,62,81,0.18)",
                borderLeft: "6px solid #1a237e",
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: { xs: 18, md: 22 },
                mb: 1,
                color: "#222",
                letterSpacing: 0.5,
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#444",
                fontSize: { xs: 15, md: 17 },
                lineHeight: 1.7,
              }}
            >
              {item.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}