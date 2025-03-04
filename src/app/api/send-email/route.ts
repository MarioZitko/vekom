import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { subject, name, email, contact, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'mariozitkovic@gmail.com',
      subject,
      text: `Ime: ${name}\nEmail: ${email}\nKontakt broj: ${contact}\n\nPoruka:\n${message}`,
    });

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Email failed to send. ' + error }, { status: 500 });
  }
}
