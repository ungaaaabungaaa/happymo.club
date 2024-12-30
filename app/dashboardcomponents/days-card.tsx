"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BlankCard2() {
  return (
    <div className="h-full w-full">
      <Card className="bg-black text-white rounded-2xl overflow-hidden h-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-gray-200 text-sm font-normal">
            TimeLine
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col h-[calc(100%-4rem)]">
          <div className="flex flex-col flex-grow space-y-1">
            <h2 className="text-3xl font-semibold">Numuber Of Trading Tays</h2>
            <div className="flex-grow flex items-center justify-center mt-4">
              <div className="text-center text-white text-[clamp(40px,10vw,44px)] font-bold leading-[1.2] tracking-tighter sm:text-[64px]">
                <div className="bg-hero-section-title bg-clip-text text-transparent text-white">
                  Days <br /> 23 /365
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
