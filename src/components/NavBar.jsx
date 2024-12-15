import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/images/logo.svg";
import "../styles/NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="text-white py-5">
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold">
          <img src={logo} alt="Padel Federation of Macedonia" />
        </NavLink>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-xl focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full  md:static md:w-auto md:flex md:items-center ${
            isOpen ? "text-center" : ""
          }`}
        >
          <ul
            className= {`${
              isOpen
                ? "flex flex-col space-y-4 items-center"
                : "md:flex md:space-x-4 md:ml-auto md:space-y-0"
            }`} 
          >
            <li>
              <NavLink
                to="/wip"
                className="block py-2 px-4 hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                What is Padel?
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/federation"
                className="block py-2 px-4 hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                Federation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/news"
                className="block py-2 px-4 hover:text-gray-400 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                News
              </NavLink>
            </li>
            <li className="block py-2 px-4 hover:text-gray-400 flex items-center">
              EN/MKD
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
