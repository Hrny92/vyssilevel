import { NextResponse } from "next/server";
import { createTransport, getRecipients, FROM } from "@/lib/mailer";
import { kontaktEmailHtml, kontaktEmailSubject } from "@/lib/email";

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

    if (!process.env.SMTP_PASSWORD) {
      console.error("❌ SMTP_PASSWORD není nastavena");
      return NextResponse.json({ error: "Chyba konfigurace serveru" }, { status: 500 });
    }

    const data = { jmeno, telefon, kraj, pozice };
    const transporter = createTransport();

    await transporter.sendMail({
      from:    FROM,
      to:      getRecipients().join(", "),
      subject: kontaktEmailSubject(data),
      html:    kontaktEmailHtml(data),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Interní chyba serveru" }, { status: 500 });
  }
}
