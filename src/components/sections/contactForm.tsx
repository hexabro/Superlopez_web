"use client";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_r3953dg",
        "template_gw1uqhq",
        formRef.current,
        "nEH_ljSpW8z2TW2aI",
      )

      .then(() => {
        setSubmitted(true);
      })

      .catch((error) => {
        console.error("error al enviar: ", error);
        alert("hubo un error al enviar el mensaje");
      });
  };

  if (submitted)
    return (
      <div className="w-full max-w-md mx-auto mt-8 p-6 rounded-3xl bg-green-100 border border-green-300 shadow-lg text-center animate-fade-in">
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          ¡Mensaje enviado con éxito! ✅
        </h3>
        <p className="text-green-700 text-base">
          Gracias por tu mensaje. Nos pondremos en contacto contigo lo antes
          posible.
        </p>
      </div>
    );
  return (
    <div className="w-full max-w-xl mx-auto bg-white dark:bg-neutral-900 p-8 rounded-xl shadow-md">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col space-y-2"
      >
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          required
          className="p-3 border border-gray-300 rounded-2xl"
        />
        <input
          type="text"
          name="surnames"
          placeholder="Apellidos"
          required
          className="p-3 border border-gray-300 rounded-2xl"
        />
        <input
          type="phone"
          name="phone"
          placeholder="Teléfono"
          required
          className="p-3 border border-gray-300 rounded-2xl"
        />
        <input
          type="email"
          name="email"
          placeholder="correo"
          required
          className="p-3 border border-gray-300 rounded-2xl"
        />
        <input
          type="text"
          name="company"
          placeholder="Empresa"
          required
          className="p-3 border border-gray-300 rounded-2xl"
        />

        <button
          type="submit"
          className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-2xl hover:bg-orange-300 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
