// Bot de Telegram para Soluciones Integrales Bonanza
// Responde automáticamente a los clientes

const BOT_TOKEN = '8288065043:AAEUTJndMhOHAQsCTJPWjhdvF8k2FDpe8g4';
const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}`;

// Obtener tipo de cambio actual
async function getExchangeRate(): Promise<number> {
  try {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    const rate = data.rates.MXN;
    // Agregar 1.5% de comisión
    return rate * 1.015;
  } catch {
    return 20.50 * 1.015; // Fallback
  }
}

// Enviar mensaje
async function sendMessage(chatId: number, text: string, options: any = {}) {
  await fetch(`${API_URL}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: 'HTML',
      ...options
    })
  });
}

// Menú principal
function getMainMenu() {
  return {
    reply_markup: {
      inline_keyboard: [
        [{ text: '💱 Ver Tipo de Cambio', callback_data: 'exchange_rate' }],
        [{ text: '🛒 Quiero Comprar USDT', callback_data: 'buy_usdt' }],
        [{ text: '💳 Métodos de Pago', callback_data: 'payment_methods' }],
        [{ text: '❓ Preguntas Frecuentes', callback_data: 'faq' }],
        [{ text: '👤 Hablar con un Asesor', callback_data: 'human_support' }]
      ]
    }
  };
}

// Mensaje de bienvenida
async function sendWelcome(chatId: number, firstName: string) {
  const rate = await getExchangeRate();
  
  const welcomeMessage = `
🏦 <b>¡Bienvenido a Soluciones Integrales Bonanza!</b>

Hola <b>${firstName}</b> 👋

Somos tu mejor opción para comprar <b>USDT</b> en México.

📊 <b>Tipo de cambio actual:</b>
1 USDT = $${rate.toFixed(2)} MXN
<i>(Incluye 1.5% de comisión)</i>

✅ Transacciones rápidas (5-15 min)
✅ 100% seguro y confiable
✅ Powered by Arcus

¿En qué te puedo ayudar?
`;

  await sendMessage(chatId, welcomeMessage, getMainMenu());
}

// Procesar callbacks de botones
async function handleCallback(callbackQuery: any) {
  const chatId = callbackQuery.message.chat.id;
  const data = callbackQuery.data;
  const rate = await getExchangeRate();

  switch (data) {
    case 'exchange_rate':
      const rateMessage = `
📊 <b>Tipo de Cambio Actual</b>

1 USDT = <b>$${rate.toFixed(2)} MXN</b>
<i>(Incluye 1.5% de comisión)</i>

💡 <b>Ejemplos:</b>
• $1,000 MXN ➜ ${(1000/rate).toFixed(2)} USDT
• $5,000 MXN ➜ ${(5000/rate).toFixed(2)} USDT
• $10,000 MXN ➜ ${(10000/rate).toFixed(2)} USDT
• $20,000 MXN ➜ ${(20000/rate).toFixed(2)} USDT

⏰ Tipo de cambio actualizado en tiempo real
`;
      await sendMessage(chatId, rateMessage, getMainMenu());
      break;

    case 'buy_usdt':
      const buyMessage = `
🛒 <b>¿Cómo comprar USDT?</b>

<b>Paso 1:</b> Dime cuántos pesos (MXN) quieres invertir
<b>Paso 2:</b> Te envío los datos de pago
<b>Paso 3:</b> Realizas el pago (SPEI, depósito, OXXO)
<b>Paso 4:</b> Envías comprobante
<b>Paso 5:</b> Reciben tus USDT en 5-15 minutos

💬 <b>Escribe el monto que deseas comprar</b>
Ejemplo: "Quiero comprar 5000 pesos"

📊 Tipo de cambio actual: 1 USDT = $${rate.toFixed(2)} MXN
`;
      await sendMessage(chatId, buyMessage);
      break;

    case 'payment_methods':
      const paymentMessage = `
💳 <b>Métodos de Pago Aceptados</b>

🏦 <b>SPEI (Transferencia)</b>
• Banco: Arcus
• Procesamiento: Inmediato

💵 <b>Depósito en Efectivo</b>
• OXXO
• 7-Eleven
• Farmacias del Ahorro

📱 <b>Otros</b>
• Depósito en ventanilla
• Cajero automático

⚡ Todos los pagos se procesan en 5-15 minutos

💬 ¿Listo para comprar? Escribe el monto que deseas.
`;
      await sendMessage(chatId, paymentMessage, getMainMenu());
      break;

    case 'faq':
      const faqMessage = `
❓ <b>Preguntas Frecuentes</b>

<b>¿Es seguro?</b>
✅ Sí, operamos con Arcus, infraestructura bancaria de nivel empresarial.

<b>¿Cuánto tiempo tarda?</b>
⏱ Entre 5 y 15 minutos después de confirmar tu pago.

<b>¿Cuál es el monto mínimo?</b>
💰 Desde $500 MXN puedes comprar.

<b>¿Hay monto máximo?</b>
📊 Hasta $50,000 MXN por transacción. Para montos mayores, contáctanos.

<b>¿Dónde recibo mis USDT?</b>
📲 Te los enviamos a tu wallet (TRC20 o ERC20).

¿Tienes otra pregunta? Escríbela aquí 👇
`;
      await sendMessage(chatId, faqMessage, getMainMenu());
      break;

    case 'human_support':
      const supportMessage = `
👤 <b>Contacto con Asesor</b>

Un asesor te contactará en breve.

Mientras tanto, puedes:
• Escribir tu consulta aquí
• Indicar el monto que deseas comprar
• Compartirnos tu wallet para agilizar

🕐 Horario de atención:
Lunes a Domingo 9:00 AM - 11:00 PM

⚡ Tiempo de respuesta promedio: 5 minutos
`;
      await sendMessage(chatId, supportMessage);
      break;
  }

  // Responder al callback
  await fetch(`${API_URL}/answerCallbackQuery`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ callback_query_id: callbackQuery.id })
  });
}

// Procesar mensajes de texto
async function handleMessage(message: any) {
  const chatId = message.chat.id;
  const text = message.text || '';
  const firstName = message.from?.first_name || 'amigo';

  // Comando /start
  if (text.startsWith('/start')) {
    await sendWelcome(chatId, firstName);
    return;
  }

  // Detectar montos en el mensaje
  const amountMatch = text.match(/(\d{1,3}(?:,?\d{3})*(?:\.\d{2})?)/);
  if (amountMatch) {
    const amount = parseFloat(amountMatch[1].replace(',', ''));
    if (amount >= 100) {
      const rate = await getExchangeRate();
      const usdt = amount / rate;
      
      const quoteMessage = `
💰 <b>Cotización</b>

Tú pagas: <b>$${amount.toLocaleString()} MXN</b>
Tú recibes: <b>${usdt.toFixed(2)} USDT</b>

📊 Tipo de cambio: $${rate.toFixed(2)} MXN por USDT
<i>(Incluye 1.5% de comisión)</i>

✅ ¿Deseas continuar con esta compra?
Responde <b>"Sí"</b> y te envío los datos de pago.
`;
      await sendMessage(chatId, quoteMessage, {
        reply_markup: {
          inline_keyboard: [
            [
              { text: '✅ Sí, quiero comprar', callback_data: 'buy_usdt' },
              { text: '❌ Cancelar', callback_data: 'exchange_rate' }
            ]
          ]
        }
      });
      return;
    }
  }

  // Respuesta genérica
  const genericMessage = `
Gracias por tu mensaje, <b>${firstName}</b> 👋

¿En qué te puedo ayudar hoy?
`;
  await sendMessage(chatId, genericMessage, getMainMenu());
}

// Polling para recibir actualizaciones
async function startPolling() {
  console.log('🤖 Bot de Soluciones Integrales Bonanza iniciado...');
  console.log('📡 Escuchando mensajes...');
  
  let offset = 0;

  while (true) {
    try {
      const response = await fetch(`${API_URL}/getUpdates?offset=${offset}&timeout=30`);
      const data = await response.json();

      if (data.ok && data.result.length > 0) {
        for (const update of data.result) {
          offset = update.update_id + 1;

          if (update.message) {
            console.log(`📩 Mensaje de ${update.message.from?.first_name}: ${update.message.text}`);
            await handleMessage(update.message);
          }

          if (update.callback_query) {
            console.log(`🔘 Botón presionado: ${update.callback_query.data}`);
            await handleCallback(update.callback_query);
          }
        }
      }
    } catch (error) {
      console.error('Error:', error);
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }
}

// Iniciar bot
startPolling();
