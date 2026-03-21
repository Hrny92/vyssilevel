import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ksEmailHtml, ksEmailSubject } from "@/lib/email";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "lukas.hrnci@bidli.cz";
const FROM_EMAIL = "Bidli Web <noreply@vyssilevel.cz>";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { jmeno, telefon, termin, souhlas } = body;

    if (!jmeno || !telefon || !termin || !souhlas) {
      return NextResponse.json(
        { error: "Vyplňte prosím všechna povinná pole" },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY není nastavena");
      return NextResponse.json({ error: "Chyba konfigurace serveru" }, { status: 500 });
    }

    const data = { jmeno, telefon, termin };

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: ksEmailSubject(data),
      html: ksEmailHtml(data),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Nepodařilo se odeslat e-mail" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("KS form error:", error);
    return NextResponse.json({ error: "Interní chyba serveru" }, { status: 500 });
  }
}
