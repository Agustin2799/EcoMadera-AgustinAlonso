import React, { useState } from "react";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const Nav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const openAndCloseNav = () => setNavIsOpen(!navIsOpen);

  const navLinkClasses = ({ isActive }) =>
    isActive
      ? "text-amber-500 px-3 my-2 py-2 lg:px-6 lg:py-6 border-b-4 border-transparent hover:border-amber-500 transition duration-700 cursor-pointer"
      : "px-3 my-2 py-2 lg:px-6 lg:py-6 hover:text-amber-500 border-b-4 border-transparent hover:border-amber-500 transition duration-700 cursor-pointer";

  return (
    <nav className="bg-gradient-to-b from-gray-700 to-gray-500 text-white z-10">
      <div className="h-40 flex items-center justify-between px-4 lg:px-14">
        {/* Logo */}
        <NavLink to="/">
          <div className="text-white flex items-center cursor-pointer">
            <img
              className="h-20"
              src="../../trunk-wood-svgrepo-com.svg"
              alt="EcoMadera Logo"
            />
            <div className="flex flex-col font-light font-serif">
              <h1 className="text-xl md:text-3xl">Eco</h1>
              <h1 className="text-xl md:text-3xl">Madera</h1>
            </div>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="flex items-center">
          <div className="pr-4 border-r border-white hidden md:flex">
            <ul className="flex font-semibold font-sans text-2xl">
              <NavLink to="/all-products" className={navLinkClasses}>
                Productos
              </NavLink>
              <NavLink
                to="/about"
                className={`${navLinkClasses} pointer-events-none opacity-50`}
              >
                Nosotros
              </NavLink>
              <NavLink
                to="/contact"
                className={`${navLinkClasses} pointer-events-none opacity-50`}
              >
                Contacto
              </NavLink>
            </ul>
          </div>
          {/* Cart Widget */}
          <Link to="/cart">
            <CartWidget productosEnCarrito={5} />
          </Link>
          <div
            className="sm:hidden flex items-center"
            onClick={openAndCloseNav}
          >
            {/* Este div contiene el componente motion.div de Framer Motion, que se utiliza para aplicar animaciones. */}
            <motion.div
              // La propiedad 'transition' define la duración de la animación en 0.8 segundos.
              transition={{ duration: 0.8 }}
              // 'animate' define las animaciones que deben aplicarse a este div
              animate={{
                // La animación de opacidad es de 0 a 1, lo que hace que el elemento se desvanezca al aparecer.
                opacity: [0, 1],
                // La animación de rotación, si navOpen es verdadero, rota 180 grados; si es falso, no rota (0 grados).
                rotate: navIsOpen ? 180 : 0,
              }}
            >
              {/* Este div dentro de motion.div envuelve los íconos y tiene una clave (key) condicional basada en
    el estado 'navOpen'. Esto es importante para que React trate los elementos como si fueran diferentes
    cuando 'navOpen' cambia y haga que se realice una transición suave entre los íconos. 
    
    En Framer Motion, las propiedades initial y exit se utilizan en la animación de un componente cuando se monta (inicia) o se desmonta (sale) de la interfaz de usuario.
    */}
              <motion.div
                key={navIsOpen ? "X" : "Bars"} // Establece un valor dinámico para la clave (key) basado en el valor de 'navOpen'.
                initial={{ opacity: 0 }} // Establece la opacidad inicial en 0, es decir, el ícono comienza invisible.
                // 'animate' define cómo debe cambiar la opacidad cuando el ícono es visible.
                animate={{ opacity: 1 }} // Cambia la opacidad a 1, lo que hace que el ícono se vuelva visible.
                // 'exit' define cómo debe comportarse la opacidad cuando el ícono desaparece (en este caso se desvanece).
                exit={{ opacity: 0 }} // Hace que el ícono se desvanezca (opacidad 0) cuando el estado cambia.
                // 'transition' también se aplica aquí para definir la duración de la transición de opacidad.
                transition={{ duration: 0.8 }} // Define que la transición de opacidad dure 0.8 segundos.
              >
                {/* Aquí decidimos qué ícono se muestra dependiendo de si 'navOpen' es verdadero o falso. */}
                {navIsOpen ? (
                  // Si 'navOpen' es verdadero, mostramos el ícono de la 'X' (ícono de cerrar).
                  <XMarkIcon className="size-9 text-white" />
                ) : (
                  // Si 'navOpen' es falso, mostramos el ícono de las barras (ícono de menú).
                  <Bars3Icon className="size-9 text-white" />
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {
        <motion.div
          className="absolute top-36 w-full bg-gray-600 md:hidden z-0"
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, y: -350 }} // Establece la opacidad inicial en 0, es decir, el ícono comienza invisible.
          // 'animate' define cómo debe cambiar la opacidad cuando el ícono es visible.
          animate={{ opacity: navIsOpen ? 1 : 0, y: navIsOpen ? 0 : -350 }} // Cambia la opacidad a 1, lo que hace que el ícono se vuelva visible.
          // 'exit' define cómo debe comportarse la opacidad cuando el ícono desaparece (en este caso se desvanece).
          exit={{ opacity: 0, y: -350 }} // Hace que el ícono se desvanezca (opacidad 0) cuando el estado cambia.
        >
          <ul className="flex flex-col font-semibold font-sans text-2xl">
            <NavLink
              to="/all-products"
              className={navLinkClasses}
              onClick={openAndCloseNav}
            >
              Productos
            </NavLink>
            <NavLink
              to="/about"
              className={`${navLinkClasses} pointer-events-none opacity-50`}
              onClick={openAndCloseNav}
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/contact"
              className={`${navLinkClasses} pointer-events-none opacity-50`}
              onClick={openAndCloseNav}
            >
              Contacto
            </NavLink>
          </ul>
        </motion.div>
      }
    </nav>
  );
};

export default Nav;
