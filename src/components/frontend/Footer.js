import React from "react";
import { FaPhoneAlt, FaMobileAlt, FaEnvelope, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper d--grid">
            <div className="footer__item text--center">
              <img src="./images/logo-white.png" alt="" />
              <p>All Rights Reserved © {new Date().getFullYear()}</p>
            </div>
            <div className="footer__item">
              <h3>Contact Details</h3>
              <ul>
                <li>
                  <FaPhoneAlt /> 049 521 0732
                </li>
                <li>
                  <FaMobileAlt />
                  0908 202 0749
                </li>
                <li>
                  <FaMobileAlt /> 0926 363 9722
                </li>
                <li>
                  <FaEnvelope /> info@fca.edu.ph
                </li>
                <li>
                  <FaHome /> Flora Drive, Brgy. San Ignacio, San Pablo City,
                  Laguna, 4000
                </li>
              </ul>
            </div>

            <div className="footer__item">
              <h3>Quicklinks</h3>
              <ul>
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

                <li>
                  <a href="/">Contact</a>
                </li>
                <li>
                  <Link to="/">Donate</Link>
                </li>
              </ul>
            </div>
            <div className="footer__item">
              <h3>School Portal</h3>
              <ul>
                <li>
                  <a href="/">FACEBOOK PAGE</a>
                </li>
                <li>
                  <a href="/">FCA SMIS</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
