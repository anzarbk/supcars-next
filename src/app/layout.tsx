import type { Metadata } from "next";
// import { SessionProvider } from "next-auth/react" 
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const roboto = Roboto({ weight: ['400','500','700'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "supcars",
  description: "supercars rental app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <SessionProvider>
    <html lang="en">
      <body className={roboto.className}>
        <main className=" mx-auto ">
        <Header/>
          {children}
          <Footer /> 
        </main>
      </body>
      </html>
      // </SessionProvider>
  );
}
