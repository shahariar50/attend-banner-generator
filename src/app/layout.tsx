import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Banner Generator",
  description: "Made by Abdullah Al Sahariar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/thumbnail.png" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer className="px-8 py-4 text-center">
          &copy; Develope by{" "}
          <a
            className="text-[#ca238c]"
            href="https://www.facebook.com/abdullahalshahariar1"
          >
            Abdullah Al Sahariar
          </a>
          , Banner design by{" "}
          <a
            className="text-[#ca238c]"
            href="https://www.facebook.com/abuahamad01"
          >
            Abu Ahamad
          </a>
        </footer>
      </body>
    </html>
  );
}
