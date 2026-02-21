'use client';

import { useState } from 'react';

export default function Home() {
  const [amount, setAmount] = useState('');
  
  // Número de WhatsApp
  const whatsappNumber = '525519678540';
  
  const handleWhatsApp = () => {
    const message = amount 
      ? `Hola, quiero comprar ${amount} USDT` 
      : 'Hola, quiero información sobre USDT';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900">
      {/* Header */}
      <header className="p-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-white">$</span>
            </div>
            <span className="text-2xl font-bold text-white">VendoUSDT</span>
          </div>
          <div className="flex items-center gap-2 text-green-400">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm">En línea</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Compra y Vende <span className="text-green-400">USDT</span>
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            Transacciones rápidas, seguras y al mejor precio
          </p>
          <p className="text-green-400 font-semibold">
            💬 Atención personalizada por WhatsApp
          </p>
        </div>

        {/* Card principal */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-gray-700">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Formulario */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                ¿Cuánto necesitas?
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 mb-2">Cantidad en USDT</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="100"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:border-green-500 transition-colors"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-green-400 font-bold">
                      USDT
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-3"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Contactar por WhatsApp
                </button>
              </div>
            </div>

            {/* Beneficios */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-6">
                ¿Por qué elegirnos?
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-green-400 text-xl">✓</span>
                  <span>Transacciones en minutos</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-green-400 text-xl">✓</span>
                  <span>Mejor tipo de cambio</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-green-400 text-xl">✓</span>
                  <span>Atención 24/7</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-green-400 text-xl">✓</span>
                  <span>100% seguro y confiable</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-green-400 text-xl">✓</span>
                  <span>Sin comisiones ocultas</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Métodos de pago */}
        <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
          <h3 className="text-center text-gray-400 mb-4">Métodos de pago aceptados</h3>
          <div className="flex flex-wrap justify-center gap-4 text-gray-300">
            <span className="bg-gray-700/50 px-4 py-2 rounded-lg">💳 Transferencia</span>
            <span className="bg-gray-700/50 px-4 py-2 rounded-lg">🏦 SPEI</span>
            <span className="bg-gray-700/50 px-4 py-2 rounded-lg">💵 Efectivo</span>
            <span className="bg-gray-700/50 px-4 py-2 rounded-lg">₿ Crypto</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8 text-center text-gray-500">
        <p>© 2024 VendoUSDT - Todos los derechos reservados</p>
      </footer>

      {/* Botón flotante WhatsApp */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 z-50"
        aria-label="WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </button>
    </div>
  );
}
