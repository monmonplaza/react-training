import React from "react";
import { FaPhoneAlt, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="header__top__wrapper d--flex">
              <ul className="header__contact d--flex">
                <li>
                  <FaPhoneAlt /> 049 521 0732
                </li>
                <li>
                  <FaMobileAlt /> 0908 202 0749 | 0926 363 9722
                </li>
                <li>
                  <FaEnvelope />
                  <a href="mailto:info@frontlineacademy.asia">
                    info@frontlineacademy.asia
                  </a>
                </li>
              </ul>

              <ul className="header__action d--flex">
                <li>
                  <a href="/">Facebook</a>
                </li>
                <li>
                  <a href="/">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="header__main">
          <div className="container">
            <div className="header__main__wrapper d--flex">
              <figure className="branding">
                <img src="../images/logo.png" alt="FCA Logo " />
              </figure>
              <nav className={isOpen ? "open" : ""}>
                <ul className="d--flex">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">About</a>
                  </li>
                  <li>
                    <a href="/">Admission</a>
                  </li>
                  <li>
                    <a href="/">Services</a>
                  </li>
                  <li className="has__child ">
                    <a href="/">Media</a>
                    <ul className="submenu ">
                      <li>
                        <a href="/">Video</a>
                      </li>
                      <li>
                        <a href="/">Gallery</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                  <li>
                    <Link to="/" className="btn--donate">
                      Donate
                    </Link>
                  </li>
                </ul>
              </nav>

              <button
                className={isOpen ? "toggle__btn active" : "toggle__btn"}
                onClick={() => {
                  handleMenuOpen();
                }}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
