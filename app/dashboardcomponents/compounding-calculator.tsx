'use client'

import { useState, useMemo } from 'react'
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"
import { Slider } from '@nextui-org/slider'
import { Input } from '@nextui-org/input'

export default function CompoundingCalculator() {
  const [initialAmount, setInitialAmount] = useState<any>(500)
  const [days, setDays] = useState<number | number[]>(365)

  const calculateCompounding = useMemo(() => {
    const data = []
    let currentAmount = initialAmount
    const currentDays = typeof days === 'number' ? days : days[0]

    for (let day = 0; day <= currentDays; day++) {
      data.push({
        day,
        amount: parseFloat(currentAmount.toFixed(2))
      })
      currentAmount *= 1.01 // 1% daily increase
    }
    return data
  }, [initialAmount, days])

  const finalAmount = calculateCompounding[calculateCompounding.length - 1].amount
  const totalProfit = finalAmount - initialAmount
  const roi = ((finalAmount - initialAmount) / initialAmount * 100).toFixed(2)

  const handleDaysChange = (value: number | number[]) => {
    setDays(value)
  }

  return (
    <div className="h-full w-full p-4">
      <Card className="bg-black text-white rounded-2xl overflow-hidden h-full  pt-12 pb-12">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-semibold">Copy Trading Calculator</h2>
              <p className="text-sm text-gray-400">1% Daily Gains</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Final Amount</p>
              <p className="text-2xl font-bold text-green-400">${finalAmount.toLocaleString()}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3 space-y-6">
            <div>
              <label htmlFor="initial" className="text-gray-400">Initial Investment</label>
              <Input
                id="initial"
                type="number"
                min={500}
                value={initialAmount}
                onChange={(e) => setInitialAmount(Math.max(500, Number(e.target.value)))}
                className="bg-white text-black rounded-md"
              />
            </div>
            <div>
              
              <Slider
                id="days"
                label="Number of Days"
                step={1}
                maxValue={365}
                minValue={1}
                defaultValue={365}
                value={days}
                onChange={handleDaysChange}
                className="max-w-md"
              />
            </div>
            <div>
              <label className="text-gray-400">Total Profit</label>
              <p className="text-xl font-semibold text-green-400">${totalProfit.toLocaleString()}</p>
            </div>
            <div>
              <label className="text-gray-400">ROI</label>
              <p className="text-xl font-semibold text-green-400">{roi}%</p>
            </div>
          </div>

          <div className="w-full md:w-2/3 h-[400px]">
            <ChartContainer
              config={{
                amount: {
                  label: "Amount",
                  color: "hsl(var(--chart-1))",
                },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={calculateCompounding} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis
                    dataKey="day"
                    stroke="#666"
                    tickFormatter={(value) => `Day ${value}`}
                  />
                  <YAxis
                    stroke="#666"
                    tickFormatter={(value) => `$${value.toLocaleString()}`}
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const amount = Number(payload[0].value); // Ensure it's a number
                        return (
                          <div className="bg-gray-900 border border-gray-800 p-2 rounded-lg">
                            <p className="text-gray-400">Day {payload[0].payload.day}</p>
                            <p className="text-green-400 font-semibold">
                              ${amount.toLocaleString()}
                            </p>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="amount"
                    stroke="#4ade80"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
