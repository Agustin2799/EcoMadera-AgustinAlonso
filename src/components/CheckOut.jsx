import React, { useState, useContext } from "react";
import { useFormik } from "formik"; // Importa el hook useFormik de Formik para manejar el estado y validación del formulario.
import * as Yup from "yup"; // Importa Yup para definir esquemas de validación.
import { cartContext } from "../context/cartContext"; // Contexto para acceder al carrito de compras.
import Modal from "./Modal"; // Componente para mostrar un modal tras la confirmación de compra.
import { sendOrderToDb } from "../database/ordersQueries";

const CheckOut = () => {
  // Estado para controlar la visibilidad del modal.
  const [isModalOpen, setModalOpen] = useState(false);
  const [orderId, setOrderId] = useState(null)
  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false)
    setCart([])
  };

  // Accede al contexto del carrito.
  const { cart, setCart } = useContext(cartContext);

  // Definición del esquema de validación con Yup.
  const validationSchema = Yup.object({
    nombre: Yup.string()
      .required("El nombre es obligatorio") // El campo es requerido.
      .min(2, "El nombre debe tener al menos 2 caracteres"), // Valida un mínimo de caracteres.
    apellido: Yup.string()
      .required("El apellido es obligatorio")
      .min(2, "El apellido debe tener al menos 2 caracteres"),
    telefono: Yup.string()
      .required("El teléfono es obligatorio")
      .matches(/^[0-9]+$/, "El teléfono solo debe contener números"), // Valida que solo contenga números.
    email: Yup.string()
      .email("Debe ser un correo válido") // Valida el formato de correo electrónico.
      .required("El correo electrónico es obligatorio"),
    confirmarEmail: Yup.string()
      .oneOf([Yup.ref("email")], "Los correos no coinciden") // Compara con el campo email para asegurar coincidencia.
      .required("Debe confirmar el correo electrónico"),
  });

  // Configuración del formulario con useFormik.
  const formik = useFormik({
    initialValues: {
      // Valores iniciales de los campos del formulario.
      nombre: "",
      apellido: "",
      telefono: "",
      email: "",
      confirmarEmail: "",
    },
    validationSchema, // Esquema de validación definido con Yup.
    onSubmit: async (values) => {
      // Maneja el envío del formulario.
      console.log("Datos del comprador:", values); // Imprime los valores ingresados.
      const orderIdfromDb = await sendOrderToDb(values, cart)
      setOrderId(orderIdfromDb)
      openModal(); // Abre el modal tras el envío exitoso.
    },
  });

  return (
    <>
      <div className="w-full lg:w-1/3 bg-slate-700 text-white">
        {/* Resumen del pedido */}
        <div className="border rounded-lg m-7 flex flex-col p-5">
          <h1 className="text-2xl mb-5">Resumen del pedido</h1>
          {cart.map((item, index) => (
            <div className="flex justify-between" key={index}>
              <h2 className="text-xl me-3">{`(${item.count})  ${item.name}`}</h2>
              <h3 className="text-xl text-green-500">
                ${item.price * item.count}
              </h3>
            </div>
          ))}
          <div className="border-0 font-semibold border-t-2 mb-3 mt-10 flex justify-between pt-2">
            <h2 className="text-2xl">Total</h2>
            <h3 className="text-2xl text-green-500">
              ${cart.reduce((acum, item) => acum + item.price * item.count, 0)}
            </h3>
          </div>
        </div>

        {/* Formulario de datos del comprador */}
        <div className="border rounded-lg m-7 flex flex-col p-5">
          <h1 className="text-2xl mb-5">Datos del comprador</h1>
          <form
            className="flex flex-col items-center justify-center"
            onSubmit={formik.handleSubmit} // Asocia el manejo del envío al método handleSubmit de Formik.
          >
            {[
              { name: "nombre", placeholder: "Nombre", label: "Nombre" },
              { name: "apellido", placeholder: "Apellido", label: "Apellido" },
              { name: "telefono", placeholder: "Teléfono", label: "Teléfono" },
              { name: "email", placeholder: "Email", label: "Email" },
              {
                name: "confirmarEmail",
                placeholder: "Confirmar email",
                label: "Confirmar email",
              },
            ].map(({ name, placeholder, label }) => (
              <div className="w-5/6" key={name}>
                <label
                  htmlFor={name}
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  {label} {/* Etiqueta descriptiva del campo */}
                </label>
                {formik.touched[name] && formik.errors[name] && (
                  // Muestra el mensaje de error si el campo fue tocado y contiene un error.
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors[name]}
                  </div>
                )}
                <input
                  className="bg-[#222630] px-4 py-1 my-1 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                  id={name} // Identificador único del campo.
                  name={name} // Nombre del campo asociado al estado de Formik.
                  placeholder={placeholder} // Texto de marcador de posición.
                  type="text"
                  onChange={formik.handleChange} // Actualiza el estado cuando cambia el valor.
                  onBlur={formik.handleBlur} // Marca el campo como "tocado" cuando pierde el foco.
                  value={formik.values[name]} // Vincula el valor actual del estado de Formik.
                />
              </div>
            ))}
            <div className="flex w-full mt-5">
              <div className="flex w-full mt-5">
                <div
                  className="relative group mx-auto"
                  onClick={() => formik.handleSubmit()}
                >
                  <div className="relative w-64 h-14 opacity-90 overflow-hidden rounded-xl bg-slate-800 z-10">
                    <div className="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transition-all duration-700 h-full w-44 bg-gradient-to-r from-green-400 to-white/10 opacity-30 -skew-x-12"></div>
                    <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-slate-800">
                      <button
                        className="font-semibold text-lg h-full opacity-90 w-full px-16 py-3 rounded-xl bg-slate-800 text-green-400"
                        type="button" // Cambiando de "Submit" a "button"
                      >
                        Comprar
                      </button>
                    </div>
                    <div className="absolute duration-1000 group-hover:animate-spin w-full h-[100px] bg-gradient-to-r from-green-400 to-green-200 blur-[30px]"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Modal de confirmación */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <h2 className="text-2xl font-semibold mb-4">
                ¡Compra realizada con éxito! 🥳
              </h2>
              <p className="mb-4 text-xl">Gracias por tu compra. ❤️</p>
              <p className="mb-4 font-semibold text-green-600">
                Codigo de orden:{" "}
                <span className="font-medium text-white ms-3">{orderId}</span>
              </p>

              <button
                className="bg-green-600 text-white px-4 py-2 rounded"
                onClick={closeModal} // Cierra el modal al hacer clic.
              >
                Entendido
              </button>
            </Modal>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
