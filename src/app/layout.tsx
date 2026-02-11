import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Pankaj Joshi",
  description:
    "Pankaj Joshi's Portfolio - Full Stack Developer specializing in React, Node.js, and modern web technologies",
  keywords: [
    "portfolio",
    "developer",
    "full stack",
    "react",
    "node.js",
    "typescript",
  ],
  authors: [{ name: "Pankaj Joshi" }],
  creator: "Pankaj Joshi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com", // Replace with your actual domain
    title: "Pankaj Joshi - Full Stack Developer",
    description:
      "Pankaj Joshi's Portfolio - Full Stack Developer specializing in React, Node.js, and modern web technologies",
    siteName: "Pankaj Joshi Portfolio",
    images: [
      {
        url: "/twittercard.png", // This should be your Twitter card image
        width: 1200,
        height: 630,
        alt: "Pankaj Joshi - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pankaj Joshi - Full Stack Developer",
    description:
      "Pankaj Joshi's Portfolio - Full Stack Developer specializing in React, Node.js, and modern web technologies",
    images: ["/twittercard.png"], // This should be your Twitter card image
    creator: "@yourtwitterhandle", // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
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
        className={twMerge(
          "bg-gray-900 text-white antialiased font-sans",
          inter.variable,
          calistoga.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
