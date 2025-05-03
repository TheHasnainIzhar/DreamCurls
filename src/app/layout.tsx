import type { Metadata } from "next";
import "../styles/main/globals.css";
import ExclusiveBanner from "@/components/layout/exclusive-banner";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";


export const metadata: Metadata = {
  title: "DreamCurls",
  description: "our product is used by a lot of girls who want their dream curls.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ExclusiveBanner />
        <div className="nav-section"><Navbar /></div>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
