import Image from "next/image";
import Link from "next/link";

/**
 * Homepage de Superlopez Webs – Agencia de diseño y desarrollo web.
 *
 * 👉 Puntos de aprendizaje:
 *   • Uso de Next Image y Link.
 *   • Tailwind + breakpoints + dark mode.
 *   • Componentes reutilizables con props tipadas (ServiceCard).
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      {/* ==== Header =================================================== */}
      <header className="px-6 sm:px-10 py-6 grid-cols-3 items-center gap-4 w-full max-w-7xl mx-auto text-center">
        {/* Inicio, servicios, portfolio -- LOGO -- pricing contacto*/}
        <nav className="hidden md:flex items-center justify-center gap-20 text-sm font-medium">
          {/* Grupo izquierdo */}
          <div className="flex gap-20">
            <Link href="#servicios">Servicios</Link>
            <Link href="#portfolio">Portfolio</Link>
          </div>

          {/* Logo */}
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight">
            Hero <span className="dark:text-emerald-400" style = {{color: "#E6492D"}}> <br />Webs</span>
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
            src="/resources/superlopez_hero.svg"
            alt="Ilustración de desarrollo web"
            width={640}
            height={400}
            priority
          />

          {/* Texto a la derecha */}
          <div className="text-left md:text-left flex flex-col gap-4">
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Tu web, <span className="text-emerald-600 dark:text-emerald-400">más rápida</span> que nunca
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-xl">
              Diseñamos y desarrollamos sitios web modernos, accesibles y orientados a lograr tus objetivos de negocio.
            </p>
            <Link
              href="#contacto"
              className="inline-flex items-center px-8 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-base font-semibold shadow-md transition-colors"
            >
              Solicita presupuesto
            </Link>
          </div>
        </section>

        {/* ==== Servicios ============================================== */}
        <section id="servicios" className="w-full mt-24">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Nuestros servicios</h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <ServiceCard
              icon="/icons/design.svg"
              title="Diseño Web"
              description="Interfaces atractivas, usables y adaptadas a cualquier dispositivo."
            />
            <ServiceCard
              icon="/icons/code.svg"
              title="Desarrollo a medida"
              description="Aplicaciones robustas con React, Next.js y tecnologías modernas."
            />
            <ServiceCard
              icon="/icons/ecommerce.svg"
              title="eCommerce"
              description="Tiendas online rápidas, seguras y fáciles de gestionar."
            />
            <ServiceCard
              icon="/icons/seo.svg"
              title="SEO técnico"
              description="Arquitecturas optimizadas para buscadores desde la base."
            />
          </div>
        </section>
      </main>

      {/* ==== Footer / Contacto ======================================== */}
      <footer id="contacto" className="bg-neutral-100 dark:bg-neutral-800 w-full py-16 px-8 text-center mt-auto">
        <h3 className="text-2xl font-semibold">¿Listo para despegar?</h3>
        <p className="mt-4 text-neutral-700 dark:text-neutral-300">
          Escríbenos a 
          <a href="mailto:hola@superlopezwebs.es" className="underline decoration-emerald-600/60 underline-offset-4 ml-1">
            hola@superlopezwebs.es
          </a> 
          y te responderemos en menos de 24&nbsp;h.
        </p>
      </footer>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function ServiceCard({ icon,  title,  description,}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <Image src={icon} alt="" width={56} height={56} aria-hidden />
      <h4 className="mt-4 text-xl font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
    </div>
  );
}
