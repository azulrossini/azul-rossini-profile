import React, { ReactNode } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./DetailCard.css";

export interface DetailCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  period: string;
  summary: string;
  listLabel?: string;
  listItems?: string[];
}

export const DetailCard: React.FC<DetailCardProps> = ({
  icon,
  title,
  subtitle,
  period,
  summary,
  listLabel,
  listItems,
}) => {
  const hasList = listLabel && listItems && listItems.length > 0;

  return (
    <Card className="detail-card" elevation={0}>
      <CardContent className="detail-card-content">
        <header className="detail-card-header">
          <div className="detail-card-header-top">
            <span className="detail-card-icon-wrap" aria-hidden>
              {icon}
            </span>
            <div className="detail-card-title-block">
              <Typography variant="subtitle1" component="h3" className="detail-card-title">
                {title}
              </Typography>
              <Typography variant="body2" className="detail-card-muted">
                {subtitle}
              </Typography>
            </div>
          </div>
          <span className="detail-card-pill">{period}</span>
        </header>
        <Typography variant="body2" className="detail-card-summary">
          {summary}
        </Typography>
        {hasList && (
          <div className="detail-card-list">
            <Typography component="span" className="detail-card-list-label">
              {listLabel}
            </Typography>
            <ul className="detail-card-list-items">
              {listItems!.map((item, i) => (
                <li key={i} className="detail-card-list-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DetailCard;
