import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineContacts,
} from "react-icons/ai";
import { MdOutlineWorkOutline, MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";

function NavBar({ toggleTheme, theme }) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    const scrollHandler = () => updateNavbar(window.scrollY >= 20);
    scrollHandler();
    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const closeMenu = () => updateExpanded(false);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
      aria-label="Main navigation"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={closeMenu} aria-label="Mugisha Steven home">
          <strong className="purple navbar-monogram">MS.</strong>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          aria-label={expand ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={closeMenu}>
                <AiOutlineHome aria-hidden="true" /> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={closeMenu}>
                <AiOutlineUser aria-hidden="true" /> About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/experience" onClick={closeMenu}>
                <MdOutlineWorkOutline aria-hidden="true" /> Experience
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={closeMenu}>
                <AiOutlineFundProjectionScreen aria-hidden="true" /> Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={closeMenu}>
                <CgFileDocument aria-hidden="true" /> Resume
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/blog" onClick={closeMenu}>
                <ImBlog aria-hidden="true" /> Blog
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/contact" onClick={closeMenu}>
                <AiOutlineContacts aria-hidden="true" /> Contact
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="theme-toggle">
              <Button
                onClick={toggleTheme}
                className="theme-btn"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              >
                {theme === "dark" ? <MdOutlineLightMode aria-hidden="true" /> : <MdOutlineDarkMode aria-hidden="true" />}
              </Button>
            </Nav.Item>
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/mugishastev/mugisha-steven"
                target="_blank"
                rel="noopener noreferrer"
                className="fork-btn-inner"
                aria-label="View this portfolio source on GitHub"
              >
                <CgGitFork aria-hidden="true" /> <AiFillStar aria-hidden="true" />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
