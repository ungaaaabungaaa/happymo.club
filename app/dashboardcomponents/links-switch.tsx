
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

export default function LinkCard() {
  

  return (
    <div className="h-full w-full">
      <Card  className="bg-black text-white rounded-2xl overflow-hidden h-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-gray-200 text-sm font-normal">Start Now</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col h-[calc(100%-4rem)]">
          <div className="flex flex-col flex-grow space-y-1">
    
            <div className="flex-grow mt-4">

            <Tabs defaultValue="account" className="w-[400px] bg-black text-white">
              <TabsList className="grid w-full grid-cols-2 bg-black text-white pt-4 pb-4">
                <TabsTrigger value="account">ByBit</TabsTrigger>
                <TabsTrigger value="password">Bynance</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <Card className="bg-black text-white">
                  <CardHeader>
                    <CardTitle>40X Challenge</CardTitle>
                    <CardDescription>
                      <br></br>
                      40x Challenge a copy trading plan where you aim for 1% profit every month, <br></br> with no fees or commissions
                      <br></br>
                      <br></br>
                      Start Trading With one Click with partner with bybit
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button className="bg-white text-black">Start Now ByBit</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="password">
                <Card className="bg-black text-white">
                  <CardHeader>
                    <CardTitle>1% Daily Profits</CardTitle>
                    <CardDescription>
                      <br></br>
                      <br></br>
                      Start Copy Trading From a Single Click.
                      <br></br>
                      <br></br>
                      Join the Path to Prosperity – 1% Growth a Day Keeps Poverty at Bay.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button className="bg-white text-black">Start Now Binance</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>

            
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}