// revenue-card.tsx
'use client'


import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import NumberTicker from "../../components/ui/number-ticker"




export default function TargetCard() {
  

  return (
    <div className="h-full w-full"> {/* Changed this line */}
      <Card className="bg-black text-white rounded-2xl overflow-hidden h-full"> {/* Added h-full */}
        <CardHeader className="pb-2">
          <CardTitle className="text-gray-200 text-sm font-normal">40X Challenge Goal</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col h-[calc(100%-4rem)]"> {/* Added flex and height calculation */}
          <div className="flex flex-col flex-grow space-y-1">
            <h2 className="text-3xl font-semibold">Goal</h2>
            <p className="text-sm text-gray-400">
              Capital
            </p>
            <div className=" mt-4"> 
              {/* add in something here  */}

              <h2 className="text-4xl font-semibold"><span className="text-green-500">$ <NumberTicker className="text-green-500" value={62858} /></span>/$200k</h2>
              <br></br>
              <p className="text-sm text-gray-400">
              Trading Days
              </p>
              <h2 className="text-4xl font-semibold"><span className="text-green-500"><NumberTicker value={32} /></span>/365Days</h2>
              <br></br>
              
          
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
