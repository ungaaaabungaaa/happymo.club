'use client'
import {
  Card,
  CardContent,
} from "@/components/ui/card"




export default function BlankCard() {


  return (
    <div className="h-full w-full"> {/* Changed this line */}
      <Card className="bg-black text-white rounded-2xl overflow-hidden h-full"> 
        
        <CardContent className="flex flex-col align-middle justify-center h-[calc(100%-4rem)]"> 
            
        <section className="z-20 flex flex-col items-center justify-center gap-[18px] sm:gap-6">
          <br></br>  
          <div className="text-center text-white text-[clamp(40px,10vw,44px)] font-bold leading-[1.2] tracking-tighter sm:text-[64px]">
            <div className="bg-hero-section-title bg-clip-text text-transparent text-white">
              1% Profit <br /> 40X Challenge.
            </div>
          </div>
          <p className="text-center text-white font-normal leading-7 text-default-500 sm:w-[466px] sm:text-[18px]">
            We Our Daily Progress Here Track Our Trades , Copy Trades With Us & Win Daily!!!.
          </p>
        </section>
          
        </CardContent>
      </Card>
    </div>
  )
}
