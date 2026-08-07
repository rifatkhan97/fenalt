"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface IntakeInput {
  name: string;
  brandName: string;
  email: string;
  category: string;
  units: string;
  description: string;
}

export async function sendIntakeEmail(data: IntakeInput) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return { error: "RESEND_API_KEY is not configured on the server." };
    }

    const { name, brandName, email, category, units, description } = data;

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

    const { data: responseData, error } = await resend.emails.send({
      from: "Fenalt Intake <hello@fenalt.com>",
      to: "hello@fenalt.com",
      replyTo: email,
      subject: `New Project Intake from Fenalt - ${brandName}`,
      html: htmlContent,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return { error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error("Server Action Exception:", err);
    return { error: err.message || "An unexpected error occurred." };
  }
}
