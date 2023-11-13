import "./globals.css";
import { Noto_Sans } from "next/font/google";

import localFont from "@next/font/local";

import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const swedenSans = localFont({
  src: [
    {
      path: "/../public/fonts/SwedenSansRegular.woff2",
      weight: "400",
    },
    {
      path: "/../public/fonts/SwedenSansBold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-SwedenSans",
});

export const metadata = {
  title: "Fredrik | Personal Portfolio",
  description: "Fredrik is a frontend developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${swedenSans.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#F8E7D2] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#4A4846]"></div>
        <div className="bg-[#91C4CC] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.65rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#5B6F72]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            <Toaster position="bottom-right" />
            {children}
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
