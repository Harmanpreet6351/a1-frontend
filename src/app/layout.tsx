import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const monst = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A1 Installation Services - Your Home, Our Expertise, Perfect Every Time",
  description: "A1 Installation Services - Your Home, Our Expertise, Perfect Every Time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monst.className} antialiased`}>{children}</body>
    </html>
  );
}
