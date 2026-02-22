import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soluciones Integrales Bonanza | Servicios Financieros",
  description: "Soluciones financieras integrales para tu empresa. Procesamiento de pagos, cobros y más con tecnología Arcus. Atención automática por Telegram.",
  keywords: ["pagos", "servicios financieros", "Arcus", "Bonanza", "transferencias", "SPEI"],
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
