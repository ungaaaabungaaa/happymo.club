"use client";
import React from "react";
import {ContainerScroll} from "@/components/ui/container-scroll-animation"
import Image from "next/image";

export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
               40x Challenge<br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
               1% Daily Profits
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/home.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl bg-black object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
