import React from "react";
import Typography from "@mui/material/Typography";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import type { Experience } from "../../../types/profile";
import { formatPeriod } from "../../../utils/formatDate";
import DetailCard from "../../ui/DetailCard/DetailCard";
import "./ExperienceSection.css";

export interface ExperienceSectionProps {
  items: Experience[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ items }) => {
  return (
    <section id="experience" className="section-root">
      <div className="section-header">
        <Typography variant="overline" component="h2" className="section-title">
          Experience
        </Typography>
      </div>
      <div className="card-grid">
        {items.map((item) => (
          <DetailCard
            key={`${item.company}-${item.role}`}
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
  );
};

export default ExperienceSection;
