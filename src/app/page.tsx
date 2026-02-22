'use client';

import { useState } from 'react';

export default function Home() {
  const [amount, setAmount] = useState('');
  
  // Bot de Telegram para atención automática
  const telegramBot = 'SolucionesBonanza_bot'; // Cambiar por el username real del bot
  
  const handleTelegram = () => {
    const message = amount 
      ? `Hola, quiero información sobre servicios de pago. Monto aproximado: $${amount} MXN` 
      : 'Hola, quiero información sobre los servicios de Soluciones Integrales Bonanza';
    const url = `https://t.me/${telegramBot}?start=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="p-6 border-b border-blue-500/20">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
              <span className="text-2xl font-bold text-white">B</span>
            </div>
            <div>
              <span className="text-xl font-bold text-white block leading-tight">Soluciones Integrales</span>
              <span className="text-cyan-400 text-sm font-semibold">BONANZA</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-blue-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30">
              🏦 Powered by Arcus
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Soluciones <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Financieras</span>
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            Procesamiento de pagos rápido, seguro y confiable
          </p>
          <p className="text-cyan-400 font-semibold">
            🤖 Atención automática 24/7 por Telegram
          </p>
        </div>

        {/* Card principal */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-blue-500/20">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Formulario */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                ¿Cómo podemos ayudarte?
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 mb-2">Monto aproximado (MXN)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="10,000"
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-xl pl-8 pr-16 py-3 text-white text-lg focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400 font-bold">
                      MXN
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={handleTelegram}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center gap-3"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Contactar por Telegram
                </button>
                
                <p className="text-center text-gray-500 text-sm">
                  Respuesta automática inmediata 🚀
                </p>
              </div>
            </div>

            {/* Beneficios */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-6">
                ¿Por qué elegirnos?
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-cyan-400 text-xl">✓</span>
                  <span>Procesamiento en minutos</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-cyan-400 text-xl">✓</span>
                  <span>Comisiones transparentes</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-cyan-400 text-xl">✓</span>
                  <span>Atención automática 24/7</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-cyan-400 text-xl">✓</span>
                  <span>Integración con Arcus</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-cyan-400 text-xl">✓</span>
                  <span>100% seguro y confiable</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Servicios */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-800/30 rounded-xl p-6 border border-blue-500/20 text-center hover:border-cyan-400/50 transition-colors">
            <div className="text-3xl mb-3">💳</div>
            <h3 className="text-white font-semibold mb-1">Pagos de Servicios</h3>
            <p className="text-gray-400 text-sm">Recibe pagos de luz, agua, gas y más</p>
          </div>
          <div className="bg-slate-800/30 rounded-xl p-6 border border-blue-500/20 text-center hover:border-cyan-400/50 transition-colors">
            <div className="text-3xl mb-3">🏧</div>
            <h3 className="text-white font-semibold mb-1">Recargas</h3>
            <p className="text-gray-400 text-sm">Tiempo aire y paquetes de datos</p>
          </div>
          <div className="bg-slate-800/30 rounded-xl p-6 border border-blue-500/20 text-center hover:border-cyan-400/50 transition-colors">
            <div className="text-3xl mb-3">🔄</div>
            <h3 className="text-white font-semibold mb-1">Transferencias</h3>
            <p className="text-gray-400 text-sm">SPEI y transferencias bancarias</p>
          </div>
        </div>

        {/* Badge Arcus */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-6 border border-blue-500/20 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl mb-4">
            <span className="text-3xl">🏦</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Socio Certificado Arcus</h3>
          <p className="text-gray-400 mb-3">Infraestructura de pagos de nivel bancario</p>
          <div className="inline-block bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-2">
            <span className="text-cyan-400 font-mono text-sm">ID: 706969140395121342</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8 text-center text-gray-500 border-t border-blue-500/20">
        <p>© 2024 Soluciones Integrales Bonanza - Todos los derechos reservados</p>
        <p className="text-sm mt-2">Powered by Arcus</p>
      </footer>

      {/* Botón flotante Telegram */}
      <button
        onClick={handleTelegram}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 z-50 hover:shadow-xl hover:shadow-cyan-500/25"
        aria-label="Telegram"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      </button>
    </div>
  );
}
