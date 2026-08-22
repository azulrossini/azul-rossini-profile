import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./ContactSection.css";

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
    <section id="contact" className="section-root">
      <div className="section-header">
        <Typography variant="overline" component="h2" className="section-title">
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
  );
};

export default ContactSection;
