'use client'
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"




export default function TradesCard() {


  return (
    <div className="h-full w-full"> {/* Changed this line */}
      <Card className="bg-black text-white rounded-2xl overflow-hidden h-full"> 
        <CardHeader className="pb-2">
          <h2 className="text-2xl font-semibold">Trades</h2>
          <p className="text-sm text-gray-400">
            Trader-Initiated Trades
          </p>
        </CardHeader>
        
        <CardContent className="flex flex-col align-middle justify-center h-[calc(100%-4rem)]"> 
            
        
          
        </CardContent>
      </Card>
    </div>
  )
}
