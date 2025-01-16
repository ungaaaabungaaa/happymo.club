import FooterCTA from "@/components/cta";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import TrustedBy from "./components/trust";
import AIChip from "./components/chip";
import { HeroScroll } from "./components/heroscroll";
import { Chip } from "@nextui-org/chip";
import { Test_Demo } from "./components/test_demo";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>HomePage | HappyMo</title>
        <meta
          name="description"
          content="Single Click Copy Trading 40x Challenge 1% Daily Profits with HappyMo"
        />
        <meta
          name="keywords"
          content="copy trading, automated trading, trading signals, investment strategy, forex copy trading, stock copy trading"
        />
        <meta property="og:title" content="HappyMo - Copy Trading Platform" />
        <meta
          property="og:description"
          content="Join HappyMo for copy trading that offers up to 1% daily profits with a risk-free strategy."
        />
        <meta property="og:image" content="https://happymo.club/og-image.jpg" />{" "}
        {/* Add a relevant image URL */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://happymo.club" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HappyMo - Copy Trading Platform" />
        <meta
          name="twitter:description"
          content="Join HappyMo for copy trading that offers up to 1% daily profits with a risk-free strategy."
        />
        <meta
          name="twitter:image"
          content="https://happymo.club/og-image.jpg"
        />{" "}
        {/* Add a relevant image URL */}
        <meta name="twitter:site" content="@HappyMo" />
        <meta name="twitter:creator" content="@HappyMo" />
        <link rel="canonical" href="https://happymo.club" />
        {/* Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "HappyMo",
            "url": "https://happymo.club",
            "logo": "https://happymo.club/logo.png",
            "sameAs": [
              "https://www.facebook.com/happymo",
              "https://twitter.com/happymo"
            ]
          }
          `}
        </script>
      </Head>
      <div className="min-h-min flex flex-col items-center justify-center px-2 pt-12 pb-28 [background:radial-gradient(125%_125%_at_50%_20%,#000_40%,#63e_80%)]">
        <div className="flex flex-col items-center justify-center">
          <AIChip></AIChip>
          <br></br>
          <Hero></Hero>
          <TrustedBy />
          <HeroScroll></HeroScroll>
        </div>
      </div>
      <div>
        <div className="min-h-min flex flex-col items-center justify-center [background:radial-gradient(125%_125%_at_50%_80%,#000_40%,#63e_80%)]">
          <div className="w-full flex align-middle justify-center ">
            <HeroVideoDialog
              className="w-full lg:w-3/4 border-none bg-black"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc="/home.webp"
            />
          </div>
          <div className="w-full p-6 flex justify-center items-center flex-col">
            <br></br>
            <Chip>Testimonails</Chip>
            <br></br>
            <h1 className="text-white text-2xl md:text-5xl font-semibold">
              Our Reivews
            </h1>
            <br></br>
            <p className="text-white">
              Checkout Our Reviews On Google Too & Some Here As Well
            </p>
            <br></br>
            <Test_Demo></Test_Demo>
          </div>
        </div>
      </div>

      <div className="bg-black flex-col align-middle justify-center">
        <Testimonials></Testimonials>
        <br></br>
        <FooterCTA></FooterCTA>
      </div>
    </>
  );
}
