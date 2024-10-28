import React, { useState } from "react";
import CardWidget from "./CardWidget";
import { Link } from "react-scroll";
import { ShoppingCartIcon, Bars3Icon } from "@heroicons/react/24/outline";

const NavBar = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const openAndCloseNav = () => setNavIsOpen(!navIsOpen);

  return (
    <nav className="bg-gradient-to-b from-gray-700 to-gray-500 text-white">
      <div className="h-40  flex items-center justify-between px-4 lg:px-14">
        <div className="text-white flex items-center cursor-pointer">
          <img src="../../public/trunk-wood-svgrepo-com.svg" />
          <div className="flex flex-col font-semibold font-serif">
            <h1 className="text-4xl ">Del</h1>
            <h1 className="text-4xl ">Leño</h1>
          </div>
        </div>
        <div className="flex items-center ">
          <div className="pr-4 border-r border-white hidden md:flex">
            <ul className="flex font-semibold font-sans text-2xl">
              <Link spy={true} smooth={true} to="">
                <li className="px-3 my-2 py-2 lg:px-6 lg:py-6 hover:text-amber-500 border-b-4 border-transparent hover:border-amber-500 transition duration-700  cursor-pointer">
                  Productos
                </li>
              </Link>
              <Link spy={true} smooth={true} to="">
                <li className="px-3 my-2 py-2 lg:px-6 lg:py-6 hover:text-amber-500 border-b-4 border-transparent hover:border-amber-500 transition duration-700  cursor-pointer">
                  Nosotros
                </li>
              </Link>
              <Link spy={true} smooth={true} to="">
                <li className="px-3 my-2 py-2 lg:px-6 lg:py-6 hover:text-amber-500 border-b-4 border-transparent hover:border-amber-500 transition duration-700  cursor-pointer">
                  Contacto
                </li>
              </Link>
            </ul>
          </div>
          <div className="relative h-14 w-14 ml-3 lg:ml-7 mr-1 lg:mr-0 flex items-center justify-center rounded-full hover:bg-gray-500 transition duration-700 cursor-pointer">
            <div className="absolute -top-1 -right-1 rounded-full h-6 w-6 bg-amber-950 text-amber-500 font-semibold flex items-center justify-center border-amber-300 border-2">
              3
            </div>
            <ShoppingCartIcon className="size-9" />
          </div>
          <Bars3Icon
            className="size-9 md:hidden mx-2"
            onClick={openAndCloseNav}
          />
        </div>
      </div>
      {navIsOpen && (
        <div className="absolute top-36 w-full bg-gray-500 md:hidden">
          <ul className="flex-col font-semibold font-sans text-2xl">
            <Link spy={true} smooth={true} to="">
              <li className="ps-9 my-2 py-2  hover:text-amber-500 border-b-4 border-transparent hover:border-amber-500 transition duration-700 cursor-pointer">
                Productos
              </li>
            </Link>
            <Link spy={true} smooth={true} to="">
              <li className="ps-9 my-2 py-2  hover:text-amber-500 border-b-4 border-transparent hover:border-amber-500 transition duration-700 cursor-pointer">
                Nosotros
              </li>
            </Link>
            <Link spy={true} smooth={true} to="">
              <li className="ps-9 my-2 py-2 hover:text-amber-500 border-b-4 border-transparent hover:border-amber-500 transition duration-700 cursor-pointer">
                Contacto
              </li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
