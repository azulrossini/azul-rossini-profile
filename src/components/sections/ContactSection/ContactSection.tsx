import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "./ContactSection.css";

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

export interface ContactSectionProps {
  location: string;
  email: string;
  phone: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  location,
  email,
  phone,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <section id="contact" className="section-root">
        <div className="section-header">
          <Typography
            variant="overline"
            component="h2"
            className="section-title"
          >
            Contact
          </Typography>
        </div>
        <Card className="contact-card" elevation={6}>
          <CardContent className="contact-content">
            <div className="line">
              <span className="label">Location</span>
              <span>{location}</span>
            </div>
            <div className="line">
              <span className="label">Email</span>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
            <div className="line">
              <span className="label">Phone</span>
              <span>{phone}</span>
            </div>
          </CardContent>
        </Card>
      </section>
    </ThemeProvider>
  );
};

export default ContactSection;

