import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { NavbarWrapper } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Tehify - AI-Powered Ad Campaign Management',
    template: '%s | Tehify'
  },
  description: 'Transform your advertising with AI-powered campaign management, real-time analytics, and automated optimization.',
  keywords: ['AdTech', 'AI Advertising', 'Campaign Management', 'Marketing Analytics', 'Ad Optimization'],
  authors: [{ name: 'Tehify' }],
  creator: 'Tehify',
  publisher: 'Tehify',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tehify.com',
    title: 'Tehify - AI-Powered Ad Campaign Management',
    description: 'Transform your advertising with AI-powered campaign management, real-time analytics, and automated optimization.',
    siteName: 'Tehify',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tehify - AI-Powered Ad Campaign Management',
    description: 'Transform your advertising with AI-powered campaign management, real-time analytics, and automated optimization.',
    creator: '@tehify',
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'icon',
      url: '/favicon-32x32.png',
    },
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://tehify.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NavbarWrapper />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}