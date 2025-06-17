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
    <div className="flex flex-col items-center text-center p-6 rounded-4xl shadow-lg transition-shadow hover:shadow-xl bg-gradient-to-br from-neutral-200 via-neutral-500 to-neutral-900">
      <Image src={icon} alt={alt} width={150} height={150} aria-hidden />

      <h4 className="mt-6 text-xl font-bold text-white leading-tight min-h-[3.5rem]">
        {title}
      </h4>

      <p className="mt-2 pb-4 text-sm text-neutral-300">{description}</p>

      <Link
        href={buttonLink}
        className="mt-auto p-2 text-sm text-black italic font-bold transition rounded-full bg-amber-600"
      >
        {buttonText}
      </Link>
    </div>
  );
}
