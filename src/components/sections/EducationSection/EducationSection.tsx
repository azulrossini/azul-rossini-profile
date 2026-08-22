import React from "react";
import Typography from "@mui/material/Typography";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import type { Education } from "../../../types/profile";
import { formatPeriod } from "../../../utils/formatDate";
import DetailCard from "../../ui/DetailCard/DetailCard";
import "./EducationSection.css";

export interface EducationSectionProps {
  items: Education[];
}

export const EducationSection: React.FC<EducationSectionProps> = ({ items }) => {
  return (
    <section id="education" className="section-root">
      <div className="section-header">
        <Typography variant="overline" component="h2" className="section-title">
          Education
        </Typography>
      </div>
      <div className="card-grid">
        {items.map((item) => (
          <DetailCard
            key={`${item.school}-${item.degree}`}
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
  );
};

export default EducationSection;
