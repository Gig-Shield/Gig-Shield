import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Gig Worker Insurance India | ₹40/Month Coverage",
    template: "%s | Gig Shield"
  },
  description: "Affordable insurance for gig workers, freelancers & contractors in India. Accident cover, medical benefits & WhatsApp claims from ₹40/month. Instant approval.",
  authors: [{ name: "Gig Shield", url: "https://gig-shield.com" }],
  creator: "Gig Shield",
  publisher: "Gig Shield",
  applicationName: "Gig Shield",
  category: "Insurance",
  classification: "Business",
  metadataBase: new URL('https://gig-shield.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': '/',
    },
  },
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://gig-shield.com',
    siteName: 'Gig Shield',
    title: 'Gig Worker Insurance India | From ₹40/Month',
    description: '⭐ Affordable insurance for gig workers & freelancers. Accident coverage, medical benefits & fast WhatsApp claims. Trusted by 10,000+ workers.',
    images: [
      {
        url: 'https://gig-shield.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gig Shield - Affordable Insurance for Gig Workers, Freelancers & Delivery Drivers',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@GigShield',
    creator: '@GigShield',
    title: 'Gig Worker Insurance India | From ₹40/Month',
    description: '⭐ Affordable insurance for gig workers & freelancers. Accident coverage, medical benefits & fast WhatsApp claims. Trusted by 10,000+ workers.',
    images: ['https://gig-shield.com/twitter-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#6A38FF" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
