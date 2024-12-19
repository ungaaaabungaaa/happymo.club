// revenue-card.tsx
'use client'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



export default function CompoudingCalculator() {
  

  return (
    <div className="h-full w-full"> {/* Changed this line */}
      <Card className="bg-black text-white rounded-2xl overflow-hidden h-full"> {/* Added h-full */}
        <CardHeader className="pb-2">
          <CardTitle className="text-gray-200 text-sm font-normal">Compounding Calculator</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col h-[calc(100%-4rem)]"> {/* Added flex and height calculation */}
          <div className="flex flex-col flex-grow space-y-1">
            <h2 className="text-3xl font-semibold"></h2>
            <p className="text-sm text-gray-400">
             
            </p>
            <div className=" mt-4">

            {/* Changed to use flex-grow */}
        
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
