import Link from "next/link";
import { Box, Typography, IconButton } from "@mui/material";
import Logo from "./Logo";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Foot() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "grey.900",
        color: "grey.100",
        mt: 8,
        pt: 6,
        pb: 3,
        borderTop: "4px solid #bfa055",
        background: "linear-gradient(90deg, #232526 0%, #414345 100%)",
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          px: 2,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { md: "center" },
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Box>
          <Link href="/home" style={{ textDecoration: "none" }}>
            <Logo textColor="white" />
          </Link>
          <Typography variant="body2" sx={{ color: "grey.400", mt: 1 }}>
            &copy; {new Date().getFullYear()} JS Constructions. All rights reserved.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 3, mt: { xs: 2, md: 0 } }}>
          <Link href="/home">
            <Typography
              component="a"
              sx={{
                color: "grey.100",
                textDecoration: "none",
                fontWeight: 500,
                letterSpacing: 1,
                px: 1,
                "&:hover": { color: "#bfa055" },
                transition: "color 0.2s",
              }}
            >
              Home
            </Typography>
          </Link>
          <Link href="/about" >
            <Typography
              component="a"
              sx={{
                color: "grey.100",
                textDecoration: "none",
                fontWeight: 500,
                letterSpacing: 1,
                px: 1,
                "&:hover": { color: "#bfa055" },
                transition: "color 0.2s",
              }}
            >
              About
            </Typography>
          </Link>
          <Link href="/service" >
            <Typography
              component="a"
              sx={{
                color: "grey.100",
                textDecoration: "none",
                fontWeight: 500,
                letterSpacing: 1,
                px: 1,
                "&:hover": { color: "#bfa055" },
                transition: "color 0.2s",
              }}
            >
              Services
            </Typography>
          </Link>
          <Link href="/contact" >
            <Typography
              component="a"
              sx={{
                color: "grey.100",
                textDecoration: "none",
                fontWeight: 500,
                letterSpacing: 1,
                px: 1,
                "&:hover": { color: "#bfa055" },
                transition: "color 0.2s",
              }}
            >
              Contact
            </Typography>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          px: 2,
          mt: 4,
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
        }}
      >
        <IconButton
          href="https://instagram.com/"
          target="_blank"
          rel="noopener"
          sx={{ color: "#bfa055", mx: 1 }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          href="https://facebook.com/"
          target="_blank"
          rel="noopener"
          sx={{ color: "#bfa055", mx: 1 }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener"
          sx={{ color: "#bfa055", mx: 1 }}
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  );
}