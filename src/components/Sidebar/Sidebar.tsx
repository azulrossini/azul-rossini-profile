import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import type { Language, Technology } from "../../models/profile";
import "./Sidebar.css";

export interface SidebarProps {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  languages: Language[];
  technologies: Technology[];
}

export const Sidebar: React.FC<SidebarProps> = ({
  name,
  title,
  location,
  email,
  phone,
  languages,
  technologies,
}) => {
  const initial = name?.[0] ?? "?";
  const whatsappNumber = phone.replace(/\D/g, "");

  return (
    <aside className="sidebar">
      <div className="avatar">
        <span>{initial}</span>
      </div>
      <h1 className="name">{name}</h1>
      <p className="title">{title}</p>

      <div className="info">
        <div className="info-row">
          <LocationOnOutlinedIcon fontSize="small" className="info-icon" />
          <span>{location}</span>
        </div>
        <div className="info-row">
          <MailOutlineOutlinedIcon fontSize="small" className="info-icon" />
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div className="info-row">
          <PhoneIphoneOutlinedIcon fontSize="small" className="info-icon" />
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
          >
            {phone}
          </a>
        </div>
      </div>

      <section className="technologies">
        <h2>Technologies</h2>
        <div className="technologies-card">
          <ul>
            {technologies.map((tech) => (
              <li key={tech.name}>{tech.name}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="languages">
        <h2>Languages</h2>
        <ul>
          {languages.map((lang) => (
            <li key={lang.name}>
              <span>{lang.name}</span>
              <span className="badge">{lang.level}</span>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;

