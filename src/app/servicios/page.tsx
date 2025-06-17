"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  Shield,
  PhoneMissed,
  Star,
  Radar,
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  cta: {
    label: string;
    href: string;
  };
}

const services: Service[] = [
  {
    id: "design",
    title: "Diseño Web",
    description:
      "Sitios rápidos, accesibles y optimizados para convertir. Eleva tu identidad online al nivel superhéroe.",
    icon: Shield,
    cta: { label: "Ver precios", href: "/pricing" },
  },
  {
    id: "rescue",
    title: "Rescate de llamadas perdidas",
    description:
      "Una automatización que se comunica por WhatsApp con cada llamada perdida para que ningún lead se escape.",
    icon: PhoneMissed,
    cta: { label: "Solicitar demo", href: "/contact?service=rescue" },
  },
  {
    id: "reviews",
    title: "Reseñas Inteligentes",
    description:
      "Pide feedback privado. Las opiniones positivas van directo a Google Reviews; las negativas te llegan a ti para mejorar.",
    icon: Star,
    cta: { label: "Mejorar reputación", href: "/contact?service=reviews" },
  },
  {
    id: "radar",
    title: "Radar de competencia",
    description:
      "Analizamos a tus competidores locales y te enviamos un informe accionable cada semana.",
    icon: Radar,
    cta: { label: "Activa tu radar", href: "/contact?service=radar" },
  },
];

const gradientBackground =
  "bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d] dark:from-white dark:via-gray-100 dark:to-white";

const ServicesPage: React.FC = () => {
  return (
    <section
      className={`min-h-screen w-full py-16 ${gradientBackground} flex items-center`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 text-center">
        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent"
        >
          Servicios Hero Webs
        </motion.h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300 dark:text-gray-600">
          Soluciones de diseño y desarrollo que impulsan tu negocio al estilo superhéroe.
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map(({ id, title, description, icon: Icon, cta }) => (
            <motion.div
              key={id}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex h-full flex-col rounded-2xl border border-neutral-800 bg-neutral-900 p-8 shadow-lg transition hover:ring-2 hover:ring-orange-500 dark:border-neutral-300 dark:bg-white">
                <div className="mb-6 flex flex-col items-center gap-4">
                  <Icon size={48} className="text-red-600" />
                  <h2 className="text-2xl font-bold text-white dark:text-neutral-900">
                    {title}
                  </h2>
                </div>
                <p className="flex-grow text-sm text-neutral-300 dark:text-neutral-700">
                  {description}
                </p>
                <Link href={cta.href} className="mt-6 inline-block">
                  <button className="w-full rounded-lg bg-gradient-to-r from-red-600 to-orange-500 py-3 font-semibold text-white transition hover:to-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                    {cta.label}
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
