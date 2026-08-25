import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.satvikyog.co.in"),
  title: {
    default: "Best Yoga Classes in Gurgaon | Satvik Yoga",
    template: "%s | Satvik Yoga",
  },
  description:
    "Learn yoga with Satvik Yoga through expert-led online classes across India and in-person yoga classes in Gurgaon. Explore Hatha, Ashtanga, prenatal yoga, meditation and more.",
  keywords: [
    "best yoga classes in Gurgaon",
    "yoga classes in Gurgaon",
    "yoga classes in Gurugram",
    "best yoga studio in Gurgaon",
    "yoga studio in Gurgaon",
    "Satvik Yoga Gurgaon",
    "Hatha Yoga Gurgaon",
    "Ashtanga Yoga Gurgaon",
    "Prenatal Yoga Gurgaon",
    "Pranayama classes Gurgaon",
    "meditation classes Gurgaon",
    "yoga for beginners Gurgaon",
    "corporate yoga Gurgaon",
  ],
  openGraph: {
    title: "Satvik Yoga Classes — Find Your Inner Peace",
    description: "Satvik Yoga offers yoga classes in Gurgaon and Gurugram, including Hatha Yoga, Ashtanga Yoga, Prenatal Yoga, Meditation, Pranayama and yoga for beginners.",
    url: "https://www.satvikyog.co.in/",
    siteName: "Satvik Yoga",
    images: [
      {
        url: "https://res.cloudinary.com/dhqqj1ehx/image/upload/v1782818892/d8f69ec7-9a78-4437-980d-fba319248880.png",
        width: 1200,
        height: 630,
        alt: "Satvik Yoga Studio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satvik Yoga Classes — Find Your Inner Peace",
    description: "Embrace the Sattvic path with expert-led yoga classes. Ashtanga, Hatha, Prenatal, Meditation & more in a serene, welcoming studio.",
    images: ["https://res.cloudinary.com/dhqqj1ehx/image/upload/v1782818892/d8f69ec7-9a78-4437-980d-fba319248880.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full antialiased overflow-x-hidden", "font-sans", inter.variable)}>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
