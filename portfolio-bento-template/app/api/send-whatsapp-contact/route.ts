import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  const { whatsapp } = await request.json();

  if (!whatsapp) {
    return new Response(JSON.stringify({ error: 'Número de WhatsApp é obrigatório.' }), { status: 400 });
  }

  // Configuração do Nodemailer para Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Seu e-mail Gmail
      pass: process.env.GMAIL_APP_PASSWORD, // Senha de app do Gmail
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: 'madureira@kaleidosdigital.com',
    subject: 'Novo contato via WhatsApp',
    text: `Novo número de WhatsApp recebido: ${whatsapp}`,
    html: `<p>Novo número de WhatsApp recebido: <strong>${whatsapp}</strong></p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Erro ao enviar e-mail.' }), { status: 500 });
  }
} 