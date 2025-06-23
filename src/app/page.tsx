import Image from "next/image";
import Link from "next/link";

import ServiceCard from "@/components/ui/ServiceCard";
import { ContactForm } from "@/components/sections/contactForm";

/**
 * Página principal – Hero Webs
 * · Light & Dark mode con Tailwind (`dark:`).
 * · Mantiene las ServiceCard tal cual.
 */
export default function Home() {
  return (
    <div className="scroll-smooth font-sans text-neutral-900 bg-white dark:bg-neutral-900 dark:text-neutral-100">
      {/* ================= HERO ================= */}
      <section className="relative isolate flex min-h-[92vh] flex-col-reverse items-center overflow-hidden md:flex-row">
        {/* halo de fondo */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-red-600/20 via-orange-400/20 to-yellow-300/20 dark:from-red-700/30 dark:via-orange-600/30 dark:to-yellow-500/30"
        />

        {/* texto */}
        <div className="flex flex-1 flex-col items-center gap-6 px-6 py-20 text-center md:items-start md:px-12 md:text-left">
          <h1 className="max-w-lg text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            La web&nbsp;
            <span className="inline-block bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              con más ROI
            </span>
            <br />del mercado
          </h1>
          <p className="max-w-lg text-lg text-neutral-700 dark:text-neutral-300">
            Diseñamos y desarrollamos sitios web modernos, accesibles y
            orientados a lograr tus objetivos de negocio.
          </p>
          
        </div>

        <svg
          width="500"
          height="600"
          viewBox="0 0 300 300"
          className="pointer-events-none absolute hidden md:block left-[37%] top-[55%] translate-x-[-50%] -translate-y-[60%] text-orange-500 "
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* punta de flecha */}
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="8"
              refY="5"
              orient="auto"
            >
               <path d="M0 0 L10 5 L0 10" fill="currentColor" />
            </marker>
          </defs>

          {/* curva de Bézier con línea entrecortada */}
          <path
              d="M60 260
                 C120 300 160 260 280 140
               "
                
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="10 10"
              markerEnd="url(#arrowhead)"
              strokeLinecap="round"
            />

        </svg>

        {/* FORMULARIO */}
        <div className=" pr-7 relative h-72 w-full flex-1 md:h-full">
          <ContactForm></ContactForm>
        </div>
      </section>

      {/* ================= SOBRE MÍ =============== */}
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-24 md:flex-row">
        {/* imagen */}
        <div className="relative order-2 h-72 w-full flex-1 md:order-1 md:h-[420px]">
          <Image
            src="/images/sobreMi.jpg"
            alt="Retrato de Pablo, fundador de Hero Webs"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-3xl object-cover shadow-lg"
          />
        </div>

        {/* texto */}
        <div className="order-1 flex flex-1 flex-col gap-6 md:order-2">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            ¿Quién soy?
          </h2>
          <p className="text-lg max-w-prose text-neutral-700 dark:text-neutral-300">
            Soy Pablo, estudiante de doble grado y apasionado por automatizar
            procesos en compañías tradicionales para impulsar sus ventas y
            aumentar su conversión.
          </p>
          <Link
            href="#contacto"
            className="w-fit inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-8 py-3 text-white font-semibold shadow-md transition hover:to-orange-400"
          >
            Proyectos que ya han confiado en mí
          </Link>
        </div>
      </section>

      {/* ================= SERVICIOS ============== */}
      <section id="servicios" className="bg-neutral-50 py-24 dark:bg-neutral-800">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-4xl font-bold text-center mb-12">Nuestros servicios</h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              icon="/images/web_design.svg"
              alt="imagen de diseño web para pymes en España"
              title="Diseño Web a medida"
              description="Coste 0 el primer mes."
              buttonLink="#pricing"
              buttonText="Encuentra tu fit perfecto"
            />
            <ServiceCard
              icon="/images/llamada_perdida.svg"
              alt="Automatización de llamadas perdidas"
              title="Rescate de llamadas"
              description="Contacta automáticamente a cada llamada perdida."
              buttonLink="#llamadas_perdidas"
              buttonText="Más información"
            />
            <ServiceCard
              icon="/images/reseñas.svg"
              alt="Gestión de reseñas inteligentes"
              title="Reseñas inteligentes"
              description="Incentiva las positivas y gestiona las negativas."
              buttonLink="#pagina_reseñas"
              buttonText="Más información"
            />
            <ServiceCard
              icon="/images/radar_competencia.svg"
              alt="Radar de competencia empresarial"
              title="Radar de competencia"
              description="Analizamos las novedades de tu competencia."
              buttonLink="#radar_competencia"
              buttonText="Más información"
            />
          </div>
        </div>
      </section>

      {/* ================= RESUMEN ================= */}
      <section id="resumen" className="bg-white py-24 dark:bg-neutral-900">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h3 className="text-4xl md:text-5xl font-extrabold leading-snug">
            No es solo una web.
            <br />
            <span className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Es la evolución de tu negocio.
            </span>
          </h3>

          {/* cuatro beneficios en cajas */}
          <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2">
            {[
              "😔 Por fin tu web reflejará la esencia de tu actividad",
              "⏱️ Las llamadas perdidas dejarán de significar oportunidades desperdiciadas.",
              "⭐ Las reseñas negativas sirven para crecer, no para estancar tu progreso",
              "🚀 Adelantarás a tu competencia en google",
            ].map((text) => (
              <div
                key={text}
                className="rounded-3xl bg-gradient-to-br from-red-100 via-orange-50 to-yellow-50 p-6 shadow-lg dark:from-neutral-800 dark:via-neutral-800 dark:to-neutral-700"
              >
                <p className="font-medium text-neutral-800 text-sm leading-relaxed dark:text-neutral-200">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RESERVA DE CITA ============= */}
      <section id="Reservar" className="bg-neutral-50 py-24 dark:bg-neutral-900">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Hablamos?</h2>
          <p className="mb-10 text-lg">
            En 15 minutos diseñamos un plan digital para que dejes de perder oportunidades.
          </p>
          <div className="mx-auto max-w-3xl">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer id="contacto" className="bg-neutral-100 py-16 text-center dark:bg-neutral-800 dark:text-neutral-200">
        <h3 className="text-2xl font-semibold">¿Listo para despegar?</h3>
        <p className="mt-4">
          Escríbenos a
          <a
            href="mailto:hola@superlopezwebs.es"
            className="ml-1 underline decoration-red-600/60 underline-offset-4"
          >
            hola@superlopezwebs.es
          </a>
          y te responderemos en menos de 24&nbsp;h.
        </p>
      </footer>
    </div>
  );
}
