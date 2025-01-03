// app/layout.tsx
import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { jsonLdScriptProps } from "react-schemaorg";
import { Person, WithContext } from "schema-dts";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://basilaslam.com"),
  title: {
    default: "Basil Aslam | Full-Stack Developer Portfolio",
    template: "%s | Basil Aslam",
  },
  description:
    "Experienced full-stack developer specializing in React, Next.js, Node.js, and MongoDB. View my projects, skills, and experience in web development.",
  keywords: [
    "Basil Aslam",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
    "JavaScript Developer",
    "Node.js Developer",
    "TypeScript Developer",
  ],
  authors: [{ name: "Basil Aslam" }],
  creator: "Basil Aslam",
  publisher: "Basil Aslam",
  alternates: {
    canonical: "https://basilaslam.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://basilaslam.com",
    siteName: "Basil Aslam Portfolio",
    title: "Basil Aslam | Full-Stack Developer Portfolio",
    description:
      "Full-stack developer with expertise in React, Next.js, Node.js, and MongoDB. Explore my projects and skills.",
    images: [
      {
        url: "https://raw.githubusercontent.com/basilaslam/Basil-Aslam-V1/main/public/Basil-Aslam.jpeg",
        width: 1200,
        height: 630,
        alt: "Basil Aslam - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@basil_aslam_",
    creator: "@basil_aslam_",
    title: "Basil Aslam | Full-Stack Developer Portfolio",
    description:
      "Full-stack developer specializing in React, Next.js, Node.js, and MongoDB. Check out my latest projects and skills.",
    images: {
      url: "https://raw.githubusercontent.com/basilaslam/Basil-Aslam-V1/main/public/Basil-Aslam.jpeg",
      alt: "Basil Aslam - Full Stack Developer",
    },
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
  verification: {
    google: "tixJX-btSt1zSdFJ21DuoQqWohs7sgpfFErKcpex6Cw",
    yandex: "45000ae613ca40e4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Basil Aslam",
    url: "https://basilaslam.com",
    image:
      "https://raw.githubusercontent.com/basilaslam/Basil-Aslam-V1/main/public/Basil-Aslam.jpeg",
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "WebCastle Media",
    },
    description:
      "Full-stack developer specializing in React, Next.js, Node.js, and MongoDB",
    sameAs: [
      "https://twitter.com/basil_aslam_",
      "https://github.com/basilaslam",
      "https://linkedin.com/in/basilaslam",
    ],
  };

  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://basilaslam.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          {...jsonLdScriptProps<Person>(
            structuredData as unknown as WithContext<Person>
          )}
          type="application/ld+json"
        />
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
