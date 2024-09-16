import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Experience the convenience of fresh and delicious meals delivered
            right to your door.
            <br /> Order now and enjoy a variety of cuisines, tailored to your
            taste and preferences.
          </p>

          <div className="footer-social-icons">
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              className="social-icon"
            />
            <FontAwesomeIcon
              icon={faXTwitter}
              size="2x"
              className="social-icon"
            />
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="2x"
              className="social-icon"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              className="social-icon"
            />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faPhone} /> +254-719-174-000
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> contact@delivery.com
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} Delivery.com. All Rights Reserved.
        Experience the best food delivery service!
      </p>
    </div>
  );
};

export default Footer;
