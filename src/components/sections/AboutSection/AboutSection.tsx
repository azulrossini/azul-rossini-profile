import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import type { Profile } from "../../../models/profile";
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

export interface AboutSectionProps {
  profile: Profile;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  const tagline = profile.aboutTagline ?? "Software Engineer · 5+ years building products that scale";
  const body = profile.aboutBody ?? "I turn complex problems into clean, user-focused solutions. Strong in full-stack development and cloud architecture, I work best in teams that care about quality and delivery. Bilingual (English & Spanish), used to remote and agile environments—ready to bring focus and reliability to your next project.";

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
        <Card className="about-card" elevation={0}>
          <CardContent className="about-card-content">
            <div className="about-hero">
              <Typography component="p" className="about-tagline">
                {tagline}
              </Typography>
            </div>
            <Typography component="p" className="about-body">
              {body}
            </Typography>
          </CardContent>
        </Card>
      </section>
    </ThemeProvider>
  );
};

export default AboutSection;
