import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting (for demo/production, use Redis)
const rateLimitMap = new Map<string, number>();

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, honeypot } = await req.json();
console.log( name, email, phone, message, honeypot)
    // 1. Honeypot check (anti-bot)
    if (honeypot) {
      return NextResponse.json(
        { error: "Spam detected." },
        { status: 400 }
      );
    }

    // 2. Rate Limiting (Simple)
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    const lastRequest = rateLimitMap.get(ip);
    
    if (lastRequest && now - lastRequest < 60000) { // 1 minute limit
      return NextResponse.json(
        { error: "Too many transmissions. Please wait 60 seconds." },
        { status: 429 }
      );
    }
    rateLimitMap.set(ip, now);

    // 3. Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All required signal fields must be filled." },
        { status: 400 }
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid signal frequency (email format)." },
        { status: 400 }
      );
    }

    // 4. Send Email to Site Owner (Admin Inbox)
    const timestamp = new Date().toLocaleTimeString();
    const { data: ownerData, error: ownerError } = await resend.emails.send({
      /**
       * IMPORTANT FOR DELIVERABILITY:
       * In production, replace "onboarding@resend.dev" with a verified domain email (e.g., contact@yourdomain.com).
       * Using a verified domain prevents emails from being flagged as spam.
       */
      from: "Devtoon Inquiry <onboarding@resend.dev>", 
      to: "devtoontechnologies@gmail.com", // Main admin inbox
      subject: `[New Inquiry] ${name} // ${timestamp}`, // Unique subject to prevent Gmail threading
      replyTo: email, // Directly reply to the user's email
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6; border: 1px solid #eee; border-radius: 12px;">
          <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;">Incoming Transmission</h2>
          <p style="margin-bottom: 5px;"><strong>Sender Identity:</strong> ${name}</p>
          <p style="margin-bottom: 5px;"><strong>Signal Address:</strong> ${email}</p>
          <p style="margin-bottom: 15px;"><strong>Voice Link:</strong> ${phone || "None provided"}</p>
          
          <div style="margin-top: 20px; padding: 20px; background: #f4f4f4; border-radius: 8px; border-left: 4px solid #000;">
            <strong style="display: block; margin-bottom: 10px; text-transform: uppercase; font-size: 12px; color: #666;">Project Payload:</strong>
            <div style="white-space: pre-wrap;">${message}</div>
          </div>
          
          <p style="margin-top: 30px; font-size: 11px; color: #999; border-top: 1px solid #eee; padding-top: 10px;">
            Transmitted at ${new Date().toLocaleString()} via Devtoon Portfolio Terminal.
          </p>
        </div>
      `,
    });

    if (ownerError) {
      console.error("Resend Error (Owner):", ownerError);
      return NextResponse.json({ error: "Failed to transmit message to HQ." }, { status: 500 });
    }

    // 5. Send Confirmation Email to User (Optional)
    const { data: userData, error: userError } = await resend.emails.send({
      from: "Devtoon Technologies <onboarding@resend.dev>", // Replace with your verified domain
      to: email,
      subject: "Inquiry Received // Devtoon Technologies",
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6;">
          <h2 style="color: #000;">Transmission Logged</h2>
          <p>Greetings ${name},</p>
          <p>This is an automated confirmation that your project inquiry has been successfully received by our Technical HQ.</p>
          <p>Our team is currently analyzing your payload. We typically respond within 24 hours.</p>
          <div style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 10px; font-size: 14px;">
            <p><strong>Transmission Summary:</strong></p>
            <p><em>"${message.substring(0, 100)}${message.length > 100 ? "..." : ""}"</em></p>
          </div>
          <p style="margin-top: 20px;">Stay tuned.</p>
          <p><strong>Devtoon Technologies</strong><br/>High-Octane Development</p>
        </div>
      `,
    });

    if (userError) {
      console.error("Resend Error (User):", userError);
      // We don't fail the whole request if only the confirmation email fails
    }

    return NextResponse.json({ success: true, message: "Transmission received." });

  } catch (error) {
    console.error("Contact System Failure:", error);
    return NextResponse.json(
      { error: "Signal disruption. Our engineers have been notified." },
      { status: 500 }
    );
  }
}
