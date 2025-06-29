"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {CheckCircle, Circle} from "lucide-react";

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

interface PlanFeature{
  feature: string;
  included: boolean;
}

interface Plan {
  id: string;
  name: string;
  price: string; // "125€" etc.
  description: string;
  features: PlanFeature[];
  highlight?: boolean; // para resaltar el plan intermedio
}

const plans: Plan[] = [
  {
    id: "sidekick",
    name: "Sidekick",
    price: "125€ / mes",
    description:
      "Ideal para primeros pasos online.",
    features: [
      {feature: "Diseño web básico (hasta 5 páginas)", included: true},
      {feature: "Hosting & soporte estándar", included: true},
      {feature: "Sistema de reservas online", included: true},
      {feature: "Rescate de llamadas (50/mes)", included: false},
      {feature: "Reseñas inteligentes", included: false},
      {feature: "radar de competencia", included: false},
    ],
  },
  {
    id: "hero",
    name: "Hero",
    price: "150€ / mes",
    description: "El plan más popular para negocios en crecimiento.",
    features: [
      {feature: "Diseño web ilimitado", included: true},
      {feature: "Hosting & soporte ilimitado", included: true},
      {feature: "Sistema de reservas online", included: true},
      {feature: "Rescate de llamadas (50/mes)", included: true},
      {feature: "Reseñas inteligentes", included: true},
      {feature: "radar de competencia", included: false},
    ],
    highlight: true,
  },
  {
    id: "legend",
    name: "Legend",
    price: "200€ / mes",
    description: "Para marcas que quieren dominar su sector.",
    features: [
      {feature: "Diseño web básico (hasta 5 páginas)", included: true},
      {feature: "Hosting & soporte estándar", included: true},
      {feature: "Sistema de reservas online", included: true},
      {feature: "Rescate de llamadas (50/mes)", included: true},
      {feature: "Reseñas inteligentes", included: true},
      {feature: "radar de competencia", included: true},
    ],
  },
];


const PricingSection: React.FC = () => {
  return (
    <section className="w-full min-h-screen py-16 bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      <div className="mx-auto max-w-7xl px-4">
        {/* ---------- HERO ---------- */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent"
        >
          Planes de suscripción
        </motion.h1>

        {/* ---------- PLANES ---------- */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {plans.map(({ id, name, price, description, features, highlight }) => (
            <motion.div
              key={id}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div
                className={`flex h-full flex-col rounded-2xl border ${
                  highlight
                    ? "border-orange-500 ring-2 ring-orange-500"
                    : "border-neutral-300 dark:border-neutral-700"
                } bg-neutral-100 dark:bg-neutral-800 p-8 shadow-lg`}
              >
                <h2 className="text-2xl font-bold text-center mb-2">{name}</h2>
                <p className="text-center text-4xl font-extrabold mb-4 bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                  {price}
                </p>
                <p className="text-center text-sm mb-6 text-neutral-500 dark:text-neutral-400">
                  {description}
                </p>
                {/* FEATURES WITH CHECKBOX */}
                <ul className="flex-grow space-y-3 text-sm">
                  {features.map(({feature, included}) => (
                    <li key={feature} className="flex items-start gap-2">
                      {included ?(
                        <CheckCircle className = " h-5 w-5 text-green-400"/>
                      ): (
                        <Circle className = "h-5 w-5 text-neutral-400"/>
                      )}
                      <span className={included ? "" : "text-neutral-400 line-through"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link href={`/checkout?plan=${id}`} className="mt-8 inline-block">
                  <button className="w-full rounded-lg bg-gradient-to-r from-red-600 to-orange-500 py-3 font-semibold text-white transition hover:to-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                    Contratar
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

export default PricingSection;