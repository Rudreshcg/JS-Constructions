"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Divider,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navLinks = [
  { label: "Home", href: "/home" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        sx={{
          bgcolor: "white",
          color: "#595959",
          width: "100%",
          borderBottom: "1px solid #eee",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            minHeight: "90px !important",
            px: { xs: 1, md: 2 },
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link href="/home" style={{ textDecoration: "none" }}>
            <Logo />
          </Link>
          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} >
                <Button
                  component="a"
                  sx={{
                    color:
                      pathname === link.href
                        ? "#bfa055"
                        : "#4A4A4A",
                    fontWeight: pathname === link.href ? 700 : 500,
                    fontSize: 16,
                    px: 3,
                    backgroundColor: "inherit",
                    borderRadius: 0,
                    "&:hover": {
                      color: "#bfa055",
                      backgroundColor: "inherit",
                    },
                  }}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </Box>
          {/* Mobile Menu Icon */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{
              display: { xs: "flex", md: "none" },
              color: drawerOpen ? "white" : "black",
              zIndex: 1301,
            }}
            onClick={() => setDrawerOpen((open) => !open)}
          >
            {drawerOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
        <Divider sx={{ width: "100%" }} />
      </AppBar>
      {/* Mobile Drawer */}
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            bgcolor: "black",
            width: "100vw",
            height: "100vh",
            zIndex: 1300,
          },
        }}
        transitionDuration={300}
      >
        <Box sx={{ width: "100vw", height: "100vh", pt: 8 }}>
          <List>
            {navLinks.map((link, idx) => (
              <ListItem key={link.href} disablePadding>
                <Link href={link.href} >
                  <ListItemButton
                    component="a"
                    selected={pathname === link.href}
                    onClick={() => setDrawerOpen(false)}
                    sx={{
                      color:
                        pathname === link.href
                          ? "#bfa055"
                          : "white",
                      justifyContent: "center",
                      py: 2,
                      fontSize: 22,
                      "&:hover": {
                        color: "#bfa055",
                        backgroundColor: "inherit",
                      },
                    }}
                  >
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{
                        align: "center",
                        fontWeight: pathname === link.href ? 700 : 500,
                        fontSize: 22,
                        color:
                          pathname === link.href
                            ? "#bfa055"
                            : "white",
                      }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}