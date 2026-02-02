import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "./AboutSection.css";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "transparent",
      paper: "rgba(15, 23, 42, 0.96)",
    },
  },
  typography: {
    fontFamily: [
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      '"SF Pro Text"',
      "sans-serif",
    ].join(", "),
  },
});

export const AboutSection: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <section id="about" className="section-root">
        <div className="section-header">
          <Typography
            variant="overline"
            component="h2"
            className="section-title"
          >
            About
          </Typography>
        </div>
        <Card className="about-card" elevation={6}>
          <CardContent>
            <Typography variant="body1" className="about-text">
            I am a proactive Software Engineer with more than 5 years of experience developing innovative, user-centric web applications. I excel at transforming complex ideas into efficient, impactful solutions through collaboration, creativity and technical precision. I value collaboration, continuous improvement and operational excellence in every aspect of my work.
            </Typography>
          </CardContent>
        </Card>
      </section>
    </ThemeProvider>
  );
};

export default AboutSection;

