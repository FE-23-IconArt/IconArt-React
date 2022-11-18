import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="footer p-5">
        <h1>Follow For More</h1>
        <hr className="w-25 mx-auto" />
        <div className="py-3">
          <a href="https://www.facebook.com" className="text-white text-decoration-none fs-5 m-4">
            <FaFacebook />
          </a>
          <a href="https://www.Twitter.com" className="text-white text-decoration-none fs-5 m-4">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" className="text-white text-decoration-none fs-5 m-4">
            <FaInstagram />
          </a>
        </div>
        <article className="section"></article>
      </section>
    </>
  );
};

export default Footer;
