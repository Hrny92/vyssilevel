import type { ReactNode } from "react";
import { BidliPiktogram } from "@/components/BidliLogo";

interface CtaBannerProps {
  children: ReactNode;
  /**
   * "dark"  — sekce bg-white,        dlaždice Prmary.svg,  piktogram bílý   (výchozí)
   * "light" — sekce bg-[#142f4c],    dlaždice gray.svg,    piktogram tmavý
   */
  variant?: "dark" | "light";
}

export default function CtaBanner({ children, variant = "dark" }: CtaBannerProps) {
  const isDark = variant === "dark";

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-white" : "bg-[#142f4c]"}`}>
      <div
        className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative"
        style={{
          backgroundImage: `url('/svg-bg/${isDark ? "Prmary" : "gray"}.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 py-16 px-4 max-w-3xl mx-auto text-center">
          <BidliPiktogram
            className="w-14 h-14 mx-auto mb-6 opacity-100"
            color={isDark ? "white" : "#142f4c"}
          />
          {children}
        </div>
      </div>
    </section>
  );
}
