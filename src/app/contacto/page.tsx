"use client";

import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { Mail, Phone, Building, User, BusIcon, User2, Building2 } from "lucide-react";
import Link from "next/link";

/**
 * Página de Contacto estilizada – Hero Webs
 * — Usa la misma lógica de envío a EmailJS
 * — Sin dependencias externas aparte de React, Next, Tailwind, Framer Motion, Lucide
 */

export default function ContactPage() {
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
        "nEH_ljSpW8z2TW2aI" 
      )
      .then(() => setSubmitted(true))
      .catch((err) => {
        console.error("Error al enviar:", err);
        alert("Hubo un error al enviar el mensaje, inténtalo de nuevo.");
      });
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d] dark:from-white dark:via-gray-100 dark:to-white flex items-center py-24 px-4">
      <div className="mx-auto w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        {/* Lado informativo / hero */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white dark:text-neutral-900"
        >
          <h1 className="text-4xl md:text-5xl pb-1.5 font-extrabold bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent mb-6">
            ¡Hablemos de tu próximo proyecto!
          </h1>
          <p className="text-lg mb-8 max-w-prose text-neutral-300 dark:text-neutral-700">
            Completa el formulario o llámanos directamente: estamos listos para
            darle superpoderes a tu presencia online.
          </p>

          <div className="space-y-4 text-sm">
            <p className="flex items-center gap-3">
              <Phone size={18} className="text-orange-500" /> +34 622 040 285
            </p>
            <p className="flex items-center gap-3">
              <Mail size={18} className="text-orange-500" /> hola@herowebs.com
            </p>
            
          </div>
        </motion.div>

        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-3xl bg-green-100 border border-green-300 shadow-xl p-8 text-center"
            >
              <h2 className="text-3xl font-bold text-green-800 mb-2">
                ¡Mensaje enviado con éxito! ✅
              </h2>
              <p className="text-green-700 text-base mb-6">
                Gracias por contactarnos. Te responderemos a la velocidad de un
                rayo ⚡️.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="rounded-lg bg-gradient-to-r from-red-600 to-orange-500 py-2 px-4 text-white font-semibold hover:to-orange-400 transition"
              >
                Enviar otro mensaje
              </button>
            </motion.div>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-4 rounded-3xl bg-neutral-900/80 dark:bg-white/80 backdrop-blur p-8 shadow-xl"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <User size={16} className="absolute left-3 top-4 text-orange-500" />
                  <input 
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-700 dark:border-neutral-300 placeholder-neutral-300 bg-transparent focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
            
                <div className="relative">
                  <Phone size={16} className="absolute left-3 top-4 text-orange-500" />
                  <input 
                    type="phone"
                    name="phone"
                    placeholder="teléfono"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-700 dark:border-neutral-300 placeholder-neutral-300 bg-transparent focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-4 text-orange-500" />
                  <input 
                    type="email"
                    name="email"
                    placeholder="Correo"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-700 dark:border-neutral-300 placeholder-neutral-300 bg-transparent focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
                <div className="relative">
                  <Building2 size={16} className="absolute left-3 top-4 text-orange-500" />
                  <input 
                    type="text"
                    name="Business"
                    placeholder="Empresa"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-700 dark:border-neutral-300 placeholder-neutral-300 bg-transparent focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
                
                    
                
              </div>

              <button
                type="submit"
                className="w-full mt-4 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 py-3 font-semibold text-white hover:to-orange-400 transition"
              >
                Enviar
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
