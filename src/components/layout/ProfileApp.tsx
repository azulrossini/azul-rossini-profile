import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../../theme/theme";
import type {
  Profile,
  Language,
  Technology,
  Education,
  Experience,
} from "../../types/profile";
import Sidebar from "./Sidebar/Sidebar";
import AboutSection from "../sections/AboutSection/AboutSection";
import ExperienceSection from "../sections/ExperienceSection/ExperienceSection";
import EducationSection from "../sections/EducationSection/EducationSection";
import ContactSection from "../sections/ContactSection/ContactSection";
import GitHubIcon from "./GitHubIcon";

export interface ProfileAppProps {
  profile: Profile;
  languages: Language[];
  technologies: Technology[];
  education: Education[];
  experience: Experience[];
}

/**
 * Root of the profile page.
 *
 * This used to be four separate `client:only="react"` islands (Sidebar,
 * About, Experience, Education), each creating its own MUI theme instance.
 * That meant the same theme object was built four times and React had to
 * hydrate four independent roots. Rendering everything from one component
 * means a single theme, a single hydration boundary, and one place
 * (`index.astro`) that just passes data down.
 */
export const ProfileApp: React.FC<ProfileAppProps> = ({
  profile,
  languages,
  technologies,
  education,
  experience,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="page">
        <Sidebar
          name={profile.name}
          title={profile.title}
          location={profile.location}
          languages={languages}
          technologies={technologies}
        />

        <main className="content">
          <AboutSection profile={profile} />
          <ExperienceSection items={experience} />
          <EducationSection items={education} />
          <ContactSection
            location={profile.location}
            email={profile.email}
            phone={profile.phone}
          />

          {profile.githubUrl && (
            <footer className="github-footer">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="github-link"
              >
                <GitHubIcon className="github-icon" />
                <span>View source on GitHub</span>
              </a>
            </footer>
          )}
        </main>
      </div>
    </ThemeProvider>
  );
};

export default ProfileApp;
