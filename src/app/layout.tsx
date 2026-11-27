import type { Metadata } from "next";
import { Anton, DM_Sans } from "next/font/google";
import "./global.css";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "Te entiendo y te respeto Awards",
  description: "La gala de los nuestros",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${anton.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}