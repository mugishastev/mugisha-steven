import React, { useEffect } from "react";

const pageMetadata = {
  "/": [
    "Mugisha Steven | Backend Engineer & Full-Stack Developer",
    "Explore Mugisha Steven’s portfolio, projects, skills, experience, and contact information.",
  ],
  "/about": [
    "About Mugisha Steven",
    "Learn about Mugisha Steven, a backend engineer and full-stack developer from Kigali, Rwanda.",
  ],
  "/experience": [
    "Experience & Education | Mugisha Steven",
    "View Mugisha Steven’s software engineering experience, education, and technical milestones.",
  ],
  "/project": [
    "Projects | Mugisha Steven",
    "Browse Mugisha Steven’s AI, full-stack, frontend, and backend projects.",
  ],
  "/resume": ["Resume | Mugisha Steven", "View Mugisha Steven’s resume, skills, education, and work experience."],
  "/blog": ["Blog | Mugisha Steven", "Read articles and technical posts by Mugisha Steven."],
  "/contact": ["Contact Mugisha Steven", "Get in touch with Mugisha Steven for jobs, collaborations, or project opportunities."],
};

export function updatePageMetadata(pathname) {
  const [title, description] = pageMetadata[pathname] || pageMetadata["/"];
  document.title = title;

  let descriptionTag = document.querySelector('meta[name="description"]');
  if (!descriptionTag) {
    descriptionTag = document.createElement("meta");
    descriptionTag.name = "description";
    document.head.appendChild(descriptionTag);
  }
  descriptionTag.content = description;

  document.documentElement.lang = "en";
}

export default function PageMetadata({ pathname }) {
  useEffect(() => updatePageMetadata(pathname), [pathname]);
  return null;
}
