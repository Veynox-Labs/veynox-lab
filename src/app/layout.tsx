import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Veynox Labs | Premium Digital Agency",
    template: "%s | Veynox Labs",
  },
  description: "Veynox Labs is a modern digital agency specializing in premium websites, landing pages, UI/UX design, and scalable cloud solutions for startups and growing businesses.",
  keywords: ["Digital Agency", "Web Development", "UI/UX Design", "Startup Websites", "Landing Pages", "Next.js", "React", "Tech Solutions", "Veynox Labs"],
  authors: [{ name: "Veynox Labs" }],
  creator: "Veynox Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://veynoxlabs.com",
    title: "Veynox Labs | Premium Digital Agency",
    description: "Modern digital agency specializing in premium websites, landing pages, UI/UX design, and scalable cloud solutions for startups and growing businesses.",
    siteName: "Veynox Labs",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Veynox Labs Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veynox Labs | Premium Digital Agency",
    description: "We design and develop premium websites, landing pages, and digital experiences that help businesses stand out.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans min-h-screen flex flex-col antialiased bg-bg-main text-text-primary`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
