import React from "react";
import Typography from "@mui/material/Typography";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import type { Education } from "../../../models/profile";
import DetailCard from "../DetailCard/DetailCard";
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
            <DetailCard
              key={item.school + item.degree}
              icon={<SchoolOutlinedIcon />}
              title={item.degree}
              subtitle={`${item.school} · ${item.location}`}
              period={formatPeriod(item.startDate, item.endDate)}
              summary={item.description}
              listLabel={item.highlights?.length ? "Highlights" : undefined}
              listItems={item.highlights}
            />
          ))}
        </div>
      </section>
    </ThemeProvider>
  );
};

export default EducationSection;
