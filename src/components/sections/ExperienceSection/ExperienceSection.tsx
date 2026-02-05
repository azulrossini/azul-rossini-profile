import React from "react";
import Typography from "@mui/material/Typography";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import type { Experience } from "../../../models/profile";
import DetailCard from "../DetailCard/DetailCard";
import "./ExperienceSection.css";

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

export interface ExperienceSectionProps {
  items: Experience[];
}

const formatPeriod = (startDate: string, endDate?: string) => {
  const fmt = (iso: string) =>
    new Date(iso).toLocaleString("en-US", { month: "short", year: "numeric" });

  const start = fmt(startDate);
  const end = endDate ? fmt(endDate) : "Present";
  return `${start} - ${end}`;
};

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  items,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <section id="experience" className="section-root">
        <div className="section-header">
          <Typography
            variant="overline"
            component="h2"
            className="section-title"
          >
            Experience
          </Typography>
        </div>
        <div className="card-grid">
          {items.map((item) => (
            <DetailCard
              key={item.company + item.role}
              icon={<WorkOutlineIcon />}
              title={item.role.trim()}
              subtitle={`${item.company} · ${item.location}`}
              period={formatPeriod(item.startDate, item.endDate)}
              summary={item.description}
              listLabel={
                item.responsibilities?.length
                  ? "Key responsibilities & achievements"
                  : undefined
              }
              listItems={item.responsibilities}
            />
          ))}
        </div>
      </section>
    </ThemeProvider>
  );
};

export default ExperienceSection;
