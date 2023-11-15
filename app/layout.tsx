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
        className={`${swedenSans.className} bg-gray-50 text-gray-950 pt-28 sm:pt-0 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 relative`}
      >
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

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
