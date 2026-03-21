/**
 * HTML e-mailové šablony pro formuláře Bidli
 * Kompatibilní s Outlook / Microsoft 365 (table-based layout)
 */

const NAVY = "#142f4c";
const SKY   = "#3fb1e1";
const LIGHT = "#f0f7fb";
const GRAY  = "#6b7280";
const WHITE = "#ffffff";

// ─── Sdílená hlavička a patička ───────────────────────────────────────────

function emailWrapper(title: string, body: string): string {
  return `<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(20,47,76,0.10);">

          <!-- HEADER -->
          <tr>
            <td style="background:${NAVY};padding:32px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-size:22px;font-weight:900;color:${WHITE};letter-spacing:-0.5px;">
                      BIDLI
                    </span>
                    <span style="font-size:22px;font-weight:300;color:${SKY};margin-left:4px;">
                      | vyšší level
                    </span>
                  </td>
                  <td align="right">
                    <span style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase;">
                      Nová zpráva z webu
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- BAREVNÝ PROUŽEK -->
          <tr>
            <td style="background:${SKY};height:4px;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- OBSAH -->
          <tr>
            <td style="background:${WHITE};padding:40px 40px 32px;">
              ${body}
            </td>
          </tr>

          <!-- PATIČKA -->
          <tr>
            <td style="background:#f0f4f8;padding:20px 40px;border-top:1px solid #e5eaf0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-size:11px;color:#9ca3af;line-height:1.6;">
                    Tato zpráva byla automaticky vygenerována z webu
                    <a href="https://vyssilevel.cz" style="color:${SKY};text-decoration:none;">vyssilevel.cz</a>.
                    Neodpovídejte na tento e-mail.
                  </td>
                  <td align="right" style="font-size:11px;color:#9ca3af;white-space:nowrap;">
                    Bidli &copy; ${new Date().getFullYear()}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// Jeden řádek s daty (label + hodnota)
function row(label: string, value: string): string {
  return `
  <tr>
    <td style="padding:10px 0;border-bottom:1px solid #f0f4f8;width:38%;vertical-align:top;">
      <span style="font-size:12px;font-weight:700;color:${GRAY};text-transform:uppercase;letter-spacing:0.5px;">
        ${label}
      </span>
    </td>
    <td style="padding:10px 0 10px 16px;border-bottom:1px solid #f0f4f8;vertical-align:top;">
      <span style="font-size:15px;color:${NAVY};font-weight:600;">
        ${value}
      </span>
    </td>
  </tr>`;
}

// Zvýrazněný nadpis sekce dat
function sectionTitle(icon: string, text: string): string {
  return `
  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
    <tr>
      <td style="background:${LIGHT};border-left:4px solid ${SKY};padding:14px 18px;border-radius:0 8px 8px 0;">
        <span style="font-size:18px;font-weight:900;color:${NAVY};">
          ${icon}&nbsp; ${text}
        </span>
      </td>
    </tr>
  </table>`;
}

// ─── Šablona 1: Kontaktní formulář (Finanční specialista / Manažer) ────────

export interface KontaktEmailData {
  jmeno: string;
  telefon: string;
  kraj: string;
  pozice: string;
}

export function kontaktEmailHtml(data: KontaktEmailData): string {
  const body = `
    <h1 style="margin:0 0 8px;font-size:24px;font-weight:900;color:${NAVY};">
      Nová kariérní poptávka
    </h1>
    <p style="margin:0 0 28px;font-size:14px;color:${GRAY};">
      Někdo se zajímá o kariéru v Bidli. Níže jsou jejich kontaktní údaje.
    </p>

    ${sectionTitle("👤", "Kontaktní údaje")}

    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
      ${row("Jméno a příjmení", data.jmeno)}
      ${row("Telefon", `<a href="tel:${data.telefon}" style="color:${SKY};text-decoration:none;">${data.telefon}</a>`)}
      ${row("Kraj", data.kraj)}
      ${row("Pozice", `<span style="display:inline-block;background:${LIGHT};border:1px solid ${SKY};color:${NAVY};border-radius:20px;padding:3px 12px;font-size:13px;">${data.pozice}</span>`)}
    </table>

    <!-- CTA tlačítko -->
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding:8px 0 0;">
          <a href="tel:${data.telefon}"
             style="display:inline-block;background:${SKY};color:${WHITE};font-size:15px;font-weight:700;
                    padding:14px 32px;border-radius:50px;text-decoration:none;letter-spacing:0.3px;">
            📞 Zavolat ${data.jmeno.split(" ")[0]}
          </a>
        </td>
      </tr>
    </table>`;

  return emailWrapper(`Nová kariérní poptávka – ${data.jmeno}`, body);
}

export function kontaktEmailSubject(data: KontaktEmailData): string {
  return `🧑‍💼 Nová poptávka: ${data.jmeno} — ${data.pozice} (${data.kraj})`;
}

// ─── Šablona 2: Kariérní snídaně ──────────────────────────────────────────

export interface KsEmailData {
  jmeno: string;
  telefon: string;
  termin: string;
}

export function ksEmailHtml(data: KsEmailData): string {
  const body = `
    <h1 style="margin:0 0 8px;font-size:24px;font-weight:900;color:${NAVY};">
      Nová přihláška na kariérní snídani
    </h1>
    <p style="margin:0 0 28px;font-size:14px;color:${GRAY};">
      Nový zájemce se přihlásil na kariérní snídani. Nezapomeňte poslat potvrzení.
    </p>

    ${sectionTitle("☕", "Přihláška")}

    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
      ${row("Jméno a příjmení", data.jmeno)}
      ${row("Telefon", `<a href="tel:${data.telefon}" style="color:${SKY};text-decoration:none;">${data.telefon}</a>`)}
      ${row("Termín a město", `<span style="display:inline-block;background:${LIGHT};border:1px solid ${SKY};color:${NAVY};border-radius:20px;padding:3px 14px;font-size:13px;font-weight:700;">📅 ${data.termin}</span>`)}
    </table>

    <!-- CTA tlačítka -->
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding:8px 0 0;">
          <a href="tel:${data.telefon}"
             style="display:inline-block;background:${SKY};color:${WHITE};font-size:15px;font-weight:700;
                    padding:14px 32px;border-radius:50px;text-decoration:none;letter-spacing:0.3px;">
            📞 Zavolat ${data.jmeno.split(" ")[0]}
          </a>
        </td>
      </tr>
    </table>`;

  return emailWrapper(`Přihláška na kariérní snídani – ${data.jmeno}`, body);
}

export function ksEmailSubject(data: KsEmailData): string {
  return `☕ Nová přihláška: ${data.jmeno} — ${data.termin}`;
}
