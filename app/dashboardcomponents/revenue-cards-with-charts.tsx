'use client'

import { TrendingUp } from 'lucide-react'
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 19000 },
  { month: "Mar", revenue: 17000 },
  { month: "Apr", revenue: 15000 },
  { month: "May", revenue: 14000 },
  { month: "Jun", revenue: 21000 },
]

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(0, 0%, 100%)",
  },
} satisfies ChartConfig

export default function RevenueCardsWithCharts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <Card key={i} className="bg-black text-white rounded-2xl overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-gray-200 text-sm font-normal">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <h2 className="text-3xl font-semibold">$15,231.89</h2>
              <p className="text-sm text-gray-400">
                <span className="text-green-500">+20.1%</span> from last month
              </p>
              <div className="h-[80px] w-full mt-4">
                <ChartContainer config={chartConfig}>
                  <LineChart
                    data={chartData}
                    margin={{
                      top: 5,
                      right: 10,
                      left: 10,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid vertical={false} horizontal={false} />
                    <XAxis 
                      dataKey="month" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={false}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent />}
                    />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="hsl(0, 0%, 100%)"
                      strokeWidth={2}
                      dot={{
                        fill: "hsl(0, 0%, 100%)",
                        r: 4,
                      }}
                      activeDot={{
                        r: 6,
                      }}
                    />
                  </LineChart>
                </ChartContainer>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}