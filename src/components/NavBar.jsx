import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/NavBar.css";
import { NavLink } from "react-router-dom";
import { MdLanguage } from "react-icons/md";
import { Row, Col } from "antd";
function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <Row justify={"center"}>
        <Col className="navbar" span={20}>
          <h3>
            <NavLink>
              <img src="/images/logo.svg" alt="" />
            </NavLink>
          </h3>

          <nav ref={navRef}>
            <NavLink onClick={showNavbar} className="nav-menu-logo hidden">
              <img className="logo-menu" src="/images/logo.svg" alt="" />
            </NavLink>

            <NavLink onClick={showNavbar} className={"nav-link"} to={"/wip"}>
              What is Padel?
            </NavLink>
            <NavLink
              onClick={showNavbar}
              className={"nav-link"}
              to={"federation"}
            >
              Federation
            </NavLink>
            <NavLink onClick={showNavbar} className={"nav-link"} to={"/news"}>
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
  );
}

export default Navbar;
