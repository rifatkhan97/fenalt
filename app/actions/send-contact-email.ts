"use server";

import { Resend } from "resend";

interface ContactInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: ContactInput) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return { error: "RESEND_API_KEY is not configured on the server. Please check your environment variables." };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, subject, message } = data;

    const internalHtmlContent = `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E5DDD3; background-color: #FAF9F6; padding: 30px; color: #1A1A1A;">
        <div style="border-bottom: 2px solid #2D5016; padding-bottom: 15px; margin-bottom: 20px;">
          <h2 style="color: #2D5016; font-size: 24px; font-weight: 300; margin: 0; letter-spacing: 1px;">FENALT CONTACT</h2>
          <p style="color: #6B6560; font-size: 14px; margin: 5px 0 0 0;">New Contact Form Submission Received</p>
        </div>

        <div style="margin-bottom: 25px;">
          <h3 style="color: #1A1A1A; font-size: 16px; border-left: 3px solid #C8A882; padding-left: 10px; margin-bottom: 15px;">Sender Details</h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 6px 0; color: #6B6560; width: 120px; font-weight: bold;">Full Name:</td>
              <td style="padding: 6px 0; color: #1A1A1A;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #6B6560; font-weight: bold;">Email Address:</td>
              <td style="padding: 6px 0; color: #1A1A1A;"><a href="mailto:${email}" style="color: #2D5016; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #6B6560; font-weight: bold;">Subject:</td>
              <td style="padding: 6px 0; color: #1A1A1A;">${subject}</td>
            </tr>
          </table>
        </div>

        <div style="margin-bottom: 30px;">
          <h3 style="color: #1A1A1A; font-size: 16px; border-left: 3px solid #C8A882; padding-left: 10px; margin-bottom: 15px;">Message Content</h3>
          <div style="background-color: #F2EFE9; padding: 15px; border-radius: 4px; font-size: 14px; line-height: 1.6; color: #1A1A1A; white-space: pre-wrap;">${message}</div>
        </div>

        <div style="border-top: 1px solid #E5DDD3; padding-top: 15px; text-align: center; font-size: 12px; color: #6B6560;">
          <p style="margin: 0;">This message was submitted from the Fenalt website contact form.</p>
          <p style="margin: 5px 0 0 0;">© ${new Date().getFullYear()} Fenalt. All rights reserved.</p>
        </div>
      </div>
    `;

    const customerHtmlContent = `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E5DDD3; background-color: #FAF9F6; padding: 30px; color: #1A1A1A;">
        <div style="border-bottom: 2px solid #2D5016; padding-bottom: 15px; margin-bottom: 20px;">
          <h2 style="color: #2D5016; font-size: 24px; font-weight: 300; margin: 0; letter-spacing: 1px;">FENALT</h2>
          <p style="color: #6B6560; font-size: 14px; margin: 5px 0 0 0;">Inquiry Confirmation</p>
        </div>
        
        <p style="font-size: 16px; line-height: 1.6; color: #1A1A1A; margin-bottom: 20px;">Hi ${name},</p>
        
        <p style="font-size: 14px; line-height: 1.6; color: #1A1A1A; margin-bottom: 25px;">
          Thank you for contacting us. We have received your message and a member of our team will get back to you shortly.
        </p>
        
        <div style="border-top: 1px solid #E5DDD3; padding-top: 20px; font-size: 13px; line-height: 1.6; color: #6B6560;">
          Best regards,<br />
          The Fenalt Team<br />
          Sustainable, Low-MOQ Manufacturing<br />
          Email: hello@fenalt.com<br />
          WhatsApp: +88 017 8134 5299<br />
          Address: Dhaka Housing Main Road, Holding - 4, Level - 9, Dhaka - 1207, Bangladesh
        </div>
      </div>
    `;

    const internalEmailPromise = resend.emails.send({
      from: "Fenalt Contact <hello@fenalt.com>",
      to: "hello@fenalt.com",
      replyTo: email,
      subject: `New Contact Form Submission - Fenalt - ${subject}`,
      html: internalHtmlContent,
    });

    const customerEmailPromise = resend.emails.send({
      from: "Fenalt <hello@fenalt.com>",
      to: email,
      subject: "We've received your message | Fenalt",
      html: customerHtmlContent,
    });

    const [internalRes, customerRes] = await Promise.all([
      internalEmailPromise,
      customerEmailPromise,
    ]);

    if (internalRes.error) {
      console.error("Resend API Error (Internal Contact Alert):", internalRes.error);
      return { error: internalRes.error.message };
    }

    if (customerRes.error) {
      console.warn("Resend API Warning (Customer Contact Auto-responder):", customerRes.error);
    }

    return { success: true };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "An unexpected error occurred.";
    console.error("Server Action Exception in sendContactEmail:", err);
    return { error: message };
  }
}
