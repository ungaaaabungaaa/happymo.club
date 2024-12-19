// revenue-card.tsx
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

const calculateCompoundData = (initialAmount: number, days: number, dailyRate: number) => {
  const data = [];
  let currentAmount = initialAmount;
  
  for (let day = 1; day <= days; day++) {
    currentAmount = currentAmount * (1 + dailyRate);
    data.push({
      day: `Day ${day}`,
      amount: Math.round(currentAmount)
    });
  }
  return data;
};

const chartData = calculateCompoundData(50000, 23, 0.02);

const chartConfig = {
  amount: {
    label: "Amount",
    color: "hsl(0, 0%, 100%)",
  },
} satisfies ChartConfig

export default function RevenueCard() {
  const initialAmount = 50000;
  const finalAmount = chartData[chartData.length - 1].amount;
  const percentageGain = ((finalAmount - initialAmount) / initialAmount * 100).toFixed(1);

  return (
    <div className="h-full w-full"> {/* Changed this line */}
      <Card className="bg-black text-white rounded-2xl overflow-hidden h-full"> {/* Added h-full */}
        <CardHeader className="pb-2">
          <CardTitle className="text-gray-200 text-sm font-normal">Invested Amount</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col h-[calc(100%-4rem)]"> {/* Added flex and height calculation */}
          <div className="flex flex-col flex-grow space-y-1">
            <h2 className="text-3xl font-semibold">${finalAmount.toLocaleString()}</h2>
            <p className="text-sm text-gray-400">
              <span className="text-green-500">+{percentageGain}%</span> from 23 Days
            </p>
            <div className=" mt-4"> {/* Changed to use flex-grow */}
              <ChartContainer config={chartConfig}>
                <LineChart
                  data={chartData}
                  margin={{
                    top: 5,
                    right: 10,
                    left: 10,
                    bottom: 0,
                  }}
                  height={200} // Added explicit height
                >
                  <CartesianGrid vertical={false} horizontal={false} />
                  <XAxis 
                    dataKey="day" 
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
                    dataKey="amount"
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
    </div>
  )
}
