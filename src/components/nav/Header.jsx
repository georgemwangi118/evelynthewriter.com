import { useState } from "react";
//import logo from "../../assets/logo.png";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const style = {
    "@media (max-width: 640px)": { width: "100%" },
  };
  return (
    <nav className="p-2" style={style}>
      <div className="flex justify-between items-center sm:w-full">
        {/**Logo */}
        <div className=" text-xl font-bold">
          <a href="/">
            <img src="/logo.png" alt="logo" className="w-40 h-45" />
          </a>
        </div>
        {/**Menu Icon */}
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </div>
        {/**Menu */}
        <ul className={`${menuOpen ? "lg:flex" : "hidden"} lg:flex space-x-8`}>
          {/**Menu Items */}
          <li>
            <a
              href="faq"
              className={`${
                menuOpen ? "block" : "hidden"
              } lg:inline-block hover:border-t-2 hover:border-gray-500 px-2 py-1`}
              style={{ fontSize: 12, fontWeight: 600 }}
            >
              FAQs
            </a>
          </li>
          <li>
            <a
              href="how-it-works"
              className={`${
                menuOpen ? "block" : "hidden"
              } lg:inline-block hover:border-t-2 hover:border-gray-500 px-2 py-1`}
              style={{ fontSize: 12, fontWeight: 600 }}
            >
              How it Works
            </a>
          </li>
          <li>
            <a
              href="pricing"
              className={`${
                menuOpen ? "block" : "hidden"
              } lg:inline-block hover:border-t-2 hover:border-gray-500 px-2 py-1`}
              style={{ fontSize: 12, fontWeight: 600 }}
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="reviews"
              className={`${
                menuOpen ? "block" : "hidden"
              } lg:inline-block hover:border-t-2 hover:border-gray-500 px-2 py-1`}
              style={{ fontSize: 12, fontWeight: 600 }}
            >
              Reviews
            </a>
          </li>
          <li>
            <a
              href="contact-us"
              className={`${
                menuOpen ? "block" : "hidden"
              } lg:inline-block hover:border-t-2 hover:border-gray-500 px-2 py-1`}
              style={{ fontSize: 12, fontWeight: 600 }}
            >
              Contact us
            </a>
          </li>
          <li>
            <a
              href="order"
              className={`${
                menuOpen ? "block" : "hidden"
              }text-red-500 px-2 py-1`}
              style={{
                fontSize: 12,
                fontWeight: 600,
                border: "1px solid red",
                borderRadius: "15px",
              }}
            >
              ORDER NOW
            </a>
          </li>
          <li>
            <a
              href="login"
              className={`${
                menuOpen ? "block" : "hidden"
              } lg:inline-block hover:border-t-2 hover:border-gray-500 px-2 py-1`}
              style={{ fontSize: 12, fontWeight: 600 }}
            >
              LOGIN
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
