import "@/styles/globals.css";

import { Providers } from "./providers";
import FAQ from "./components/faq";
import Footer from "./components/footer"
import Navbar from "./components/navbar";
import Script from 'next/script'


export const AcmeLogo = () => {
  return (
    <svg fill="none" height="56" viewBox="0 0 32 32" width="56">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="#5350F2"
        fillRule="evenodd"
      />
    </svg>
  );
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="HappyMo" />
      </head>
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
