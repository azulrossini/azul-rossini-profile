import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import type { Education } from "../../../models/profile";
import "./EducationSection.css";

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

export interface EducationSectionProps {
  items: Education[];
}

const formatPeriod = (startDate: string, endDate?: string) => {
  const fmt = (iso: string) =>
    new Date(iso).toLocaleString("en-US", { month: "short", year: "numeric" });

  const start = fmt(startDate);
  const end = endDate ? fmt(endDate) : "Present";
  return `${start} - ${end}`;
};

export const EducationSection: React.FC<EducationSectionProps> = ({ items }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <section id="education" className="section-root">
        <div className="section-header">
          <Typography
            variant="overline"
            component="h2"
            className="section-title"
          >
            Education
          </Typography>
        </div>
        <div className="card-grid">
          {items.map((item) => (
            <Card
              className="education-card"
              elevation={6}
              key={item.school + item.degree}
            >
              <CardContent>
                <header className="card-header">
                  <Typography variant="subtitle1" component="h3" className="card-title">
                    {item.degree}
                  </Typography>
                  <Typography variant="body2" className="muted">
                    {item.school}
                  </Typography>
                  <span className="pill">
                    {formatPeriod(item.startDate, item.endDate)}
                  </span>
                </header>
                <Typography variant="body2" className="card-text">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </ThemeProvider>
  );
};

export default EducationSection;

