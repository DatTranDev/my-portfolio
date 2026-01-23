import { NextResponse } from "next/server";
import { Resend } from "resend";

import EmailTemplate from "../../components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const personalEmail = "dattran.uit.se@gmail.com";

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [email, personalEmail],
      subject: subject,
      react: <EmailTemplate subject={subject} message={message} senderEmail={email} />,
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
