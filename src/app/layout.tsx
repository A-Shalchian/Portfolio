import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/contexts/ThemeContext";

const monocraft = localFont({
  src: [
    {
      path: "../fonts/Monocraft-ExtraLight-11.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/Monocraft-ExtraLight-Italic-12.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../fonts/Monocraft-Light-09.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Monocraft-Light-Italic-10.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/Monocraft-01.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Monocraft-Italic-02.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Monocraft-SemiBold-07.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Monocraft-SemiBold-Italic-08.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/Monocraft-Bold-05.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Monocraft-Bold-Italic-06.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/Monocraft-Black-03.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/Monocraft-Black-Italic-04.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-monocraft",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shalchian.dev'),
  title: {
    default: "Arash Shalchian | Full Stack Developer",
    template: "%s | Arash Shalchian"
  },
  description: "Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Computer Science student at George Brown College building innovative web applications.",
  keywords: ["Arash Shalchian", "Full Stack Developer", "React Developer", "Next.js", "TypeScript", "Web Development", "Portfolio", "Software Engineer", "Computer Science"],
  authors: [{ name: "Arash Shalchian", url: "https://github.com/A-Shalchian" }],
  creator: "Arash Shalchian",
  publisher: "Arash Shalchian",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shalchian.dev",
    siteName: "Arash Shalchian Portfolio",
    title: "Arash Shalchian | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Building innovative web applications.",
    images: [
      {
        url: "/assets/pfpic.jpg",
        width: 1200,
        height: 630,
        alt: "Arash Shalchian - Full Stack Developer",
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monocraft.variable} font-sans antialiased bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-950`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
