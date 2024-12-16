import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutView = () => {
  return (
    <div className="min-h-screen bg-slate-400 flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-4xl font-semibold text-white mb-6">Sobre Nosotros</h1>
      <div className="bg-gray-500 shadow-md rounded-lg max-w-3xl p-8 space-y-4">
        <motion.p
          className="text-xl text-white leading-relaxed"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          En nuestra tienda, nos dedicamos a ofrecer{" "}
          <span className="text-amber-500 font-bold">
            productos de alta calidad{" "}
          </span>
          que satisfacen las necesidades de nuestros clientes. Nuestro propósito
          es no solo vender productos, sino también{" "}
          <span className="text-amber-500 font-bold">
            crear una experiencia{" "}
          </span>
          de compra excepcional, respaldada por un{" "}
          <span className="text-amber-500 font-bold">
            servicio al cliente cálido y atento.
          </span>
        </motion.p>
        <motion.p
          className="text-xl text-white leading-relaxed"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          Nuestra misión es construir una comunidad de clientes satisfechos y
          leales, promoviendo valores como{" "}
          <span className="text-amber-500 font-bold">
            la confianza, la calidad y la sostenibilidad{" "}
          </span>
          en todo lo que hacemos. Creemos que cada producto que ofrecemos tiene
          el potencial de{" "}
          <span className="text-amber-500 font-bold">
            marcar la diferencia{" "}
          </span>{" "}
          en la vida de nuestros clientes.
        </motion.p>
        <motion.p
          className="text-xl text-white leading-relaxed"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <span className="text-amber-500 font-bold">
            Gracias por elegirnos{" "}
          </span>{" "}
          como su tienda de confianza. Estamos comprometidos a seguir mejorando
          cada día para superar sus expectativas y{" "}
          <span className="text-amber-500 font-bold">brindarle lo mejor.</span>
        </motion.p>
      </div>
      <div className="mt-5 flex flex-wrap justify-center gap-3 md:gap-10">
        <Link to="/all-products">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-amber-500 to-amber-700 hover:brightness-110 hover:scale-110 focus:outline-none font-medium rounded-lg text-sm w-48 py-3.5 text-center me-2 mb-2 transition-all duration-500"
          >
            Ver productos
          </button>
        </Link>
        <Link to="/contact">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-amber-500 to-amber-700 hover:brightness-110 hover:scale-110 focus:outline-none font-medium rounded-lg text-sm w-48 py-3.5 text-center me-2 mb-2 transition-all duration-500"
          >
            Contáctanos
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutView;
