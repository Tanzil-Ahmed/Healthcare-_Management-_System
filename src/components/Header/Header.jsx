import { useEffect, useRef, useState } from "react";
import logo69 from "../../assets/images/logo69.png";
import userImg from "../../assets/images/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Appointment",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white fixed top-0 left-0 w-full z-50 py-0">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/*======= Logo =======*/}
          <div
            style={{
              perspective: "500px",
              animation: "spin 4s linear infinite",
            }}
          >
            <img
              src={logo69}
              alt="logo69"
              style={{
                width: "60px", // Updated logo width
                height: "auto",
                transform: "rotateY(20deg)", // Rotate the logo along the Y-axis for a 3D effect
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add a subtle shadow effect
                transition: "transform 0.3s ease", // Add a transition effect for smoother animation
              }}
            />
          </div>

          {/* ======== Menu ======= */}
          <div className="md:hidden">
            <span onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>

          <div
            className={`md:flex md:items-center md:gap-8 ${
              isMenuOpen ? "flex" : "hidden"
            }`}
            ref={menuRef}
          >
            <ul className="menu flex flex-col md:flex-row items-center gap-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className="text-lg font-bold hover:text-primaryColor transition duration-300"
                    activeClassName="text-primaryColor"
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/*============= Nav Right ===========*/}
          <div className="flex items-center gap-4">
            <div>
              <Link to="/">
                <figure className="w-10 h-10 rounded-full cursor-pointer overflow-hidden">
                  <img
                    src={userImg}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </figure>
              </Link>
            </div>

            <Link to="/login">
              <button className="bg-primaryColor py-2 px-6 text-white font-semibold rounded-full transition duration-300 hover:bg-opacity-80">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
