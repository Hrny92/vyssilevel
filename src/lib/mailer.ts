import nodemailer from "nodemailer";

// ─── SMTP konfigurace (Email Profi od Seznamu) ─────────────────────────────
// Potřebné env proměnné ve Vercel:
//   SMTP_HOST     = smtp.seznam.cz
//   SMTP_PORT     = 465
//   SMTP_USER     = info@vyssilevel.cz
//   SMTP_PASSWORD = <heslo k e-mailu>
//   CONTACT_EMAILS = lukas.hrncir@bidli.cz,dalsi@email.cz   (čárkou oddělené)

export function createTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.seznam.cz",
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: Number(process.env.SMTP_PORT ?? 465) === 465, // true pro 465 (SSL), false pro 587 (STARTTLS)
    auth: {
      user: process.env.SMTP_USER ?? "info@vyssilevel.cz",
      pass: process.env.SMTP_PASSWORD ?? "",
    },
  });
}

/** Vrátí pole příjemců z env proměnné CONTACT_EMAILS */
export function getRecipients(): string[] {
  const raw = process.env.CONTACT_EMAILS ?? "lukas.hrncir@bidli.cz";
  return raw
    .split(",")
    .map((e) => e.trim())
    .filter(Boolean);
}

export const FROM = `Bidli Web <${process.env.SMTP_USER ?? "info@vyssilevel.cz"}>`;
