import React from "react";
import { Link } from "react-router-dom";
import logo69 from "../../assets/images/logo69.png";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillYoutube, AiFillGithub } from "react-icons/ai";

const socialLinks = [
  {
    path: "https://www.youtube.com//",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://github.com/Tanzil-Ahmed",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/in/tanzil-ahmed-3731922a2/",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks = [
  {
    title: "Quick Links",
    links: [
      { path: "/home", display: "Home" },
      { path: "/", display: "About Us" },
      { path: "/services", display: "Services" },
      { path: "/", display: "Blog" },
    ],
  },
  {
    title: "I want to:",
    links: [
      { path: "/find-a-doctor", display: "Find a Doctor" },
      { path: "/", display: "Request an Appointment" },
      { path: "/", display: "Find a Location" },
      { path: "/", display: "Get an Opinion" },
    ],
  },
  {
    title: "Support:",
    links: [
      { path: "/", display: "Donate" },
      { path: "/contact", display: "Contact Us" },
    ],
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-10 pt-6 bg-gray-800 text-white">
      {" "}
      {/* Adjusted padding */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1 flex flex-col justify-between">
            <img
              src={logo69}
              alt="Logo"
              className="w-32 h-32 animate-spin-slow" // Added animate-spin-slow class for the animation
            />
            <p className="text-sm leading-6 mt-4">
              &copy; {year} Tanzil Ahmed. All rights reserved.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <a
                  href={link.path}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-white rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {quickLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-lg font-semibold">{section.title}</h2>
              <ul>
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-sm leading-6 hover:text-primaryColor"
                    >
                      {link.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
