import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sahal Shaji Mullappilly — PhD in Computer Vision · MBZUAI",
  description:
    "PhD researcher in computer vision and multimodal medical AI at MBZUAI. Building multilingual, clinically grounded foundation models — BiMediX, GLaMM, MediX-R1.",
  metadataBase: new URL("https://sahalshajim.com"),
  openGraph: {
    title: "Sahal Shaji Mullappilly",
    description:
      "PhD researcher in computer vision and multimodal medical AI at MBZUAI.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahal Shaji Mullappilly",
    description:
      "PhD researcher in computer vision and multimodal medical AI at MBZUAI.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/*
          Product Sans is loaded from the public cdnfonts.com mirror so the
          site renders out of the box. To self-host instead, drop ProductSans
          .woff2 files into public/fonts/, swap this <link> for next/font/local
          in this file, and update --font-product-sans in app/globals.css.
        */}
        <link
          rel="preconnect"
          href="https://fonts.cdnfonts.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/product-sans"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
