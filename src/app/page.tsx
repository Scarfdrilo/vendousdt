'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [amount, setAmount] = useState('');
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Bot de Telegram para atención automática
  const telegramBot = 'cdmxotcbot';
  
  // Comisión del 1.5%
  const COMMISSION = 0.015;
  
  // Obtener tipo de cambio al cargar
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        // API gratuita de tipo de cambio
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        const rate = data.rates.MXN;
        // Agregar 1.5% de comisión al tipo de cambio
        const rateWithCommission = rate * (1 + COMMISSION);
        setExchangeRate(rateWithCommission);
      } catch (error) {
        // Fallback: tipo de cambio aproximado + comisión
        setExchangeRate(20.50 * (1 + COMMISSION));
      } finally {
        setLoading(false);
      }
    };
    
    fetchExchangeRate();
  }, []);
  
  // Calcular USDT que recibirá
  const calculateUSDT = () => {
    if (!amount || !exchangeRate) return '0.00';
    const usdt = parseFloat(amount) / exchangeRate;
    return usdt.toFixed(2);
  };
  
  // Tipo de cambio base (sin comisión) para mostrar
  const baseRate = exchangeRate ? exchangeRate / (1 + COMMISSION) : null;
  
  const handleTelegram = () => {
    const usdtAmount = calculateUSDT();
    const message = amount 
      ? `Hola, quiero comprar ${usdtAmount} USDT por $${parseFloat(amount).toLocaleString()} MXN` 
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
            Compra USDT de forma rápida, segura y al mejor precio
          </p>
          <p className="text-cyan-400 font-semibold">
            🤖 Atención automática 24/7 por Telegram
          </p>
        </div>

        {/* Card principal - Calculadora */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-blue-500/20">
          {/* Tipo de cambio actual */}
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-4 mb-6 border border-blue-500/30">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">📊</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Tipo de cambio del día</p>
                  {loading ? (
                    <p className="text-white font-bold text-lg animate-pulse">Cargando...</p>
                  ) : (
                    <p className="text-white font-bold text-lg">
                      1 USD = ${baseRate?.toFixed(2)} MXN
                    </p>
                  )}
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-sm">Tu precio (incluye 1.5% comisión)</p>
                {loading ? (
                  <p className="text-cyan-400 font-bold text-lg animate-pulse">...</p>
                ) : (
                  <p className="text-cyan-400 font-bold text-lg">
                    1 USDT = ${exchangeRate?.toFixed(2)} MXN
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Calculadora */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                💱 Calculadora
              </h2>
              <div className="space-y-4">
                {/* Input MXN */}
                <div>
                  <label className="block text-gray-400 mb-2">Tú pagas (MXN)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">$</span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="10,000"
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-xl pl-10 pr-16 py-4 text-white text-xl focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">
                      MXN
                    </span>
                  </div>
                </div>
                
                {/* Flecha */}
                <div className="flex justify-center">
                  <div className="w-10 h-10 bg-slate-700/50 rounded-full flex items-center justify-center">
                    <span className="text-cyan-400">↓</span>
                  </div>
                </div>
                
                {/* Output USDT */}
                <div>
                  <label className="block text-gray-400 mb-2">Tú recibes (USDT)</label>
                  <div className="relative">
                    <div className="w-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl px-4 py-4">
                      <div className="flex items-center justify-between">
                        <span className="text-green-400 text-3xl font-bold">
                          {amount ? calculateUSDT() : '0.00'}
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">₮</span>
                          </div>
                          <span className="text-green-400 font-bold">USDT</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={handleTelegram}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center gap-3 mt-6"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Comprar por Telegram
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
                  <span>Tipo de cambio actualizado en tiempo real</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-cyan-400 text-xl">✓</span>
                  <span>Solo 1.5% de comisión</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-cyan-400 text-xl">✓</span>
                  <span>Procesamiento en minutos</span>
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
              
              {/* Mini tabla de referencia */}
              <div className="mt-6 bg-slate-700/30 rounded-xl p-4">
                <p className="text-gray-400 text-sm mb-3">Ejemplos rápidos:</p>
                <div className="space-y-2 text-sm">
                  {[1000, 5000, 10000, 20000].map((mxn) => (
                    <div key={mxn} className="flex justify-between text-gray-300">
                      <span>${mxn.toLocaleString()} MXN</span>
                      <span className="text-green-400">
                        ≈ {exchangeRate ? (mxn / exchangeRate).toFixed(2) : '...'} USDT
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Métodos de pago */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-800/30 rounded-xl p-6 border border-blue-500/20 text-center hover:border-cyan-400/50 transition-colors">
            <div className="text-3xl mb-3">🏦</div>
            <h3 className="text-white font-semibold mb-1">SPEI</h3>
            <p className="text-gray-400 text-sm">Transferencia bancaria inmediata</p>
          </div>
          <div className="bg-slate-800/30 rounded-xl p-6 border border-blue-500/20 text-center hover:border-cyan-400/50 transition-colors">
            <div className="text-3xl mb-3">💳</div>
            <h3 className="text-white font-semibold mb-1">Depósito</h3>
            <p className="text-gray-400 text-sm">En ventanilla o cajero</p>
          </div>
          <div className="bg-slate-800/30 rounded-xl p-6 border border-blue-500/20 text-center hover:border-cyan-400/50 transition-colors">
            <div className="text-3xl mb-3">💵</div>
            <h3 className="text-white font-semibold mb-1">Efectivo</h3>
            <p className="text-gray-400 text-sm">OXXO y tiendas de conveniencia</p>
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
