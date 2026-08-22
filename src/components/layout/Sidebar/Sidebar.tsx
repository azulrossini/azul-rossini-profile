import React, { useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import type { Language, Technology } from "../../../types/profile";
import "./Sidebar.css";

export interface SidebarProps {
  name: string;
  title: string;
  location: string;
  languages: Language[];
  technologies: Technology[];
}

export const Sidebar: React.FC<SidebarProps> = ({
  name,
  title,
  location,
  languages,
  technologies,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <aside className={`sidebar ${menuOpen ? "is-open" : ""}`}>
      <button
        type="button"
        className="sidebar-trigger"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <div className="sidebar-trigger-text">
          <h1 className="name">
            <a
              className="name-link"
              href="https://www.linkedin.com/in/maria-azul-rossini/"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              {name}
            </a>
          </h1>
          <p className="title">{title}</p>
        </div>
        <ExpandMoreIcon className="sidebar-chevron" aria-hidden />
      </button>

      <div className="sidebar-content">
        <div className="info">
          <div className="info-row">
            <LocationOnOutlinedIcon fontSize="small" className="info-icon" />
            <span>{location}</span>
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
      </div>
    </aside>
  );
};

export default Sidebar;
