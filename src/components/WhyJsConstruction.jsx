import { Box, Typography } from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ForumIcon from "@mui/icons-material/Forum";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

const features = [
  {
    icon: <EngineeringIcon sx={{ fontSize: 60, color: "#222" }} />,
    title: "PROVEN EXPERTISE",
    desc: "With years of experience in residential and commercial construction, we deliver high-quality results backed by solid technical knowledge and industry best practices.",
  },
  {
    icon: <AssignmentTurnedInIcon sx={{ fontSize: 60, color: "#222" }} />,
    title: "END-TO-END SOLUTIONS",
    desc: "From planning and design to execution and final handover, we manage every phase of your project seamlessly — so you don’t have to coordinate between multiple vendors.",
  },
  {
    icon: <BuildIcon sx={{ fontSize: 60, color: "#222" }} />,
    title: "QUALITY CRAFTSMANSHIP",
    desc: "We use top-grade materials and skilled professionals to ensure every structure we build is durable, safe, and aesthetically impressive.",
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 60, color: "#222" }} />,
    title: "ON-TIME DELIVERY",
    desc: "We value your time. Our streamlined processes and experienced project managers help us deliver projects on schedule without compromising quality.",
  },
  {
    icon: <ForumIcon sx={{ fontSize: 60, color: "#222" }} />,
    title: "TRANSPARENT COMMUNICATION",
    desc: "We keep you informed every step of the way. No hidden costs, no surprises — just honest updates and clear timelines.",
  },
  {
    icon: <EmojiPeopleIcon sx={{ fontSize: 60, color: "#222" }} />,
    title: "CUSTOMER-CENTRIC APPROACH",
    desc: "Your satisfaction is our priority. We work closely with you to understand your vision and bring it to life, tailored to your needs and budget.",
  },
];

export default function WhyJsConstruction() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 1, md: 0 }, bgcolor: "#6a6a6a" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 900,
          mb: 2,
          color: "#ffd000",
          textAlign: "center",
          letterSpacing: 1,
          fontSize: { xs: 20, md: 30 },
          textTransform: "uppercase",
        }}
      >
        WHY CHOOSE US?
      </Typography>
      <Typography
        sx={{
          color: "#fff",
          textAlign: "center",
          maxWidth: 900,
          mx: "auto",
          mb: 6,
          fontSize: { xs: 16, md: 20 },
        }}
      >
        At JS Construction, we bring unparalleled expertise and a commitment to excellence to every project. Our comprehensive services ensure a seamless process from design to completion, and our customer-centric approach guarantees results that exceed your expectations. Choose us for innovative solutions and a dedication to quality that sets us apart.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: { xs: 3, md: 4 },
          maxWidth: 1600,
          mx: "auto",
        }}
      >
        {features.map((item) => (
          <Box
            key={item.title}
            sx={{
              background: "#393939",
              borderRadius: 12,
              width: { xs: "90%", sm: 320, md: 320 },
              minHeight: 410,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              px: 3,
              py: 3,
              mb: 2,
              boxShadow: "0 4px 16px 0 rgba(0,0,0,0.18)",
              transition: "transform 0.25s, box-shadow 0.25s",
              "&:hover": {
                transform: "translateY(-10px) scale(1.04)",
                boxShadow: "0 12px 32px 0 rgba(191,160,70,0.25)",
              },
            }}
          >
            <Box
              sx={{
                bgcolor: "#ffd000",
                width: 140,
                height: 140,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 3,
              }}
            >
              {item.icon}
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: 22,
                mb: 2,
                color: "#ffd000",
                textAlign: "center",
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#fff",
                fontSize: 16,
                textAlign: "center",
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