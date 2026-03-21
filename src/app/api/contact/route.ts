import { NextResponse } from "next/server";
import { Resend } from "resend";
import { kontaktEmailHtml, kontaktEmailSubject } from "@/lib/email";

const TO_EMAIL   = "lukas.hrnci@bidli.cz";
// Použij verified doménu z Resend dashboardu, nebo "onboarding@resend.dev" pro testování
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { jmeno, telefon, kraj, pozice, souhlas } = body;

    if (!jmeno || !telefon || !kraj || !pozice || !souhlas) {
      return NextResponse.json(
        { error: "Vyplňte prosím všechna povinná pole" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("❌ RESEND_API_KEY není nastavena");
      return NextResponse.json({ error: "Chyba konfigurace serveru" }, { status: 500 });
    }

    // Lazy init — nevytváříme instanci při načtení modulu, ale až zde
    const resend = new Resend(apiKey);
    const data   = { jmeno, telefon, kraj, pozice };

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to:   TO_EMAIL,
      subject: kontaktEmailSubject(data),
      html:    kontaktEmailHtml(data),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Nepodařilo se odeslat e-mail" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Interní chyba serveru" }, { status: 500 });
  }
}
