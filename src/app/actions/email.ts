"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function sendEmail(formData: z.infer<typeof contactSchema>) {
  try {
    // 1. Validate data again on the server
    const validatedData = contactSchema.parse(formData);

    // 2. Prepare the email payload
    const { name, email, message } = validatedData;
    
    console.log(`[Email Server Action] Preparing to send email for: ${name} (${email})`);

    /**
     * PROMPT-DRIVEN IMPLEMENTATION:
     * To actually send the email to devtoontechnologies@gmail.com, 
     * you can use a service like Resend (recommended) or Nodemailer.
     * 
     * Example with Resend:
     * const res = await fetch('https://api.resend.com/emails', {
     *   method: 'POST',
     *   headers: {
     *     'Content-Type': 'application/json',
     *     'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
     *   },
     *   body: JSON.stringify({
     *     from: 'Devtoon <onboarding@resend.dev>',
     *     to: ['devtoontechnologies@gmail.com'],
     *     subject: `New Inquiry: ${name}`,
     *     text: `From: ${name} (${email})\n\nMessage:\n${message}`,
     *   }),
     * });
     */

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // For now, we return success so the UI can show the transition
    return { success: true };

  } catch (error) {
    console.error("Email processing error:", error);
    return { success: false, error: "Failed to process the signal." };
  }
}
