import type { Metadata } from "next";
import { Alex_Brush, Montserrat } from "next/font/google";
import "./globals.css";

// components
import { Footer, Header } from "@/components";

// context provider
import { NavContextProvider } from "@/context";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alexBrush",
});

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NavContextProvider>
      <html lang="en">
        <body
          className={`${alexBrush.variable} ${montserrat.variable} overflow-x-hidden relative`}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </NavContextProvider>
  );
}
