"use server";

import { Resend } from "resend";

export interface AttachmentInput {
  name: string;
  type: string;
  content: string; // Base64-encoded file content (no data URI prefix)
}

interface IntakeInput {
  name: string;
  brandName: string;
  email: string;
  category: string;
  units: string;
  description: string;
  attachments?: AttachmentInput[];
}

const ALLOWED_MIME_TYPES = ["application/pdf", "image/jpeg", "image/png"];
const ALLOWED_EXTENSIONS = [".pdf", ".jpg", ".jpeg", ".png"];
const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB raw
const MAX_TOTAL_BYTES = 20 * 1024 * 1024; // 20 MB raw

/** Estimate raw byte size from a Base64 string (no padding correction needed — approximate is fine for limits). */
function base64ToBytes(b64: string): number {
  return Math.floor(b64.length * 0.75);
}

export async function sendIntakeEmail(data: IntakeInput) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return { error: "RESEND_API_KEY is not configured on the server. Please check your environment variables." };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, brandName, email, category, units, description, attachments = [] } = data;

    // ── Server-side attachment validation ──────────────────────────────────
    if (attachments.length > 3) {
      return { error: "You can upload a maximum of 3 files." };
    }

    let totalBytes = 0;
    for (const file of attachments) {
      // MIME type check
      if (!ALLOWED_MIME_TYPES.includes(file.type)) {
        return { error: "Unsupported file type. Please upload PDF, JPG, or PNG files only." };
      }

      // Extension check (guard against mismatched client metadata)
      const ext = "." + file.name.split(".").pop()?.toLowerCase();
      if (!ALLOWED_EXTENSIONS.includes(ext)) {
        return { error: "Unsupported file type. Please upload PDF, JPG, or PNG files only." };
      }

      // Per-file size check
      const fileBytes = base64ToBytes(file.content);
      if (fileBytes > MAX_FILE_BYTES) {
        return { error: "Each file must be 10MB or smaller." };
      }

      totalBytes += fileBytes;
    }

    if (totalBytes > MAX_TOTAL_BYTES) {
      return { error: "Your files are too large. Please keep the total upload size under 20MB." };
    }
    // ── End validation ─────────────────────────────────────────────────────

    const htmlContent = `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E5DDD3; background-color: #FAF9F6; padding: 30px; color: #1A1A1A;">
        <div style="border-bottom: 2px solid #2D5016; padding-bottom: 15px; margin-bottom: 20px;">
          <h2 style="color: #2D5016; font-size: 24px; font-weight: 300; margin: 0; letter-spacing: 1px;">FENALT INTAKE</h2>
          <p style="color: #6B6560; font-size: 14px; margin: 5px 0 0 0;">New Project Quote Request Received</p>
        </div>

        <div style="margin-bottom: 25px;">
          <h3 style="color: #1A1A1A; font-size: 16px; border-left: 3px solid #C8A882; padding-left: 10px; margin-bottom: 15px;">Contact & Brand Info</h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 6px 0; color: #6B6560; width: 120px; font-weight: bold;">Full Name:</td>
              <td style="padding: 6px 0; color: #1A1A1A;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #6B6560; font-weight: bold;">Brand Name:</td>
              <td style="padding: 6px 0; color: #1A1A1A;">${brandName}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #6B6560; font-weight: bold;">Email Address:</td>
              <td style="padding: 6px 0; color: #1A1A1A;"><a href="mailto:${email}" style="color: #2D5016; text-decoration: none;">${email}</a></td>
            </tr>
          </table>
        </div>

        <div style="margin-bottom: 25px;">
          <h3 style="color: #1A1A1A; font-size: 16px; border-left: 3px solid #C8A882; padding-left: 10px; margin-bottom: 15px;">Project Requirements</h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 6px 0; color: #6B6560; width: 120px; font-weight: bold;">Garment Category:</td>
              <td style="padding: 6px 0; color: #1A1A1A;">${category}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #6B6560; font-weight: bold;">Estimated Units:</td>
              <td style="padding: 6px 0; color: #1A1A1A;">${units}</td>
            </tr>
          </table>
        </div>

        <div style="margin-bottom: 30px;">
          <h3 style="color: #1A1A1A; font-size: 16px; border-left: 3px solid #C8A882; padding-left: 10px; margin-bottom: 15px;">Project Description</h3>
          <div style="background-color: #F2EFE9; padding: 15px; border-radius: 4px; font-size: 14px; line-height: 1.6; color: #1A1A1A; white-space: pre-wrap;">${description}</div>
        </div>

        <div style="border-top: 1px solid #E5DDD3; padding-top: 15px; text-align: center; font-size: 12px; color: #6B6560;">
          <p style="margin: 0;">This inquiry was submitted from the Fenalt website intake form.</p>
          <p style="margin: 5px 0 0 0;">© ${new Date().getFullYear()} Fenalt. All rights reserved.</p>
        </div>
      </div>
    `;

    const internalEmailPayload: Parameters<typeof resend.emails.send>[0] = {
      from: "Fenalt Intake <hello@fenalt.com>",
      to: "hello@fenalt.com",
      replyTo: email,
      subject: `New Project Intake from Fenalt - ${brandName}`,
      html: htmlContent,
    };

    if (attachments.length > 0) {
      internalEmailPayload.attachments = attachments.map((file) => ({
        filename: file.name,
        content: file.content,
      }));
    }

    const internalEmailPromise = resend.emails.send(internalEmailPayload);

    const customerEmailPromise = resend.emails.send({
      from: "Fenalt Intake <hello@fenalt.com>",
      to: email,
      subject: "We've received your project details | Fenalt",
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E5DDD3; background-color: #FAF9F6; padding: 30px; color: #1A1A1A;">
          <div style="border-bottom: 2px solid #2D5016; padding-bottom: 15px; margin-bottom: 20px;">
            <h2 style="color: #2D5016; font-size: 24px; font-weight: 300; margin: 0; letter-spacing: 1px;">FENALT</h2>
            <p style="color: #6B6560; font-size: 14px; margin: 5px 0 0 0;">Intake Confirmation</p>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #1A1A1A; margin-bottom: 20px;">Hi ${brandName},</p>
          
          <p style="font-size: 14px; line-height: 1.6; color: #1A1A1A; margin-bottom: 25px;">
            Thank you for submitting your project details. Our team is reviewing your tech pack and estimated quantities. We typically respond within 24 to 48 business hours with an initial capability assessment and pricing strategy for your collection.
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
      `,
    });

    const [internalRes, customerRes] = await Promise.all([
      internalEmailPromise,
      customerEmailPromise,
    ]);

    if (internalRes.error) {
      console.error("Resend API Error (Internal Alert):", internalRes.error);
      return { error: internalRes.error.message };
    }

    if (customerRes.error) {
      console.warn("Resend API Warning (Customer Auto-responder):", customerRes.error);
    }

    return { success: true };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "An unexpected error occurred.";
    console.error("Server Action Exception:", err);
    return { error: message };
  }
}
