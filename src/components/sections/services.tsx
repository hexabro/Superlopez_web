/* src/components/ServicesSection.tsx
   – no "use client", 100 % server-compatible */

import Link from "next/link";
import { Shield, PhoneMissed, Star, Radar } from "lucide-react";
import type { ComponentType } from "react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  cta: { label: string; href: string };
}

const services: Service[] = [
  {
    id: "design",
    title: "Diseño Web + SEO",
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

export default function ServicesSection() {
  return (
    <section className="min-h-screen w-full py-16 bg-gradient-to-br dark:from-[#0d0d0d] dark:via-[#1a1a1a] dark:to-[#0d0d0d] from-white via-gray-100 to-white flex items-center">
      <div className="mx-auto w-full max-w-7xl px-4 text-center">
        {/* heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
          Servicios Hero Webs
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg dark:text-gray-300 text-gray-600">
          Soluciones de diseño y desarrollo que impulsan tu negocio al estilo
          superhéroe.
        </p>

        {/* cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map(({ id, title, description, icon: Icon, cta }) => (
            <div
              key={id}
              className="group transform transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.03]"
            >
              <div className="flex h-full flex-col rounded-2xl border border-neutral-800 bg-neutral-900 p-8 shadow-lg transition hover:ring-2 hover:ring-orange-500 dark:border-neutral-300 dark:bg-neutral-800">
                <div className="mb-6 flex flex-col items-center gap-4">
                  <Icon size={48} className="text-red-600" />
                  <h2 className="text-2xl font-bold dark:text-white text-neutral-100">
                    {title}
                  </h2>
                </div>
                <p className="flex-grow text-sm dark:text-neutral-300 text-neutral-400">
                  {description}
                </p>
                <Link href={cta.href} className="mt-6 inline-block w-full">
                  <button className="w-full rounded-lg bg-gradient-to-r from-red-600 to-orange-500 py-3 font-semibold text-white transition hover:to-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 hover:cursor-pointer">
                    {cta.label}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
