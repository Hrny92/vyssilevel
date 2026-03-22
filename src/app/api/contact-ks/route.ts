import { NextResponse } from "next/server";
import { createTransport, getRecipients, FROM } from "@/lib/mailer";
import { ksEmailHtml, ksEmailSubject } from "@/lib/email";

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

    if (!process.env.SMTP_PASSWORD) {
      console.error("❌ SMTP_PASSWORD není nastavena");
      return NextResponse.json({ error: "Chyba konfigurace serveru" }, { status: 500 });
    }

    const data = { jmeno, telefon, termin };
    const transporter = createTransport();

    await transporter.sendMail({
      from:    FROM,
      to:      getRecipients().join(", "),
      subject: ksEmailSubject(data),
      html:    ksEmailHtml(data),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("KS form error:", error);
    return NextResponse.json({ error: "Interní chyba serveru" }, { status: 500 });
  }
}
