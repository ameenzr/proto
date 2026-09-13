import type { Metadata, Viewport } from "next";
import { Chakra_Petch, Martian_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import DynamicFavicon from "@/components/DynamicFavicon";

const chakraPetch = Chakra_Petch({
  variable: "--font-proto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const martianMono = Martian_Mono({
  variable: "--font-martian",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "proto!",
  description:
    "PROTO is a technical studio for 0-to-1 founders. I help you decide what to build and how it should be engineered — then build the real first version.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#131413",
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
      className={`${chakraPetch.variable} ${martianMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen antialiased flex flex-col">
        <DynamicFavicon />
        <div className="substrate" aria-hidden="true" />

        <div className="relative z-[1] flex min-h-screen flex-col flex-1">
          <Nav />
          <main id="main" className="flex-1 flex flex-col justify-center" tabIndex={-1}>{children}</main>
        </div>
      </body>
    </html>
  );
}
