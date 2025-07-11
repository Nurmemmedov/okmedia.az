import React, { useState } from "react";
import logo from "../img/logo.png";
import { HiBell } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutSubmenuOpen, setAboutSubmenuOpen] = useState(false);
  const [servicesSubmenuOpen, setServicesSubmenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    const newState = !mobileMenuOpen;
    setMobileMenuOpen(newState);

    if (!newState) {
      setAboutSubmenuOpen(false);
      setServicesSubmenuOpen(false);
    }
  };

  return (
    <header className="p-4 sticky top-0 z-50 transition-all bg-white shadow-md">
      <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between h-20">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleMobileMenu}
            className="md:hidden"
            aria-label="Mobil menyunu aç/bağla"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          <Link to="/" className="flex items-center">
            <img className="w-[180px]" src={logo} alt="logo" />
          </Link>
        </div>

        <ul className="hidden md:flex space-x-6">
          <li className="relative group">
            <span className="flex items-center px-4 -mb-1 text-gray-500 hover:text-black cursor-pointer">
              Haqqımızda
            </span>
            <ul className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-lg mt-3 z-50 min-w-[220px] whitespace-nowrap">
              {[
                { name: "Şirkət haqqında", path: "/about" },
                { name: "Müştərilərin fikri", path: "/coment" },
                { name: "Karyera", path: "/career" },
                { name: "Layihələrimiz", path: "/projects" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="relative group">
            <span className="flex items-center px-4 -mb-1 text-gray-500 hover:text-black cursor-pointer">
              Xidmətlərimiz
            </span>
            <ul className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-lg mt-3 z-50 min-w-[220px] whitespace-nowrap">
              {[
                { name: "Veb saytların hazırlanması", path: "/Web" },
                { name: "Veb saytlara texniki dəstək", path: "/TechSupport" },
                { name: "Korporativ mail", path: "/KorporativMail" },
                { name: "Ödəmə sistemlərinin inteqrasiyası", path: "/paymentIntegration" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link
              to={"/Portfolio"}
              className="flex items-center px-4 -mb-1 text-gray-500 hover:text-black"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to={"/Bloq"}
              className="flex items-center px-4 -mb-1 text-gray-500 hover:text-black"
            >
              Bloq
            </Link>
          </li>
          <li>
            <Link
              to={"/Contact"}
              className="flex items-center px-4 -mb-1 text-gray-500 hover:text-black"
            >
              Əlaqə
            </Link>
          </li>
        </ul>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-3">
            <button className="relative flex items-center p-2 rounded-full border-black text-black hover:scale-110 transition bg-transparent">
              <HiBell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 text-xs bg-gray-400 rounded text-white px-1">
                0
              </span>
            </button>
            <a
              href="https://wa.me/994552509600"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 font-semibold rounded-xl bg-gray-200 hover:bg-gray-300"
            >
              +99455 250 96 00
            </a>
            <a
              href="#footer"
              className="px-5 py-2 font-semibold rounded-xl bg-gray-200 hover:bg-gray-300"
            >
              Qiymət təklifi al
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button className="px-2 py-2 font-semibold rounded-xl bg-gray-200 hover:bg-gray-300">
              az
            </button>
            <button className="px-2 py-2 font-semibold rounded-xl bg-gray-200 hover:bg-gray-300">
              en
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-[600px] w-full bg-white shadow-lg transform ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50 flex flex-col justify-between`}
      >
        <div className="mt-20 px-6">
          <ul className="flex flex-col space-y-4">
            <li>
              <button
                onClick={() => setAboutSubmenuOpen(!aboutSubmenuOpen)}
                className="w-full text-left font-semibold text-gray-800 flex justify-between items-center"
              >
                Haqqımızda
                <span>{aboutSubmenuOpen ? "▲" : "▼"}</span>
              </button>
              {aboutSubmenuOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  {[
                    { name: "Şirkət haqqında", path: "/about" },
                    { name: "Müştərilərin fikri", path: "/coment" },
                    { name: "Karyera", path: "/career" },
                    { name: "Layihələrimiz", path: "/projects" },
                  ].map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.path}
                        onClick={toggleMobileMenu}
                        className="block text-gray-600 hover:text-black"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <button
                onClick={() => setServicesSubmenuOpen(!servicesSubmenuOpen)}
                className="w-full text-left font-semibold text-gray-800 flex justify-between items-center"
              >
                Xidmətlərimiz
                <span>{servicesSubmenuOpen ? "▲" : "▼"}</span>
              </button>
              {servicesSubmenuOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  {[
                    { name: "Veb saytların hazırlanması", path: "/Web" },
                    { name: "Veb saytlara texniki dəstək", path: "/TechSupport" },
                    { name: "Korporativ mail", path: "/KorporativMail" },
                    {
                      name: "Ödəmə sistemlərinin inteqrasiyası",
                      path: "/paymentIntegration",
                    },
                  ].map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.path}
                        onClick={toggleMobileMenu}
                        className="block text-gray-600 hover:text-black"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link
                to="/Portfolio"
                onClick={toggleMobileMenu}
                className="text-gray-800 hover:text-black"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/Bloq"
                onClick={toggleMobileMenu}
                className="text-gray-800 hover:text-black"
              >
                Bloq
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                onClick={toggleMobileMenu}
                className="text-gray-800 hover:text-black"
              >
                Əlaqə
              </Link>
            </li>
          </ul>
        </div>

        <div className="px-6 py-4 border-t border-gray-300 flex flex-col gap-3">
          <a
            href="tel:+994552509600"
            className="flex items-center gap-2 text-black font-semibold"
            onClick={toggleMobileMenu}
          >
            +99455 250 96 00
          </a>

          <button
            className="w-full px-4 py-3 font-semibold rounded-xl bg-green-500 hover:bg-green-600 text-white transition"
          >
            Qiymət təklifi al
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
