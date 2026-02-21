import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VendoUSDT - Compra y Vende USDT",
  description: "Compra y vende USDT de forma rápida, segura y al mejor precio. Atención personalizada por WhatsApp.",
  keywords: ["USDT", "Tether", "criptomonedas", "comprar USDT", "vender USDT"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
