import { Telegraf } from 'telegraf';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8288065043:AAEUTJndMhOHAQsCTJPWjhdvF8k2FDpe8g4';

const bot = new Telegraf(BOT_TOKEN);

// Datos bancarios (actualizar con los datos reales)
const DATOS_BANCARIOS = {
  banco: 'BANCO_AQUI',
  titular: 'TITULAR_AQUI', 
  clabe: 'CLABE_AQUI',
  cuenta: 'CUENTA_AQUI'
};

// Mensaje de bienvenida
bot.start((ctx) => {
  ctx.reply(`🏦 ¡Bienvenido a VendoUSDT!

💵 Compra y venta de USDT en CDMX

Comandos disponibles:
/comprar - Ver datos para comprar USDT
/vender - Información para vender USDT
/precios - Ver precios actuales
/ayuda - Ayuda general

¿En qué te puedo ayudar?`);
});

// Comando comprar
bot.command('comprar', (ctx) => {
  ctx.reply(`💰 ¡Gracias por tu interés en comprar USDT!

📋 Datos para transferencia:

🏦 Banco: ${DATOS_BANCARIOS.banco}
👤 Titular: ${DATOS_BANCARIOS.titular}
🔢 CLABE: ${DATOS_BANCARIOS.clabe}
📝 Cuenta: ${DATOS_BANCARIOS.cuenta}

📌 Instrucciones:
1. Realiza tu transferencia
2. Envíame el comprobante por aquí
3. Mándame tu wallet de USDT
4. Recibe tus USDT en minutos ⚡

¿Dudas? Escribe /ayuda`);
});

// Comando vender
bot.command('vender', (ctx) => {
  ctx.reply(`💸 ¿Quieres vender tus USDT?

📌 Proceso:
1. Dime cuántos USDT quieres vender
2. Te paso mi wallet para que envíes
3. Confirmo recepción
4. Te transfiero a tu cuenta bancaria

Escribe la cantidad que deseas vender 👇`);
});

// Comando precios
bot.command('precios', (ctx) => {
  ctx.reply(`📊 Precios actuales:

💵 Compra USDT: $17.80 MXN
💰 Venta USDT: $17.20 MXN

⚡ Transferencias inmediatas
🔒 100% seguro

¿Listo para operar? Usa /comprar o /vender`);
});

// Comando ayuda
bot.command('ayuda', (ctx) => {
  ctx.reply(`❓ Ayuda - VendoUSDT

Somos un servicio de compra/venta de USDT en CDMX.

📍 Operamos de Lunes a Domingo
⏰ Horario: 9:00 AM - 10:00 PM
💬 Respuesta en minutos

Comandos:
/comprar - Comprar USDT
/vender - Vender USDT  
/precios - Ver precios

¿Más dudas? Escríbeme directamente 👋`);
});

// Respuesta a mensajes de texto
bot.on('text', (ctx) => {
  const mensaje = ctx.message.text.toLowerCase();
  
  if (mensaje.includes('hola') || mensaje.includes('buenas')) {
    ctx.reply('¡Hola! 👋 Usa /start para ver todas las opciones disponibles.');
  } else if (mensaje.includes('precio') || mensaje.includes('cuanto')) {
    ctx.reply('Usa /precios para ver los precios actuales 📊');
  } else if (mensaje.includes('comprar') || mensaje.includes('compra')) {
    ctx.reply('Usa /comprar para ver los datos de transferencia 💰');
  } else {
    ctx.reply('Gracias por tu mensaje. Un asesor te responderá pronto. También puedes usar /ayuda para ver las opciones disponibles.');
  }
});

// Iniciar bot
bot.launch().then(() => {
  console.log('🤖 Bot de VendoUSDT iniciado correctamente');
  console.log('📱 https://t.me/cdmxotcbot');
});

// Manejo de cierre
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
