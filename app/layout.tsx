import "@/styles/globals.css";

import { Providers } from "./providers";
import FAQ from "./components/faq";
import Footer from "./components/footer"
import Navbar from "./components/navbar";
import Script from 'next/script'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <Navbar></Navbar>
          <main>
            {children}
          </main>
          <FAQ></FAQ>
          <Footer></Footer>
        </Providers>
        <Script 
          src="//code.tidio.co/g6vp80m5v7zibf5aukkmlxxpc0yhjjwh.js" 
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
