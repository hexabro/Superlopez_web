"use client";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import {motion} from "framer-motion";
import {
  Mail,
  Phone,
  User2,
  Building2,
  Pencil,
} from "lucide-react";


export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;



    

      emailjs.sendForm("service_r3953dg","template_gw1uqhq", formRef.current!, "nEH_ljSpW8z2TW2aI")


      .then(() => {
        setSubmitted(true);
      })

      .catch((error) => {
        console.error("error al enviar: ", error);
        alert("hubo un error al enviar el mensaje");
      });
  };

  
    return (
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
              className="space-y-4 rounded-3xl dark:bg-neutral-900/80 bg-white/80 backdrop-blur p-8 shadow-xl"
            >
              <div className="grid md:grid-cols-2 gap-4">
                {/* Nombre */}
                <div className="relative">
                  <User2
                    size={16}
                    className="absolute left-3 top-4 text-orange-500"
                  />
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Nombre"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl text-neutral-800 dark:text-neutral-200 border border-neutral-700 dark:border-neutral-400 placeholder-neutral-400 bg-transparent focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
                {/* Teléfono */}
                <div className="relative">
                  <Phone
                    size={16}
                    className="absolute left-3 top-4 text-orange-500"
                  />
                  <input
                    type="phone"
                    name="phone"
                    autoComplete= "tel"
                    placeholder="teléfono"
                    required
                    className="w-full pl-10 pr-4 py-3 text-neutral-800 dark:text-neutral-200 rounded-xl border border-neutral-700 dark:border-neutral-400 placeholder-neutral-400 bg-transparent focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
                {/* CORREO */}
                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-3 top-4 text-orange-500"
                  />
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Correo"
                    required
                   className="w-full pl-10 pr-4 py-3 text-neutral-800 dark:text-neutral-200 rounded-xl border border-neutral-700 dark:border-neutral-400 placeholder-neutral-400 bg-transparent focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
                {/* Compañia */}
                <div className="relative">
                  <Building2
                    size={16}
                    className="absolute left-3 top-4 text-orange-500"
                  />
                  <input
                    type="text"
                    name= "company"
                    autoComplete="organization"
                    placeholder="Empresa"
                    required
                    className="w-full pl-10 pr-4 py-3 text-neutral-800 dark:text-neutral-200 rounded-xl border border-neutral-700 dark:border-neutral-400 placeholder-neutral-400 bg-transparent focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
                {/* Descripción */}
                <div className="relative md:col-span-2">
                  <Pencil
                  size={16}
                  className = "absolute left-3 top-4 text-orange-500"
                  />
                  <textarea
                    name="description"
                    placeholder="Cuéntanos lo que necesitas"
                    autoComplete="off"
                    required
                    rows = {4}
                    className="w-full pl-10 pr-4 py-3  text-neutral-800 dark:text-neutral-200 rounded-xl border border-neutral-700 dark:border-neutral-400 placeholder-neutral-400 bg-transparent focus:ring-2 focus:ring-orange-500 outline-none min-h-[6rem] resize-none md:col-span-2"
                  >
                  </textarea>

                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 hover:cursor-pointer rounded-xl bg-gradient-to-r from-red-600 to-orange-500 py-3 font-semibold text-white hover:to-orange-400 transition"
              >
                Enviar
              </button>
            </form>

          )}
          </motion.div>
            
  );
}
