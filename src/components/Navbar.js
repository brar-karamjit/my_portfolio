import React, { useState, useEffect, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import "./Navbar.css";

function NavBar() {
  const location = useLocation();
  const [expand, updateExpanded] = useState(false);
  const [navColour, setNavColour] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollYRef = useRef(0);

  
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = Math.max(window.scrollY, 0);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isPastThreshold = currentScrollY > 16;
          const scrollDelta = currentScrollY - lastScrollYRef.current;
          const isScrollingDown = scrollDelta > 6;
          const isScrollingUp = scrollDelta < -6;

          setNavColour(isPastThreshold);

          if (currentScrollY > 140 && isScrollingDown && !expand) {
            setIsHidden(true);
          } else if (isScrollingUp || currentScrollY <= 60 || expand) {
            setIsHidden(false);
          }

          lastScrollYRef.current = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [expand]);

  useEffect(() => {
    if (expand) {
      setIsHidden(false);
    }
  }, [expand]);

  useEffect(() => {
    setNavColour(false);
    setIsHidden(false);
    lastScrollYRef.current = window.scrollY;
  }, [location.pathname]);

  const navbarClasses = [
    "navbar",
    navColour ? "navbar--scrolled" : "",
    isHidden ? "navbar--hidden" : "",
  ]
    .join(" ")
    .trim();

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navbarClasses}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <img src={logo} alt="Karamjit Brar logo" className="navbar-logo" />
          <span className="navbar-brand-text">Karamjit Brar</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/animations"
                onClick={() => updateExpanded(false)}
              >
                <AiFillStar style={{ marginBottom: "2px" }} /> Animations
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
