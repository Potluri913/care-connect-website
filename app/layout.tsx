import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CareConnect — Keeping Families Connected to Their Loved Ones",
  description:
    "CareConnect enables retirement homes and assisted living facilities to instantly share updates, photos, medication records, and wellness information with family members.",
  keywords:
    "retirement home software, assisted living communication, senior care platform, family updates, elder care app, India",
  authors: [{ name: "CareConnect" }],
  openGraph: {
    title: "CareConnect — Real-Time Family Updates for Senior Living",
    description:
      "Stay connected to every resident's day. Real-time updates, medication tracking, and AI summaries for senior care facilities.",
    type: "website",
    locale: "en_IN",
    siteName: "CareConnect",
  },
  twitter: {
    card: "summary_large_image",
    title: "CareConnect — Keeping Families Connected",
    description:
      "Real-Time Family Updates for Senior Living Communities.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white antialiased">{children}</body>
    </html>
  );
}
