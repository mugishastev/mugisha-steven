import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";

function ProjectCards({
  imgPath,
  title,
  description,
  ghLink,
  backendLink,
  demoLink,
  category,
  technologies = [],
}) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Card className="project-card-view">
        <Card.Img variant="top" src={imgPath} alt={`${title} project preview`} />
        <Card.Body className="d-flex flex-column">
          <span className="project-category">{category}</span>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="project-card-description">
            {description}
          </Card.Text>
          <div className="project-tech-list" aria-label="Technologies">
            {technologies.map((technology) => (
              <span className="project-tech-tag" key={technology}>
                {technology}
              </span>
            ))}
          </div>
          <div className="d-flex flex-wrap gap-2 align-items-center mt-auto pt-3">
            <Button variant="primary" onClick={() => setShow(true)}>
              <AiOutlineInfoCircle aria-hidden="true" /> &nbsp; Details
            </Button>
            <Button
              variant="outline-primary"
              href={ghLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} on GitHub`}
            >
              <BsGithub aria-hidden="true" />
            </Button>
            {demoLink && (
              <Button
                variant="outline-primary"
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${title} live demo`}
              >
                <CgWebsite aria-hidden="true" />
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={() => setShow(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={imgPath}
            alt={`${title} project preview`}
            className="img-fluid mb-4 rounded"
          />
          <p className="purple mb-2">{category}</p>
          <p>{description}</p>
          {technologies.length > 0 && (
            <>
              <h3 className="h6 mt-4">Technologies</h3>
              <div className="project-tech-list">
                {technologies.map((technology) => (
                  <span className="project-tech-tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </>
          )}
          <div className="d-flex flex-wrap gap-2 mt-4">
            <Button
              variant="primary"
              href={ghLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub aria-hidden="true" /> &nbsp; GitHub
            </Button>
            {backendLink && (
              <Button
                variant="outline-primary"
                href={backendLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub aria-hidden="true" /> &nbsp; Backend repository
              </Button>
            )}
            {demoLink && (
              <Button
                variant="outline-primary"
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CgWebsite aria-hidden="true" /> &nbsp; Live demo
              </Button>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectCards;
