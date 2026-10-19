import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wmainiere Corretora de Seguros | Proteção para sua vida",
  description:
    "Seguros de vida, proteção de renda, responsabilidade civil, doenças graves e soluções empresariais com atendimento próximo de Wladmir Mainiere.",
  keywords: [
    "corretora de seguros",
    "seguro de vida",
    "proteção de renda",
    "responsabilidade civil",
    "Wmainiere",
  ],
  openGraph: {
    title: "Wmainiere Corretora de Seguros",
    description: "Proteção para sua família, sua renda e tudo o que você construiu.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
