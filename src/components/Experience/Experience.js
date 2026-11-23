import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import { MdWork, MdSchool, MdCode } from "react-icons/md";

const milestones = [
  {
    type: "work",
    date: "2023 - Present",
    title: "Backend Engineer",
    organization: "Sohoza System",
    description:
      "Develop and maintain backend systems for real-world applications, focusing on scalable APIs, database design, authentication, and reliable service architecture.",
    highlights: ["NestJS", "PostgreSQL", "Prisma", "API architecture"],
  },
  {
    type: "work",
    date: "2022 - 2023",
    title: "Junior Full-Stack Developer",
    organization: "Freelance",
    description:
      "Built web applications for clients using React and Node.js, including real-time features and integrations. Delivered responsive interfaces with maintainable backend services.",
    highlights: ["React", "Node.js", "WebSockets", "Integrations"],
  },
  {
    type: "education",
    date: "2020 - 2022",
    title: "Integrated A2 — Software Development",
    organization: "Kigali, Rwanda",
    description:
      "Studied software development fundamentals, algorithms, data structures, databases, and modern web technologies while participating in practical projects and hackathons.",
    highlights: ["Software development", "Databases", "Algorithms", "Hackathons"],
  },
];

function Experience() {
  return (
    <Container fluid className="experience-section" aria-labelledby="experience-heading">
      <Particle />
      <Container>
        <p className="section-eyebrow">Career journey</p>
        <h1 id="experience-heading" className="project-heading">
          Experience <strong className="purple">& education</strong>
        </h1>
        <p className="experience-intro">
          A timeline of practical engineering experience, continuous learning, and project delivery.
        </p>

        <VerticalTimeline lineColor="var(--imp-text-color)">
          {milestones.map((milestone) => {
            const Icon = milestone.type === "education" ? MdSchool : milestone.type === "work" ? MdWork : MdCode;

            return (
              <VerticalTimelineElement
                key={`${milestone.title}-${milestone.date}`}
                className={`vertical-timeline-element--${milestone.type}`}
                date={milestone.date}
                iconStyle={{ background: "var(--imp-text-color)", color: "#fff" }}
                icon={<Icon aria-hidden="true" />}
              >
                <span className="timeline-type">{milestone.type}</span>
                <h2 className="vertical-timeline-element-title">{milestone.title}</h2>
                <h3 className="vertical-timeline-element-subtitle">{milestone.organization}</h3>
                <p>{milestone.description}</p>
                {milestone.highlights.length > 0 && (
                  <ul className="timeline-highlights" aria-label="Skills and technologies">
                    {milestone.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </Container>
    </Container>
  );
}

export default Experience;
