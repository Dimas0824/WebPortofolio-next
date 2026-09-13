import type { Metadata, Viewport } from "next";
import type React from "react";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import localFont from "next/font/local";
import profile from "../content/profile";
import { SITE_URL } from "@/lib/site-url";
import V2Navbar from "@/components/v2/Navbar";
import FooterV2 from "@/components/v2/FooterSectionV2";
import { NoiseLayer } from "@/components/v2/ui";

const displayName = "irsyad dimas";

const display = localFont({
  src: [
    { path: "../public/fonts/bigshoulders-700.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/bigshoulders-800.woff2", weight: "800", style: "normal" },
    { path: "../public/fonts/bigshoulders-900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-bigshoulders",
  display: "swap",
});
const sans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "600", "800"], variable: "--font-jakarta", display: "swap" });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-spacemono", display: "swap" });

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
  themeColor: "#14303B",
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
        {/* browser-extension shim (Urban VPN dll): strip atribut sisipan sebelum React hydrate -> nol hydration-warning. Observer lepas sendiri 5s. */}
        <script
          id="ext-attr-shim"
          dangerouslySetInnerHTML={{
            __html: `(function(){var A=["bis_skin_checked","bis_register","data-google-query-id","data-new-gr-c-s-check-loaded","data-gr-ext-installed","data-lt-installed","data-lt-tmp-id","bis_disable_all","bis_skin_checked_v2"];var P=["__processed_"];function k(el){if(!el||el.nodeType!==1)return;var a=el.attributes;for(var i=a.length-1;i>=0;i--){var n=a[i].name;var hit=false;for(var j=0;j<A.length;j++){if(A[j]===n){hit=true;break}}if(!hit){for(var m=0;m<P.length;m++){if(n.indexOf(P[m])===0){hit=true;break}}}if(hit)el.removeAttribute(n);}var o=new MutationObserver(function(ms){for(var i=0;i<ms.length;i++)k(ms[i].target);});o.observe(document.documentElement,{subtree:true,attributes:true});function sw(){k(document.documentElement);k(document.body);var e=document.getElementsByTagName("*");for(var i=0;i<e.length;i++)k(e[i]);}if(document.readyState!=="loading")sw();else document.addEventListener("DOMContentLoaded",sw);setTimeout(function(){o.disconnect();},5000);})();`,
          }}
        />
        {/* GA4 */}
        <GoogleAnalytics gaId="G-V8REYLFVXT" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className={`${display.variable} ${sans.variable} ${mono.variable} v2-root v2-silk font-v2-body min-h-screen overflow-x-clip`}>
          <NoiseLayer />
          <V2Navbar />
          {children}
          <FooterV2 />
        </div>
      </body>
    </html>
  );
}
