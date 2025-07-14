import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MainHeader = ({ hideButton }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/meet-the-finalists", label: "Meet finalists" },
    { to: "/lecturers", label: "Lecturers" },
    { to: "/contact", label: "Gallery" },
    { to: "/blog", label: "Our journey" },
  ];

  return (
    <div className="w-full">
      <header className="w-full">
        <div className="flex justify-between items-center m-auto w-full !p-4">
          <div className="text-[1.5rem] font-bold text-[#281085]">
            <Link to="/" className="text-inherit no-underline">
              Casa25
            </Link>
          </div>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden block text-[#281085] text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
          {/* Desktop nav */}
          <nav className="hidden md:block flex-1 w-fit !max-w-[600px]">
            <ul className="flex flex-row items-center flex-1 w-full gap-8 justify-center">
              {navLinks.map((link, idx) => (
                <li className="mr-8" key={link.to}>
                  <Link
                    to={link.to}
                    className="no-underline text-black hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {!hideButton && (
            <div className="hidden md:block">
              <button className="bg-[#281085] text-white border-none !px-4 !py-2 cursor-pointer text-[1rem] rounded hover:bg-[#3a1f8f]">
                Meet the finalists
              </button>
            </div>
          )}
        </div>
        {/* Mobile dropdown menu with animation */}
        <div
          className={`md:hidden fixed top-[70px] left-0 w-full z-10 transition-all duration-300 ease-in-out ${
            menuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
          style={{
            background: "white",
            boxShadow: menuOpen ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
          }}
        >
          <nav>
            <ul className="flex flex-col items-start gap-4 !pb-4">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="no-underline text-black hover:underline block !p-4"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="!px-4">
                <button
                  className="bg-[#281085] text-white border-none cursor-pointer text-[1rem] !px-4 !py-2 rounded hover:bg-[#3a1f8f] w-full text-left"
                  onClick={() => setMenuOpen(false)}
                >
                  Meet the finalists
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
MainHeader.propTypes = {
  hideButton: PropTypes.bool,
};

export default MainHeader;
