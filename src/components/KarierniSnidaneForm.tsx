"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSpinner } from "@fortawesome/free-solid-svg-icons";

interface Termin {
  _id: string;
  datum: string;
  mesto: string;
  kapacita?: number;
}

interface Props {
  terminy: Termin[];
  preselectedTermin?: string;
}

export function formatDatumTermin(datum: string): string {
  const d = new Date(datum);
  const day = d.toLocaleDateString("cs-CZ", { day: "2-digit", timeZone: "Europe/Prague" });
  const month = d.toLocaleDateString("cs-CZ", { month: "2-digit", timeZone: "Europe/Prague" });
  const year = d.toLocaleDateString("cs-CZ", { year: "numeric", timeZone: "Europe/Prague" });
  return `${day}. ${month}. ${year}`;
}

export default function KarierniSnidaneForm({ terminy, preselectedTermin }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    jmeno: "",
    telefon: "",
    termin: preselectedTermin ?? "",
    souhlas: false,
  });

  useEffect(() => {
    if (preselectedTermin !== undefined) {
      setFormData((prev) => ({ ...prev, termin: preselectedTermin }));
    }
  }, [preselectedTermin]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.jmeno.trim()) newErrors.jmeno = "Vyplňte jméno a příjmení";
    if (!formData.telefon.trim()) newErrors.telefon = "Vyplňte telefonní číslo";
    if (!formData.termin) newErrors.termin = "Vyberte termín";
    if (!formData.souhlas) newErrors.souhlas = "Souhlas je povinný";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setStatus("sending");

    try {
      const res = await fetch("/api/contact-ks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ jmeno: "", telefon: "", termin: "", souhlas: false });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-[#3fb1e1]/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-[#3fb1e1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#142f4c] mb-2">Přihláška odeslána!</h3>
        <p className="text-gray-600">Brzy se vám ozveme s potvrzením. Těšíme se na setkání.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-4">
        <div>
          <input
            type="text"
            placeholder="Jméno a Příjmení"
            value={formData.jmeno}
            onChange={(e) => setFormData({ ...formData, jmeno: e.target.value })}
            className={`form-input w-full ${errors.jmeno ? "border-red-400" : ""}`}
          />
          {errors.jmeno && <p className="text-red-500 text-xs mt-1">{errors.jmeno}</p>}
        </div>

        <div>
          <input
            type="tel"
            placeholder="Telefon"
            value={formData.telefon}
            onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
            className={`form-input w-full ${errors.telefon ? "border-red-400" : ""}`}
          />
          {errors.telefon && <p className="text-red-500 text-xs mt-1">{errors.telefon}</p>}
        </div>

        <div>
          <select
            value={formData.termin}
            onChange={(e) => setFormData({ ...formData, termin: e.target.value })}
            className={`form-select w-full ${errors.termin ? "border-red-400" : ""}`}
          >
            <option value="" disabled>Vyberte termín a město</option>
            {terminy.length === 0 ? (
              <option value="" disabled>Momentálně nejsou vypsány žádné termíny</option>
            ) : (
              terminy.map((t) => (
                <option key={t._id} value={`${formatDatum(t.datum)} — ${t.mesto}`}>
                  {formatDatum(t.datum)} — {t.mesto}
                  {t.kapacita ? ` (kapacita: ${t.kapacita})` : ""}
                </option>
              ))
            )}
          </select>
          {errors.termin && <p className="text-red-500 text-xs mt-1">{errors.termin}</p>}
        </div>

        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.souhlas}
              onChange={(e) => setFormData({ ...formData, souhlas: e.target.checked })}
              className="mt-1 accent-[#3fb1e1]"
            />
            <span className="text-sm text-gray-500">
              Odesláním formuláře souhlasím se zpracováním{" "}
              <a href="/o-webu" className="text-[#3fb1e1] hover:underline">osobních údajů</a>
            </span>
          </label>
          {errors.souhlas && <p className="text-red-500 text-xs mt-1">{errors.souhlas}</p>}
        </div>

        <button
          type="submit"
          disabled={status === "sending" || terminy.length === 0}
          className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? (
            <>
              <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2" />
              Odesílám…
            </>
          ) : (
            <>
              Odeslat přihlášku <FontAwesomeIcon icon={faArrowRight} />
            </>
          )}
        </button>

        {status === "error" && (
          <p className="text-red-500 text-sm text-center">
            Něco se nepodařilo. Zkuste to prosím znovu nebo nás kontaktujte přímo.
          </p>
        )}
      </div>
    </form>
  );
}
