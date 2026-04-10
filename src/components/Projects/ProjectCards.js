import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";

function ProjectCards(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="project-card-view" onClick={handleShow} style={{ cursor: "pointer" }}>
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description.substring(0, 100)}...
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <Button variant="primary" onClick={(e) => { e.stopPropagation(); setShow(true); }}>
              <AiOutlineInfoCircle /> &nbsp; Details
            </Button>
            <Button variant="primary" href={props.ghLink} target="_blank" onClick={(e) => e.stopPropagation()}>
              <BsGithub />
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size="lg" centered className="project-modal">
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-custom">
          <img src={props.imgPath} alt={props.title} className="img-fluid mb-4 rounded" />
          <h5 className="purple">Category: {props.category}</h5>
          <p className="mt-3">{props.description}</p>
          <div className="mt-4">
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp; GitHub
            </Button>
            {props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                style={{ marginLeft: "10px" }}
              >
                <CgWebsite /> &nbsp; Demo
              </Button>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ProjectCards;
