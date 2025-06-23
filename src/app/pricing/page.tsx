"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

/**
 * Página de precios – Hero Webs
 * · Tres planes de suscripción (Sidekick, Hero, Legend).
 * · Tabla de precios individuales para servicios extra.
 *
 * Notas
 * -----
 * – Todo está construido solo con HTML + Tailwind + Framer Motion + React.
 * – Modifica textos, características o precios según tus necesidades.
 */

interface Plan {
  id: string;
  name: string;
  price: string; // "125€" etc.
  description: string;
  features: string[];
  highlight?: boolean; // para resaltar el plan intermedio
}

const plans: Plan[] = [
  {
    id: "sidekick",
    name: "Sidekick",
    price: "125€ / mes",
    description:
      "Ideal para pequeñas empresas que dan sus primeros pasos online.",
    features: [
      "Diseño web básico (hasta 5 páginas)",
      "Hosting & soporte estándar",
      "Rescate de llamadas (50/mes)",
    ],
  },
  {
    id: "hero",
    name: "Hero",
    price: "150€ / mes",
    description: "El plan más popular para negocios en crecimiento.",
    features: [
      "Diseño web avanzado (hasta 15 páginas)",
      "Soporte 24/7 prioritario",
      "Rescate de llamadas ilimitado",
      "Reseñas Inteligentes incluidas",
      "Radar de competencia básico",
    ],
    highlight: true,
  },
  {
    id: "legend",
    name: "Legend",
    price: "200€ / mes",
    description: "Para marcas que quieren dominar su sector.",
    features: [
      "Diseño web premium (páginas ilimitadas)",
      "Soporte 24/7 ultra prioritario",
      "Rescate de llamadas ilimitado",
      "Reseñas Inteligentes Pro",
      "Radar de competencia completo",
      "Integraciones personalizadas",
    ],
  },
];

// Precios unitarios de servicios sueltos
const aLaCarte = [
  {
    service: "Rescate de llamadas perdidas",
    price: "70€ / mes",
    desc: "Automatización WhatsApp que contacta a cada llamada perdida.",
  },
  {
    service: "Reseñas Inteligentes",
    price: "50€ / mes",
    desc: "Pide feedback y redirige las opiniones positivas a Google Reviews.",
  },
  {
    service: "Radar de competencia",
    price: "90€ / mes",
    desc: "Informe semanal sobre la actividad online de tus competidores locales.",
  },
];

const PricingPage: React.FC = () => {
  return (
    <section className="w-full min-h-screen py-16 bg-neutral-950 text-white dark:bg-white dark:text-neutral-900">
      <div className="mx-auto w-full max-w-7xl px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent"
        >
          Planes de suscripción
        </motion.h1>

        {/* Grid de planes */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {plans.map(
            ({ id, name, price, description, features, highlight }) => (
              <motion.div
                key={id}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className={`flex h-full flex-col rounded-2xl border ${
                    highlight
                      ? "border-orange-500 ring-2 ring-orange-500"
                      : "border-neutral-800 dark:border-neutral-300"
                  } bg-neutral-900 dark:bg-neutral-100 p-8 shadow-lg`}
                >
                  <h2 className="text-2xl font-bold text-center mb-2">
                    {name}
                  </h2>
                  <p className="text-center text-4xl font-extrabold mb-4 bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                    {price}
                  </p>
                  <p className="text-center text-sm mb-6 text-neutral-400 dark:text-neutral-600">
                    {description}
                  </p>
                  <ul className="flex-grow space-y-3 text-sm">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-[6px] h-2 w-2 rounded-full bg-orange-500"></span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/checkout?plan=${id}`}
                    className="mt-8 inline-block"
                  >
                    <button className="w-full rounded-lg bg-gradient-to-r from-red-600 to-orange-500 py-3 font-semibold text-white transition hover:to-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                      Contratar
                    </button>
                  </Link>
                </div>
              </motion.div>
            ),
          )}
        </div>

        {/* Tabla de precios individuales */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-8">
            Servicios a la carta
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse rounded-lg overflow-hidden text-sm">
              <thead>
                <tr className="bg-neutral-800 text-left dark:bg-neutral-200">
                  <th className="px-4 py-3">Servicio</th>
                  <th className="px-4 py-3">Precio</th>
                  <th className="px-4 py-3">Descripción</th>
                </tr>
              </thead>
              <tbody>
                {aLaCarte.map(({ service, price, desc }, idx) => (
                  <tr
                    key={service}
                    className={
                      idx % 2 === 0
                        ? "bg-neutral-900/50 dark:bg-neutral-50"
                        : "bg-neutral-900/70 dark:bg-neutral-100"
                    }
                  >
                    <td className="px-4 py-3 whitespace-nowrap font-medium">
                      {service}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">{price}</td>
                    <td className="px-4 py-3">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
