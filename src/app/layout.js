import Header from "../components/Header";
import Foot from "../components/Foot";
import CssBaseline from "@mui/material/CssBaseline";

export const metadata = {
  title: "JS Constructions",
  description: "Building your dreams with quality and trust.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <Header />
        {children}
        <Foot />
      </body>
    </html>
  );
}