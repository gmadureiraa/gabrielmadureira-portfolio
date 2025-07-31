import { NextRequest } from 'next/server';

const TELEGRAM_BOT_TOKEN = '7677997042:AAGddGqKo41Hk_RCx3nmNMB9aAIkHr_sHd8';
const TELEGRAM_USER_ID = '1568212499';

export async function POST(request: NextRequest) {
  const { contato } = await request.json();

  if (!contato) {
    return new Response(JSON.stringify({ error: 'Preencha o campo de contato.' }), { status: 400 });
  }

  const message = `Novo contato recebido:\n\n${contato}`;

  const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const res = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_USER_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });
    if (!res.ok) throw new Error('Erro ao enviar para o Telegram');
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Erro ao enviar para o Telegram.' }), { status: 500 });
  }
} 