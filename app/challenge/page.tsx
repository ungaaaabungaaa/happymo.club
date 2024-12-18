import React from 'react'
import ChipChallenge from '../components/chip3'
import { Button } from '@nextui-org/button'
import { Icon } from 'lucide-react'

function Challenge() {
  return (
    <div className="min-h-min flex flex-col items-center justify-center px-2 pt-28 pb-28 [background:radial-gradient(125%_125%_at_50%_20%,#000_40%,#63e_80%)]">
    <div className="flex flex-col items-center justify-center">
      <br></br>
      <ChipChallenge></ChipChallenge>
      <br></br>
      <main className="container mx-auto flex flex-1 flex-col items-center justify-center overflow-hidden px-8">
        <section className="z-20 flex flex-col items-center justify-center gap-[18px] sm:gap-6">
          <div className="text-center text-white text-[clamp(40px,10vw,44px)] font-bold leading-[1.2] tracking-tighter sm:text-[64px]">
            <div className="bg-hero-section-title bg-clip-text text-transparent text-white">
              1% Profit EveryDay <br /> 40X Challenge.
            </div>
          </div>
          <p className="text-center text-white font-normal leading-7 text-default-500 sm:w-[466px] sm:text-[18px]">
            We Our Daily Progress Here Track Our Trades , Copy Trades With Us & Win Daily!!!.
          </p>
         
        </section>
      </main>

    </div>
  </div>
  )
}

export default Challenge
