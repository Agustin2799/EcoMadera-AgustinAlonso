import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import toast from "react-hot-toast";

import * as Yup from "yup";

const ContactView = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "El nombre debe tener al menos 3 caracteres")
      .required("El nombre es obligatorio"),
    email: Yup.string()
      .email("Debe ser un correo válido")
      .required("El correo es obligatorio"),
    phone: Yup.string()
      .matches(/^\d{9}$/, "El teléfono debe tener 9 dígitos")
      .required("El teléfono es obligatorio"),
    message: Yup.string()
      .min(10, "El mensaje debe tener al menos 10 caracteres")
      .required("El mensaje es obligatorio"),
  });

  const handleSubmit = (values, { resetForm }) => {
    // Mostrar el toast
    toast.success(
      `Gracias por contactarnos, ${values.name}. Responderemos pronto.`
    );
    // Reiniciar el formulario
    resetForm();
  };

  return (
    <div className="min-h-screen bg-slate-400 flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-4xl font-semibold text-white mb-6">Contáctanos</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="bg-gray-600 shadow-md rounded-lg w-full max-w-md p-6 space-y-4 border border-slate-900">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white mb-1"
              >
                Nombre
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="w-full border bg-slate-700 text-white border-slate-900 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm font-medium mt-1 bg-slate-800 text-center rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-1"
              >
                Correo Electrónico
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-full border bg-slate-700 text-white border-slate-900 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm font-medium mt-1 bg-slate-800 text-center rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-white mb-1"
              >
                Teléfono
              </label>
              <Field
                type="text"
                id="phone"
                name="phone"
                className="w-full border bg-slate-700 text-white border-slate-900 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm font-medium mt-1 bg-slate-800 text-center rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white mb-1"
              >
                Mensaje
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                rows="4"
                className="w-full border bg-slate-700 text-white border-slate-900 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm font-medium mt-1 bg-slate-800 text-center rounded-md"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full text-white bg-gradient-to-br from-amber-500 to-amber-700 hover:brightness-110 hover:scale-110 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all duration-500"
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactView;
