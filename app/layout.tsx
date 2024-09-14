import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import HomeSchema from "@/components/schema/home"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Basil Aslam | Full-Stack Developer",
  description: "Experienced full-stack developer specializing in React, Next.js, Node.js, and MongoDB. View my projects, skills, and experience in web development.",
  keywords: "Basil Aslam, Full-Stack Developer, React Developer, Next.js Developer, Web Developer Portfolio, JavaScript Developer, Node.js Developer, TypeScript Developer, Web Development, Coding Bootcamp Graduate, Software Developer, Portfolio Projects, Contact Basil Aslam, MongoDB, web development, portfolio",
  author: "Basil Aslam",
  metadataBase: new URL('https://basilaslam.com'),
  openGraph: {
    title: "Basil Aslam | Full-Stack Developer Portfolio",
    description: "Full-stack developer with expertise in React, Next.js, Node.js, and MongoDB. Explore my projects and skills.",
    type: "website",
    url: "https://basilaslam.com", 
    image: 'https://raw.githubusercontent.com/basilaslam/Basil-Aslam-V1/main/public/Basil-Aslam.jpeg',
  },
  twitter: {
    card: "summary_large_image",
    site: "@basil_aslam_",
    title: "Basil Aslam | Full-Stack Developer Portfolio",
    description: "Full-stack developer specializing in React, Next.js, Node.js, and MongoDB. Check out my latest projects and skills.",
    image: 'https://raw.githubusercontent.com/basilaslam/Basil-Aslam-V1/main/public/Basil-Aslam.jpeg',
  },
  robots: "index, follow",
  canonical: "https://basilaslam.com"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en" className="!scroll-smooth">
      
      <link rel="canonical" href="https://basilaslam.com" />
      <HomeSchema />

      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
