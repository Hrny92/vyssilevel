import Image from "next/image";

interface HeroProps {
  /** Path to background image inside /public */
  image: string;
  imageAlt?: string;
  /** Small label above the title, e.g. "Kariéra" */
  label?: string;
  /** Main heading — can include <br /> */
  title: React.ReactNode;
  /** Part of the title rendered in sky-blue gradient on a new line */
  titleAccent?: string;
  /** Lead paragraph below the title */
  subtitle?: string;
  /** CTA buttons or any extra content */
  children?: React.ReactNode;
}

/**
 * Shared full-screen hero used on every page.
 * Image fills the section as background; text is overlaid, left-aligned.
 */
export default function Hero({
  image,
  imageAlt = "Hero",
  label,
  title,
  titleAccent,
  subtitle,
  children,
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Gradient overlay — strong on left for text legibility, fades to right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f32]/90 via-[#142f4c]/70 to-[#142f4c]/20" />
      {/* Extra darkening at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f32]/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-2xl">
          {/* Label */}
          {label && (
            <p className="text-[#3fb1e1] text-xs font-bold uppercase tracking-[0.2em] mb-5">
              {label}
            </p>
          )}

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-5">
            {title}
            {titleAccent && (
              <>
                <br />
                <span className="text-gradient">{titleAccent}</span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-white/70 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
              {subtitle}
            </p>
          )}

          {/* CTA slot */}
          {children && (
            <div className="flex flex-wrap gap-3">
              {children}
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
        <div className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
