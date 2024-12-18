"use client";
import React from "react";
import {Chip} from "@nextui-org/chip";

export default function ChipChallenge() {
  return (
    <Chip
      variant="shadow"
      classNames={{
        base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-none border-white/50 shadow-pink-500/30 pt-6 pb-6 pl-4 pr-4",
        content: "drop-shadow shadow-black text-white",
      }}
    >
      <span className="text-xl font-medium">40X Challenge Dashboard</span>
    </Chip>
  );
}
