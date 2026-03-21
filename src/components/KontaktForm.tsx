"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSpinner } from "@fortawesome/free-solid-svg-icons";

const kraje = [
  "Hlavní město Praha",
  "Středočeský kraj",
  "Jihočeský kraj",
  "Plzeňský kraj",
  "Karlovarský kraj",
  "Ústecký kraj",
  "Liberecký kraj",
  "Královéhradecký kraj",
  "Pardubický kraj",
  "Kraj Vysočina",
  "Jihomoravský kraj",
  "Olomoucký kraj",
  "Moravskoslezský kraj",
  "Zlínský kraj",
];

interface KontaktFormProps {
  onSuccess?: () => void;
}

export default function KontaktForm({ onSuccess }: KontaktFormProps = {}) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    jmeno: "",
    telefon: "",
    kraj: "",
    pozice: "",
    souhlas: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.jmeno.trim()) newErrors.jmeno = "Vyplňte jméno a příjmení";
    if (!formData.telefon.trim()) newErrors.telefon = "Vyplňte telefonní číslo";
    if (!formData.kraj) newErrors.kraj = "Vyberte kraj";
    if (!formData.pozice) newErrors.pozice = "Vyberte pozici";
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ jmeno: "", telefon: "", kraj: "", pozice: "", souhlas: false });
        if (onSuccess) setTimeout(onSuccess, 2000);
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
        <h3 className="text-2xl font-bold text-[#142f4c] mb-2">Zpráva odeslána!</h3>
        <p className="text-gray-600">Brzy se ti ozveme. Těšíme se na spolupráci.</p>
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
            value={formData.kraj}
            onChange={(e) => setFormData({ ...formData, kraj: e.target.value })}
            className={`form-select w-full ${errors.kraj ? "border-red-400" : ""}`}
          >
            <option value="" disabled>Vyberte kraj</option>
            {kraje.map((k) => (
              <option key={k} value={k}>{k}</option>
            ))}
          </select>
          {errors.kraj && <p className="text-red-500 text-xs mt-1">{errors.kraj}</p>}
        </div>

        <div>
          <select
            value={formData.pozice}
            onChange={(e) => setFormData({ ...formData, pozice: e.target.value })}
            className={`form-select w-full ${errors.pozice ? "border-red-400" : ""}`}
          >
            <option value="" disabled>Vyberte pozici</option>
            <option value="Finanční specialista">Finanční specialista</option>
            <option value="Manažer">Manažer</option>
          </select>
          {errors.pozice && <p className="text-red-500 text-xs mt-1">{errors.pozice}</p>}
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
              <a href="https://www.bidli.cz/informace-o-webu/" target="_blank" rel="noopener noreferrer" className="text-[#3fb1e1] hover:underline">osobních údajů</a>
            </span>
          </label>
          {errors.souhlas && <p className="text-red-500 text-xs mt-1">{errors.souhlas}</p>}
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? (
            <>
              <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2" />
              Odesílám…
            </>
          ) : (
            <>
              Odeslat <FontAwesomeIcon icon={faArrowRight} />
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
