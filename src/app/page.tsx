import Image from "next/image";
import Link from "next/link";

import { ContactForm } from "@/components/sections/contactForm";
import ServicesSection from "@/components/sections/services";
import PricingSection from "@/components/sections/pricing";
import {Check} from "lucide-react";



export default function Home() {
  return (
    <div className="scroll-smooth font-sans text-neutral-900 bg-white dark:bg-neutral-900 dark:text-neutral-100">
      {/* ================= HERO ================= */}
      <section className="relative isolate flex min-h-[92vh] flex-col px-6 py-10  items-center overflow-hidden md:px-0 lg:flex-row">
        {/* halo de fondo */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-red-600/20 via-orange-400/20 to-yellow-300/20 dark:from-red-700/30 dark:via-orange-600/30 dark:to-yellow-500/30"
        />

        {/* texto */}
        <div className="flex flex-col gap-6 py-20 md:basis-1/2 md:px-12 md:items-start">
          <h1 className="text-4xl  md:text-6xl font-extrabold ">
            Diseño web, SEO <br/>
            <span className="bg-gradient-to-r text-nowrap from-red-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              y automatizaciones
            </span>
            
          </h1>
          <ul className= "space-y-3 ">
            <li className = "flex items-center gap-3"> <Check className = "h-5 w-5 text-yellow-400"/>Aprovecha al máximo cada oportunidad de negocio</li>
            <li className = "flex items-center gap-3"> <Check className = "h-5 w-5 text-yellow-400"/>Gana tiempo para enfocarte en lo que realmente importa</li>
            <li className = "flex items-center gap-3"> <Check className = "h-5 w-5 text-yellow-400"/>Destaca como una empresa innovadora</li>
            <li className = "flex items-center gap-3"> <Check className = "h-5 w-5 text-yellow-400"/>No sigas perdiendo clientes a manos de tu competencia</li>

          </ul>
          
        </div>


        {/* FORMULARIO */}
        <div className="w-full md:basis-1/2 md:px-12">
          <ContactForm />
        </div>


      </section>

      {/* ================= SOBRE MÍ =============== */}
      <section className="mx-auto flex max-w-6xl  flex-col items-center gap-12 px-6 py-24 md:flex-row">
        {/* imagen */}
        <div className="relative order-2 h-72 w-full flex-1 md:order-1 md:h-[420px]">
          <Image
            src="/images/sobreMi.jpg"
            alt="Retrato de Pablo, fundador de Hero Webs"
            width= {800}
            height= {420}
            sizes="100vw, 50vw"
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
      <section id="servicios" className="bg-neutral-50  dark:bg-neutral-900">
        <ServicesSection></ServicesSection>
      </section>


      {/* PRICING */}

      <div id ="pricing">
        <PricingSection></PricingSection>
      </div>


    {/* ---------- MICRO-DOLORES (solo server) ----------  */}
      <section aria-labelledby="pains-heading" className=" m-20 mb-5">
        {/* Encabezado invisible para accesibilidad; puedes mostrarlo si quieres */}
        <h2 id="pains-heading" className=" text-center text-4xl font-bold mb-6 pb-5">
          ¿Te suena algo de esto?
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {[
            "😔 Pierdes ventas cada vez que suena el teléfono y nadie responde; necesitas automatizar el contacto por WhatsApp antes de que el cliente escoja a la competencia.",
            "⏱️ Tu web tarda en cargar y en el móvil se descuadra; quieres una versión veloz, adaptada y optimizada… sin que se dispare el presupuesto.",
            "⭐ Tienes clientes encantados pero apenas reseñas en Google; buscas una forma de pedir feedback y convertir automáticamente cada opinión positiva en 5 ★ (sin riesgo de que sea negativa).",
            "🚀 Arrancas un nuevo proyecto y necesitas una web lista en días, con soporte 24/7 y sin sorpresas técnicas.",
          ].map((text) => (
            <article
              key={text}
              className="rounded-2xl border border-neutral-200/70 dark:border-neutral-700
                        bg-white/60 dark:bg-neutral-800/60 backdrop-blur-sm p-6
                        shadow-sm transition
                        hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-[1.05rem] text-center leading-relaxed font-medium text-neutral-800 dark:text-neutral-200">
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>



      {/* ============ CONTACTO ============= */}
      <section id="contacto" className="bg-neutral-50 py-24 dark:bg-neutral-900">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Entonces, deberíamos hablar</h2>
          <p className="mb-10 text-lg">
            En 15 minutos diseñamos el plan digital perfecto para <span className= "font-bold"> ti </span>.
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
