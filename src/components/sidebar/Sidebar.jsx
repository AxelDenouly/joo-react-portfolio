import React from "react";
import "./sidebar.css";
import Logo from "../../assets/logo.svg";
// import LogoComp from "../../assets/LogoComp.svg"
import Logo__new from "../../assets/Logo__new.png";

const Sidebar = () => {

  return (
    <aside className="aside">
      <a href="#home" className="nav__logo">
        <img src={Logo__new} alt="" />
      </a>

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="icon-home"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="icon-user-following"></i>
              </a>
            </li>
            
            <li className="nav__item">
              <a href="#goals" className="nav__link">
                <i className="icon-target"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#resume" className="nav__link">
                <i className="icon-graduation"></i>
              </a>
            </li>


            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="icon-layers"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="icon-bubble"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">
          &copy; 2024 All Right Reserved | Axel Denouly
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
