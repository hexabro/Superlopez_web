import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";

import ServiceCard from "@/components/ui/ServiceCard";
import { ContactForm } from "@/components/sections/contactForm";
/**
 * Homepage de Hero Webs – Agencia de diseño y desarrollo web.
 *
 * 👉 Puntos de aprendizaje:
 *   • Uso de Next Image y Link.
 *   • Tailwind + breakpoints + dark mode.
 *   • Componentes reutilizables con props tipadas (ServiceCard).
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 scroll-smooth">
      {/* ==== Header =================================================== */}
      <header className="px-6 sm:px-10 py-6  pb-10 grid-cols-3 items-center gap-4 w-full max-w-7xl mx-auto text-center">
        {/* Inicio, servicios, portfolio -- LOGO -- pricing contacto*/}
        <nav className="hidden md:flex items-center justify-center gap-20 text-sm font-medium">
          {/* Grupo izquierdo */}
          <div className="flex gap-20">
            <Link href="#servicios">Servicios</Link>
            <Link href="#portfolio">Portfolio</Link>
          </div>

          {/* Logo */}
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight">
            Hero{" "}
            <span style={{ color: "#E6492D" }}>
              {" "}
              <br />
              Webs
            </span>
          </h1>

          {/* Grupo derecho */}
          <div className="flex gap-20">
            <Link href="#pricing">Pricing</Link>
            <Link href="#contacto">Contacto</Link>
          </div>
        </nav>
      </header>

      {/* ==== Hero ====================================================== */}
      <main className="flex-grow flex flex-col items-center text-center gap-12 px-8 pb-20">
        <section className="flex flex-col md:flex-row items-center gap-8 max-w-6xl w-full bg-red">
          {/* Imagen a la izquierda */}
          <Image
            src="/images/superlopez_hero.svg"
            alt="Ilustración de desarrollo web"
            width={550}
            height={400}
            priority
          />

          {/* Texto a la derecha */}
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              La web{" "}
              <span className=" text-nowrap " style={{ color: "#E6492D" }}>
                con más ROI
              </span>{" "}
              <br /> del mercado
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-xl">
              Diseñamos y desarrollamos sitios web modernos, accesibles y
              orientados a lograr tus objetivos de negocio.
            </p>
            <Link
              href="#contacto"
              className="w-fit mx-auto items-center px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-300 hover:text-black text-white font-semibold shadow-md transition-colors"
            >
              Solicita presupuesto
            </Link>
          </div>
        </section>

        {/* SOBRE MÍ */}
        <section className="flex flex-col md:flex-row items-center gap-8 max-w-6xl w-full transition-all duration-700 ease-out transform px-4">
          <div className="text-left md:text-left flex flex-col gap-4">
            {/* Texto a la izquierda */}
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              ¿Quién soy?
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-xl">
              Mi nombre es Pablo, estudiante de doble grado y apasionado por
              automatizar procesos en compañías tradicionales para impulsar sus
              ventas y aumentar su conversión.
            </p>
            <Link
              href="#contacto"
              className="inline-flex items-center px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-300 hover:text-black text-white text-base font-semibold shadow-md transition-colors"
            >
              Proyectos que ya han confiado en mí
            </Link>
          </div>

          {/* Imagen a la derecha */}
          <Image
            src="/images/sobreMi.jpg"
            alt="Ilustración de desarrollo web"
            width={550}
            height={400}
            priority
          />
        </section>

        {/* ==== Servicios ============================================== */}
        <section id="servicios" className="w-full mt-24">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nuestros servicios
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <ServiceCard
              icon="/images/web_design.svg"
              alt="imagen de diseño web para pymes en España"
              title="Diseño Web"
              description="Coste 0 el primer mes."
              buttonLink="#pricing"
              buttonText="Encuentra tu fit perfecto"
            />
            <ServiceCard
              icon="/images/llamada_perdida.svg"
              alt="imagen de bot de llamadas perdidas para pymes españolas"
              title="Rescate de llamadas perdidas"
              description="Contacto y atención automática a llamadas perdidas."
              buttonLink="#llamadas_perdidas"
              buttonText="Más información"
            />
            <ServiceCard
              icon="/images/reseñas.svg"
              alt="Imagen de páginas de reseñas inteligente para pymes"
              title="Página de reseñas inteligente"
              description="Redirige tus reseñas negativas e incentiva las positivas"
              buttonLink="#pagina_reseñas"
              buttonText="Más información"
            />
            <ServiceCard
              icon="/images/radar_competencia.svg"
              alt="Radar de competencia empresarial para pymes"
              title="Radar de competencia"
              description="Análisis de las novedades de tu competencia"
              buttonLink="#radar_competencia"
              buttonText="Más información"
            />
          </div>
        </section>

        {/* RESUMEN */}

        <section id="resumen" className="">
          <h3 className="text-4xl md:text-5xl font-extrabold text-center tracking-tight leading-snug p-4">
            No es solo una web.
            <br />
            <span className="text-orange-500">
              Es la evolución de tu negocio.
            </span>
          </h3>

          <ul className="list-none space-y-3 text-justify text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-100">
            <li>
              ✅ Transforma tu web en una herramienta real de ventas, no un
              simple escaparate.
            </li>
            <li>
              ✅ Di adiós a las llamadas perdidas: cada contacto es una
              oportunidad que ya no se escapa.
            </li>
            <li>
              ✅ Aprovecha tus reseñas para destacar frente a tu competencia —
              incluso las negativas juegan a tu favor.
            </li>
            <li>
              ✅ Mantente al tanto de lo que hace tu competencia sin mover un
              dedo.
            </li>
            <li>
              ✅ Deja que la tecnología trabaje por ti, mientras tú te centras
              en lo que importa: hacer crecer tu negocio.
            </li>
          </ul>
        </section>
        {/* ================   RESERVA DE CITA   ========================== */}
        <section id="Reservar" className="pt-12">
          <div className="max-w-6xl mx-auto px-4 items-center text-center">
            <div className="p-3">
              <h2 className="text-4xl font-bold mb-8 w-full">¿Hablamos?</h2>
              <p>
                {" "}
                En 15 minutos diseñamos un plan digital para que dejes de perder
                oportunidades{" "}
              </p>
            </div>

            <div className="w-full max-w-3xl h-full">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* =========================== Footer / Contacto ======================================== */}
      <footer
        id="contacto"
        className="bg-neutral-100 dark:bg-neutral-800 w-full py-16 px-8 text-center mt-auto"
      >
        <h3 className="text-2xl font-semibold">¿Listo para despegar?</h3>
        <p className="mt-4 text-neutral-700 dark:text-neutral-300">
          Escríbenos a
          <a
            href="mailto:hola@superlopezwebs.es"
            className="underline decoration-emerald-600/60 underline-offset-4 ml-1"
          >
            hola@superlopezwebs.es
          </a>
          y te responderemos en menos de 24&nbsp;h.
        </p>
      </footer>
    </div>
  );
}

/* ------------------------------------------------------------------ */
