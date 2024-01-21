import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a
              href="#"
              className="nav-link px-2 text-body-secondary footerText"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link px-2 text-body-secondary footerText"
            >
              Features
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className=" footerText nav-link px-2 text-body-secondary"
            >
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link px-2 text-body-secondary footerText"
            >
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link px-2 text-body-secondary footerText"
            >
              About
            </a>
          </li>
        </ul>
        <p className="text-center text-body-secondary footerText">
          © 2023 Company, Inc
        </p>
      </footer>
    </div>
  );
};

export default Footer;
