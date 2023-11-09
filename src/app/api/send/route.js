/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import EmailTemplate from '@/components/EmailTemplate';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, lastName, email, number, detalles } = body;
    const data = await resend.emails.send({
      from: 'Dukke <no-replay@andres-duque.com>',
      to: ['andduque.ing@gmail.com'],
      subject: 'Contacto Dukke Dev',
      react: EmailTemplate({
        name,
        lastName,
        email,
        number,
        content: detalles,
      }),
    });

    return NextResponse.json({ message: 'Email sent' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error' }, { status: 500 });
  }
}
