import type { Metadata, Viewport } from "next";
import type React from "react";
import "./globals.css";
import Script from "next/script";

// Profile data import
import profile from "../content/profile";
import { SITE_URL } from "@/lib/site-url";

const displayName = "irsyad dimas";

export const metadata: Metadata = {
  title: `${displayName} · ${profile.title ?? "Portfolio"}`,
  description: profile.bio ?? "Portfolio of irsyad dimas",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    title: `${displayName} · ${profile.title ?? "Portfolio"}`,
    description: profile.bio ?? "Portfolio of irsyad dimas",
    images: profile.images && profile.images.length > 0 ? [{ url: profile.images[0] }] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: `${displayName} · ${profile.title ?? "Portfolio"}`,
    description: profile.bio ?? "Portfolio of irsyad dimas",
    images: profile.images && profile.images.length > 0 ? [profile.images[0]] : undefined,
  },
  icons: {
    icon: [
      { url: "/favico/favicon.ico", sizes: "any" },
      { url: "/favico/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/favico/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favico/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/favico/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#FDFCFB",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: displayName,
      description: profile.bio ?? "Portfolio of irsyad dimas",
      url: SITE_URL,
      image: profile.images && profile.images.length > 0 ? `${SITE_URL}${profile.images[0]}` : undefined,
      sameAs: Object.values(profile.contacts),
    },
    {
      "@type": "WebPage",
      name: `${displayName} · ${profile.title ?? "Portfolio"}`,
      description: profile.bio ?? "Portfolio of irsyad dimas",
      url: SITE_URL,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            url: "https://github.com/Dimas0824",
          },
          {
            "@type": "ListItem",
            position: 2,
            url: "https://www.linkedin.com/in/muhammad-irsyad-dimas-abdillah-46424738a/",
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        {/* GA4 */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-V8REYLFVXT"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V8REYLFVXT');
          `}
        </Script>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
