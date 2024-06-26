import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import "./styles.scss";

const data = [
  { label: "HOME", to: "/" },
  { label: "ABOUT ME", to: "/about" },
  { label: "SKILLS", to: "/skills" },
  { label: "EDUCATION", to: "/education" },
  { label: "PROJECTS", to: "/projects" },
  { label: "CONTACT", to: "/contact" },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const location = useLocation();

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  const handleMenuItemClick = () => {
    setToggleIcon(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo" onClick={handleMenuItemClick}>
            <FaReact size={30} />
          </Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li
              key={key}
              className={`navbar__container__menu__item ${location.pathname === item.to ? "active" : ""}`}
            >
              <Link className="navbar__container__menu__item__links" to={item.to} onClick={handleMenuItemClick}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon} role="button" aria-label="Toggle navigation menu">
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
