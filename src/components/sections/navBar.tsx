"use client";

import { useEffect, useState } from "react";
import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Shield } from "lucide-react";

/**
 * Enlaces del menú. Añade/edita según tu estructura de rutas.
 */
const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname(); // Detectar ruta activa
  const [open, setOpen] = useState(false); // Estado menú móvil
  const [visible, setVisible] = useState(true);
  const lastScroll = useRef(0);

  const toggle = () => setOpen(!open);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      //siempre es visible en la parte superior de la página
      if (current <= 0) setVisible(true);
      else {
        //si la posicion actual es > (mas abajo) de la anterior, se oculta
        if (current > lastScroll.current && !open) setVisible(false);
        //si la posicion actual es <, se pone visible
        else if (current < lastScroll.current) setVisible(true);
      }
      lastScroll.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  /**
   * Utilidad para colorear el enlace activo.
   */
  const itemClasses = (href: string) =>
    `block py-2 md:py-0 md:px-3 ${
      pathname === href
        ? "text-orange-400" // Activo
        : "text-neutral-300 hover:text-orange-500" // Inactivo
    } transition-colors`;

  return (
    <header
      className={`${visible ? "translate-y-0" : "-translate-y-full"} 
        sticky top-0 z-50 w-full backdrop-blur bg-neutral-800 p-4 transform transition-transform duration-300`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo + nombre */}
        <Link href="/" className="flex items-center gap-2 text-red-500">
          <Shield size={24} />
          <span className="font-bold text-lg">Hero Webs</span>
        </Link>

        {/* Menú desktop */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className={itemClasses(href)}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Botón hamburguesa (móvil) */}
        <button
          onClick={toggle}
          className="md:hidden text-neutral-300 hover:text-orange-500 focus:outline-none"
          aria-label="Abrir menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Panel móvil */}
      {open && (
        <nav className="md:hidden bg-neutral-900 dark:bg-white px-4 pb-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={itemClasses(href)}
              onClick={() => setOpen(false)} // Cerrar al navegar
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
