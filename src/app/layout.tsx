import type { Metadata } from "next";
import { Inter_Tight, Martian_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LaunchIntro from "@/components/LaunchIntro";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const martianMono = Martian_Mono({
  variable: "--font-martian",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PROTO — a technical studio by Ameen Nazer",
  description:
    "PROTO is a technical studio for 0-to-1 founders. I help you decide what to build and how it should be engineered — then build the real first version.",
};

// Dark is canonical; this restores a stored light preference before paint.
const themeScript = `try{var t=localStorage.getItem("proto-theme");if(t==="light")document.documentElement.setAttribute("data-theme","light")}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${martianMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen antialiased">
        <LaunchIntro />
        <div className="substrate" aria-hidden="true" />

        <div className="relative z-[1] flex min-h-screen flex-col">
          <Nav />
          <main id="main" className="flex-1" tabIndex={-1}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
