import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { Row, Col } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/NavBar.css";
import Headroom from "react-headroom";

function Navbar() {
  const navRef = useRef();
  const location = useLocation();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const isLandingPage = location.pathname === "/";

  return (
    <Headroom>
      <header>
        <Row justify={"center"}>
          <Col className="navbar" span={20}>
            <h3>
              <NavLink to="/">
                <img src="/images/logo.svg" alt="Logo" />
              </NavLink>
            </h3>

            <nav ref={navRef}>
              <NavLink onClick={showNavbar} className="nav-menu-logo hidden">
                <img className="logo-menu" src="/images/logo.svg" alt="Logo" />
              </NavLink>

              <NavLink
                onClick={showNavbar}
                className={
                  isLandingPage
                    ? "nav-link active-link"
                    : ({ isActive }) =>
                        isActive ? "nav-link active-link" : "nav-link"
                }
                to="/wip"
              >
                What is Padel?
              </NavLink>
              <NavLink
                onClick={showNavbar}
                className={
                  isLandingPage
                    ? "nav-link active-link"
                    : ({ isActive }) =>
                        isActive ? "nav-link active-link" : "nav-link"
                }
                to="/federation"
              >
                Federation
              </NavLink>
              <NavLink
                onClick={showNavbar}
                className={
                  isLandingPage
                    ? "nav-link active-link"
                    : ({ isActive }) =>
                        isActive ? "nav-link active-link" : "nav-link"
                }
                to="/news"
              >
                News and Media
              </NavLink>
              <h1 className="flex items-center">
                <MdLanguage />
                <span>EN/MK</span>
              </h1>

              <button
                className="nav-btn nav-close-btn flex ms-auto"
                onClick={showNavbar}
              >
                <h1>Menu</h1> <FaTimes />
              </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
              <FaBars />
            </button>
          </Col>
        </Row>
      </header>
    </Headroom>
  );
}

export default Navbar;
