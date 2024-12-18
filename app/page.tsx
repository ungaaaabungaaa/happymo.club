import FooterCTA from "@/components/cta";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import TrustedBy from "./components/trust";
import AIChip from "./components/chip";
import { HeroScroll } from "./components/heroscroll";
import { Chip } from "@nextui-org/chip";
import { Test_Demo } from "./components/test_demo";

export default function Home() {
  return (
    <>
      <div className="min-h-min flex flex-col items-center justify-center px-2 pt-28 pb-28 [background:radial-gradient(125%_125%_at_50%_20%,#000_40%,#63e_80%)]">
      <div className="flex flex-col items-center justify-center">
       <AIChip></AIChip>
       <br></br>
       <Hero></Hero>
       <TrustedBy />
       <br></br>
       <HeroVideoDialog 
            className="w-full lg:w-3/4 border-none bg-black" 
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb" 
            thumbnailSrc="/home.webp" 
        />
      </div>
    </div>

   <div className="min-h-min flex flex-col items-center justify-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_80%,#000_40%,#63e_80%)]">
      <div>
        <HeroScroll></HeroScroll>
        <div className="w-full p-6 flex justify-center items-center flex-col">
        <br></br>
        <Chip>Testimonails</Chip>
        <br></br>
        <h1 className='text-white text-2xl md:text-5xl font-semibold'>Our  Reivews</h1>
        <br></br>
        <p className='text-white'>Checkout Our Reviews On Google Too & Some Here As Well</p>
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
