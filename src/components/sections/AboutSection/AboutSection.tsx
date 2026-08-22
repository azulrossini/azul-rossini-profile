import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import type { Profile } from "../../../types/profile";
import "./AboutSection.css";

export interface AboutSectionProps {
  profile: Profile;
}

const DEFAULT_TAGLINE =
  "Software Engineer · 5+ years building products that scale";
const DEFAULT_BODY =
  "I turn complex problems into clean, user-focused solutions. Strong in full-stack development and cloud architecture, I work best in teams that care about quality and delivery. Bilingual (English & Spanish), used to remote and agile environments—ready to bring focus and reliability to your next project.";

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  const tagline = profile.aboutTagline ?? DEFAULT_TAGLINE;
  const body = profile.aboutBody ?? DEFAULT_BODY;

  return (
    <section id="about" className="section-root">
      <div className="section-header">
        <Typography variant="overline" component="h2" className="section-title">
          About
        </Typography>
      </div>
      <Card className="about-card" elevation={0}>
        <CardContent className="about-card-content">
          <div className="about-hero">
            <AutoAwesomeIcon className="about-hero-icon" aria-hidden />
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
  );
};

export default AboutSection;
