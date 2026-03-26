import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, service, budget, description } = body;

    // --- Validation ---
    if (!name || !email || !service) {
      return NextResponse.json(
        { success: false, message: "Missing required fields: name, email, service." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address." },
        { status: 400 }
      );
    }

    // -------------------------------------------------------------------
    // EMAIL DELIVERY (choose one option and uncomment it)
    //
    // OPTION A: Resend (recommended — https://resend.com)
    //   1. npm install resend
    //   2. Add RESEND_API_KEY to your .env.local
    //   3. Uncomment the block below:
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Lukren <onboarding@resend.dev>",
    //   to: ["your@email.com"],
    //   subject: `New inquiry from ${name} — ${service}`,
    //   html: `
    //     <h2>New Project Inquiry</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Service:</strong> ${service}</p>
    //     <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
    //     <p><strong>Description:</strong> ${description || "Not provided"}</p>
    //   `,
    // });
    //
    // OPTION B: Nodemailer (SMTP)
    //   1. npm install nodemailer @types/nodemailer
    //   2. Add SMTP_HOST, SMTP_USER, SMTP_PASS to .env.local
    //   3. Uncomment and configure the block below:
    //
    // import nodemailer from "nodemailer";
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: 587,
    //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    // });
    // await transporter.sendMail({
    //   from: process.env.SMTP_USER,
    //   to: "your@email.com",
    //   subject: `New inquiry from ${name} — ${service}`,
    //   text: `Name: ${name}\nEmail: ${email}\nService: ${service}\nBudget: ${budget}\nDescription: ${description}`,
    // });
    // -------------------------------------------------------------------

    // Log submission for now (remove in production once email is configured)
    console.log("📬 New inquiry received:", { name, email, service, budget, description });

    return NextResponse.json(
      { success: true, message: "Inquiry received. We will be in touch within 12 business hours." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
