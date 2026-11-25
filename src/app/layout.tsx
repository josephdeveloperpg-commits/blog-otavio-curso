import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog - Curso Otavio Miranda",
  description: "Projeto Blog do Curso de Next.js 13 do Otavio Miranda",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
