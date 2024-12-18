"use client";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
 
    {
      text: "COMING SOON.",
      className: "text-purple-x ",
    },
    {
        text: "AI",
        className: "text-white ",
      },
      {
        text: "INDICATOR",
        className: "text-white ",
      },
  ];
  return (
    <div className="flex flex-col items-center justify-center  text-white ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
