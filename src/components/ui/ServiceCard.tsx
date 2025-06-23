import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({
  icon,
  alt,
  title,
  description,
  buttonLink,
  buttonText,
}: {
  icon: string;
  alt: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}) {
  return (
    <article className="relative overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-900/70 p-8 shadow-xl ring-1 ring-neutral-700/40 backdrop-blur transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl group">
      {/* halo animado */}
      <span
        className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-red-600/40 via-orange-500/30 to-yellow-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* icono en círculo */}
        <div className="grid place-content-center h-24 w-24 rounded-full bg-gradient-to-br from-red-600 to-orange-500 shadow-lg">
          <Image
            src={icon}
            alt={alt}
            width={96}
            height={96}
            className="rounded-full "
          />
        </div>

        {/* título */}
        <h4 className="mt-6 text-2xl font-extrabold tracking-tight bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent line-clamp-3 min-h-[4rem]">
          {title}
        </h4>

        {/* descripción */}
        <p className="mt-3 mb-8 text-sm leading-relaxed text-neutral-800 dark:text-neutral-300 max-w-xs line-clamp-2 min-h-[2rem]">
          {description}
        </p>

        {/* botón */}
        <Link
          href={buttonLink}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-orange-500 py-2 px-6 text-sm font-semibold text-white shadow-lg transition hover:to-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500"
        >
          {buttonText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
