import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { jmeno, telefon, kraj, pozice, souhlas } = body;

    // Basic validation
    if (!jmeno || !telefon || !kraj || !pozice || !souhlas) {
      return NextResponse.json(
        { error: "Vyplňte prosím všechna povinná pole" },
        { status: 400 }
      );
    }

    // TODO: Replace with your preferred notification method.
    // Options:
    //   1. Send email via Resend / Nodemailer / SendGrid
    //   2. Post to a webhook (Zapier, Make, n8n)
    //   3. Save to a database
    //
    // Example with Resend (npm install resend):
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "web@vyssilevel.cz",
    //   to: "info@bidli.cz",
    //   subject: `Nový kontaktní formulář – ${pozice}`,
    //   text: `Jméno: ${jmeno}\nTelefon: ${telefon}\nKraj: ${kraj}\nPozice: ${pozice}`,
    // });

    console.log("📬 Nový kontaktní formulář:", { jmeno, telefon, kraj, pozice });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Interní chyba serveru" },
      { status: 500 }
    );
  }
}
