// revenue-card.tsx
'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@nextui-org/button"



export default function CompoudingCalculator() {
  

  return (
    <div className="h-full w-full"> {/* Changed this line */}
      <Card className="bg-black text-white rounded-2xl overflow-hidden h-full"> {/* Added h-full */}
        <CardHeader className="pb-2">
         <h2 className="text-2xl font-semibold">Copy Trading Calculator</h2>
          <p className="text-sm text-gray-400">
            1% Daily Gains
          </p>
        </CardHeader>
        <CardContent className="flex flex-col h-[calc(100%-4rem)]"> {/* Added flex and height calculation */}
          <div className="flex flex-col flex-grow space-y-1">
           
            <div className=" mt-4">



           

            
        
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
