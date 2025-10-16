import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/layouts/Navbar";
import { Footer } from "./components/layouts/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Palembang Smart City | Sistem Informasi Sumber Daya Air PUPR Kota Palembang",
  description: "Palembang Smart City | Sistem Informasi Sumber Daya Air PUPR Kota Palembang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
