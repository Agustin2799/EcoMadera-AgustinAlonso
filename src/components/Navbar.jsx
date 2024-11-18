import React, { useState } from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NavBar = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const openAndCloseNav = () => setNavIsOpen(!navIsOpen);

  const navLinkClasses = ({ isActive }) =>
    isActive
      ? "text-amber-500 px-3 my-2 py-2 lg:px-6 lg:py-6 border-b-4 border-transparent hover:border-amber-500 transition duration-700 cursor-pointer"
      : "px-3 my-2 py-2 lg:px-6 lg:py-6 hover:text-amber-500 border-b-4 border-transparent hover:border-amber-500 transition duration-700 cursor-pointer";

  return (
    <nav className="bg-gradient-to-b from-gray-700 to-gray-500 text-white">
      <div className="h-40 flex items-center justify-between px-4 lg:px-14">
        {/* Logo */}
        <NavLink to="/">
          <div className="text-white flex items-center cursor-pointer">
            <img
              className="h-20 md:h-28"
              src="../../trunk-wood-svgrepo-com.svg"
              alt="EcoMadera Logo"
            />
            <div className="flex flex-col font-semibold font-serif">
              <h1 className="text-xl md:text-3xl">Eco</h1>
              <h1 className="text-xl md:text-3xl">Madera</h1>
            </div>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="flex items-center">
          <div className="pr-4 border-r border-white hidden md:flex">
            <ul className="flex font-semibold font-sans text-2xl">
              <NavLink to="/products" className={navLinkClasses}>
                Productos
              </NavLink>
              <NavLink to="/about" className={navLinkClasses}>
                Nosotros
              </NavLink>
              <NavLink to="/contact" className={navLinkClasses}>
                Contacto
              </NavLink>
            </ul>
          </div>
          {/* Cart Widget */}
          <CartWidget productosEnCarrito={5} />
          {/* Mobile Navigation Icon */}
          {navIsOpen ? (
            <XMarkIcon
              className="size-9 md:hidden mx-4"
              onClick={openAndCloseNav}
            />
          ) : (
            <Bars3Icon
              className="size-9 md:hidden mx-4"
              onClick={openAndCloseNav}
            />
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {navIsOpen && (
        <div className="absolute top-36 w-full bg-gray-500 md:hidden">
          <ul className="flex flex-col font-semibold font-sans text-2xl">
            <NavLink to="/products" className={navLinkClasses}>
              Productos
            </NavLink>
            <NavLink to="/about" className={navLinkClasses}>
              Nosotros
            </NavLink>
            <NavLink to="/contact" className={navLinkClasses}>
              Contacto
            </NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
