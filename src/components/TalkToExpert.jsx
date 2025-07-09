import React from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";

function TalkToExpert() {
  return (
    <Box
      component="section"
      sx={{
        background: "#fafafa",
        py: { xs: 4, md: 8 },
        px: { xs: 1, md: 0 },
      }}
    >
      <Box
        sx={{
          maxWidth: 1300,
          mx: "auto",
          px: { xs: 1, md: 3 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            letterSpacing: 1,
            mb: 1,
            textAlign: "left",
            fontSize: { xs: 20, md: 30 },
            color: "#000", // Black heading
          }}
        >
          TALK TO OUR EXPERT
        </Typography>
        <Box
          sx={{
            width: 60,
            height: 5,
            bgcolor: "#000",
            mb: 4,
          }}
        />
        <Box
          sx={{
            display: "flex",
            gap: { xs: 3, md: 5 },
            flexDirection: { xs: "column", md: "row" },
            alignItems: "flex-start",
          }}
        >
          {/* Form */}
          <Paper
            elevation={0}
            sx={{
              flex: 1,
              border: "6px solid #000",
              p: { xs: 2, md: 5 },
              bgcolor: "#fff",
              minWidth: 320,
              maxWidth: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <TextField
              label="NAME"
              name="name"
              variant="standard"
              required
              InputLabelProps={{
                sx: { fontWeight: 500, letterSpacing: 1, color: "#222" },
              }}
              InputProps={{
                disableUnderline: false,
                sx: {
                  fontSize: 18,
                  pb: 1,
                  color: "#222",
                  "&:after": {
                    borderBottom: "2px solid #bfa046", // Gold on focus
                  },
                  "&:focus-within": {
                    borderBottom: "2px solid #bfa046",
                  },
                },
              }}
            />
            <TextField
              label="EMAIL"
              name="email"
              type="email"
              variant="standard"
              required
              InputLabelProps={{
                sx: { fontWeight: 500, letterSpacing: 1, color: "#222" },
              }}
              InputProps={{
                disableUnderline: false,
                sx: {
                  fontSize: 18,
                  pb: 1,
                  color: "#222",
                  "&:after": {
                    borderBottom: "2px solid #bfa046",
                  },
                  "&:focus-within": {
                    borderBottom: "2px solid #bfa046",
                  },
                },
              }}
            />
            <TextField
              label="MOBILE NUMBER"
              name="mobile"
              type="tel"
              variant="standard"
              required
              InputLabelProps={{
                sx: { fontWeight: 500, letterSpacing: 1, color: "#222" },
              }}
              InputProps={{
                disableUnderline: false,
                sx: {
                  fontSize: 18,
                  pb: 1,
                  color: "#222",
                  "&:after": {
                    borderBottom: "2px solid #bfa046",
                  },
                  "&:focus-within": {
                    borderBottom: "2px solid #bfa046",
                  },
                },
              }}
            />
            <TextField
              label="MESSAGE"
              name="message"
              multiline
              rows={3}
              variant="standard"
              required
              InputLabelProps={{
                sx: { fontWeight: 500, letterSpacing: 1, color: "#222" },
              }}
              InputProps={{
                disableUnderline: false,
                sx: {
                  fontSize: 18,
                  pb: 1,
                  color: "#222",
                  "&:after": {
                    borderBottom: "2px solid #bfa046",
                  },
                  "&:focus-within": {
                    borderBottom: "2px solid #bfa046",
                  },
                },
              }}
            />
            <Button
              type="submit"
              sx={{
                mt: 2,
                background: "#bfa046", // Gold button
                color: "#fff",
                fontSize: 18,
                letterSpacing: 4,
                fontWeight: 600,
                px: 4,
                py: 1.5,
                width: 150,
                "&:hover": {
                  background: "#fff",
                  color: "#bfa046",
                  border: "2px solid #bfa046",
                },
              }}
            >
              SUBMIT
            </Button>
          </Paper>
          {/* Contact Info */}
          <Box
            sx={{
              bgcolor: "#bfa046",
              color: "#fff",
              p: { xs: 3, md: 5 },
              minWidth: 320,
              maxWidth: 400,
              fontFamily: "'Montserrat', Arial, sans-serif",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              fontSize: 18,
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  letterSpacing: 1,
                  mb: 1,
                  fontSize: 20,
                  color: "#fff",
                }}
              >
                PHONE NUMBER
              </Typography>
              <Typography sx={{ fontSize: 17, fontWeight: 400, mb: 3 }}>
                (+91) 7676534573
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  letterSpacing: 1,
                  mb: 1,
                  fontSize: 20,
                  color: "#fff",
                }}
              >
                EMAIL
              </Typography>
              <Typography sx={{ fontSize: 17, fontWeight: 400, mb: 3 }}>
                info@jsconstructions.com
              </Typography>
            </Box>
            <Box sx={{ mt: 4 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  letterSpacing: 1,
                  mb: 1,
                  fontSize: 20,
                  color: "#fff",
                }}
              >
                ADDRESS INFO
              </Typography>
              <Typography sx={{ fontSize: 17, fontWeight: 400, mb: 3 }}>
                Ullal Main Rd, Annapurneshwari Layout, Jnananjyothinagar, Railway Layout, Jnana Ganga Nagar, Bengaluru, Karnataka 560056
              </Typography>
            </Box>
            {/* <Box sx={{ mt: 4 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  letterSpacing: 1,
                  mb: 1,
                  fontSize: 20,
                  color: "#fff",
                }}
              >
                BUSINESS HOURS
              </Typography>
              <Typography sx={{ fontSize: 17, fontWeight: 400 }}>
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </Typography>
            </Box> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TalkToExpert;