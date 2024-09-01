import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import { i18n } from "@/config/i18n.config";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  const languages = i18n.locales.map((lang) => ({ lang }));
  return languages;
}

export const metadata: Metadata = {
  title: "Who Scored?",
  description: "Do you think you are a football connoisseur? Try to guess who scored that goal with new goals daily",
};

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: {lang: string};
}>) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
