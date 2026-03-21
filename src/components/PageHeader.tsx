import { BidliPiktogram } from "./BidliLogo";

interface Props {
  label?: string;
  title: string;
  titleAccent?: string; // part of title rendered in sky blue gradient
  subtitle?: string;
  children?: React.ReactNode; // optional CTA slot
}

/**
 * Compact page header for non-homepage pages.
 * Replaces the full-screen photo hero — uses a navy gradient background
 * with the SVG background texture and decorative piktogram.
 */
export default function PageHeader({ label, title, titleAccent, subtitle, children }: Props) {
  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden bg-[#142f4c]">
      {/* SVG background texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: "url('/svg-bg/Prmary.svg')", backgroundSize: "cover", backgroundPosition: "center" }}
      />

      {/* Gradient overlay — adds depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f32] via-[#142f4c] to-[#1d4668] opacity-90" />

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />

      {/* Decorative piktogram */}
      <BidliPiktogram
        className="absolute -right-10 -top-10 w-72 md:w-96 opacity-[0.06]"
        color="white"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {label && (
          <p className="text-[#3fb1e1] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            {label}
          </p>
        )}
        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
          {title}
          {titleAccent && (
            <>
              <br />
              <span className="text-gradient">{titleAccent}</span>
            </>
          )}
        </h1>
        {subtitle && (
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mt-2 leading-relaxed">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
